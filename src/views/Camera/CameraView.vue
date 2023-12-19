<script setup>
import { computed, onMounted, reactive } from 'vue'
import { getPhoto, pickImages, requestPermissions, CameraResultType } from '@/services'

const permissionsResult = reactive({})
const getPhotoResult = reactive({})
const imagesGallery = reactive({})
const imgBase64 = computed(() => getPhotoResult.value?.base64String)

const onGetPhoto = async () => {
  getPhotoResult.value = await getPhoto({
    quality: 100,
    saveToGallery: true,
    resultType: CameraResultType.Base64
  })
}

const onGetPhotosGalerry = async () => {
  imagesGallery.value = await pickImages({
    quality: 100
  })
}

onMounted(async () => {
  permissionsResult.value = await requestPermissions()
})
</script>
<template>
  <VToolBar show-back />
  <VContainer class="flex flex-col gap-3">
    <VCard>
      <template #body>
        <strong>Permissions:</strong>
        {{ permissionsResult.value }}
      </template>
    </VCard>
    <VBtn @click="onGetPhoto">
      get photo
    </VBtn>
    <VBtn @click="onGetPhotosGalerry">
      get phothos galerry
    </VBtn>
    <br>
    <div class="grid grid-cols-1">
      <img
        :src="`data:image/jpeg;base64, ${imgBase64}`"
        alt=""
      >
    </div>
    <div class="grid grid-cols-3 gap-1">
      <div
        v-for="(imageT, idx) in imagesGallery.value?.photos"
        :key="idx"
      >
        <img
          :src="imageT.webPath"
          alt="image"
        >
      </div>
    </div>
  </VContainer>
</template>
