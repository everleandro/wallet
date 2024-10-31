<template>
    <div>
        <e-list :model-value="data.paymentMethod" color="secondary" @update:modelValue="setPaymentMethod">
            <e-list-item v-for="method in PAYMENT_METHOD_LIST" :is-active="method.id === data.paymentMethod"
                :key="method.id" :value="method.id" :prepend-icon="method.icon" large :title="method.text"
                :subtitle="method.message" :color="method.id === data.paymentMethod ? 'primary' : 'secondary'">
                <template #append>
                    <div class="d-flex align-center">
                        <span class="mr-3">{{ method.fee }}</span>
                        <e-radio :is-active="method.id === data.paymentMethod" readonly
                            :color="method.id === data.paymentMethod ? 'primary' : 'secondary'" />
                    </div>
                </template>
            </e-list-item>
        </e-list>
    </div>
</template>
<script lang="ts" setup>
import type { PaymentMethod } from "~/types";
import { PAYMENT_METHOD_LIST } from "~/constants/payment-method";

export interface Props {
    modelValue: PaymentMethod | undefined,
}
const props = defineProps<Props>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: PaymentMethod | undefined): void,
}>()
const paymentMethod = ref(1)
const data = reactive({
    paymentMethod: 1
})

const model = computed({
    get: () => props.modelValue,
    set: (value: PaymentMethod | undefined) => emit('update:modelValue', value)
})
const setPaymentMethod = (evt: number) => {
    if (evt === data.paymentMethod) return;
    data.paymentMethod = evt;
    model.value = PAYMENT_METHOD_LIST.find((method) => method.id === evt)
}

</script>