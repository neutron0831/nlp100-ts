<script lang="ts" setup>
  //
</script>

<template>
  <VContainer class="fill-height">
    <VResponsive class="d-flex align-center text-center fill-height">
      <VImg contain height="300" src="@/assets/logo.svg" />
      <h1 class="text-h4 font-weight-bold">NLP 100 Exercise</h1>
      <h1 class="text-h4 font-weight-bold">in TypeScript</h1>
      <div class="text-body-2 font-weight-light mt-3">
        <span>
          <a href="https://nlp100.github.io/en/" target="_blank"
            >NLP 100 Exercise</a
          >
          is a bootcamp designed for learning skills
        </span>
        <span>for programming, data analysis, and research activities </span>
        <span>by taking practical and exciting assignments.</span>
      </div>
    </VResponsive>
  </VContainer>
</template>

<style lang="scss" scoped>
  @media only screen and (min-width: 600px) {
    span {
      display: block;
    }
  }
</style>
