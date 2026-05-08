<script setup lang="ts">
const content = ref<string>('' +
    '<h1 style="line-height:1.2;text-align:center;" data-placeholder="your content ....">' +
    '<span style="font-family:iranSans;">' +
    '<strong>Hello ladies and gentlemen.</strong>' +
    '</span>' +
    '</h1>'
)
</script>

<template>
  <section class="min-h-[100dvh] flex flex-col gap-5 items-center mt-5 md:mt-10">
    <header><p class="text-center font-bold text-lg">ckEditor-5 text Editor</p></header>
    <main class="flex flex-col gap-5">
      <client-only>
        <CkEditor v-model="content"/>
      </client-only>
    </main>
  </section>
</template>
