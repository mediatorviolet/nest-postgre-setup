import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsString, IsUUID } from 'class-validator';
import { Item } from '../../model/item.entity';
import { User } from "../../user.decorator";

export class ItemDto implements Readonly<ItemDto> {
  @ApiModelProperty({ required: true })
  @IsUUID()
  id: string;

  @ApiModelProperty({ required: true })
  @IsString()
  name: string;

  @ApiModelProperty({ required: true })
  @IsString()
  description: string;

  public static from(dto: Partial<ItemDto>) {
    const it = new ItemDto();
    it.id = dto.id;
    it.name = dto.name;
    it.description = dto.description;
    return it;
  }

  public static fromEntity(entity: Item) {
    return this.from({
      id: entity.id,
      name: entity.name,
      description: entity.description,
    });
  }

  public static toEntity(entity: ItemDto, user: User = null) {
    const it = new Item();
    it.id = entity.id;
    it.name = entity.name;
    it.description = entity.description;
    it.createDateTime = new Date();
    it.createdBy = user ? user.id : null;
    it.lastChangedBy = user ? user.id : null;
    return it;
  }
}
