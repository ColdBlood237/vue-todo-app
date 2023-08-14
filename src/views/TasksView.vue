<template>
  <h2>Tasks</h2>
  <TasksList :tasks="tasks" />
  <TaskForm @submitForm="addTask" />
</template>

<script>
import { onMounted, ref, watch } from "vue";
import uniqid from "uniqid";
import TaskForm from "../components/TaskForm.vue";
import TasksList from "../components/TasksList.vue";

export default {
  components: { TaskForm, TasksList },
  setup() {
    const tasks = ref([""]);

    function addTask(task) {
      tasks.value.push({
        id: uniqid(),
        title: task,
        completed: false,
        archived: false,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks.value));
    }

    onMounted(() => {
      if (!localStorage.getItem("tasks")) {
        localStorage.setItem("tasks", JSON.stringify([]));
      }
      tasks.value = JSON.parse(localStorage.getItem("tasks"));
    });

    return { tasks, addTask };
  },
};
</script>

<style></style>
