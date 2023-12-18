import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getModelToken } from '@nestjs/mongoose';
import { USER_MODEL_NAME } from './schemas/user.schema';
import { Model } from 'mongoose';
import { User } from './models/user.model';

describe('AppController', () => {
  let appService: AppService;
  let userModel: Model<User>;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: getModelToken(USER_MODEL_NAME),
          useValue: { findOne: () => null },
        },
      ],
    }).compile();

    appService = app.get(AppService);
    userModel = app.get(getModelToken(USER_MODEL_NAME));
  });

  it('should return user', async () => {
    const userID = 'sampleID';
    const mockedUser: User = {
      age: 21,
      email: 'example@gmail.com',
      first_name: 'John',
      last_name: 'White',
      id: userID,
      registration_date: new Date(),
      roles: ['USER'],
      sex: 'male',
    };

    jest
      .spyOn(userModel, 'findOne')
      .mockReturnValueOnce(new Promise((res) => res(mockedUser)) as any);

    const user = await appService.getUser(userID);

    expect(user).toBeDefined();
    expect(user).toEqual(mockedUser);
    expect(userModel.findOne).toHaveBeenCalledWith({ id: userID });
  });
});
