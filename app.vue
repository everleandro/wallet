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
    if (route.path === '/' || route.path === '/register') {
        return 'empty'
    }
    return $device.isMobile ? 'mobile' : 'default'
})
</script>