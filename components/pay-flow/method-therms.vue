<template>
    <div>
        {{ modelValue?.text }} therms and conditions here
    </div>
</template>
<script lang="ts" setup>
import type { PaymentMethod } from "~/types";

export interface Props {
    modelValue?: PaymentMethod,
}
const props = defineProps<Props>()
</script>