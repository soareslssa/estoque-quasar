<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Estoque Quasar </q-toolbar-title>

        <div class="q-gutter-x-sm">
          <q-btn label="sign in" flat to="login" />
          <q-btn label="sign up" outline rounded to="register" />
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

const linksList = [];

export default defineComponent({
  name: "MainLayout",

  setup() {
    return {};
  },
});
</script>
