<template>
    <div class="add-money__content dialog-scrollable">
        <e-dialog v-model="model" max-width="500" persistent>
            <div class="add-money__container dialog-scrollable__wrapper">
                <div class="dialog-scrollable__header">
                    <e-bar class="mb-0" depressed>
                        <h1 class="ml-4">Add Money</h1>
                        <e-spacer />
                        <e-button :icon="$icon.close" text small color="secondary" @click="close" />
                    </e-bar>
                </div>
                <e-divider />
                <div class="add-money__body pa-4 dialog-scrollable__body">
                    <div class="mb-3">
                        <span class="secondary--text">Amount to add to Wallet</span>
                    </div>
                    <e-form ref="form" v-model="data.formModel">
                        <e-textfield v-model="data.amount" type="number" placeholder="Amount"
                            :rules="[_required, _more_than_0]" input-align="center" />
                        <app-select-currency />
                    </e-form>
                    <div class="mb-3 mt-6">
                        <span class="secondary--text">Paying width</span>
                    </div>
                    <div class="payment-method">
                        <e-list color="primary">
                            <e-list-item :prepend-icon="$icon.card" color="primary" large title="Debit Card">
                                <template #append>
                                    <e-button small color="primary" :icon="$icon.plus" />
                                </template>
                            </e-list-item>
                        </e-list>
                    </div>
                    <app-payment-details class="mt-3" />
                </div>
                <div class="dialog-scrollable__footer">
                    <e-button color="primary" :loading="data.loading" block :disabled="!data.formModel" @click="next">
                        Continue
                    </e-button>
                </div>
            </div>
        </e-dialog>
    </div>
</template>
<script lang="ts" setup>
import type { Form } from "drocket";

export interface Props {
    modelValue: boolean,
}
const { _required, _more_than_0 } = useRules();
const form = ref<Form>()
const props = defineProps<{
    modelValue: boolean
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

const data = reactive({
    amount: 0,
    loading: false,
    currency: 1,
    formModel: true,
})

const model = computed({
    get: () => props.modelValue,
    set: (value: boolean) => emit('update:modelValue', value)
})

const next = async () => {
    const valid = await form.value?.validate();
    console.log(valid)
    if (valid) {
        data.loading = true;
        setTimeout(() => {
            data.loading = false;
            close();
        }, 1000)
    }
}
const close = () => {
    model.value = false;
}

</script>
<style lang="scss">
.add-money__content {
    .e-dialog.e-dialog--active {
        height: 100%;
        flex-direction: column;

        .e-card {
            flex-direction: column;
        }

        .add-money {
            &__container {
                display: flex;
                flex-direction: column;
            }
        }
    }

    .payment-method {
        .e-list-item {
            &:before {
                opacity: .1;
            }

            border-radius: 5px;
            overflow: hidden;

            // .e-btn:before {
            //     opacity: .1;
            // }
        }
    }
}
</style>