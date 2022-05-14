import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuhistoryDto } from './create-menuhistory.dto';

export class UpdateMenuhistoryDto extends PartialType(CreateMenuhistoryDto) {}
