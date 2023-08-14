<template>
  <h2>Tasks</h2>
  <TaskForm @submitForm="addTask" />
</template>

<script>
import { onMounted, ref, watch } from "vue";
import uniqid from "uniqid";
import TaskForm from "../components/TaskForm.vue";

export default {
  components: { TaskForm },
  setup() {
    const tasks = ref([""]);
    console.log(tasks.value);

    function addTask(task) {
      tasks.value.push({
        id: uniqid(),
        title: task,
        completed: false,
        archived: false,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks.value));
      console.log("tasks in local storage : " + localStorage.getItem("tasks"));
    }

    onMounted(() => {
      if (!localStorage.getItem("tasks")) {
        localStorage.setItem("tasks", JSON.stringify([]));
      }
      tasks.value = JSON.parse(localStorage.getItem("tasks"));
    });

    // watch(tasks, () => {
    //   localStorage.setItem("tasks", tasks);
    // });

    return { tasks, addTask };
  },
};
</script>

<style></style>
