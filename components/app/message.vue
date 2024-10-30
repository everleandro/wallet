<template>
    <div :class="['app-message my-2', color + '--text']">
        <div class="app-message__prepend">
            <e-icon :icon="icon" />
        </div>
        <div class="app-message__content">
            <p class="mb-0">
                <slot>
                    {{ message }}
                </slot>
            </p>
        </div>
        <div class="app-message__append"></div>
        <!-- <e-button :icon="$icon.close" /> -->
    </div>
</template>
<script lang="ts">
export enum MessageType {
    warning,
    success
}
export interface Props {
    type?: MessageType;
    message?: string;
}
</script>
<script lang="ts" setup>


const { $icon } = useNuxtApp();

const props = withDefaults(defineProps<Props>(), { type: MessageType.warning })

const icon = computed(() => {
    switch (props.type) {
        case MessageType.warning:
            return $icon.warning;
        case MessageType.success:
            return $icon.success;
        default:
            return $icon.info;
    }
})

const color = computed(() => {
    switch (props.type) {
        case MessageType.warning:
            return 'warning';
        case MessageType.success:
            return 'success';
        default:
            return 'info';
    }
})
</script>
<style lang="scss">
.app-message {
    display: flex;
    align-items: center;
    padding: 12px;
    border-radius: 8px;
    position: relative;
    border: 1px solid currentColor;

    .app-message__prepend {
        margin-right: 12px;
    }

    .app-message__content {
        flex: 1;

        p {
            line-height: normal;
            font-size: small;
        }
    }

    .app-message__append {
        margin-left: 12px;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.1;
        background-color: currentColor;
    }
}
</style>