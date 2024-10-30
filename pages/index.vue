<template>
    <div class="index-page">
        <div>
            <div class="index-header mb-8">
                <h1 class="text-center">Welcome back</h1>
                <p class="text-center">new to Wallet? <e-button class="text-underline" text
                        @click="$router.push('/register')">Sign up</e-button></p>
            </div>
            <e-card class="pa-3 ma-3">
                <div class="index-content">
                    <e-form ref="form" v-model="data.validForm" class="mb-3">
                        <e-textfield v-model="data.email" cols="24" placeholder="Email" :rules="[_email, _required]" />
                        <e-textfield v-model="data.password" type="password" cols="24" :rules="[_required]" />
                    </e-form>
                    <e-button :disabled="!data.validForm" :loading="data.loading" block color="primary"
                        @click="login">Login</e-button>
                </div>
            </e-card>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Form } from "drocket";
const router = useRouter()
definePageMeta({
    layout: false
})
const { _required, _email } = useRules();
const form = ref<Form>()

const data = reactive({
    email: "",
    password: "",
    validForm: false,
    loading: false
})

const login = async () => {
    const valid = await form.value?.validate();
    if (valid) {
        data.loading = true;
        setTimeout(() => {
            router.push({ path: "/home" })
            data.loading = false;
        }, 1000)

    }
}
</script>
<style lang="scss">
.index-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .sign-up {
        text-decoration: underline;
    }

    .e-card {
        flex-direction: column;

        .index-header {
            text-align: center;

            h1 {
                font-size: 2rem;
            }
        }

        .index-content {
            margin-top: 1rem;
        }
    }
}
</style>