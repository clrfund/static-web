<template>
  <metainfo v-if="ready">
    <template v-slot:title="{ content }">{{ content }}</template>
  </metainfo>
  <div id="app" class="wrapper">
    <nav-bar />
    <div id="content-container">
      <div id="sidebar" v-if="isSidebarShown" class="desktop">
        <round-information />
      </div>
      <div
        id="content"
        :class="{
          padded: isSidebarShown,
        }"
      >
        <breadcrumbs v-if="showBreadCrumb" />
        <router-view />
      </div>
    </div>
    <mobile-tabs v-if="isMobileTabsShown" />
  </div>
</template>

<script setup lang="ts">
import { computed, watch, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore, useRoundStore } from '@/stores'
import RoundInformation from '@/components/RoundInformation.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import MobileTabs from '@/components/MobileTabs.vue'
import NavBar from '@/components/NavBar.vue'
import { useMeta } from 'vue-meta'
import { storeToRefs } from 'pinia'

const excludeSidebar = ['landing', 'round-information']
const excludeMobileTab = [
  'landing',
  'project-added',
  'join',
  'join-step',
  'transaction-success',
  'verify',
  'verify-step',
  'verified',
  'sponsored',
]
const excludeBreadCrumb = [
  'landing',
  'join',
  'join-step',
  'transaction-success',
  'verify',
  'project-added',
  'verified',
]

const isMobileTabsShown = ref(false)
const showBreadCrumb = ref(false)
const isSidebarShown = ref(false)

const route = useRoute()
const routeName = computed(() => (route ? route.name?.toString() : ''))

watch(routeName, (newValue) => {
  const newRouteName = String(newValue)
  isSidebarShown.value = !excludeSidebar.includes(newRouteName)
  isMobileTabsShown.value = !excludeMobileTab.includes(newRouteName)
  showBreadCrumb.value = !excludeBreadCrumb.includes(newRouteName)
})

const appStore = useAppStore()
const { init } = appStore
const { ready } = storeToRefs(appStore)
const { operator } = storeToRefs(useRoundStore())

useMeta(
  computed(() => {
    const theOperator = operator.value || ''
    const title = route.meta.title || ''
    return {
      // titleTemplate no longer works in vue-meta3
      // construct the title dynamically instead
      title: `${theOperator} - ${title}`,
      // meta also does not work like in vue-meta2,
      // name is always meta, use description instead
      meta: [
        {
          description: 'git-commit',
          content: import.meta.env.VITE_GIT_COMMIT || '',
        },
      ],
    }
  })
)

onMounted(async () => {
  await init()
  console.log('App mounted')
})
</script>

<style lang="scss">
@import 'styles/vars';
@import 'styles/fonts';
@import 'styles/theme';

/**
 * Global styles
 */
html,
body {
  height: 100%;
  margin: 0;
}

html {
  background-color: var(--bg-primary-color);
  color: var(--text-color);
  font-family: Inter, sans-serif;
  font-size: 16px;
}

a {
  color: var(--link-color);
  cursor: pointer;
  text-decoration: none;
}

textarea {
  resize: vertical;
  border-end-end-radius: 0 !important;
}

.mobile {
  @media (min-width: ($breakpoint-m + 1px)) {
    display: none !important;
  }
}

.mobile-l {
  @media (min-width: ($breakpoint-l + 1px)) {
    display: none !important;
  }
}

.desktop {
  @media (max-width: $breakpoint-m) {
    display: none !important;
  }
}

.desktop-l {
  @media (max-width: $breakpoint-l) {
    display: none !important;
  }
}

.caps {
  text-transform: uppercase;
}

.btn-container {
  display: flex;
  gap: 1rem;
  @media (max-width: $breakpoint-m) {
    flex-direction: column;
  }
}

summary:focus {
  outline: none;
}

.wrapper {
  min-height: 100%;
  position: relative;
}

.input {
  background-color: var(--bg-light-color);
  border: 2px solid $button-color;
  border-radius: 2px;
  box-sizing: border-box;
  color: var(--text-color);
  font-family: Inter, sans-serif;
  font-size: 16px;
  padding: 7px;

  &.invalid {
    border-color: var(--error-color);
  }

  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
}

.btn {
  background-color: $button-color;
  border: none;
  border-radius: 20px;
  color: var(--text-color);
  cursor: pointer;
  font-weight: bold;
  line-height: 22px;
  padding: 6px 20px 8px;

  img {
    height: 1em;
    margin: 0 10px 0 0;
    vertical-align: middle;
  }

  &:hover {
    background-color: $highlight-color;
    color: var(--bg-secondary-color);
  }

  &[disabled],
  &[disabled]:hover {
    background-color: $button-disabled-color !important;
    color: $button-disabled-color !important;
    cursor: not-allowed;
  }
}

