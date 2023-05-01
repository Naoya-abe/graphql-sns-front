import React, { FC, useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import {
  deletingPostIdState,
  isDeletePostModalOpenState,
} from '@/recoil/deletePostModal/atoms';
import { useMutation, useQuery } from 'urql';
import {
  DeletePostDocument,
  GetPostDocument,
} from '@/graphql/generated/graphql';
import useSuccessToast from '@/hooks/useSuccessToast';
import useErrorToast from '@/hooks/useErrorToast';

const DeletePostModal: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useRecoilState(
    isDeletePostModalOpenState
  );
  const [deletingPostId, setDeletingPostId] =
    useRecoilState(deletingPostIdState);
  const [result] = useQuery({
    query: GetPostDocument,
    variables: { postId: deletingPostId },
  });
  const contentCount = result.data?.post.content.length;
  const [deletePostResult, deletePost] = useMutation(DeletePostDocument);
  console.log(deletePostResult);

  const successToast = useSuccessToast();
  const errorToast = useErrorToast();

  const onDeletePostModalClose = () => {
    setIsDeletePostModalOpen(false);
    setDeletingPostId('');
  };

  const onSubmit = async () => {
    setIsSubmitting(true);
    const variables = { postId: deletingPostId };
    const result = await deletePost(variables);
    if (result.error) {
      errorToast('投稿の削除に失敗しました。');
      console.error(result.error.message);
      setIsSubmitting(false);
      return;
    }
    setIsSubmitting(false);
    setIsDeletePostModalOpen(false);
    setDeletingPostId('');
    successToast('投稿の削除に成功しました。');
  };
  return (
    <Modal
      isOpen={isDeletePostModalOpen}
      onClose={onDeletePostModalClose}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={onSubmit}>
            <FormControl mb={5}>
              <Textarea
                isDisabled
                resize="none"
                h="200px"
                defaultValue={result.data?.post.content}
              />
              <Flex justify="space-between" mt={1}>
                <Text fontSize="sm" color="blackAlpha.400">
                  {contentCount} / 200
                </Text>
              </Flex>
            </FormControl>
            <Flex w="100%" justify="flex-end" alignItems="center">
              <Button
                bgColor="red.600"
                color="white"
                type="submit"
                isLoading={isSubmitting}
                w="200px"
                h="40px"
                borderRadius="20px"
                mb={2}
              >
                <Text>Delete</Text>
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DeletePostModal;
