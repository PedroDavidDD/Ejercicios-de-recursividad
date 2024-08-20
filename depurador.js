const orders = [
    { productTitle: "Product 1", amount: 10 },
    { productTitle: "Product 2", amount: 30 },
    { productTitle: "Product 3", amount: 20 },
    { productTitle: "Product 4", amount: 60 }
];

//better
function declarative(){
  function sumAmount(currentAmount, order){
      return currentAmount + order.amount;
  }

  function getTotalAmount(orders) {
      return orders.reduce(sumAmount, 0);
  }

  console.log(getTotalAmount(orders)); // 120
}

declarative();