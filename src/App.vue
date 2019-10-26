<template>
  <div id="app" class="max-w-xl mx-auto pb-8">
    <p class="text-lg font-bold pb-4">
      Example - Acts 18:19-28; Acts 19:1-41
    <p>
    <form class="passage-form" @submit.prevent="getPassage">
      <input v-model="passage" type="text" name="passage" placeholder="Enter Your Reading For The Day"/>
    </form>
    <div v-if="!loading" class="w-full max-w-xl text-xl mt-4">
      <passage-audio :src="audioSrc" class="w-full"></passage-audio>
      <passage-text :passageHtml="passageHtml"></passage-text>
    </div>
  </div>
</template>

<script>
import $ from "jquery"
import { parsePassage } from "./utils/abbreviation.js"
import PassageText from "./components/PassageText.vue"
import PassageAudio from "./components/PassageAudio.vue"

export default {
  data() {
    return {
      passage: "",
      parsedPassage: "",
      audioSrc: null,
      loading: true,
      passageHtml: ""
    }
  },
  components: {
    passageText: PassageText,
    passageAudio: PassageAudio
  },
  methods: {
    getPassage() {
      this.loadingText = true

      this.parsedPassage = parsePassage(this.passage)

      console.log("REQUESTING PASSAGE(S): ", this.parsedPassage)

      var audioSrc = this.passage ? `http://audio.esvbible.org/hw/hq/${this.parsedPassage}.mp3` : null
      var textUrl = `http://still-shelf-63211.herokuapp.com/http://www.esvapi.org/v2/rest/passageQuery?key=TEST&passage=${this.parsedPassage}`

      $.ajax({
        url: textUrl,
        success: (data) => {
          this.parsedPassage = ""
          this.passageHtml = data
          this.audioSrc = audioSrc
          this.loading = false
          $("input").blur()
        }
      })
    }
  }
}
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';

body {
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  padding: 4em 1em;
  color: #566b78;
}

h2 {
  margin-top: 1em;
  padding-top: 1em;
}

h3 {
  padding-top: 1em;
  padding-bottom: 0.5em;
};

h1,
h2,
strong {
  color: #333;
}

p {
  padding: 0.5em 0;
};

a {
  color: #e81c4f;
}

#app {
  display: flex;
  flex-direction: column;
}

.passage-form {
  display: flex;
  flex: 1;
}

.verse-num {
  font-size: .875rem;
  color: #e81c4f;
};


.chapter-num {
  color: #e81c4f;
};

input[type="text"] {
  width: 100%;
  padding: 20px;
  text-align: center;
  border: 1px solid #566b78;
  border-radius: 5px;
  font-size: 1em;
  color: #333;
}
input[type="text"]:focus {
  outline: none;
}


</style>
