<template>
    <div class="add-money__content dialog-scrollable">
        <e-dialog v-model="model" max-width="500" persistent :fullscreen="$device.isMobile">
            <div class="add-money__container dialog-scrollable__wrapper">
                <div class="dialog-scrollable__header">
                    <e-bar :class="{ 'mb-0': true }" :color="$device.isMobile ? 'primary' : 'white'"
                        :depressed="$device.isDesktopOrTablet">
                        <!-- <e-button v-show="data.stepperModel !== STEP.PAYMENT_INFO" :icon="$icon.left" text small
                            color="secondary" @click="setStep(1)" /> -->
                        <h1 class="ml-4">{{ dialogHeaderText }}</h1>
                        <e-spacer />
                        <e-button v-show="data.stepperModel !== STEP.CHOSSE_PAYMENT_METHOD" :icon="$icon.close" text
                            small :color="$device.isMobile ? 'white' : 'secondary'" @click="close" />
                    </e-bar>
                </div>
                <e-divider />
                <div class="add-money__body pa-4 dialog-scrollable__body">
                    <e-window v-model="data.stepperModel">
                        <e-window-item :value="STEP.PAYMENT_INFO">
                            <add-money-payment-data v-model="paymentInfo"
                                @change-payment-method="setStep(STEP.CHOSSE_PAYMENT_METHOD)" />
                        </e-window-item>
                        <e-window-item :value="STEP.CHOSSE_PAYMENT_METHOD">
                            <pay-flow-available-methods v-model="paymentInfo.paymentMethod" />
                        </e-window-item>
                        <e-window-item :value="STEP.PAYMENT_METHOD_THERMS">
                            <pay-flow-method-therms :payment-method="paymentInfo.paymentMethod"
                                @accept="data.accept = $event" />
                        </e-window-item>
                        <e-window-item :value="STEP.PROOF_DOCUMENT">
                            <pay-flow-proof-document @file="paymentInfo.file = $event" />
                        </e-window-item>
                    </e-window>
                </div>
                <div class="dialog-scrollable__footer add-money__footer">
                    <e-button color="primary" class="next-button" :loading="data.loading" :disabled="nextDisabled" block
                        @click="next">
                        Continue
                    </e-button>
                </div>
            </div>
        </e-dialog>
    </div>
</template>
<script lang="ts" setup>
import type { PaymentMethod } from '~/types';


export interface Props {
    modelValue: boolean,
}
const enum STEP {
    PAYMENT_INFO,
    CHOSSE_PAYMENT_METHOD,
    PAYMENT_METHOD_THERMS,
    PROOF_DOCUMENT,
}

const props = defineProps<{
    modelValue: boolean
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()
const paymentInfo = reactive({
    paymentMethod: <PaymentMethod | undefined>undefined,
    amount: 0,
    currencyTo: 0,
    currencyFrom: 0,
    file: <Blob | undefined>undefined
})

const data = reactive({
    loading: false,
    accept: false,
    stepperModel: STEP.PAYMENT_INFO
})

const model = computed({
    get: () => props.modelValue,
    set: (value: boolean) => emit('update:modelValue', value)
})

const dialogHeaderText = computed(() => {
    switch (data.stepperModel) {
        case STEP.PAYMENT_INFO:
            return 'Add Money';
        case STEP.CHOSSE_PAYMENT_METHOD:
            return 'Payment Method';
        case STEP.PAYMENT_METHOD_THERMS:
            return 'Payment Method Therms';
        case STEP.PROOF_DOCUMENT:
            return 'Proof Document';
    }
})
const nextDisabled = computed(() => {
    switch (data.stepperModel) {
        case STEP.PAYMENT_INFO:
            return !paymentInfo.paymentMethod;
        case STEP.CHOSSE_PAYMENT_METHOD:
            return !paymentInfo.paymentMethod;
        case STEP.PAYMENT_METHOD_THERMS:
            return !data.accept;
        case STEP.PROOF_DOCUMENT:
            return !paymentInfo.file;
    }

    return !paymentInfo.paymentMethod
})

const next = async () => {
    switch (data.stepperModel) {
        case STEP.PAYMENT_INFO:
            setStep(STEP.PROOF_DOCUMENT);
            break;
        case STEP.CHOSSE_PAYMENT_METHOD:
            setStep(STEP.PAYMENT_METHOD_THERMS);
            break;
        case STEP.PAYMENT_METHOD_THERMS:
            setStep(STEP.PAYMENT_INFO);
            break;
        case STEP.PROOF_DOCUMENT:
            data.loading = true;
            setTimeout(() => {
                data.loading = false;
                close();
            }, 1000)
            break;
    }

}
const close = () => {
    model.value = false;
}
const setStep = (step: number): void => {
    data.stepperModel = step;
}

</script>
<style lang="scss">
@use "drocket/mixin.scss";

.add-money__content {
    .e-dialog.e-dialog--active {
        height: 100%;
        flex-direction: column;

        @include mixin.xs {
            border-radius: 0;
        }

        // .e-card {
        //     flex-direction: column;
        // }

        .add-money {
            &__container {
                display: flex;
                flex-direction: column;
                padding-bottom: env(safe-area-inset-bottom, 0);
            }

            &__footer {
                .e-btn {
                    border-radius: 0;
                }
            }
        }
    }
}
</style>