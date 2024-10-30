<template>
    <e-card v-ripple class="account-type-card" @click="goTo">
        <div class="account-type-card__container secondary--text">
            <div class="account-type__header">
                <e-icon :icon="icon" />
            </div>
            <div class="account-type__title px-3">
                <h3>Personal Account</h3>
            </div>
            <div class="account-type__message px-3">
                <p>
                    {{ message }}
                </p>
            </div>
        </div>
    </e-card>
</template>
<script lang="ts">
export enum AccountType {
    PERSONAL = "personal",
    BUSINESS = "business"
}
</script>
<script lang="ts" setup>

const { $icon } = useNuxtApp()
const router = useRouter()
const props = defineProps<{
    type: AccountType
}>()

const icon = computed(() => {
    return props.type === AccountType.PERSONAL ? $icon.accountPersonal : $icon.accountBusiness
})
const message = computed(() => {
    return props.type === AccountType.PERSONAL ? "Send, spend, and receive around the world for less." : "Get paid in multiple currencies with no fees."
})

const goTo = () => {
    const query = props.type === AccountType.PERSONAL ? "personal" : "business"
    router.push({ path: '/register/country', query: { type: query } })
}

</script>
<style lang="scss">
@use "drocket/mixin.scss";

.account-type-card {
    color: var(--primary);
    background-color: transparent;
    position: relative;
    max-width: 250px;
    height: 100%;

    &__account-type-card {
        display: flex;
        flex-direction: column;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        opacity: 0.1;
        background-color: var(--primary);
    }

    .account-type {
        &__header {
            display: flex;
            justify-content: center;
            padding: 1rem;
            background-color: var(--primary-light);
            border-radius: 1rem 1rem 0 0;

            .e-icon {
                font-size: 3rem;
                color: var(--secondary);
            }
        }

        &__title {
            text-align: center;

            h3 {
                font-size: large;

                @include mixin.from_md {
                    font-size: 1.5rem;
                }

                margin: 1rem 0;
            }
        }

        &__message {
            text-align: center;

            p {
                font-size: 1rem;
                line-height: normal;
                color: var(--text-secondary);
            }
        }
    }
}
</style>