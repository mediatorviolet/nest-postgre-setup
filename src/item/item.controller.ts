import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDto } from './dto/item.dto';
import { User } from '../user.decorator';

@Controller('item')
export class ItemController {
  constructor(private serv: ItemService) {}

  @Get()
  public async getAll(): Promise<ItemDto[]> {
    return await this.serv.getAll();
  }

  @Post()
  public async post(@Body() dto: ItemDto, user: User): Promise<ItemDto> {
    return this.serv.create(dto, user);
  }
}
