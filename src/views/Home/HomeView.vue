<script setup>
import { computed } from 'vue'
import { apis } from '@/constants/enums'

const apisList = computed(() => apis)
</script>
<template>
  <ToolBar> CaboneJS Plugins </ToolBar>
  <VContainer>
    <VCard class="m-3" v-for="(api, idx) in apisList" :key="idx">
      <template #title>{{ api.title }}</template>
      <template #body>
        <p>{{ api.description }}</p>
        <p>
          plugin: <strong>{{ api.plugin }}</strong>
        </p>
      </template>
      <template #actions>
        <a :href="api.doc" target="_blank" class="btn btn-primary">doc</a>
        <router-link :to="api.view" class="btn btn-primary">see</router-link>
      </template>
    </VCard>
  </VContainer>
</template>
