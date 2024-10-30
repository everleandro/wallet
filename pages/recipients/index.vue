<template>
    <div>
        <div class="recipients-page">
            <div class="recipients-page__header d-flex align-center ">
                <h1>Recipients</h1>
                <e-spacer />
                <e-textfield :prepend-icon="$icon.search" placeholder="Name, ermail, phone" />
            </div>
            <div class="recipents-list">
                <e-list>
                    <e-list-item v-for="recipient in 16" :key="recipient" :title="'name'" subtitle="recipient.email"
                        x-large :append-icon="$icon.right" to="/recipients/1">
                        <template #prepend>
                            <e-avatar :src="user" size="65" />
                        </template>
                    </e-list-item>
                </e-list>
            </div>
            <e-button class="new-recip" color="secondary" x-large>
                <e-icon :icon="$icon.plus" />
            </e-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import user from "assets/images/user.png";
</script>
<style lang="scss">
@use "drocket/mixin.scss";

.recipients-page {
    &__header {
        flex-wrap: wrap;
        margin: 12px 0;

        h1 {
            @include mixin.xs {
                margin-bottom: 12px;
            }
        }

        @include mixin.from_md {
            margin: 32px 0;
        }
    }

    .recipents-list {
        padding-bottom: 40px;
    }

    .e-list {
        --list-item-prepend-width: 75px;

        &-item {
            margin-bottom: 24px;

            &-title {
                font-size: 1.25rem;
                text-transform: capitalize;
            }
        }
    }

    .new-recip {
        position: fixed;
        right: 20px;
        border-radius: 9999px;
        padding: 1rem;
        min-width: unset;
        bottom: 20px;

        @include mixin.xs {
            bottom: 70px;
        }
    }
}
</style>