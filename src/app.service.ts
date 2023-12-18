import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { USER_MODEL_NAME } from './schemas/user.schema';
import { Model } from 'mongoose';
import { User } from './models/user.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(USER_MODEL_NAME) private readonly userModel: Model<User>,
  ) {}

  async getUser(id: string): Promise<User> {
    const user = await this.userModel.findOne({ id });
    return user;
  }
}
