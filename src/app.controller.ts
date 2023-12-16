import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall, status } from '@grpc/grpc-js';
import { User } from './models/user.model';

interface WithID {
  id: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('Users', 'GetUser')
  async getUser(
    data: WithID,
    metadata: Metadata,
    call: ServerUnaryCall<unknown, unknown>,
  ): Promise<User> {
    const { id } = data;
    const user = await this.appService.getUser(id);

    if (!user) {
      throw new RpcException({
        code: status.NOT_FOUND,
        message: `User with ID "${id}" not found`,
      });
    }

    return user;
  }
}
