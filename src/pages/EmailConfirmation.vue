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
import { defineComponent, ref } from "vue";
import useAuthUser from "src/composable/UseAuthUser";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "EmailConfirmationPage",

  setup() {
    const router = useRouter();
    const { register } = useAuthUser();

    const form = ref({
      name: "",
      email: "",
      password: "",
    });

    const handleRegister = async () => {
      try {
        await register(form.value);
        router.push({
          name: "email-confirmation",
          query: { email: form.value.email },
        });
      } catch (error) {
        alert(error.message);
      }
    };

    return { form, handleRegister };
  },
});
</script>
