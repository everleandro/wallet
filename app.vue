<template>
    <NuxtLayout :name="layout">
        <NuxtPage />
    </NuxtLayout>
    <!-- <NuxtLayout :name="'default'">
            <NuxtPage />
        </NuxtLayout> -->
    <!-- <NuxtLayout :name="'mobile'">
            <NuxtPage />
        </NuxtLayout> -->
</template>
<script lang="ts" setup>
const { $device } = useNuxtApp()
const route = useRoute()

const layout = computed(() => {
    if (checkStartWith(route.path, '/register') || route.path === '/') {
        return 'empty'
    }
    return $device.isMobile ? 'mobile' : 'default'
})
const checkStartWith = (wordToCheck: string, startWith: string): boolean => {
    return new RegExp(`^${startWith}`).test(wordToCheck)
}
</script>