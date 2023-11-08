<template>
  <div id="app">
    <div style="width: 1900px;"  v-for="(person, i) in data" :key="i">
      <Signature :person="person" :html="true" language="nl" />
    </div>
  </div>
</template>

<script>
import data from "./data.js";
import Signature from "@/Signature";

export default {
  name: 'App',
  components: {Signature},
  data: function () {
    return {
      inputPerson: {
        name: null,
        phone: null,
        title: null
      },
      data: data,
    }
  },
  methods: {
  }
}
</script>
