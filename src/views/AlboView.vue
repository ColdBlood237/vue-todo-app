<template>
  <h1>Albo</h1>
  <div v-if="comic">
    <p>day: {{ comic.day }}</p>
    <p>month: {{ comic.month }}</p>
    <p>year: {{ comic.year }}</p>
    <p>num: {{ comic.num }}</p>
    <p>title: {{ comic.safe_title }}</p>
    <p>
      image link: <a :href="comic.img">{{ comic.img }}</a>
    </p>
    <button @click="page--">precedent page</button>
    <button @click="page++">next page</button>
  </div>
  <div v-if="error">{{ error }}</div>
</template>

<script>
import axios from "axios";
import { onMounted, ref, watch } from "vue";

export default {
  name: "AlboView",
  setup() {
    const page = ref(100);
    const comic = ref(null);
    const error = ref(null);

    async function fetchComic() {
      try {
        const response = await axios.get(
          "https://xkcd.now.sh/?comic=" + page.value
        );
        comic.value = await response.data;
      } catch (error) {
        error.value = error.response;
      }
    }

    watch(page, () => {
      fetchComic();
    });

    onMounted(() => {
      fetchComic();
    });

    return { comic, error, page, fetchComic };
  },
};
</script>

<style></style>
