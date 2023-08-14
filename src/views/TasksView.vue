<template>
  <h2>Tasks</h2>
  <TaskForm @submit="addTask" />
</template>

<script>
import TaskForm from "../components/TaskForm.vue";

export default {
  components: { TaskForm },
};
</script>

<style></style>
