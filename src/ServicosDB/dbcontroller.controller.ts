import { Controller, Post, Get, Put, Body, Res } from '@nestjs/common';
import { SevicosdbService } from './sevicosdb.service';
import { response } from 'express';

@Controller()
export class DbControlletController {
  constructor(private readonly addExchenge: SevicosdbService) {}

  @Post('/cadAcao')
  async cadAcao(
    @Res() response:Response,
    @Body()
    data: {
      B3Code: number;
      ExMP: number;
      companyName: string;
      paperQuantity: number;
    },
  ) {
    return await this.addExchenge
      .ExchangeAdd(data.B3Code, data.ExMP, data.companyName, data.paperQuantity)
      .then((resp) => {
        return response.send(resp);
      });
  }
}
