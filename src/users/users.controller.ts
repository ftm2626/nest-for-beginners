import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users') // route is /users
export class UsersController {
  /*
        GET /users
        GET /users/:id
        POST /users
        PATCH /users/:id
        DELETE /users/:id
    */

  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN') {
    return [{ role }];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createOne(@Body() user: any) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: any) {
    return { id, ...user };
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return { id };
  }
}
