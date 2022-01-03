import * as yup from 'yup';

export const createUserValidationSchema = yup.object().shape({
  name: yup.string().required(),
});

export const updateUserValidationSchema = yup.object().shape({
  id: yup.string().required(),
  hobby_id: yup.string().required(),
});

export const deleteUserValidationSchema = yup.object().shape({
  id: yup.string().required(),
});
