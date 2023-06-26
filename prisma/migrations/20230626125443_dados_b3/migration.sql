-- CreateTable
CREATE TABLE "StockExchange" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "companyName" TEXT NOT NULL,
    "exchange" TEXT NOT NULL,
    "paperQuantity" TEXT NOT NULL,
    "exchangeMP" REAL NOT NULL,
    "exchangeLP" REAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "StockExchange_id_key" ON "StockExchange"("id");

-- CreateIndex
CREATE UNIQUE INDEX "StockExchange_exchange_key" ON "StockExchange"("exchange");
