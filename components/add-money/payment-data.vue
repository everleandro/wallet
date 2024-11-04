<template>
    <div>
        <div class="mb-3">
            <span class="secondary--text">Amount to add to Wallet</span>
        </div>
        <e-form ref="form" v-model="data.formModel">
            <e-textfield v-model="data.amount" type="number" placeholder="Amount" :rules="[_required, _more_than_0]"
                input-align="center" />
            <app-select-currency />
        </e-form>
        <div class="mb-3 mt-6">
            <span class="secondary--text">Paying width</span>
        </div>
        <pay-flow-method-card v-model="model.paymentMethod" @change="change" />
        <pay-flow-details class="mt-3" />
    </div>
</template>
<script lang="ts" setup>
import type { PaymentMethod } from "~/types";
import type { Form } from "drocket";
const { _required, _more_than_0 } = useRules();

export interface Props {
    modelValue: {
        paymentMethod: PaymentMethod | undefined,
        amount: number | string,
        currencyTo: number | string,
        currencyFrom: number | string,
    }
}

const form = ref<Form>()
const props = defineProps<Props>()

const emit = defineEmits<{
    (e: 'change-payment-method', value: boolean): void,
    (e: 'update:modelValue', value: Record<string, string | PaymentMethod>): void,
}>()

const data = reactive({
    amount: 0,
    currency: 1,
    formModel: true,
})

const model = computed({
    get: () => props.modelValue,
    set: (value: Record<string, string | PaymentMethod>) => emit('update:modelValue', value)
})

const change = () => {
    emit('change-payment-method', true)
}

</script>