<template>
    <div class="country-page">
        <div>
            <div class="country-page__header mb-8">
                <h1 class="text-center mb-3">Where do you live most of the time?</h1>
                <p class="text-center">By law, we may need to ask for proof of your address.</p>
            </div>
            <div class="country-page__card-container d-flex justify-center">
                <e-card class="pa-3 ma-3">
                    <e-form ref="form" v-model="data.validForm" :disabled="data.loading" class="mb-3">
                        <e-select v-model="data.country" v-model:search="data.searchCountry" clearable autocomplete
                            label="Buscar" :items="filteredCounties" :rules="[_required]" />
                    </e-form>
                    <e-button :disabled="!data.validForm" :loading="data.loading" block color="primary" @click="next">
                        Continue
                    </e-button>
                </e-card>
            </div>
            <p class="mb-3 mt-6 therms text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ex delectus possimus. Alias, cum?
                Quasi a mollitia beatae. Modi fugiat ex ut atque ipsa non necessitatibus quis minus vel amet.
            </p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { Form } from "drocket";
definePageMeta({
    layout: 'empty',
})
const router = useRouter()

const { _required } = useRules();
const form = ref<Form>()
const availableCountries = ["Cuba", "Estados Unidos", "México", "Colombia", "Argentina", "Perú", "Venezuela", "Chile", "Ecuador", "Guatemala", "Bolivia", "República Dominicana", "Honduras", "Paraguay", "Nicaragua", "El Salvador", "Costa Rica", "Puerto Rico", "Panamá", "Uruguay", "Jamaica", "Trinidad y Tobago", "Guayana", "Barbados", "Haití", "Bahamas", "Belice", "Santa Lucía", "San Cristóbal y Nieves", "Antigua y Barbuda", "San Vicente y las Granadinas", "Granada", "Dominica", "Surinam", "Guyana", "Brasil", "Canadá", "Alemania", "Reino Unido", "Francia", "Italia", "España", "Portugal", "Países Bajos", "Bélgica", "Grecia", "Suecia", "Noruega", "Dinamarca", "Finlandia", "Suiza", "Austria", "Rusia", "Polonia", "República Checa", "Hungría", "Rumania", "Bulgaria"];
const filteredCounties = ref([...availableCountries]);
const data = reactive({
    country: "",
    searchCountry: "",
    searchCountryTimmer: 0,
    validForm: false,
    loading: false
})

watch(() => data.searchCountry, (value: string) => {
    if (value) {
        if (data.searchCountryTimmer) clearTimeout(data.searchCountryTimmer)
        data.searchCountryTimmer = window?.setTimeout(() => {
            filteredCounties.value = availableCountries.filter(
                (text) => text.normalize('NFD').replace(/[\u0300-\u036F]/g, '').toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1
            )
        }, 100)
    } else {
        filteredCounties.value = [...availableCountries]
    }
})


const next = async () => {
    const valid = await form.value?.validate();
    if (valid) {
        data.loading = true;
        setTimeout(() => {
            data.loading = false;
            router.push('/register/availability')
        }, 1000)
    }
}
</script>
<style lang="scss">
.country-page {
    max-width: 600px;
    margin: auto;

    &__card-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
}
</style>