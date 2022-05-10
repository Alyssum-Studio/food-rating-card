<template>
  <form class="food-rating-form" @input="$emit('update:modelValue', formData)" @reset="reset">
    <div>
      <label for="image-link-input">Image</label>
      <input id="image-link-input" type="url" v-model="formData.imageLink">
      <span class="mdi mdi-close clear-button" @click="clearField('imageLink')"></span>
      <label class="file-label" for="upload-image-input">Upload</label>
      <input id="upload-image-input" class="file-input" type="file" accept="image/*" @input="uploadImage">
    </div>
    <div>
      <label for="name-input">Name</label>
      <input id="name-input" type="text" v-model.trim="formData.name" required>
    </div>
    <div>
      <label>Rating</label>
      <span v-for="i in 5"
            :key="`rating-star-${i}`"
            class="mdi mdi-star rating-star"
            :style="{color: formData.rating >= i ? 'darkorange': 'black'}"
            @click="formData.rating = i"
      ></span>
      <span class="mdi mdi-close clear-button" @click="clearField('rating')"></span>
    </div>
    <div>
      <label for="price-input">Price</label>
      <input id="price-input" type="number" v-model.number="formData.price" min="0">
      <span class="mdi mdi-close clear-button" @click="clearField('price')"></span>
    </div>
    <div>
      <input id="spicy-checkbox" type="checkbox" v-model="formData.spicy">
      <label for="spicy-checkbox">
        <span class="mdi mdi-chili-mild"></span>
        Spicy
      </label>
      <input id="vegetarian-checkbox" type="checkbox" v-model="formData.vegetarian">
      <label for="vegetarian-checkbox">
        <span class="mdi mdi-leaf"></span>
        Vegetarian
      </label>
    </div>
    <div>
      <button type="reset">Reset</button>
      <button @click="setExample" @click.prevent>Example</button>
    </div>
  </form>
</template>

<script>
import {FoodRating, getFoodRatingExample} from "@/models";
import * as imgur from "@/adapters/imgur";

export default {
  name: "FoodRatingForm",
  props: {
    modelValue: FoodRating
  },
  data() {
    return {
      formData: this.modelValue
    }
  },
  methods: {
    async uploadImage(event) {
      const imageFile = event.target.files[0]
      this.formData.imageLink = await imgur.uploadImage(imageFile)
      this.$emit('update:modelValue', this.formData)
    },
    clearField(fieldName) {
      this.formData[fieldName] = undefined
      this.$emit('update:modelValue', this.formData)
    },
    reset() {
      this.formData = new FoodRating()
      this.$emit('update:modelValue', this.formData)
    },
    setExample() {
      this.formData = getFoodRatingExample()
      this.$emit('update:modelValue', this.formData)
    }
  },
}
</script>

<style scoped>
.food-rating-form {
  background: #f2f2f2;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 20px;
  text-align: left;
}

input, select {
  padding: 5px;
  margin: 8px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="file"] {
  display: none;
}

.file-input {
  display: none;
}

.file-label {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 3px;
  cursor: pointer;
}

.rating-star {
  font-size: 24px;
}

.clear-button {
  color: lightcoral;
}
.clear-button:hover {
  color: red;
}

</style>
