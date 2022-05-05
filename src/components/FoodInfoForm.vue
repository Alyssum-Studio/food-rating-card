<template>
  <form class="food-info-form" @input="$emit('update:modelValue', formData)" @reset="reset">
    <div>
      <label for="name-input">Name</label>
      <input id="name-input" type="text" v-model.trim="formData.name" required>
    </div>
    <div>
      <label for="price-input">Price</label>
      <input id="price-input" type="number" v-model.number="formData.price" min="0">
      <span class="mdi mdi-close clear-button" @click="clearPrice"></span>
    </div>
    <div>
      <label>Rating</label>
      <span v-for="i in 5"
            :key="`rating-star-${i}`"
            class="mdi mdi-star rating-star"
            :style="{color: formData.rating >= i ? 'darkorange': 'black'}"
            @click="formData.rating = i"
      ></span>
      <span class="mdi mdi-close clear-button" @click="clearRating"></span>
    </div>
    <div>
      <label for="image-link-input">Image</label>
      <input id="image-link-input" type="url" v-model="formData.imageLink">
      <span class="mdi mdi-close clear-button" @click="clearImageLink"></span>
      <label class="file-label" for="upload-image-input">Upload</label>
      <input id="upload-image-input" class="file-input" type="file" accept="image/*" @input="uploadImage">
    </div>
    <div>
      <button type="reset">Reset</button>
      <button @click="setExample">Example</button>
    </div>
  </form>
</template>

<script>
import {FoodInfo, getExample} from "@/models";
import * as imgur from "@/adapters/imgur";

export default {
  name: "FoodInfoForm",
  props: {
    modelValue: FoodInfo
  },
  data() {
    return {
      formData: this.modelValue
    }
  },
  methods: {
    clearPrice() {
      this.formData.price = undefined
      this.$emit('update:modelValue', this.formData)
    },
    clearRating() {
      this.formData.rating = undefined
      this.$emit('update:modelValue', this.formData)
    },
    clearImageLink() {
      this.formData.imageLink = undefined
      this.$emit('update:modelValue', this.formData)
    },
    async uploadImage(event) {
      const imageFile = event.target.files[0]
      this.formData.imageLink = await imgur.upload(imageFile)
      this.$emit('update:modelValue', this.formData)
    },
    reset() {
      this.formData = new FoodInfo()
      this.$emit('update:modelValue', this.formData)
    },
    setExample() {
      this.formData = getExample()
      this.$emit('update:modelValue', this.formData)
    }
  },
}
</script>

<style scoped>
.food-info-form {
  background: #f2f2f2;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 20px;
  text-align: left;
}

.food-info-form input, select {
  padding: 5px;
  margin: 8px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.food-info-form input[type="file"] {
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
