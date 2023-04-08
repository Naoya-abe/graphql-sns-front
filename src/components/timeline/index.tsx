import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import Post from '../post';

const Timeline: FC = () => {
  return (
    <Box
      w="720px"
      h={`calc(100vh - 72px)`}
      borderX="1px solid"
      borderColor="blue.400"
      overflowY="scroll"
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Timeline;
