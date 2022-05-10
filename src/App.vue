<template>
  <header>
    <h1>Food Rating Card</h1>
  </header>
  <main>
    <div class="row">
      <section class="col-50">
        <h2>Edit</h2>
        <FoodRatingForm
            v-model="foodRating"
            style="box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);"
        ></FoodRatingForm>
      </section>
      <section class="col-50">
        <h2>Preview</h2>
        <FoodRatingCard
            ref="new-rating-card"
            :food-rating="foodRating"
            style="box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);"
        ></FoodRatingCard>
      </section>
    </div>
    <section class="row">
      <h2>Download or Share</h2>
      <button @click="downloadRatingCard">
        <span class="mdi mdi-download"></span>
        Download
      </button>
      <button @click="uploadRatingCard">
        <span class="mdi mdi-share-variant"></span>
        Share
      </button>
      <div v-if="generatedLink">
        <p class="success-text">Upload success!</p>
        <div>
          <label for="generated-link-input">Link: </label>
          <input id="generated-link-input" type="url" v-model="generatedLink">
          <button @click="copyLinkToClipboard">Copy</button>
        </div>
        <img :src="generatedLink" alt="generated-image">
      </div>
    </section>
  </main>
</template>

<script>
import domToImage from "dom-to-image";
import { saveAs } from "file-saver";
import * as imgur from "@/adapters/imgur";
import FoodRatingForm from "@/components/FoodRatingForm";
import FoodRatingCard from "@/components/FoodRatingCard";
import {FoodRating} from "@/models";
export default {
  name: 'App',
  components: {FoodRatingCard, FoodRatingForm},
  data() {
    return {
      foodRating: new FoodRating(),
      generatedLink: "",
    }
  },
  methods: {
    async downloadRatingCard() {
      const targetDom = this.$refs["new-rating-card"].$el
      const blob = await domToImage.toBlob(targetDom)
      saveAs(blob, `${this.foodRating.name}.png`)
    },
    async uploadRatingCard() {
      const targetDom = this.$refs["new-rating-card"].$el
      const blob = await domToImage.toBlob(targetDom)
      this.generatedLink = await imgur.uploadImage(blob)
    },
    copyLinkToClipboard() {
      navigator.clipboard.writeText(this.generatedLink)
    }
  }
}
</script>

<style scoped>
header {
  padding: 10px;
  background: wheat;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

main {
  max-width: 800px;
  background: #ffffff;
  box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  margin: 50px auto;
  padding: 50px;
}

.row {
  display: table;
  width: 100%;
}

.col-50 {
  display: table-cell;
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
}

.success-text {
  color: green;
}

</style>
