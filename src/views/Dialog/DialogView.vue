<script setup>
import { dialogAlert, dialogPrompt, dialogConfirm } from '@/services'

const dialogAlertOptions = async () => {
  await dialogAlert({
    title: 'Alert',
    message: 'Message'
  })
}

const dialogPromptOptions = async () => {
  await dialogPrompt({
    title: 'Prompt',
    message: 'Message'
  })
}

const dialogConfirmOptions = async () => {
  await dialogConfirm({
    title: 'Confirm',
    message: 'Message'
  })
}

</script>
<template>
  <VToolBar show-back />
  <VContainer class="flex flex-col gap-3">
    <VBtn @click="dialogAlertOptions">
      type alert
    </VBtn>

    <VBtn @click="dialogPromptOptions">
      type prompt
    </VBtn>

    <VBtn @click="dialogConfirmOptions">
      type confirm
    </VBtn>
  </VContainer>
</template>
