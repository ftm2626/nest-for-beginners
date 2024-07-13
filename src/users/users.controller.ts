import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

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
  // with out validation
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // with validation
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  createOne(@Body(ValidationPipe) user: CreateUserDTO) {
    return this.usersService.createOne(user);
  }

  // without validation
  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() user: UpdateUserDTO,
  // ) {
  //   return this.usersService.update(+id, user);
  // }

  // with validation
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) user: UpdateUserDTO,
  ) {
    return this.usersService.update(id, user);
  }

  // without validation
  // @Delete(':id')
  // deleteOne(@Param('id') id: string) {
  //   return this.usersService.delete(+id);
  // }

  // with validation
  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
