<template>
  <e-app type="mobile-layout">
    <e-bar app fixed color="primary" class="mobile-app-bar">
      <h1>Logo</h1>
      <e-spacer />
      <e-button :icon="$icon.bell" text color="white" />
      <!-- <e-button :icon="$icon.account" text color="white" /> -->
    </e-bar>

    <e-drawer v-model="drawerModel" right fixed class="primary">
      <template #prepend>
        <e-list-item :prepend-avatar="user" title="Jhon Smith" x-large class="mb-0" color="white"
          subtitle="smith.93@gmail.com">
        </e-list-item>
        <e-divider></e-divider>
      </template>
      <e-list>
        <template v-for="link in 3">
          <e-list-item :prepend-icon="$icon.setting" color="white" large to="/payment">
            setting {{ link }}
          </e-list-item>
          <e-divider v-if="link !== 3" class="mb-1 white" />
        </template>
      </e-list>
      <template #append>
        <div class="pa-2">
          <e-button :append-icon="$icon.logout" color="white" block outlined small @click="logOut">cerrar
            Sesion</e-button>
        </div>
      </template>
    </e-drawer>

    <e-main class="pb-16">
      <e-container>
        <slot />
      </e-container>
    </e-main>
    <footer class="mobile__footer primary">
      <e-tab-group v-model="tabsModel" grow>
        <e-tab v-for="(link, i) in links" :prepend-icon="link.icon" stacked :to="link.to" color="white">
          {{ link.title }}
        </e-tab>
        <e-tab :prepend-icon="$icon.account" stacked color="white" @click="drawerModel = !drawerModel">
          Account
        </e-tab>
      </e-tab-group>
    </footer>
  </e-app>
</template>

<script lang="ts" setup>
const router = useRouter();
const { $icon } = useNuxtApp();
const tabsModel = ref(1)
const drawerModel = ref(true);
import user from "assets/images/user.png";

const links = [
  { icon: $icon.home, title: "Home", to: "/home" },
  { icon: $icon.recipients, title: "Recipients", to: "/recipients" },
  { icon: $icon.payment, title: "Payments", to: "/payment" },
];

watch(() => router, () => {
  drawerModel.value = false

}, { deep: true, immediate: true });

const logOut = () => {
  router.push({ path: "/" })
}
</script>

<style lang="scss">
.e-app[type="mobile-layout"] {
  .e-drawer {
    z-index: 3333;

    &__prepend {
      background-color: var(--primary-dark);
    }
  }

  .mobile__footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    padding-bottom: env(safe-area-inset-bottom, 20px);
    /* El 20px es un valor base si el dispositivo no soporta env */
    justify-content: space-around;
    align-items: center;
    z-index: 1000;

    .e-tab.e-tab {
      min-width: unset;
    }

    .e-icon--size-default {
      font-size: 20px;
    }

    .e-tab__slider {
      display: none;
    }

    .e-slide-group {
      flex: 1;

      .e-btn {
        font-size: 12px;
        text-transform: unset;
      }
    }
  }
}
</style>