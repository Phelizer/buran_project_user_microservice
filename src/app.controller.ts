import { Controller } from '@nestjs/common';
import { AppService, User } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

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
    return await this.appService.getUser(id);
  }
}
