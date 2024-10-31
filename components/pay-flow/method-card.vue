<template>
    <div class="payment-method">
        <e-list color="secondary">
            <e-list-item :prepend-icon="icon" color="secondary" large :title="title">
                <template #append>
                    <e-button v-if="modelValue" x-small color="primary" @click="change">
                        change
                    </e-button>
                    <e-button v-else small color="primary" :icon="$icon.plus" @click="change" />
                </template>
            </e-list-item>
        </e-list>
    </div>
</template>

<script lang="ts" setup>
import type { PaymentMethod } from "~/types";
const { $icon } = useNuxtApp()
export interface Props {
    modelValue?: PaymentMethod,
}

const props = defineProps<Props>()

const emit = defineEmits<{
    (e: 'change', value: boolean): void,
    (e: 'update:modelValue', value: PaymentMethod): void,
}>()


const model = computed({
    get: () => props.modelValue,
    set: (value: PaymentMethod) => emit('update:modelValue', value)
})

const change = () => {
    emit('change', true)
}
const title = computed(() => model.value ? model.value.text : 'Choose payment method')
const icon = computed(() => model.value ? model.value.icon : $icon.card)

</script>
<style lang="scss">
.payment-method {
    .e-list-item {
        &:before {
            opacity: .1;
        }

        border-radius: 5px;
        overflow: hidden;
    }
}
</style>