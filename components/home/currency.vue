<template>
    <div class="user-currency-section">
        <div class="d-block d-md-none">
            <Swiper slides-per-view="auto" space-between="12" :loop-additional-slides="10" :loop="false">
                <SwiperSlide v-for="slide in 4" :key="slide" :clickable="true">
                    <home-currency-card />
                </SwiperSlide>
                <SwiperSlide>
                    <home-currency-card add />
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="user-currency-section__desktop d-none d-md-block">
            <ul class="user-currency-section__container">
                <li v-for="i in 4" :key="i">
                    <home-currency-card v-ripple />
                </li>
                <li key="new">
                    <home-currency-card add v-ripple />
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss">
@use "drocket/mixin.scss";

.user-currency-section {
    .swiper-slide {
        width: 150px;
        max-width: 150px;
        height: 150px;
        margin: 4px;
    }

    // .swiper-wrapper {
    //     padding: 4px;
    // }

    &__desktop {
        margin: -12px;

        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                // width: 150px;
                // min-width: 150px;
                // height: 150px;
                padding: 12px;
                list-style-type: none;
            }

        }
    }
}
</style>