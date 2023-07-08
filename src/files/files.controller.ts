import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors/file.interceptor';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from './entities/file.entity';
import { Repository } from 'typeorm';

// @ApiTags('Files')
// @Controller('files')
// export class FilesController {
//   // constructor(private readonly filesService: FilesService) {}

//   @Post('upload')
//   @UseInterceptors(FileInterceptor('file'))
//   uploadFile(@UploadedFile() file: Express.Multer.File) {
//     console.log(file);
//   }
// }

@ApiTags('Files')
@Controller('files')
export class FilesController {
  constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const { originalname, buffer } = file;
    const fileEntity = new File();
    fileEntity.filename = originalname;
    fileEntity.data = buffer;

    try {
      await this.fileRepository.save(fileEntity);
      console.log('File uploaded to MySQL database using TypeORM.');
    } catch (error) {
      console.error(
        'Error uploading file to MySQL database using TypeORM:',
        error,
      );
    }
  }
}
