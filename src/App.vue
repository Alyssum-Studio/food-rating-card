<template>
  <header>
    <h1>Food Scorecard</h1>
  </header>
  <main>
    <div class="row">
      <div class="col-50">
        <h2>Edit</h2>
        <FoodInfoForm v-model="foodInfo"></FoodInfoForm>
      </div>
      <div class="col-50">
        <h2>Preview</h2>
        <FoodScorecard :food-info="foodInfo" ref="food-scorecard"></FoodScorecard>
      </div>
    </div>
    <div class="row">
      <div>
        <h2>Download or Share</h2>
        <button @click="downloadScorecard">Download PNG</button>
        <button @click="uploadScorecard">Generate link</button>
        <div>
          <label for="generated-link-input">Link: </label>
          <input id="generated-link-input" type="url" v-model="generatedLink">
          <button @click="copyLinkToClipboard">Copy</button>
        </div>
      </div>
    </div>
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
      const targetDom = this.$refs["food-scorecard"].$el
      const blob = await domToImage.toBlob(targetDom)
      saveAs(blob, `${this.foodInfo.name}.png`)
    },
    async uploadScorecard() {
      const targetDom = this.$refs["food-scorecard"].$el
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
  padding: 40px; /* some padding */
  text-align: center; /* center the text */
  background: wheat; /* green background */
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
  min-width: 800px;
  margin: 30px 25%;
}

</style>
