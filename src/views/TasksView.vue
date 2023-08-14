<template>
  <h2>Tasks</h2>
  <TasksList @clickDelete="deleteTask" :tasks="uncompletedTasks" />
  <TaskForm @submitForm="addTask" />
</template>

<script>
import { computed, onMounted, ref, watch } from "vue";
import uniqid from "uniqid";
import TaskForm from "../components/TaskForm.vue";
import TasksList from "../components/TasksList.vue";

export default {
  name: "TaskView",
  components: { TaskForm, TasksList },
  setup() {
    const tasks = ref([""]);
    const user = ref(null);

    function addTask(task) {
      tasks.value.push({
        id: uniqid(),
        title: task,
        completed: false,
        archived: false,
        user: user.value ? user.value : "Anonymous",
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
      user.value = localStorage.getItem("user");
    });

    watch(
      tasks,
      () => {
        localStorage.setItem("tasks", JSON.stringify(tasks.value));
      },
      { deep: true }
    );

    const uncompletedTasks = computed(() => {
      return tasks.value.filter((task) => !task.completed);
    });

    return { uncompletedTasks, addTask, deleteTask };
  },
};
</script>

<style></style>
