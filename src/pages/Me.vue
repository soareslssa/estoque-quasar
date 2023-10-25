<template>
  <q-page class="flex flex-center">
    <div v-if="user">Hello {{ user.user_metadata.name }}</div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import useAuthUser from "src/composable/UseAuthUser";

export default defineComponent({
  name: "MePage",

  setup() {
    const { user } = useAuthUser();

    return { user };
  },
});
</script>
