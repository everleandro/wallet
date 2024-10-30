<template>
    <div class="contact-list">
        <Swiper slides-per-view="auto" space-between="12" :loop-additional-slides="10" :loop="false">
            <SwiperSlide v-for="slide in 20" :key="slide">
                <app-contact-card />
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss">
.contact-list {
    list-style-type: none;
    padding: 0;
    margin: 0;

    .swiper-slide {
        width: 110px;
        max-width: 110px;
    }

}
</style>