<template>
    <div class="contact-card">
        <e-avatar :src="user" />
        <span class="contact-name">
            John Doe Santiesteban
        </span>
    </div>
</template>
<script lang="ts" setup>
import user from "assets/images/user.png";
</script>
<style lang="scss">
.contact-card {
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 8px;
    color: var(--primary);
    user-select: none;
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: var(--primary);
        opacity: 0.1;
        border-radius: 8px;
        transition: opacity .2s;
    }


    &:hover {
        &::before {
            opacity: .3;
        }
    }

    &:active {
        &::before {
            opacity: .6;
        }
    }

    .contact-name {
        margin-top: 8px;
        font-size: 0.8rem;
        color: var(--secondary);
        text-align: center;
    }
}
</style>