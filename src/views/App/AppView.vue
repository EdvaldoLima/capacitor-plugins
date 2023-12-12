<script setup>
import { reactive, ref } from 'vue'
import { exitApp, getInfo } from '@/services'

const info = reactive({})
const showResult = ref(false)

const serInfo = async () => {
  info.value = await getInfo()
  showResult.value = true
}
</script>
<template>
  <VToolBar showBack />
  <VContainer>
    <div class="card" v-show="showResult">
      <div class="card__title">result</div>
      <div class="card__text">
        {{ info?.value }}
      </div>
    </div>
    <button class="btn" @click="exitApp">exit app</button>
    <button class="btn" @click="serInfo">get app info</button>
  </VContainer>
</template>
