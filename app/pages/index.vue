<script setup lang="ts">
const content = ref<string>('')
</script>

<template>
  <section class="min-h-[100dvh] flex flex-col gap-5 items-center mt-5 md:mt-10">
    <header><p class="text-center font-bold text-lg">ckEditor-5 text Editor</p></header>
      <main class="flex flex-col gap-5">
        <client-only>
          <CkEditor v-model="content" />
        </client-only>
        <article>
          <div class="content" v-html="content"></div>
        </article>
      </main>
  </section>
</template>
