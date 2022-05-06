<template>
  <header>
    <h1>Food Scorecard</h1>
  </header>
  <main>
    <div class="row">
      <section class="col-50">
        <h2>Edit</h2>
        <FoodInfoForm v-model="foodInfo"></FoodInfoForm>
      </section>
      <section class="col-50">
        <h2>Preview</h2>
        <FoodScorecard :food-info="foodInfo" ref="new-scorecard"></FoodScorecard>
      </section>
    </div>
    <section class="row">
      <h2>Download or Share</h2>
      <button @click="downloadScorecard">
        <span class="mdi mdi-download"></span>
        Download
      </button>
      <button @click="uploadScorecard">
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
import FoodInfoForm from "@/components/FoodInfoForm";
import FoodScorecard from "@/components/FoodScorecard";
import {FoodInfo} from "@/models";
export default {
  name: 'App',
  components: {FoodScorecard, FoodInfoForm},
  data() {
    return {
      foodInfo: new FoodInfo(),
      generatedLink: "",
    }
  },
  methods: {
    async downloadScorecard() {
      const targetDom = this.$refs["new-scorecard"].$el
      const blob = await domToImage.toBlob(targetDom)
      saveAs(blob, `${this.foodInfo.name}.png`)
    },
    async uploadScorecard() {
      const targetDom = this.$refs["new-scorecard"].$el
      const blob = await domToImage.toBlob(targetDom)
      this.generatedLink = await imgur.upload(blob)
    },
    copyLinkToClipboard() {
      navigator.clipboard.writeText(this.generatedLink)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  padding: 40px;
  text-align: center;
  background: wheat;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.col-50 {
  float: left;
  width: 46%;
  padding: 2%;
}

main {
  max-width: 800px;
  margin: auto;
}

.success-text {
  color: green;
}

</style>
