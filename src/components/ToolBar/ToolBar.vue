<script setup>
import { defineProps } from 'vue'
defineProps({
  showBack: {
    type: Boolean,
    default: () => false
  }
})
</script>
<template>
  <div class="navbar bg-base-100 shadow-md fixed top-0 z-10">
    <div class="navbar-start">
      <router-link v-show="showBack" to="/" class="text-primary text-lg">
        &#8249; back
      </router-link>
      <div class="text-lg">
        <slot />
      </div>
    </div>
  </div>
</template>
