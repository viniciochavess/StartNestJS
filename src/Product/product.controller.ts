import { Controller, Get } from '@nestjs/common';
@Controller()
export class ProductController {
  @Get('/product/list')
  GetProductList() {
    return 'Retornar a lista de produto';
  }
}
