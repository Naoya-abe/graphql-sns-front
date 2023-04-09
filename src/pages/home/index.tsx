import { NextPage } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import useAuth from '@/hooks/useAuth';
import Header from '@/components/header';
import Navigation from '@/components/navigation';
import Timeline from '@/components/timeline';

const Home: NextPage = () => {
  useAuth({ requireAuth: true });

  return (
    <Box w="100vw" h="100vh">
      <Header />
      <Flex>
        <Navigation />
        <Timeline />
      </Flex>
    </Box>
  );
};

export default Home;
