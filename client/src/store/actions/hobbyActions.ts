import { CREATE_HOBBY, DELETE_HOBBY, LOAD_HOBBIES } from './actionTypes';
import { getUserByIdApi, getHobbyByIdApi, createHobbyApi, updateUserApi, deleteHobbyApi } from '../../api';
import { IHobby, IUser } from '../../types/interfaces';

export const loadHobbies = (id: string) => {
  return async (dispatch: any) => {
    const { data: { results: user } }: { data: { results: IUser } } = await getUserByIdApi(id);
    
    const hobbies = await Promise.all(user.hobbies.map(async (hobby_id) => {
      try {
        const { data: { results: hobbies } }: { data: { results: IHobby } } = await getHobbyByIdApi(hobby_id);
        return hobbies;
      } catch (err) {
        console.log('Something went wrong during fetching hobby', err);
      }
    }));
    dispatch({ type: LOAD_HOBBIES, payload: hobbies });
  };
};

export const createHobby = (userId: string | null, hobbyObject: Partial<IHobby>) => {
  return async (dispatch: any) => {
    const { data : { result } } = await createHobbyApi(hobbyObject);
    const { data } = await updateUserApi({
      id: userId,
      hobby_id: result._id
    })
    dispatch({ type: CREATE_HOBBY, payload: result });
  };
};

export const deleteHobby = (userId: string | null, id: string) => {
  return async (dispatch: any) => {
    const { data: { result } } = await deleteHobbyApi({ id });
    const { data } = await updateUserApi({
      id: userId,
      hobby_id: result._id
    })
    dispatch({ type: DELETE_HOBBY, payload: result });
  };
};
