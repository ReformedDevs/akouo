<template>
  <div id="app">
    <form class="passage-form" @submit.prevent="getPassage">
      <input v-model="passage" type="text" name="passage" placeholder="Enter Your Reading For The Day"/>
    </form>
    <div v-if="!loading">
      <passage-audio :src="audioSrc"></passage-audio>
      <passage-text :passageHtml="passageHtml"></passage-text>
    </div>
  </div>
</template>

<script>
import $ from "jquery"
import PassageText from "./components/PassageText.vue"
import PassageAudio from "./components/PassageAudio.vue"

export default {
  data () {
    return {
      passage: "",
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
    getPassage () {
      this.loadingText = true

      var audioSrc = this.passage ? `http://audio.esvbible.org/hw/hq/${this.passage}.mp3` : null
      var textUrl = `https://crossorigin.me/http://www.esvapi.org/v2/rest/passageQuery?key=IP&passage=${this.passage}`

      $.ajax({
        url: textUrl,
        success: (data) => {
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

h1,
h2,
strong {
  color: #333;
}

a {
  color: #e81c4f;
}

#app {
  width: 50em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.passage-form {
  display: flex;
  flex: 1;
}

input[type="text"] {
  width: 100%;
  padding: 20px;
  margin-bottom: 4em;
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
