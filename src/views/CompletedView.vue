<template>
  <h2>Completed Tasks</h2>
  <TasksList @clickDelete="deleteTask" :tasks="completedTasks" />
</template>

<script>
import TasksList from "../components/TasksList.vue";
import { computed, onMounted, ref, watch } from "vue";

export default {
  components: { TasksList },
  setup() {
    const tasks = ref([]);

    const completedTasks = computed(() => {
      return tasks.value.filter((task) => task.completed);
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

    return { completedTasks, deleteTask };
  },
};
</script>

<style></style>
