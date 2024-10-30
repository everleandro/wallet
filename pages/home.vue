<template>
    <div>
        <div class="home-page">
            <home-header />
            <home-currency />
            <div class="transaction mt-8">
                <div class="d-flex align-baseline">
                    <h2>Transactions</h2>
                    <e-spacer />
                    <e-button class="see-all" text color="secondary">see all</e-button>
                </div>
                <app-transaction-list />
            </div>
            <div class="contacts mt-8">
                <div class="mb-3">
                    <h2>Recent Contacts</h2>
                </div>
                <app-contact-list />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss">
.home-page {
    .transaction {
        .see-all {
            text-decoration: underline;
        }
    }
}
</style>