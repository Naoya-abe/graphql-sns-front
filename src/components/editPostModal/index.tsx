import { FC } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import {
  editingPostIdState,
  isEditPostModalOpenState,
} from '@/recoil/editPostModal/atoms';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EditPostFormData, editPostFormValidateSchema } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQuery } from 'urql';
import { EditPostDocument, GetPostDocument } from '@/graphql/generated/graphql';

const EditPostModal: FC = () => {
  const [isEditPostModalOpen, setIsEditPostModalOpen] = useRecoilState(
    isEditPostModalOpenState
  );
  const [editingPostId, setIsEditingPostId] =
    useRecoilState(editingPostIdState);
  const [result] = useQuery({
    query: GetPostDocument,
    variables: { postId: editingPostId },
  });

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
    watch,
  } = useForm<EditPostFormData>({
    resolver: yupResolver(editPostFormValidateSchema),
  });
  const contentCount = watch().content?.length | 0;
  const [editPostResult, editPost] = useMutation(EditPostDocument);
  console.log(editPostResult);
  const toast = useToast();

  const onEditPostModalClose = () => {
    setIsEditPostModalOpen(false);
    setIsEditingPostId('');
    reset();
  };

  const onSubmit: SubmitHandler<EditPostFormData> = async (data) => {
    const variables = { postId: editingPostId, content: data.content };
    const result = await editPost(variables);
    if (result.error) {
      toast({
        title: 'Error',
        description: '投稿の編集に失敗しました。',
        status: 'error',
        duration: 10000,
        isClosable: true,
        position: 'top',
      });
      console.error(result.error.message);
      return;
    }
    setIsEditPostModalOpen(false);
    setIsEditingPostId('');
    reset();
    toast({
      title: 'Success',
      description: '投稿の編集に成功しました。',
      status: 'success',
      duration: 10000,
      isClosable: true,
      position: 'top',
    });
  };

  return (
    <Modal
      isOpen={isEditPostModalOpen}
      onClose={onEditPostModalClose}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.content} mb={5}>
              <Textarea
                {...register('content')}
                resize="none"
                h="200px"
                defaultValue={result.data?.post.content}
              />
              <Flex justify="space-between" mt={1}>
                <Text
                  fontSize="sm"
                  color={errors.content ? 'red.500' : 'blackAlpha.400'}
                >
                  {contentCount} / 200
                </Text>
              </Flex>
              <FormErrorMessage fontWeight="bold">
                {errors.content && errors.content.message}
              </FormErrorMessage>
            </FormControl>
            <Flex w="100%" justify="flex-end" alignItems="center">
              <Button
                bgColor="blue.400"
                color="white"
                type="submit"
                isLoading={isSubmitting}
                w="200px"
                h="40px"
                borderRadius="20px"
                mb={2}
              >
                <Text>Submit</Text>
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditPostModal;
