<template>
  <h2 class="mb-4">Completed Tasks</h2>
  <v-text-field v-model="search" label="Search"></v-text-field>
  <v-select
    v-model="userSelected"
    :items="users"
    density="compact"
    label="Filter by user"
  ></v-select>
  <TasksList
    @clickDelete="deleteTask"
    :tasks="
      userSelected !== '*no filter*' || search !== ''
        ? matchingTasks
        : completedTasks
    "
  />
</template>

<script>
import TasksList from "../components/TasksList.vue";
import { computed, onMounted, ref, watch } from "vue";

export default {
  components: { TasksList },
  setup() {
    const tasks = ref([]);
    const userSelected = ref("*no filter*");
    const search = ref("");

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
      users.push("*no filter*");
      return users;
    });

    const userTasks = computed(() => {
      return completedTasks.value.filter(
        (task) => task.user === userSelected.value
      );
    });

    const matchingTasks = computed(() => {
      let matches = [];
      console.log(search.value);
      matches = completedTasks.value.filter((task) => {
        return (
          task.title.toLowerCase().includes(search.value.toLowerCase()) ||
          task.user.toLowerCase().includes(search.value.toLowerCase())
        );
      });
      console.log(matches);
      if (userSelected.value !== "*no filter*") {
        matches = matches.filter((match) => {
          return match.user === userSelected.value;
        });
      }

      return matches;
    });

    watch(matchingTasks, () => {});

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

    return {
      completedTasks,
      userSelected,
      userTasks,
      users,
      search,
      matchingTasks,
      deleteTask,
    };
  },
};
</script>

<style></style>
