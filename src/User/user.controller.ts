import { Controller, Get, Param, Query } from '@nestjs/common';


interface userParams{
  id:string
}

@Controller()
export class UserController {
  @Get('/user/list')
  GetUserList() {
    return 'retornar a lista de usuários';
  }
  @Get('/user/list/:id')
  GetUserFindById(@Param() params:userParams){
    return params.id
  }

  @Get('/user/query')
  GetUserFindByQuery(@Query() query:any){
    return {query}
  }

}
