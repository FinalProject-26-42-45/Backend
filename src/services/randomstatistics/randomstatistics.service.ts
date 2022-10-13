import { Inject, Injectable } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Randomstatistics } from 'src/entities/randomstatistics.entity';
import { Repository } from 'typeorm';


@Injectable()
export class RandomstatisticsService {
    constructor(
        @InjectRepository(Randomstatistics) 
        private randomRepository: Repository<Randomstatistics>,
        private schedulerRegistry: SchedulerRegistry) { }
    
      @Cron(CronExpression.EVERY_WEEK, { 
          name: 'history',
          timeZone: 'Asia/Bangkok' })

      handleMyCron(){
          this.schedulerRegistry.getCronJob('history');
          this.randomRepository.query('Delete from RandomStatistics')
      }

      async showStat() {
        const show = await this.randomRepository.find({ order: {RandomCount: 'DESC'}})
        const result = []
        for (let each of show) {
          const data = {
            RandomId: each.RandomId,
            MenuName: each.menu.MenuName,
            RandomCount: each.RandomCount
          }
          result.push(data)
        }
        return result
      }

      async addStat(MenuId: number){
        const search = await this.randomRepository.findOne({ where: { MenuId: MenuId}});
        if (search) {
          search.RandomCount += 1
          await this.randomRepository.update(MenuId, search)
        } else {
          const add: any = {
            MenuId: MenuId,
            RandomCount: 1
          }
          await this.randomRepository.save(add)
        }
    }
}
