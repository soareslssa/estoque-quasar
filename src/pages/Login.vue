<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleLogin">
      <p class="col-12 text-h5 text-center">Login</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
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
            icon="login"
            label="Login"
            class="full-width"
            outline
            rounded
            type="submit"
          />
          <q-btn
            color="primary"
            label="Register"
            class="full-width"
            flat
            rounded
            to="/register"
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
import { useQuasar } from "quasar";

export default defineComponent({
  name: "LoginPage",

  setup() {
    const router = useRouter();
    const { login } = useAuthUser();
    const $q = useQuasar();

    const form = ref({
      email: "",
      password: "",
    });

    const handleLogin = async () => {
      try {
        await login(form.value);
        router.push({ path: "me" });
      } catch (error) {
        $q.notify({
          message: error.message,
          type: "warning",
        });
      }
    };

    return { form, handleLogin, isPwd: ref("false") };
  },
});
</script>
