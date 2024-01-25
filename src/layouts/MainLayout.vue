<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="fa-solid fa-bars" />
        <q-avatar>
          <img src="/public/icons/lendsclub-256x256.png" />
        </q-avatar>
        <q-toolbar-title class="desktop-only"> Lends Club </q-toolbar-title>

        <div class="q-ml-auto">
          <q-btn flat round dense icon="fa-solid fa-search" />
        </div>
        <div class="q-pa-sm desktop-only">
          <q-btn flat label="Alugue Já" />
          <q-btn flat label="Saiba Mais" />
          <q-btn flat label="Login" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import useAuthUser from "src/composable/UseAuthUser";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const { logout } = useAuthUser();
    const router = useRouter();
    const $q = useQuasar();

    const handleLogout = async () => {
      $q.dialog({
        title: "Logout",
        message: "Do you really want to leave ?",
        cancel: true,
        persistent: true,
      }).onOk(async () => {
        await logout();
        router.replace({ path: "login" });
        $q.notify({
          message: "Logout successfully",
          type: "positive",
        });
      });
    };
    return { handleLogout };
  },
});
</script>
