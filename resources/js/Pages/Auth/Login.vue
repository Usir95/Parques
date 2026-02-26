<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore
import AuthenticationCardLogo from "@/Components/AuthenticationCardLogo.vue";
// @ts-ignore
import FormValidate from "@/Components/FormValidate.vue";
// @ts-ignore
import MdEmailInput from "@/Components/MaterialDesign/MdEmailInput.vue";
// @ts-ignore
import MdPasswordInput from "@/Components/MaterialDesign/MdPasswordInput.vue";
// @ts-ignore
import VButton from "@/Components/Vuetify/VButton.vue";
// @ts-ignore
import Loader from "@/Components/Loader.vue";

import { isLoading } from "@/loading";
import { Head, Link, useForm } from "@inertiajs/vue3";

const formRef = ref();

defineProps<{
  canResetPassword: boolean;
  status?: string;
}>();

const form = useForm({
  email: "",
  password: "",
  remember: false,
});

const submit = () => {
    form.transform((data) => ({
    ...data,
    remember: form.remember ? "on" : "",
    }))
    .post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <Head title="Iniciar sesión" />

    <section class="min-h-screen text-white bg-gradient-to-b from-app-primary via-[#076091] to-[#031826]">
        <div class="flex items-center justify-center min-h-screen px-4 py-10">
            <div class="w-full max-w-sm sm:max-w-md">
                <div class="px-6 py-8 border shadow-xl rounded-xl bg-black/20 backdrop-blur-md">
                <div class="flex justify-center">
                    <AuthenticationCardLogo />
                </div>

                <div class="my-4 text-xl font-bold text-center">
                    Iniciar sesión
                </div>

                <div
                    v-if="status"
                    class="px-4 py-2 mt-4 text-sm border rounded-lg border-emerald-400/40 bg-emerald-500/10 text-emerald-100"
                >
                    {{ status }}
                </div>

                <FormValidate ref="formRef" class="mt-6" @submit="submit">
                    <div class="space-y-4">
                    <MdEmailInput
                        v-model="form.email"
                        name="email"
                        label="Correo electrónico"
                        :required="true"
                        :externalError="form.errors.email"
                    />

                    <MdPasswordInput
                        v-model="form.password"
                        name="password"
                        label="Contraseña"
                        :required="true"
                        :externalError="form.errors.password"
                        :hideToggle="true"
                    />
                    </div>

                    <div class="flex items-center justify-between mt-3">
                    <Link
                        v-if="canResetPassword"
                        :href="route('password.request')"
                        class="text-sm underline text-white/80 hover:text-white underline-offset-4"
                    >
                        ¿Olvidaste tu contraseña?
                    </Link>
                    </div>

                    <VButton
                    type="submit"
                    class="w-full mt-6 font-bold rounded-full"
                    color="#B20026"
                    :disabled="form.processing"
                    >
                    Ingresar
                    </VButton>
                </FormValidate>
                </div>
            </div>

            <Loader :overlay="isLoading" />
        </div>
    </section>
</template>
