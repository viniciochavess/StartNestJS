import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  @Get('/user/list')
  GetUserList() {
    return 'retornar a lista de usuários';
  }
}
