import { atom } from 'recoil';

export const isDeletePostModalOpenState = atom({
  key: 'isDeletePostModalOpen',
  default: false,
});

export const deletingPostIdState = atom({
  key: 'deletingPostId',
  default: '',
});
