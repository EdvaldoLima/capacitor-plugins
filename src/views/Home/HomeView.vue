<script setup>
import { computed } from 'vue'
import { apis } from '@/constants/enums'

const apisList = computed(() => apis)
</script>
<template>
  <VToolBar> CapacitorJs Plugins </VToolBar>
  <VContainer>
    <VCard
      v-for="(api, idx) in apisList"
      :key="idx"
      class="m-3"
    >
      <template #title>
        {{ api.title }}
      </template>
      <template #body>
        <p>{{ api.description }}</p>
        <p>
          plugin: <strong>{{ api.plugin }}</strong>
        </p>
      </template>
      <template #actions>
        <VBtn
          :href="api.doc"
          target="_blank"
          class="btn btn-primary"
        >
          doc
        </VBtn>
        <VBtn
          :to="api.view"
          class="btn btn-primary"
        >
          see
        </VBtn>
      </template>
    </VCard>
  </VContainer>
</template>
