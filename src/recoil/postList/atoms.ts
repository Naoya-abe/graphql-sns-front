import { atom } from 'recoil';
import { PostModel } from '@/graphql/generated/graphql';

export const postListState = atom<PostModel[] | null>({
  key: 'PostList',
  default: [],
});
