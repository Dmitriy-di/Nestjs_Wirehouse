import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
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
import { Distributor } from './distributors/entities/distributor.entity';
import { Contract } from './contracts/entities/contract.entity';
import { WirehouseOwner } from './wirehouse_owners/entities/wirehouse_owner.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { File } from './files/entities/file.entity';
import { ModerationModule } from './moderation/moderation.module';
import { BullModule } from '@nestjs/bull';

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
      entities: [
        Wirehouse,
        Post,
        Staff,
        Distributor,
        Contract,
        WirehouseOwner,
        File,
      ],
      synchronize: true,
    }),
    BullModule.forRoot({
      redis: {
        host: process.env.DATABASE_HOST,
        port: 6379,
      },
    }),
    ContractsModule,
    DistributorsModule,
    PostsModule,
    ProductsModule,
    StaffModule,
    WirehousesModule,
    WirehouseOwnersModule,
    UsersModule,
    AuthModule,
    FilesModule,
    ModerationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
