<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Estoque Quasar </q-toolbar-title>

        <div>
          <q-btn-dropdown color="white" flat icon="person">
            <q-list>
              <q-item clickable v-close-popup @click="handleLogout">
                <q-item-section>
                  <q-item-label>Logout</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
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
      });
    };
    return { handleLogout };
  },
});
</script>
