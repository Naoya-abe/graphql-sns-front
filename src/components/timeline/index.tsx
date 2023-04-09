import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { useQuery } from 'urql';
import Post from '@/components/post';
import { GetPostsDocument } from '@/graphql/generated/graphql';
import { sortByCreatedAtDescending } from '@/utils/sortPosts';

const Timeline: FC = () => {
  const [result] = useQuery({ query: GetPostsDocument });
  const sortedResult = sortByCreatedAtDescending(result.data?.posts);

  return (
    <Box
      w="720px"
      h={`calc(100vh - 72px)`}
      borderX="1px solid"
      borderColor="blue.400"
      overflowY="scroll"
    >
      {sortedResult?.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </Box>
  );
};

export default Timeline;
