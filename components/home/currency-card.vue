<template>
    <e-card :class="cardClasses">
        <div v-if="add" class="currency-card__container">
            <div class="d-flex align-center">
                <e-icon :icon="$icon.plus" class="mr-2" />
            </div>
            <e-spacer />
            <span class="mt-2 currency-card__message">
                add new currency
            </span>
        </div>
        <div v-else class="currency-card__container">
            <div class="d-flex align-center">
                <e-icon :icon="$icon.bank" class="mr-2" />
                <span class="currency-card__type">Eur</span>
            </div>
            <e-spacer />
            <span class="mt-2 currency-card__amount">100.00</span>
        </div>
    </e-card>
</template>
<script lang="ts" setup>

const currencyCardProps = defineProps<{
    add?: boolean;
}>();

const cardClasses = computed(() => {
    const defaultClasses = ['currency-card pa-4']
    if (currencyCardProps.add) {
        defaultClasses.push('currency-card--new')
    } else {
        defaultClasses.push('gray-light')
    }
    return defaultClasses
});

</script>
<style lang="scss">
@use "drocket/mixin.scss";

.currency-card {

    height: 100%;
    cursor: pointer;
    width: 150px;
    height: 150px;

    &__container {
        flex-direction: column;
        display: flex;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: var(--gray-light);
        opacity: 0;
        transition: opacity .2s;
    }

    &:hover {
        &::before {
            opacity: .3;
        }
    }

    &:active {
        &::before {
            opacity: .6;
        }
    }

    &__type {
        font-size: 1.2rem;
        font-weight: 500;
        text-transform: uppercase;
    }

    &__amount {
        font-size: 1.5rem;
        font-weight: 00;
    }

    &--new {
        position: relative;
        box-shadow: none;
        border: 2px dashed var(--gray-light);

        &::before {
            opacity: .3;
        }

    }
}
</style>