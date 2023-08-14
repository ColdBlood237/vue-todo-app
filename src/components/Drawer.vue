<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      :title="user ? user : 'Anonymous'"
      nav
    >
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <router-link :to="{ name: 'tasks' }">
        <v-list-item
          prepend-icon="mdi-format-list-bulleted"
          title="Tasks"
          value="tasks"
        ></v-list-item>
      </router-link>
      <router-link :to="{ name: 'completed' }">
        <v-list-item
          prepend-icon="mdi-archive"
          title="Completed"
          value="completed"
        ></v-list-item>
      </router-link>
      <router-link v-if="!user" :to="{ name: 'login' }">
        <v-list-item
          prepend-icon="mdi-login-variant"
          title="Log in"
          value="login"
        ></v-list-item>
      </router-link>
      <v-btn @click="logOut" variant="text" v-else>Log out</v-btn>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "Drawer",
  setup() {
    const drawer = ref(true);
    const rail = ref(true);
    const user = ref(null);

    function logOut() {
      localStorage.removeItem("user");
      user.value = null;
    }

    onMounted(() => {
      user.value = localStorage.getItem("user");
    });

    return { drawer, rail, user, logOut };
  },
};
</script>

<style></style>
