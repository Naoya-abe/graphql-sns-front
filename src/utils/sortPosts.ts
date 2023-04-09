import { PostModel } from '@/graphql/generated/graphql';

export const sortByCreatedAtDescending = (
  data: PostModel[] | undefined
): PostModel[] | null => {
  if (data) {
    return data.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  } else {
    return null;
  }
};
