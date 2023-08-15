<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-btn variant="plain" v-bind="props">
        <v-icon>mdi-file-edit</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Edit Task</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form v-model="isFormValid" @submit.prevent="editTask">
            <v-text-field
              v-model="newTask"
              :rules="rules"
              label="Task"
            ></v-text-field>
            <v-btn :disabled="!isFormValid" type="submit" block class="mt-2"
              >Submit</v-btn
            >
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
    const isFormValid = ref(false);
    const dialog = ref(false);
    const newTask = ref(task.title);

    const rules = ref([
      (value) => {
        if (value) return true;
        return "You must enter something.";
      },
    ]);

    function editTask() {
      task.title = newTask.value;
      dialog.value = false;
    }

    return { dialog, newTask, editTask, isFormValid, rules };
  },
};
</script>
