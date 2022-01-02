import userSchema from '../src/models/userSchema';
import { connect, disconnect, addNewData } from '../jest/setup';

describe('UserService', () => {
  let connection: any;

  beforeEach(async () => {
    await userSchema.deleteMany();
  });

  afterEach(async () => {
    await userSchema.deleteMany();
  });

  beforeAll(async () => {
    connection = await connect();
  });

  afterAll(async () => {
    disconnect();
  });

  it('should add user', async () => {
    const mockUser = { name: 'John' };

    await addNewData(mockUser, userSchema);

    const insertedUser = await userSchema.findOne({ name: 'John' });
    expect(insertedUser.name).toEqual(mockUser.name);
  });

  it('should get all users', async () => {
    const mockUser1 = { name: 'John' };
    const mockUser2 = { name: 'Mark' };

    await addNewData(mockUser1, userSchema);
    await addNewData(mockUser2, userSchema);

    const users = await userSchema.find();
    expect(users.length).toBe(2);
  });

  it('should delete user', async () => {
    const mockUser = { name: 'John' };

    await addNewData(mockUser, userSchema);

    userSchema.findOneAndDelete({ name: mockUser.name }, (err: any, user: any) => {
      expect(user).toBeTruthy();
    });
  });
});