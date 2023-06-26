import { DbControlletController } from './ServicosDB/dbcontroller.controller';
import { SevicosdbService } from './ServicosDB/sevicosdb.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [],
  controllers: [DbControlletController, AppController],
  providers: [SevicosdbService, AppService],
})
export class AppModule {}
