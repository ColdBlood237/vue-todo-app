<template>
  <v-card class="mb-16" v-if="tasks.length">
    <v-slide-y-transition class="py-0" group tag="v-list">
      <template v-for="(task, i) in tasks" :key="task.id">
        <v-divider v-if="i !== 0" :key="task.id"></v-divider>

        <v-list-item>
          <template v-slot:prepend>
            <v-checkbox-btn
              @click="task.completed = !task.completed"
              v-model="task.completed"
              color="grey"
            ></v-checkbox-btn>
          </template>

          <div class="d-flex justify-space-between align-center">
            <v-list-item-title>
              <span :class="task.completed ? 'text-grey' : 'text-primary'">{{
                task.title
              }}</span>
            </v-list-item-title>

            <div>
              <v-btn variant="text">edit</v-btn>
              <v-btn variant="text">arch</v-btn>
              <v-btn variant="text">del</v-btn>
            </div>
          </div>

          <template v-slot:append>
            <v-expand-x-transition>
              <v-icon v-if="task.completed" color="success"> mdi-check </v-icon>
            </v-expand-x-transition>
          </template>
        </v-list-item>
      </template>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
export default {
  props: ["tasks"],
  setup(props) {
    console.log(props.tasks);
    return {};
  },
};
</script>

<style></style>
