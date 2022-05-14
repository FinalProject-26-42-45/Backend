import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { Menu } from './menu/entities/menu.entity';
import { MenuModule } from './menu/menu.module';
import { MenucategoryModule } from './menucategory/menucategory.module';
import { RecipeModule } from './recipe/recipe.module';
import { RolesModule } from './roles/roles.module';
import { Menucategory } from './menucategory/entities/menucategory.entity';
import { User } from './users/entities/user.entity';
import { Role } from './roles/entities/role.entity';
import { MenuhistoryModule } from './menuhistory/menuhistory.module';
import { Menuhistory } from './menuhistory/entities/menuhistory.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'db_foodrand',
    entities: [Menu, Menucategory, User, Role, Menuhistory],
    synchronize: true,
  }), UsersModule, IngredientsModule, MenuModule, MenucategoryModule, RecipeModule, RolesModule, MenuhistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
