<script setup>
import { computed, useAttrs } from 'vue'
const isRouterLink = computed(() => !!useAttrs().to)
const isLink = computed(() => !!useAttrs().href)
const isButton = computed(() => !useAttrs().to && !useAttrs().href)

</script>
<template>
  <button
    v-if="isButton"
    class="btn"
    v-bind="$attrs"
  >
    <slot />
  </button>
  <router-link
    v-if="isRouterLink"
    class="btn"
    v-bind="$attrs"
  >
    <slot />
  </router-link>
  <a
    v-if="isLink"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>
