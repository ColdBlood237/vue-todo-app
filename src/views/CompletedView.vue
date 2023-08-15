<template>
  <h2>Completed Tasks</h2>
  <v-select
    v-model="userSelected"
    :items="users"
    density="compact"
    label="Filter by user"
  ></v-select>
  <TasksList
    @clickDelete="deleteTask"
    :tasks="userTasks.length > 0 ? userTasks : completedTasks"
  />
</template>

<script>
import TasksList from "../components/TasksList.vue";
import { computed, onMounted, ref, watch } from "vue";

export default {
  components: { TasksList },
  setup() {
    const tasks = ref([]);
    const userSelected = ref("");

    const completedTasks = computed(() => {
      return tasks.value.filter((task) => task.completed);
    });

    const users = computed(() => {
      let users = [];
      completedTasks.value.forEach((task) => {
        if (!users.includes(task.user)) {
          users.push(task.user);
        }
      });
      return users;
    });

    const userTasks = computed(() => {
      return completedTasks.value.filter(
        (task) => task.user === userSelected.value
      );
    });

    function deleteTask(taskID) {
      tasks.value = tasks.value.filter((task) => task.id !== taskID);
    }

    onMounted(() => {
      if (!localStorage.getItem("tasks")) {
        localStorage.setItem("tasks", JSON.stringify([]));
      }
      tasks.value = JSON.parse(localStorage.getItem("tasks"));
    });

    watch(
      tasks,
      () => {
        localStorage.setItem("tasks", JSON.stringify(tasks.value));
      },
      { deep: true }
    );

    return { completedTasks, userSelected, userTasks, users, deleteTask };
  },
};
</script>

<style></style>
