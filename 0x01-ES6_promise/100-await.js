import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let data = {};

  try {
    data = { photo: await uploadPhoto(), user: await createUser() };
  } catch (erorr) {
    data = { photo: null, user: null };
  }

  return data;
}
