import { FC } from 'react';
import { Avatar, Box, Flex, Icon, Text } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { GoCommentDiscussion } from 'react-icons/go';

const Post: FC = () => {
  return (
    <Flex borderBottom="1px solid" borderColor="blue.400" p={10}>
      <Box mr={3}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </Box>
      <Box>
        <Flex alignItems="center" mb={1}>
          <Text fontSize="lg" as="b" mr={4}>
            NickName
          </Text>
          <Text fontSize="md" color="blackAlpha.500">
            YYYY/MM/DD
          </Text>
        </Flex>
        <Text fontSize="lg" color="blackAlpha.800" textAlign="justify" mb={3}>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
          }
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
              onClick={() => {
                console.log('Edit Modalが表示される');
              }}
              _hover={{ cursor: 'pointer' }}
            >
              Edit
            </Text>
            <Text
              fontSize="md"
              color="red.500"
              as="b"
              onClick={() => {
                console.log('Delete Modalが表示される');
              }}
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
