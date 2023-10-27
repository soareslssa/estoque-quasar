<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h5 text-center">Register</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input label="Name" v-model="form.name" />
        <q-input label="Email" v-model="form.email" />
        <q-input
          v-model="form.password"
          label="Password"
          :type="isPwd ? 'password' : 'text'"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <div class="full-width q-pt-md">
          <q-btn
            color="primary"
            label="Register"
            class="full-width"
            outline
            rounded
            type="submit"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import useAuthUser from "src/composable/UseAuthUser";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "RegisterPage",

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
          path: "/email-confirmation",
          query: { email: form.value.email },
        });
      } catch (error) {
        alert(error.message);
      }
    };

    return {
      form,
      handleRegister,
      isPwd: ref("false"),
    };
  },
});
</script>
