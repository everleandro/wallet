<template>
    <div class="otp-dialog__wrapper">
        <e-dialog v-model="model" fullscreen persistent>
            <div class="otp-dialog">
                <div class="d-flex">
                    <h1 class="mb-10">Verification OTP</h1>
                    <div class="otp-dialog__input-container mb-3">
                        <e-form ref="form" v-model="data.validForm" :disabled="data.loading" outlined>
                            <e-textfield v-model="data.code1" input-align="center" type="number" :rules="[_required]" />
                            <e-textfield v-model="data.code2" input-align="center" type="number" :rules="[_required]" />
                            <e-textfield v-model="data.code3" input-align="center" type="number" :rules="[_required]" />
                            <e-textfield v-model="data.code4" input-align="center" type="number" :rules="[_required]" />
                        </e-form>
                    </div>
                    <span class="mb-10">A code has been sent to your phone</span>
                    <e-button :loading="data.loading" block color="primary" class="mt-4" @click="next">
                        Continue
                    </e-button>
                </div>
            </div>
        </e-dialog>
    </div>
</template>
<script lang="ts" setup>
import type { Form } from "drocket";
const form = ref<Form>()
const router = useRouter();
const { _required } = useRules();

const props = defineProps<{
    modelValue: boolean
}>()

const data = reactive({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    validForm: false,
    loading: false
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

const model = computed({
    get: () => props.modelValue,
    set: (value: boolean) => emit('update:modelValue', value)
})

const next = async () => {
    const valid = await form.value?.validate();
    if (valid) {
        data.loading = true;
        setTimeout(() => {
            data.loading = false;
            router.push('/home')
        }, 1000)
    }
}

</script>
<style lang="scss">
.otp-dialog__wrapper {
    .e-dialog--fullscreen {
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 100vh;
    }
}

.otp-dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    // margin: auto;

    &>.d-flex {
        flex-direction: column;
        align-items: center;
    }

    &__input-container {
        margin: 0px 0px 12px;
        display: flex;
        justify-content: center;

        input {
            font-size: 24px;
        }
    }
}
</style>