import { PartialType } from '@nestjs/mapped-types';
import { CreateRandomstatisticDto } from './create-randomstatistic.dto';

export class UpdateRandomstatisticDto extends PartialType(CreateRandomstatisticDto) {}
