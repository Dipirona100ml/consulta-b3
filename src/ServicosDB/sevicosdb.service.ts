import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SevicosdbService {
  constructor() {}

  async ExchangeAdd(B3Code, ExMP, companyName, paperQuantity) {
    const prisma = await new PrismaClient();

    return await prisma.stockExchange
      .create({
        data: {
          companyName: companyName,
          exchange: B3Code,
          paperQuantity: paperQuantity,
          exchangeMP: ExMP,
        },
      })
      .then((res) => {
        return { status: 200, response: res };
      })
      .catch((err) => {
        return err;
      });
  }
}
