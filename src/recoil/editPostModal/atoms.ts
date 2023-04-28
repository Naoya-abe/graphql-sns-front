import { atom } from 'recoil';

export const isEditPostModalOpenState = atom({
  key: 'isEditPostModalOpen',
  default: false,
});

export const editingPostIdState = atom({
  key: 'editingPostId',
  default: '',
});
