import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';

@Module({
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
