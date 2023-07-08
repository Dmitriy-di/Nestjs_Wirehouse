import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesController } from './files.controller';
import { File } from './entities/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([File])],
  controllers: [FilesController],
})
export class FilesModule {}

// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Post } from './entities/post.entity';

// @Module({
//   imports: [TypeOrmModule.forFeature([Post])],
//   controllers: [PostsController],
//   providers: [PostsService],
// })
// export class PostsModule {}
