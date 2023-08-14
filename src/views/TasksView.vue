<template>
  <h2>Tasks</h2>
  <TasksList @clickDelete="deleteTask" :tasks="tasks" />
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
    }

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

    return { tasks, addTask, deleteTask };
  },
};
</script>

<style></style>
