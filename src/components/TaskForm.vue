<template>
  <v-sheet width="300" class="mx-auto task-form">
    <v-form @submit.prevent="emitEvent">
      <v-text-field v-model="task" :rules="rules" label="Task"></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { ref } from "vue";
export default {
  //   data: () => ({
  //     expand: false,
  //     task: "",
  //     rules: [
  //       (value) => {
  //         if (value) return true;
  //         return "You must enter something.";
  //       },
  //     ],
  //   }),
  //   methods: {
  //     emitEvent(e) {
  //       this.$emit("submit", e);
  //     },
  //   },
  setup() {
    const expand = ref(false);
    const task = ref("");
    const rules = ref([
      (value) => {
        if (value) return true;
        return "You must enter something.";
      },
    ]);

    function emitEvent(e) {
      this.$emit("submit", e);
    }

    return { expand, task, rules, emitEvent };
  },
};
</script>

<style>
.task-form {
  display: block;
}
</style>
