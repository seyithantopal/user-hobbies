import hobbySchema from '../src/models/hobbySchema';
import { connect, disconnect, addNewData } from '../jest/setup';

describe('HobbyService', () => {
  let connection: any;

  beforeEach(async () => {
    await hobbySchema.deleteMany();
  });

  afterEach(async () => {
    await hobbySchema.deleteMany();
  });

  beforeAll(async () => {
    connection = await connect();
  });

  afterAll(async () => {
    disconnect();
  });

  it('should add hobby', async () => {
    const mockHobby = {
      passionLevel: 'high',
      name: 'playing football',
      year: 2014
    };

    await addNewData(mockHobby, hobbySchema);

    const insertedHobby = await hobbySchema.findOne(mockHobby);
    expect(insertedHobby?.passionLevel).toEqual(mockHobby.passionLevel);
    expect(insertedHobby?.name).toEqual(mockHobby.name);
    expect(insertedHobby?.year).toEqual(mockHobby.year);
  });

  it('should get all hobbies', async () => {
    const mockHobby1 = {
      passionLevel: 'high',
      name: 'playing football',
      year: 2014
    };
    const mockHobby2 = {
      passionLevel: 'low',
      name: 'going to concert',
      year: 2015
    };

    await addNewData(mockHobby1, hobbySchema);
    await addNewData(mockHobby2, hobbySchema);

    const hobbies = await hobbySchema.find();
    expect(hobbies.length).toBe(2);
  });

  it('should delete user', async () => {
    const mockHobby = {
      passionLevel: 'high',
      name: 'playing football',
      year: 2014
    };

    await addNewData(mockHobby, hobbySchema);

    hobbySchema.findOneAndDelete({ name: mockHobby.name }, (err: any, hobby: any) => {
      expect(hobby).toBeTruthy();
    });
  });
});