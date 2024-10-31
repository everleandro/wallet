<template>
    <e-list color="primary" class="transaction-list">
        <template v-for="i in 4" :key="i">
            <e-list-item :title="'Item' + i" subtitle="list example subtitle" :x-large="$device.isDesktopOrTablet"
                :value="i" :prepend-icon="$icon.transferAndPay">
                <template #append>
                    <span class="transaction-list__amount">-$100.00</span>
                    <e-icon :icon="$icon.right" class="ml-3" />
                </template>
            </e-list-item>
            <e-divider v-if="i !== 4" />
        </template>
    </e-list>
</template>
<style lang="scss">
.transaction-list {
    .e-list-item {
        padding: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__prepend {
            i {
                overflow: visible;

                // &::after {
                //     content: "";
                //     background-color: currentColor;
                //     position: absolute;
                //     top: 0;
                //     left: 0;
                //     bottom: 0;
                //     right: 0;
                //     opacity: .2;
                //     border-radius: 9999px;
                //     width: 140%;
                //     height: 140%;
                //     margin-top: -20%;
                //     margin-left: -20%;
                // }
            }
        }
    }

    &__amount {
        font-size: 1rem;
        font-weight: 700;
        color: var(--red);
    }
}
</style>