import * as yup from 'yup';

export const createPostFormValidateSchema = yup.object({
  content: yup
    .string()
    .required('入力必須項目です。')
    .max(200, '200文字以内で入力してください。'),
});

export type CreatePostFormData = yup.InferType<
  typeof createPostFormValidateSchema
>;
