<template>
  <div id="passage">
    <div v-if="passageHtml" v-html="formattedPassage"></div>
  </div>
</template>

<script>
import $ from "jquery"

$.strRemove = function(theTarget, theString) {
  return $("<div/>").append(
    $(theTarget, theString).remove().end()
  ).html()
}

export default {
  props: ["passageHtml"],
  computed: {
    formattedPassage() {
      let html = this.passageHtml

      html = $.strRemove("object", html)
      html = $.strRemove("div.footnotes", html)
      html = $.strRemove("span.footnote", html)
      // html = $.strRemove("span.verse-num", html)

      return html
    }
  }
}
</script>
