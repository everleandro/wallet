<template>
    <div>
        <div class="home-page">
            <home-header />
            <home-currency />
            <div class="transaction mt-8">
                <div class="d-flex align-baseline">
                    <h2>Recent Activity</h2>
                    <e-spacer />
                    <e-button class="see-all-from-md text-underline" text color="secondary">see all</e-button>
                </div>
                <app-transaction-list />
                <e-divider class="mb-3 mt-n2" />
                <e-button class="see-all-xs" text color="secondary" block outlined :append-icon="$icon.right">
                    see all
                </e-button>
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
const counter = useCounter();
</script>
<style lang="scss">
@use "drocket/mixin.scss";

.home-page {
    .transaction {
        .see-all {
            &-xs {
                display: block;

                @include mixin.from_md {
                    display: none;
                }

            }

            &-from-md {
                display: none;

                @include mixin.from_md {
                    display: block;
                }
            }
        }
    }
}
</style>