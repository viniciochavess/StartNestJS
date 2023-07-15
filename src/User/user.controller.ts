import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { randomUUID } from 'crypto';


interface userParams{
  id:string
}
type  requestBody = {
  name:string;
  email:string;
  password:string;

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

  @Post('/create')
  PostCreate(@Body() data:requestBody){
    return {
      id:randomUUID(),
      ...data
    }
  }

}
