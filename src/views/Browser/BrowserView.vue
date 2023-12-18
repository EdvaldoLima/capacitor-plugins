<script setup>
import { openBrowserUrl } from '@/services'

const openUrlInBrowser = () => {
  openBrowserUrl({
    url: 'https://github.com/EdvaldoLima/capacitor-plugins'
  })
}
</script>
<template>
  <VToolBar show-back />
  <VContainer class="flex flex-col">
    <br>
    <VBtn @click="openUrlInBrowser">
      open url in browser
    </VBtn>
  </VContainer>
</template>
