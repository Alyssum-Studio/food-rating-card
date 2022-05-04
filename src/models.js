class FoodInfo {
  constructor(name, rating, price, spicy=false, vegetarian=false, imageLink) {
    this.name = name
    this.rating = rating
    this.price = price
    this.spicy = spicy
    this.vegetarian = vegetarian
    this.imageLink = imageLink
  }
}

function getExample() {
  return new FoodInfo(
    "Cheeseburger",
    3,
    100,
    false,
    false,
    "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Cheeseburger-1:product-header-desktop"
  )
}

export {FoodInfo, getExample}
