<template>
  <h1>Log In</h1>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="login">
      <v-text-field
        v-model="username"
        :rules="rules"
        label="Username"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const username = ref("");
    const rules = ref([
      (value) => {
        if (value) return true;
        return "You must enter something.";
      },
    ]);

    function login() {
      localStorage.setItem("user", username.value);
      console.log(localStorage.getItem("user"));
      username.value = "";
      window.location = "/tasks";
    }

    return { username, rules, login };
  },
};
</script>

<style></style>