.btn-inactive {
  background-color: transparent;
  border: 2px solid $button-color;
  color: $button-color;
  padding: (6px - 2px) (20px - 2px) (8px - 2px);

  &:hover {
    background-color: transparent;
    color: $button-color;
  }
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

#content-container {
  display: flex;
  /* height: calc(100vh - 61.5px); */
  height: 100%;
  background: var(--bg-primary-color);
  overflow-x: clip;
  /* overflow-y: scroll; */
}

#sidebar {
  box-sizing: border-box;
  background-color: var(--bg-primary-color);
  flex-shrink: 0;
  padding: 1.5rem;
  width: $cart-width-open;
  height: 100%;
  position: sticky;
  top: 1.5rem;

  .status {
    font-size: 16px;
    display: flex;
    align-items: center;
  }

  .round-info-div {
    background: var(--bg-light-color);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  .clr-logo {
    display: block;
    /* max-height: 100%; */
  }

  .menu-btn,
  .cart-btn {
    display: none;
    margin-right: 0.5rem;
  }
}

#cart {
  position: fixed;
  right: 0;
  top: $nav-header-height;
  bottom: 0;
}

.open-cart {
  width: $cart-width-open;
  overflow-y: scroll;
  overflow-x: hidden;
}

.closed-cart {
  width: 4rem;
}

#nav-menu {
  /* margin-left: 15%;
  padding: 50px 5% 0; */

  a {
    color: var(--text-color);
    display: block;
    font-size: 16px;
    margin-bottom: $content-space;
    text-decoration: none;

    &:hover {
      color: $highlight-color;
    }

    &.router-link-exact-active {
      color: $highlight-color;
      font-weight: bold;
      position: relative;

      &::before {
        border: 2px solid $highlight-color;
        border-radius: 10px;
        bottom: 0;
        box-sizing: border-box;
        content: '';
        display: block;
        height: 0.75em;
        left: -25px;
        position: absolute;
        top: 0.2em;
        width: 0.75em;
      }
    }
  }
}

#content {
  flex: 1;
  padding-bottom: 4rem;

  .content-heading {
    display: block;
    font-family: 'Glacial Indifference', sans-serif;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 6px;
    margin: 0;
    padding-bottom: $content-space;
    text-transform: uppercase;
  }

  .title {
    padding-bottom: 1.5rem;
    margin-bottom: 2rem;
  }
}

#content.padded {
  padding: $content-space;
}

#content.mr-cart-open {
  margin-right: $cart-width-open;
  @media (max-width: $breakpoint-m) {
    margin-right: 0;
  }
}

#content.mr-cart-closed {
  margin-right: $cart-width-closed;
  @media (max-width: $breakpoint-m) {
    margin-right: 0;
  }
}

.verified {
  background: $gradient-highlight;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 0.5rem;
}

.vm--overlay {
  background-color: rgba(black, 0.5) !important;
}

.vm--modal {
  background-color: transparent !important;
  box-shadow: none !important;
  overflow: visible !important;
}

.modal-body {
  background-color: var(--bg-light-color);
  padding: $modal-space;
  text-align: center;
  box-shadow: var(--box-shadow);

  .loader {
    margin: $modal-space auto;
  }
}

.hidden {
  display: none;
}

.invisible {
  visibility: hidden;
}

.error {
  color: var(--error-color);
  margin-bottom: 0;
  margin-top: 0.5rem;
  font-size: 14px;
  &:before {
    content: '⚠️ ';
  }
}

.pointer {
  cursor: pointer;
}

@media (max-width: $breakpoint-m) {
  #app {
    flex-direction: column;
    position: relative;
  }

  #sidebar {
    /* bottom: $profile-image-size + $content-space * 2; offset for profile block */
    border-right: none;
    max-width: 100vw;
    position: fixed;
    top: 0;
    width: 100%;
    /* height: 64px; */
    z-index: 2;

    .clr-logo {
      margin-right: 0.5rem;
    }

    .menu-btn,
    .cart-btn {
      display: block;
      min-width: 25px;
      max-width: 20%;
      width: 25px;
    }

    .menu-btn {
      margin-right: 5%;
    }

    .cart-btn {
      margin-left: 5%;
    }
  }

  #nav-header {
    display: flex;
    align-items: center;
  }

  #footer {
    max-width: 100vw;
    padding: $content-space;
    > li {
      list-style-type: none;
    }
  }
}

.v-popper--theme-tooltip {
  background: var(--bg-primary-color);
  color: var(--text-color);
  font-family: Inter;
  line-height: 150%;
  font-size: 14px;
  border: 1px solid $button-color;
  border-radius: 0.5rem;
  padding: 5px 10px 4px;
  max-width: 30ch;
  text-align: center;

  .v-popper__arrow-outer {
    border: 1px solid $button-color;
  }

  .v-popper__popper--shown {
    width: 300px;
  }
}
</style>
