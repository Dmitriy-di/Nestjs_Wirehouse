import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ContractsModule } from './contracts/contracts.module';
import { DistributorsModule } from './distributors/distributors.module';
import { PostsModule } from './posts/posts.module';
import { ProductsModule } from './products/products.module';
import { StaffModule } from './staff/staff.module';
import { WirehousesModule } from './wirehouses/wirehouses.module';
import { WirehouseOwnersModule } from './wirehouse_owners/wirehouse_owners.module';
import { Wirehouse } from './wirehouses/entities/wirehouse.entity';
import { Post } from './posts/entities/post.entity';
import { Staff } from './staff/entities/staff.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Wirehouse, Post, Staff],
      synchronize: true
    }),
    ContractsModule,
    DistributorsModule,
    PostsModule,
    ProductsModule,
    StaffModule,
    WirehousesModule,
    WirehouseOwnersModule
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService],
})

export class AppModule {
  constructor(private dataSource: DataSource) {}
}
