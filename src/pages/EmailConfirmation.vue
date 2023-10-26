<template>
  <q-page padding>
    <p class="text-body1 text-center">Thanks for registering!</p>
    <p class="text-body1 text-center">
      Please confirm your email to finishing registering:
      <strong> {{ $route.query.email }}</strong>
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmailConfirmationPage",
});
</script>
