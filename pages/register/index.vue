<template>
    <div class="register-page pa-4">
        <div>
            <e-transition-expand>
                <app-message v-show="data.emailSended">
                    Hemos enviado un mensaje a su correo elctronico para verificar su cuenta, por favor verifique su
                    bandeja
                    de entrada
                </app-message>
            </e-transition-expand>
            <div class="register-header mb-8">
                <h1 class="text-center">Create your Wallet account</h1>
                <p class="text-center">Already have an account? <e-button class="text-underline" text color="secondary"
                        @click="$router.push('/')">Log in</e-button>
                </p>
            </div>
            <e-card class="pa-3">
                <div class="register-content">
                    <e-form ref="form" v-model="data.validForm" :disabled="data.emailSended" class="mb-3">
                        <e-textfield v-model="data.email" cols="24" placeholder="Email" :rules="[_email, _required]" />
                    </e-form>
                    <e-button :disabled="!data.validForm || data.emailSended" :loading="data.loading" block
                        color="primary" @click="next">
                        Next
                    </e-button>
                </div>
            </e-card>
            <p class="my-3 therms">By registering, you accept our
                <e-button class="text-underline px-1" text small>Terms of use</e-button>
                and
                <e-button class="text-underline px-1 ml-0" text small>Privacy Policy</e-button>
            </p>
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
    emailSended: false,
    loading: false
})

const next = async () => {
    const valid = await form.value?.validate();
    if (valid) {
        data.loading = true;
        setTimeout(() => {
            data.loading = false;
            data.emailSended = true;
        }, 1000)
    }
}
</script>
<style lang="scss">
.register-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .therms {
        line-height: normal;

        .e-btn {
            --btn-height: 1.5rem
        }
    }

    .sign-up {
        text-decoration: underline;
    }

    .e-card {
        flex-direction: column;

        .register-header {
            text-align: center;

            h1 {
                font-size: 2rem;
            }
        }

        .register-content {
            margin-top: 1rem;
        }
    }
}
</style>