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

export const createHobbyValidationSchema = yup.object().shape({
  passionLevel: yup.string().required(),
  name: yup.string().required(),
  year: yup.number().required().min(2000).max(new Date().getFullYear())
});

export const deleteHobbyValidationSchema = yup.object().shape({
  id: yup.string().required(),
});
