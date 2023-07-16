import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserUseCase } from './services/create';
import { PrismaService } from 'src/database';

interface userParams {
  id: string;
}
interface requestBody {
  name: string;
  email: string;
  password: string;
  username: string;
}

@Controller('/user')
export class UserController {
  @Get('/list')
  GetUserList() {
    return 'retornar a lista de usuários';
  }
  @Get('/list/:id')
  GetUserFindById(@Param() params: userParams) {
    return params.id;
  }

  @Get('/query')
  GetUserFindByQuery(@Query() query: any) {
    return { query };
  }

  @Post('/create')
  PostCreate(@Body() data: requestBody) {
    const prismaRepository = new PrismaService();
    const createUserUseCase = new CreateUserUseCase(prismaRepository);
    const user = createUserUseCase.execute(data);
    return user;
  }
}
