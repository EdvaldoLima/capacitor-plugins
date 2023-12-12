<script setup>
import { reactive, computed } from 'vue'
import { canOpenUrl, openUrl } from '@/services'

const checkCanOpen = reactive({})
const openUrlResult = reactive({})
const canOpen = computed(() => checkCanOpen.value?.value)
const openResult = computed(() => openUrlResult.value?.completed)

const openChromeBrowser = async () => {
  checkCanOpen.value = await canOpenUrl()
  openUrlResult.value = await openUrl()
}
</script>
<template>
  <div class="layout">
    <ToolBar showBack />
    <VContainer>
      <strong>Can Open:</strong> {{ canOpen }} <br />
      <strong>Open Result:</strong> {{ openResult }} <br />
      <br />
      <button class="btn" @click="openChromeBrowser">
        open chrome browser
      </button>
    </VContainer>
  </div>
</template>
