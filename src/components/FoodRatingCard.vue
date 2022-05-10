<template>
  <div class="food-rating-card">
    <img :src="foodRating.imageLink || require('../assets/food-placeholder.png')" :alt="`${foodRating.name}`">
    <div class="food-info" v-if="foodRating.name || foodRating.rating">
      <h4>
        <span v-if="foodRating.spicy" class="mdi mdi-chili-mild"></span>
        <span v-if="foodRating.vegetarian" class="mdi mdi-leaf"></span>
        {{ foodRating.name }}
        <span v-if="foodRating.price !== undefined"> - ${{ foodRating.price }}</span>
      </h4>
      <div v-if="foodRating.rating !== undefined">
            <span v-for="i in 5"
                  :key="`rating-star-${i}`"
                  class="mdi mdi-star"
                  :style="{color: foodRating.rating >= i ? 'darkorange': 'black'}"
            ></span>
      </div>
    </div>
  </div>
</template>

<script>
import {FoodRating} from "@/models";

export default {
  name: "FoodRatingCard",
  props: {
    foodRating: FoodRating
  },
}
</script>

<style scoped>
.food-rating-card {
  position: relative;
}

.food-info {
  position: absolute;
  bottom: 10px;
  right: 10px;
  min-width: 150px;
  background: rgba(0,0,0,0.6);
  color: white;
  padding: 10px;
}

img{
  width: 100%;
  height: auto;
}

h4 {
  margin-top: 5px;
  margin-bottom: 5px;
}

.mdi-chili-mild {
  color: tomato;
}

.mdi-leaf {
  color: greenyellow;
}
</style>
