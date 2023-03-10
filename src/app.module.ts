import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [AuthModule, UsersModule, DashboardsModule, PostsModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
