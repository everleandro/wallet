<template>
    <e-card class="payment-details pa-3">
        <div class="payment-details__header">
            <h2 class="secondary--text">
                Currency to pay
            </h2>
            <e-spacer />
            <app-select-currency />
        </div>
        <div class="payment-details__content">
            <e-divider />
            <div class="payment-details__table">
                <div class="payment-row">
                    <div class="payment-col">
                        Rate
                    </div>
                    <div class="payment-col">
                        1 Eur = 1.0868 USD
                    </div>
                </div>
                <div class="payment-row">
                    <div class="payment-col">
                        Amount we will convert
                    </div>
                    <div class="payment-col">
                        60.73 Eur
                    </div>
                </div>
                <div class="payment-row">
                    <div class="payment-col">
                        Card Fee
                    </div>
                    <div class="payment-col">
                        3.23 Eur
                    </div>
                </div>
                <div class="payment-row">
                    <div class="payment-col">
                        Our Fee
                    </div>
                    <div class="payment-col">
                        1.23 Eur
                    </div>
                </div>
                <div class="payment-row">
                    <div class="payment-col">
                        Total Fees
                    </div>
                    <div class="payment-col">
                        4.46 Eur
                    </div>
                </div>
                <e-divider />
                <div class="payment-row">
                    <div class="payment-col">
                        Total you will pay
                    </div>
                    <div class="payment-col">
                        65.19 Eur
                    </div>
                </div>
            </div>
        </div>
        <div class="payment-footer">
        </div>
    </e-card>
</template>
<style lang="scss">
.payment-details {
    &__header {
        display: flex;
        align-items: center;

        h2 {
            font-size: 1.2rem;
            font-weight: 400;
        }
    }

    .payment {
        &-row {
            display: flex;
            justify-content: space-between;
            padding: 1rem 0;
            border-bottom: 1px solid var(--border-color);
        }

        &-col {
            font-size: 1rem;
            font-weight: 400;
        }
    }
}
</style>