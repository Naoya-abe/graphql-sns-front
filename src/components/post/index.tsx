import { FC } from 'react';
import { Avatar, Box, Flex, Icon, Text } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { GoCommentDiscussion } from 'react-icons/go';
import { Props } from './types';
import formatDate from '@/utils/formatDate';
import { useSetRecoilState } from 'recoil';
import {
  editingPostIdState,
  isEditPostModalOpenState,
} from '@/recoil/editPostModal/atoms';
import {
  deletingPostIdState,
  isDeletePostModalOpenState,
} from '@/recoil/deletePostModal/atoms';

const Post: FC<Props> = ({ post }) => {
  const { id, content, userId, user, createdAt, updatedAt } = post;

  const setIsEditPostModalOpen = useSetRecoilState(isEditPostModalOpenState);
  const setEditingPostId = useSetRecoilState(editingPostIdState);
  const onEditClick = () => {
    setEditingPostId(id);
    setIsEditPostModalOpen(true);
  };

  const setIsDeletePostModalOpen = useSetRecoilState(
    isDeletePostModalOpenState
  );
  const setDeletingPostId = useSetRecoilState(deletingPostIdState);
  const onDeleteClick = () => {
    setDeletingPostId(id);
    setIsDeletePostModalOpen(true);
  };

  return (
    <Flex borderBottom="1px solid" borderColor="blue.400" p={10}>
      <Box mr={3}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </Box>
      <Box w="100%">
        <Flex alignItems="center" mb={1}>
          <Text fontSize="lg" as="b" mr={4}>
            {user.nickname}
          </Text>
          <Text fontSize="md" color="blackAlpha.500">
            {formatDate(createdAt)}
          </Text>
        </Flex>
        <Text fontSize="lg" color="blackAlpha.800" textAlign="justify" mb={3}>
          {content}
        </Text>
        <Flex alignItems="center" justify="space-between">
          <Flex alignItems="center">
            <Flex
              _hover={{ cursor: 'pointer' }}
              onClick={() => {
                console.log('コメントモーダルが表示される');
              }}
              mr={10}
            >
              <Icon
                as={GoCommentDiscussion}
                color="blackAlpha.800"
                h={6}
                w={6}
                mr={2}
              />
              <Text>3</Text>
            </Flex>
            <Flex
              _hover={{ cursor: 'pointer' }}
              onClick={() => {
                console.log('いいね機能が発火する');
              }}
            >
              <Icon
                as={AiOutlineHeart}
                color="blackAlpha.800"
                h={6}
                w={6}
                mr={2}
              />
              <Text>10</Text>
            </Flex>
          </Flex>
          <Flex>
            <Text
              fontSize="md"
              color="green.500"
              as="b"
              mr={5}
              onClick={onEditClick}
              _hover={{ cursor: 'pointer' }}
            >
              Edit
            </Text>
            <Text
              fontSize="md"
              color="red.500"
              as="b"
              onClick={onDeleteClick}
              _hover={{ cursor: 'pointer' }}
            >
              Delete
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Post;
