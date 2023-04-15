import * as yup from 'yup';

export const signinFormValidateSchema = yup.object({
  email: yup
    .string()
    .email('正しい形式のメールアドレスを指定してください。')
    .required('入力必須項目です。'),
  password: yup
    .string()
    .required('入力必須項目です。')
    .min(8, '8文字以上で入力してください。'),
});

export type SigninFormData = yup.InferType<typeof signinFormValidateSchema>;
