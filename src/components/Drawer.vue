<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <v-list-item
      :prepend-avatar="
        user
          ? 'https://ui-avatars.com/api/?name=' + user
          : 'https://ui-avatars.com/api/?name=?'
      "
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

    <v-list class="d-flex flex-column mt-4" density="compact" nav>
      <router-link
        style="text-decoration: none; color: inherit"
        class="mb-4"
        :to="{ name: 'tasks' }"
      >
        <v-list-item
          prepend-icon="mdi-format-list-bulleted"
          title="Tasks to do"
          value="tasks"
        >
        </v-list-item>
      </router-link>
      <router-link
        style="text-decoration: none; color: inherit"
        class="mb-4"
        :to="{ name: 'completed' }"
      >
        <v-list-item
          prepend-icon="mdi-archive"
          title="Tasks completed"
          value="completed"
        ></v-list-item>
      </router-link>
      <router-link
        style="text-decoration: none; color: inherit"
        class="mb-4"
        :to="{ name: 'albo' }"
      >
        <v-list-item
          prepend-icon="mdi-thought-bubble-outline "
          title="Albo"
          value="albo"
        ></v-list-item>
      </router-link>
      <router-link
        style="text-decoration: none; color: inherit"
        class="mb-4"
        v-if="!user"
        :to="{ name: 'login' }"
      >
        <v-list-item
          prepend-icon="mdi-login-variant"
          title="Log in"
          value="login"
        ></v-list-item>
      </router-link>

      <v-list-item
        v-else
        @click="logOut"
        prepend-icon="mdi-logout-variant"
        title="Log out"
        value="logout"
      ></v-list-item>
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

<style>
.logout {
  padding: 100 auto;
}
</style>
