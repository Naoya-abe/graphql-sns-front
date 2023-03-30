import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button, Center, Text } from '@chakra-ui/react';
import useAuth from '@/hooks/useAuth';

const Home: NextPage = () => {
  useAuth({ requireAuth: true });
  const router = useRouter();
  const onSignOut = () => {
    localStorage.removeItem('authToken');
    router.push('/signin');
  };
  return (
    <Center w="100vw" h="100vh">
      <Button
        onClick={onSignOut}
        bgColor="red.400"
        color="white"
        type="button"
        w="200px"
      >
        <Text>Sign Out</Text>
      </Button>
    </Center>
  );
};

export default Home;
