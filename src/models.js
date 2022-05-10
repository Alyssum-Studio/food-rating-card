class FoodRating {
  constructor(name, rating, ratingStyle="star", price, spicy=false, vegetarian=false, imageLink) {
    this.name = name
    this.rating = rating
    this.ratingStyle = ratingStyle
    this.price = price
    this.spicy = spicy
    this.vegetarian = vegetarian
    this.imageLink = imageLink
  }
}

function getFoodRatingExample() {
  return new FoodRating(
    "Cheeseburger",
    3,
    "star",
    100,
    false,
    false,
    "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Cheeseburger-1:product-header-desktop"
  )
}

export {FoodRating, getFoodRatingExample}
