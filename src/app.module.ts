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


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'db_foodrand',
    entities: [Menu, Menucategory],
    synchronize: true,
  }), UsersModule, IngredientsModule, MenuModule, MenucategoryModule, RecipeModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
