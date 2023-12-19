<script setup>
import { getInfoDevice, getBatteryInfo } from '@/services'
import { onMounted, reactive } from 'vue'

const deviceInfo = reactive({})
const batteryInfo = reactive({})

onMounted(async () => {
  deviceInfo.value = await getInfoDevice()
  batteryInfo.value = await getBatteryInfo()
})
</script>
<template>
  <VToolBar show-back />
  <VContainer class="flex flex-col gap-3">
    <VCard>
      <template #body>
        <strong>device info:</strong>
        {{ deviceInfo.value }}

        <strong>battery info:</strong>
        {{ batteryInfo.value }}
      </template>
    </VCard>
  </VContainer>
</template>
