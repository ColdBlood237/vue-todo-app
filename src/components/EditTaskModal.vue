<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-btn variant="text" v-bind="props"> edit </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Edit Task</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form @submit.prevent="editTask">
            <v-text-field
              v-model="newTask"
              :rules="rules"
              label="Task"
            ></v-text-field>
            <v-btn type="submit" block class="mt-2">Submit</v-btn>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref, watch } from "vue";
export default {
  props: ["task"],
  setup({ task }) {
    const dialog = ref(false);
    const newTask = ref(task.title);

    function editTask() {
      task.title = newTask.value;
      dialog.value = false;
    }

    return { dialog, newTask, editTask };
  },
};
</script>

<style></style>
