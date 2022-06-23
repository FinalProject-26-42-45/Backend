import { Injectable } from '@nestjs/common';
import { CreateRandomstatisticDto } from '../../dto/randomstatistics/create-randomstatistic.dto';
import { UpdateRandomstatisticDto } from '../../dto/randomstatistics/update-randomstatistic.dto';

@Injectable()
export class RandomstatisticsService {
  create(createRandomstatisticDto: CreateRandomstatisticDto) {
    return 'This action adds a new randomstatistic';
  }

  findAll() {
    return `This action returns all randomstatistics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} randomstatistic`;
  }

  update(id: number, updateRandomstatisticDto: UpdateRandomstatisticDto) {
    return `This action updates a #${id} randomstatistic`;
  }

  remove(id: number) {
    return `This action removes a #${id} randomstatistic`;
  }
}
