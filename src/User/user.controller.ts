import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class UserController {
  @Get('/user/list')
  GetUserList() {
    return 'retornar a lista de usuários';
  }
  @Get('/user/list/:id')
  GetUserFindById(@Param() params:any){
    return params.id
  }
}
