<script setup lang="ts">
import useTestFetch from './composables/useTestFetch'
const { doTestFetch } = useTestFetch()

const { data, refresh } = useAsyncData(() => doTestFetch())
</script>

<template>
  <div>
    Hello, the data is {{ data }}

    <button @click="() => refresh()">
      Refresh
    </button>
  </div>
</template>
