import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users.module';
import { MenuModule } from './modules/menu.module';
import { MenucategoryModule } from './modules/menucategory.module';
import { RolesModule } from './modules/roles.module';
import { MenuhistoryModule } from './modules/menuhistory.module';
import { CommonMudule } from './modules/common.module';
import { CategoryofmenuModule } from './modules/categoryofmenu.module';
import { RandomstatisticsModule } from './modules/randomstatistics.module';
import { AuthModule } from './auth/auth.module';





// @Module({
//   imports: [TypeOrmModule.forRoot({
//     type: 'mysql',
//     host: 'localhost',
//     port: 3306,
//     username: 'root',
//     password: '',
//     database: 'db_foodrand',
//     entities: ['dist/entities/*.js'],
//     synchronize: false,
//   }), UsersModule, MenuModule, MenucategoryModule, RolesModule, MenuhistoryModule, CommonMudule, CategoryofmenuModule, RandomstatisticsModule, AuthModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'database',
    port: 3306,
    username: 'backendfoodrand',
    password: 'foodrandproject',
    database: 'db_foodrand',
    entities: ['dist/entities/*.js'],
    synchronize: false,
  }), UsersModule, MenuModule, MenucategoryModule, RolesModule, MenuhistoryModule, CommonMudule, CategoryofmenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
