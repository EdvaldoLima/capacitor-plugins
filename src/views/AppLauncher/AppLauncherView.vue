<script setup>
import { reactive, computed } from 'vue'
import { canOpenUrl, openUrl } from '@/services'

const checkCanOpen = reactive({})
const openUrlResult = reactive({})
const canOpen = computed(() => checkCanOpen.value)
const openResult = computed(() => openUrlResult.value)

const openChromeBrowser = async () => {
  checkCanOpen.value = await canOpenUrl()
  openUrlResult.value = await openUrl()
}
</script>
<template>
  <VToolBar show-back />
  <VContainer class="flex flex-col">
    <strong>Can Open:</strong> {{ canOpen }} <br>
    <strong>Open Result:</strong> {{ openResult }} <br>
    <br>
    <VBtn @click="openChromeBrowser">
      open chrome browser
    </VBtn>
  </VContainer>
</template>
