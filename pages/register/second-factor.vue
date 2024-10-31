<template>
    <div class="country-page">
        <app-otp-dialog v-model="data.dialogOtpModel" />
        <div>
            <div class="country-page__header mb-8">
                <h1 class="text-center mb-3">Verify your phone number with a code</h1>
                <p class="text-center">It helps us keep your account secure. </p>
            </div>
            <div class="country-page__card-container d-flex justify-center">
                <e-card class="pa-3 ma-3">
                    <span class="mb-2 secondary--text">Your phone number</span>
                    <div class="d-block">
                        <e-form ref="form" v-model="data.validForm" :disabled="data.loading" class="mb-3">
                            <e-select v-model="data.code" :items="codes" :rules="[_required]" cols="7" sm="5">
                                <template #selection="{ selection }">
                                    {{ selection.code }}
                                </template>
                            </e-select>
                            <e-textfield v-model="data.number" type="number" :rules="[_required]" cols="17" sm="19" />
                        </e-form>
                    </div>
                    <e-button :disabled="!data.validForm" :loading="data.loading" block color="primary" @click="next">
                        Send Verification code
                    </e-button>
                </e-card>
            </div>
            <p class="mb-3 mt-6 therms text-center">
                By verifying a phone number you consent to receiving security notifications via SMS from us, you will
                receive one message per login attempt or transaction. You can opt-out at any time by changing your
                authentication method. Message and data rates may apply.
            </p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { Form } from "drocket";
definePageMeta({
    layout: 'empty',
})
const { _required } = useRules();
const form = ref<Form>()

const data = reactive({
    code: "1",
    number: "",
    validForm: false,
    dialogOtpModel: false,
    loading: false
})

const codes = [{ text: '+1 United States', code: "+1", value: 1 }, { text: '+44 United Kingdom', code: "+44", value: 44 }]

const next = async () => {
    const valid = await form.value?.validate();
    if (valid) {
        data.loading = true;
        setTimeout(() => {
            data.loading = false;
            data.dialogOtpModel = true;
        }, 1000)
    }
}
</script>
<style lang="scss">
.country-page {
    max-width: 600px;
    margin: auto;

    &__card-container {
        display: flex;
        justify-content: center;
        flex-direction: column;

        .e-card {
            flex-direction: column;
        }

        .e-select .e-menu {
            width: 200px;
        }
    }
}
</style>