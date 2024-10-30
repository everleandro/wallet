<template>
    <div class="availability-page">
        <div>
            <div class="availability-page__header mb-8">
                <h1 class="text-center mb-3">What you can do with Wallet in the US</h1>
                <p class="text-center">How you can use Wallet depends on your country or region.</p>
            </div>
            <div class="availability-page__card-container d-flex justify-center">
                <h3>You can</h3>
                <e-list>
                    <e-list-item v-for="item in 4" :key="item" :title="'Receive money'"
                        subtitle="Get account details in 4 currencies and get paid from abroad without fees"
                        :small="$device.isMobile">
                        <template #prepend>
                            <e-icon :icon="$icon.shieldCheck" color="success" />
                        </template>
                    </e-list-item>
                </e-list>
                <e-button :loading="data.loading" block color="primary" class="mt-4" @click="next">
                    Continue
                </e-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { Form } from "drocket";
const router = useRouter()
const form = ref<Form>()

const data = reactive({
    country: "",
    loading: false
})

const next = async () => {
    data.loading = true;
    setTimeout(() => {
        data.loading = false;
        router.push('/register/second-factor')
    }, 1000)
}
</script>
<style lang="scss">
.availability-page {
    max-width: 600px;
    margin: auto;

    &__card-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    &__header {
        p {
            line-height: normal;
        }
    }

    .e-list-item {
        &-subtitle {
            white-space: break-spaces;
        }
    }
}
</style>