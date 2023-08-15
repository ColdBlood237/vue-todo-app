<template>
  <h2 class="mb-4">Albo</h2>
  <div class="d-flex flex-column align-start px-16" v-if="comic">
    <p>
      day: <span>{{ comic.day }}</span>
    </p>
    <p>
      month: <span>{{ comic.month }}</span>
    </p>
    <p>
      year: <span>{{ comic.year }}</span>
    </p>
    <p>
      num: <span>{{ comic.num }}</span>
    </p>
    <p>
      title: <span>{{ comic.safe_title }}</span>
    </p>
    <p>
      image link: <a :href="comic.img">{{ comic.img }}</a>
    </p>
    <div class="buttons mt-4">
      <v-btn icon="mdi-step-backward" size="small" @click="page--"></v-btn>
      <v-btn icon="mdi-step-forward" size="small" @click="page++"></v-btn>
    </div>
  </div>

  <div v-else class="text-center">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
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

<style scoped>
.d-flex {
  gap: 12px;
}

p {
  font-weight: 600;
}

span {
  font-weight: 400;
}

.buttons {
  display: flex;
  gap: 10px;
}
</style>
