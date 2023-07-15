import { Controller, Get, Param, Query } from '@nestjs/common';


interface userParams{
  id:string
}

@Controller('/user')
export class UserController {
  @Get('/list')
  GetUserList() {
    return 'retornar a lista de usuários';
  }
  @Get('/list/:id')
  GetUserFindById(@Param() params:userParams){
    return params.id
  }

  @Get('/query')
  GetUserFindByQuery(@Query() query:any){
    return {query}
  }

}
