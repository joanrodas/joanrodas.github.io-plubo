<template>
    <div class='box'>
        <Content v-bind:slot-key="content"/>
    </div>
</template>

<script>
  export default {
      props: {
          content: String
      }
  }
</script>
