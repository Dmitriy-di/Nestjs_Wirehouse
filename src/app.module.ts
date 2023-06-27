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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'testWirehouses',
      entities: [],
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
