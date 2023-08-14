<template>
  <v-sheet width="300" class="mx-auto">
    <v-form
      @submit.prevent="
        $emit(`submitForm`, task);
        task = '';
      "
    >
      <v-text-field v-model="task" :rules="rules" label="Task"></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const expand = ref(false);
    const task = ref("");
    const rules = ref([
      (value) => {
        if (value) return true;
        return "You must enter something.";
      },
    ]);

    return { expand, task, rules };
  },
};
</script>

<style></style>
