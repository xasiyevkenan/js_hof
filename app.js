//Part 1
const stocks = [
  {
    symbol: "APPLE",
    price: 170,
    sector: "Technology",
  },
  {
    symbol: "BMW",
    price: 400,
    sector: "Transportation",
  },
  {
    symbol: "MERC",
    price: 410,
    sector: "Transportation",
  },
  {
    symbol: "ATB",
    price: 120,
    sector: "Finance",
  },
  {
    symbol: "AUDI",
    price: 210,
    sector: "Transportation",
  },
];

//Part 2
const changeStockPrice = () => {
  const randomStockIndex = Math.floor(Math.random() * stocks.length);
  const randomPercent = (Math.floor(Math.random() * 100) - 50) / 100;
  const percentToNumber = 1 + randomPercent;
  stocks[randomStockIndex].price *= percentToNumber;

  console.log(
    `Symbol: ${stocks[randomStockIndex].symbol} --> Price:${stocks[
      randomStockIndex
    ].price.toFixed(2)}`
  );
};

setInterval(changeStockPrice, 1200);

//Part 3
let filterSector = (filteredSector) => {
  const specificSector = stocks.filter(
    (stock) => stock.sector === filteredSector
  );

  return specificSector;
};

console.log(filterSector("Transportation"));

//Part 4
const alertPrices = () => {
  const aboveAlert = 450;
  const belowAlert = 100;

  stocks.forEach((stock) => {
    if (stock.price >= aboveAlert) {
      console.log(
        `${stock.symbol} sectors price is ${stock.price} and above than ${aboveAlert}`
      );

      if (stock.price <= belowAlert) {
        console.log(
          `${stock.symbol} sectors price is ${stock.price} and below than ${belowAlert}`
        );
      }
    }
  });
};

setTimeout(alertPrices, 4000);
