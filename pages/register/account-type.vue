<template>
    <div class="account-type-page">
        <div>
            <div class="account-type-page__header mb-8">
                <h1 class="text-center mb-3">What kind of account would you like to open today?</h1>
                <p class="text-center">You can add another account later on, too.
                </p>
            </div>
            <div class="account-type-page__card-container d-flex justify-center">
                <div class="pa-3">
                    <register-account-type-card :type="AccountType.PERSONAL" />
                </div>
                <div class="pa-3">
                    <register-account-type-card :type="AccountType.BUSINESS" />
                </div>
            </div>
            <p class="mb-3 mt-6 therms text-center">You must use Wise in line with our
                <e-button class="text-underline px-1 ml-0" text small>Acceptable Use Policy</e-button>.
                You cannot use a personal account for business purposes.
            </p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { AccountType } from "@/components/register/account-type-card.vue";
onMounted(() => {
    console.log("AccountType", AccountType.BUSINESS);
})
</script>
<style lang="scss">
.account-type-page {
    max-width: 600px;
    margin: auto;

    .therms {
        line-height: normal;

        .e-btn {
            --btn-height: 1.5rem
        }
    }

    &__header {
        text-align: center;

        p {
            line-height: normal;
            font-size: large;
        }
    }

    .sign-up {
        text-decoration: underline;
    }
}
</style>