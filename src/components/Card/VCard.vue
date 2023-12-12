<template>
  <div class="card w-auto bg-base-100 shadow-xl">
    <VCardBody>
      <VCardTitle>
        <slot name="title" />
      </VCardTitle>
      <slot name="body" />
      <VCardActions>
        <slot name="actions" />
      </VCardActions>
    </VCardBody>
  </div>
</template>
