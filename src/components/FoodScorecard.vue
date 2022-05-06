<template>
  <div class="food-scorecard">
    <img :src="foodInfo.imageLink || require('../assets/food-placeholder.png')" :alt="`${foodInfo.name}`">
    <div class="food-info" v-if="foodInfo.name || foodInfo.rating">
      <h4>
        <span v-if="foodInfo.spicy" class="mdi mdi-fire"></span>
        <span v-if="foodInfo.vegetarian" class="mdi mdi-leaf"></span>
        {{ foodInfo.name }}
        <span v-if="foodInfo.price !== undefined"> - ${{foodInfo.price}}</span>
      </h4>
      <div v-if="foodInfo.rating !== undefined">
            <span v-for="i in 5"
                  :key="`rating-star-${i}`"
                  class="mdi mdi-star"
                  :style="{color: foodInfo.rating >= i ? 'darkorange': 'black'}"
            ></span>
      </div>
    </div>
  </div>
</template>

<script>
import {FoodInfo} from "@/models";

export default {
  name: "FoodScorecard",
  props: {
    foodInfo: FoodInfo
  },
}
</script>

<style scoped>
.food-scorecard {
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.food-scorecard h4 {
  margin-top: 5px;
  margin-bottom: 5px;
}

.food-scorecard img{
  display: block;
  max-width: 100%;
}

.food-scorecard .mdi-fire {
  color: tomato;
}

.food-scorecard .mdi-leaf {
  color: greenyellow;
}

.food-scorecard .food-info {
  position: absolute;
  bottom: 10px;
  right: 10px;
  min-width: 150px;
  background: rgba(0,0,0,0.6);
  color: white;
  padding: 10px;
}
</style>
