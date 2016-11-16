<template>
  <div class="audio-container">
    <audio id="audio" controls="controls">
      <source :src="src" type="audio/mp3">
    </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player: null
    }
  },
  props: ["src"],
  updated() {
    const audio = document.getElementById("audio")
    audio.load()
  },
  created() {
    window.onkeydown = function(e) {
      return !(e.keyCode === 32 && e.target.tagName !== "INPUT")
    }
    window.onkeyup = function(e) {
      if (e.keyCode === 32 && e.target.tagName !== "INPUT") {
        this.audio.paused ? this.audio.play() : this.audio.pause()
      }
      return true
    }
  }
}
</script>

<style>
.audio-container {
  display: flex;
  justify-content: center;
}
</style>