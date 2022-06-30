import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entitys/user.entity';
import {
  DefaultAdminModule,
  AdminUserEntity,
  DefaultAdminSite,
} from 'nestjs-admin';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nestjs-admin',
      entities: [User, AdminUserEntity],
      synchronize: true,
    }),
    DefaultAdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly adminSite: DefaultAdminSite) {
    adminSite.register('User', User);
  }
}
