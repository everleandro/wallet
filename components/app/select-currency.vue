<template>
    <e-select v-model="data.currency" v-model:search="data.searchCurrency" autocomplete :items="filteredCurrency"
        :rules="[_required]">
        <template #selection="{ selection, attrs }">
            <e-chip v-bind="attrs" :prepend-icon="selection.icon">
                {{ selection?.text }}
            </e-chip>
        </template>
        <template #item="{ attrs, item }">
            <e-list-item v-bind="attrs" :prepend-icon="item.icon">
                {{ item.text }}
            </e-list-item>
        </template>
    </e-select>
</template>
<script lang="ts" setup>
const { $icon } = useNuxtApp();
const availableCurrency = [
    { text: 'USD', value: 1, icon: $icon.usd },
    { text: 'EUR', value: 2, icon: $icon.eur },
    { text: 'RUB', value: 3, icon: $icon.rub },
    { text: 'BIT', value: 4, icon: $icon.btc },
];
const filteredCurrency = ref([...availableCurrency]);

const data = reactive({
    searchCurrency: "",
    searchCurrencyTimmer: 0,
    currency: 1,
})
const { _required } = useRules();

watch(() => data.searchCurrency, (value: string) => {
    if (value) {
        if (data.searchCurrencyTimmer) clearTimeout(data.searchCurrencyTimmer)
        data.searchCurrencyTimmer = window?.setTimeout(() => {
            filteredCurrency.value = availableCurrency.filter(
                ({ text }) => text.normalize('NFD').replace(/[\u0300-\u036F]/g, '').toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1
            )
        }, 100)
    } else {
        filteredCurrency.value = [...availableCurrency]
    }
})

</script>