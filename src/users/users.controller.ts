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
import { UsersService } from './users.service';

@Controller('users') // route is /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  /*
        GET /users
        GET /users/:id
        POST /users
        PATCH /users/:id
        DELETE /users/:id
    */

  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  createOne(
    @Body() user: { name: string; email: string; role: 'INTERN' | 'ADMIN' },
  ) {
    return this.usersService.createOne(user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() user: { name?: string; email?: string; role?: 'INTERN' | 'ADMIN' },
  ) {
    return this.usersService.update(+id, user);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
