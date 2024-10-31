<template>
    <e-card class="home-header-card mb-8">
        <add-money-dialog v-model="data.addModelDialog" />
        <div class="home-header-card__title pa-4">
            <h2>Balance Total:</h2>
            <e-spacer></e-spacer>
            <span class="home-header-card__total">21.59 USD <e-icon :icon="$icon.chart" /></span>
        </div>
        <e-divider />
        <div class="home-header-card__actions">
            <e-row>
                <e-col>
                    <e-button :prepend-icon="$icon.recharge" color="primary" block rounded :x-small="$device.isMobile"
                        @click="addMoney">Add money</e-button>
                </e-col>
                <e-col>
                    <e-button :prepend-icon="$icon.withdraw" rounded :x-small="$device.isMobile"
                        block>Extraer</e-button>
                </e-col>
                <e-col>
                    <e-button :prepend-icon="$icon.trade" rounded :x-small="$device.isMobile" block>Convertir
                    </e-button>
                </e-col>
            </e-row>
        </div>
    </e-card>
</template>
<script lang="ts" setup>
const data = reactive({
    addModelDialog: false
})
const addMoney = () => {
    data.addModelDialog = true
}
</script>
<style lang="scss">
@use "drocket/mixin.scss";

.home-header-card {
    color: var(--secondary);
    align-items: center;
    display: flex;
    flex-wrap: wrap;



    &__title {
        width: 100%;
        display: flex;
        align-items: baseline;
        flex-wrap: wrap;

        h2 {
            font-size: 1.5rem;
            margin-bottom: 10px;
            opacity: .6;
            margin-bottom: 0;
            font-weight: 500;

            @include mixin.xs {
                font-size: 1.2rem;
            }
        }

    }

    &__total {
        font-size: 2rem;
        font-weight: 700;

        @include mixin.xs {
            font-size: 1.8rem;
        }
    }

    &__actions {
        padding: 16px 4px;

        @include mixin.xs {
            width: 100%;
        }

        @include mixin.from_sm {
            padding: 16px;
        }

        .e-row {
            @include mixin.xs {
                margin: 0;
            }
        }

        .e-col {
            display: flex;
            justify-content: center;

            @include mixin.xs {
                padding: 4px;
            }
        }
    }
}
</style>