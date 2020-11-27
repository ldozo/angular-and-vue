<template>
  <div class="visible-component">
    <ul>
      <li v-for="i in repeats" :key="i">{{lineText}} - 
        <button @click="btnClicked(i)">{{btnText}}</button>
      </li>
    </ul>
</div>
</template>

<script>
export default {
  methods: {
    btnClicked(i) {
      console.log("btnClickTriggered:" + i)
      document.dispatchEvent(new CustomEvent("teiClick", {"detail": {clickedItem: i}}))
    }
  },
  props: {
    lineText: {
      type: String,
      default: "line-text"
    },
    btnText: {
      type: String,
      default: "btn-text"
    },
    repeats: {
      type: Number,
      default:1
    }
  }
}
</script>

<style>
.visible-component {
  background-color: rgb(194, 189, 223);
}
</style>