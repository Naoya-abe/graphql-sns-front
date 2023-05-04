import { FC, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useQuery, useSubscription } from 'urql';
import Post from '@/components/post';
import {
  GetPostsDocument,
  PostAddedDocument,
  PostModel,
} from '@/graphql/generated/graphql';
import { sortByCreatedAtDescending } from '@/utils/sortPosts';
import { useRecoilState } from 'recoil';
import { postListState } from '@/recoil/postList/atoms';

const Timeline: FC = () => {
  const [result] = useQuery({ query: GetPostsDocument });
  const [subscriptionResult] = useSubscription({ query: PostAddedDocument });
  const [postList, setPostList] = useRecoilState(postListState);

  useEffect(() => {
    if (result.data) {
      const sortedResult = sortByCreatedAtDescending(result.data.posts);
      setPostList(sortedResult);
    }
  }, [result, setPostList]);

  useEffect(() => {
    if (postList && subscriptionResult.data) {
      setPostList([subscriptionResult.data.postAdded, ...postList]);
    }
  }, [subscriptionResult, setPostList]);

  return (
    <Box
      w="720px"
      h={`calc(100vh - 72px)`}
      borderX="1px solid"
      borderColor="blue.400"
      overflowY="scroll"
    >
      {postList?.map((post: PostModel) => {
        return <Post key={post.id} post={post} />;
      })}
    </Box>
  );
};

export default Timeline;
