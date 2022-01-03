import { LOAD_HOBBIES } from './actionTypes';
import { getUserByIdApi, getHobbyByIdApi } from '../../api';
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
        throw err;
      }
    }));
    dispatch({ type: LOAD_HOBBIES, payload: hobbies });
  };
};
