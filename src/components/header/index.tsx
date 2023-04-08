import NextLink from 'next/link';
import { FC } from 'react';
import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import { GoSignOut } from 'react-icons/go';
import { useRouter } from 'next/router';

const Header: FC = () => {
  const router = useRouter();
  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    router.push('/signin');
  };
  return (
    <Flex
      bgColor="blue.400"
      w="100vw"
      h="72px"
      px="64px"
      justify="space-between"
      alignItems="center"
    >
      <Link as={NextLink} href="/home" _hover={{ textDecoration: 'none' }}>
        <Text fontSize="4xl" as="b" color="white">
          HiveMind
        </Text>
      </Link>
      <Icon
        as={GoSignOut}
        bgColor="transparent"
        color="white"
        h={9}
        w={9}
        onClick={handleSignOut}
        _hover={{ cursor: 'pointer' }}
      />
    </Flex>
  );
};

export default Header;
