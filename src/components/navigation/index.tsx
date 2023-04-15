import NextLink from 'next/link';
import { FC } from 'react';
import { Box, Button, Flex, Link, Icon, Text } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { useSetRecoilState } from 'recoil';
import { isCreatePostModalOpenState } from '@/recoil/createPostModal/atom';

const Navigation: FC = () => {
  const setIsCreatePostModalOpen = useSetRecoilState(
    isCreatePostModalOpenState
  );
  const onCreatePostModalOpen = () => {
    setIsCreatePostModalOpen(true);
  };
  return (
    <Box p="72px">
      <Flex alignItems="center" mb={8}>
        <Icon as={FaHome} w={9} h={9} color="blackAlpha.800" mr={5} />
        <Link as={NextLink} href="/home">
          <Text fontSize="3xl">Home</Text>
        </Link>
      </Flex>
      <Flex alignItems="center" mb={10}>
        <Icon as={BsPersonCircle} w={9} h={9} color="blackAlpha.800" mr={5} />
        <Link as={NextLink} href="/profile">
          <Text fontSize="3xl">Profile</Text>
        </Link>
      </Flex>
      <Button
        onClick={() => onCreatePostModalOpen()}
        bgColor="blue.400"
        w="230px"
        h="48px"
        borderRadius="24px"
      >
        <Text color="white" fontSize="lg">
          {"Let's Post"}
        </Text>
      </Button>
    </Box>
  );
};

export default Navigation;
