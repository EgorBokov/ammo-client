<template>
  <div>
    <TheContainer title="Главная страница">
      <p>Загрузка...</p>
    </TheContainer>
  </div>
</template>
<script setup lang="ts">
  onMounted(() => {
    useRouter().push('/catalog')
  })
</script>