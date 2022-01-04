import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { v4 as uuidv4 } from 'uuid';
import { getHobbyByIdApi, getUsersApi } from '../index';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
});
const mock = new AxiosMockAdapter(process.env.NODE_ENV === 'development' ? axiosInstance : axios);

let usersData = [
  {
    _id: "61d36385087ddff424d6791f",
    name: "Person 1",
    hobbies: [
      "61d08bcba0dfc2b018f643df",
    ],
    __v: 0
  },
  {
    _id: "61d36388087ddff424d67922",
    name: "Person 2",
    hobbies: [],
    __v: 0
  },
];

let hobbiesData = [
  {
    _id: "61d08bcba0dfc2b018f643df",
    passionLevel: "Medium",
    name: "Playing footbal",
    year: 2014,
    __v: 0
  },
  {
    _id: "61d08bcba0dfc2b018f643df",
    passionLevel: "High",
    name: "Going to concert",
    year: 2016,
    __v: 0
  },
];

mock.onGet('user/getUsers').reply(200, {
  message: "Fetch successful",
  results: usersData,
});

mock.onPost('user/createUser').reply((config: any) => {
  const { name } = JSON.parse(config.data);
  const newUser = {
    _id: uuidv4(),
    name: name,
    hobbies: [],
    __v: 0
  };
  usersData.push(newUser);
  return [
    200,
    {
      message: "User created",
      result: newUser,
    }
  ];
});

mock.onGet(/user\/getUserById\/?.*/).reply(async (config) => {
  const id = config!.url!.replace(/.*\?/, '').replace(/.*?id=\s*/g, '');
  const { data: { results: users } } = await getUsersApi();
  const user = users.find((user: any) => user._id === id);
  return [
    200,
    {
      message: "Fetch successful",
      results: user
    }
  ];
});

mock.onPut('user/updateUser').reply(async (config: any) => {
  const { id, hobby_id } = JSON.parse(config.data);
  const { data: { results: hobby } } = await getHobbyByIdApi(hobby_id)
  const temp = usersData.map((user) => {
    if (user._id === id) {
      return {
        ...user,
        hobbies: [
          ...user.hobbies,
          hobby._id
        ]
      };
    }
    return user;
  });
  usersData = temp;
  return [
    200,
    {
      message: "User updated",
    }
  ];
});

// Hobbies
mock.onGet(/hobby\/getHobbyById\/?.*/).reply(function(config) {
  const id = config!.url!.replace(/.*\?/, '').replace(/.*?id=\s*/g, '');
  const newHobby = {
    _id: id,
    passionLevel: "medium",
    name: "Playing footbal",
    year: 2014,
    __v: 0
  };
  hobbiesData.push(newHobby);
  return [
    200,
    {
      message: "Fetch successful",
      results: newHobby
    }
  ];
});

mock.onGet('hobby/getHobbies').reply(200, {
  message: "Fetch successful",
  results: hobbiesData,
});

mock.onPost('hobby/createHobby').reply((config: any) => {
  const { passionLevel, name, year } = JSON.parse(config.data);
  const newHobby = {
    _id: uuidv4(),
    passionLevel,
    name,
    year,
    __v: 0
  };
  hobbiesData.push(newHobby);
  return [
    200,
    {
      message: "Hobby created",
      result: newHobby,
    }
  ];
});

mock.onDelete('hobby/deleteHobby').reply(async (config: any) => {
  const { id } = JSON.parse(config.data);
  const { data: { results: hobby } } = await getHobbyByIdApi(id);
  const newHobbies = hobbiesData.filter((hobby: any) => hobby._id !== id);
  hobbiesData = newHobbies;
  return [
    200,
    {
      message: "Hobby deleted",
      result: hobby,
    }
  ];
});

export default axiosInstance;
