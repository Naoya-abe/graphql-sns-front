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
} from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { isCreatePostModalOpenState } from '@/recoil/createPostModal/atom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CreatePostFormData, createPostFormValidateSchema } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'urql';
import { CreatePostDocument } from '@/graphql/generated/graphql';
import useErrorToast from '@/hooks/useErrorToast';
import useSuccessToast from '@/hooks/useSuccessToast';

const CreatePostModal: FC = () => {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useRecoilState(
    isCreatePostModalOpenState
  );
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
    watch,
  } = useForm<CreatePostFormData>({
    resolver: yupResolver(createPostFormValidateSchema),
  });
  const contentCount = watch().content?.length | 0;
  const [createPostResult, createPost] = useMutation(CreatePostDocument);
  console.log(createPostResult);

  const successToast = useSuccessToast();
  const errorToast = useErrorToast();

  const onCreatePostModalClose = () => {
    setIsCreatePostModalOpen(false);
    reset();
  };

  const onSubmit: SubmitHandler<CreatePostFormData> = async (data) => {
    const variables = { content: data.content };
    const result = await createPost(variables);
    if (result.error) {
      errorToast('投稿の作成に失敗しました。');
      console.error(result.error.message);
      return;
    }
    setIsCreatePostModalOpen(false);
    reset();
    successToast('投稿の作成に成功しました。');
  };

  return (
    <Modal
      isOpen={isCreatePostModalOpen}
      onClose={onCreatePostModalClose}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{"Let's post"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.content} mb={5}>
              <Textarea {...register('content')} resize="none" h="200px" />
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

export default CreatePostModal;
