<script setup></script>

<template>
  <div class="mt-5">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      This is a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
    <p>
      This project is based on course
      <a
        href="https://www.udemy.com/share/105Whs3@L5s1TsD56F0DdiJEkRsROlqxwJperZMYc80NmEmwVUP74XHPxZwa-fDSCyEiYKQs/"
        >VUE JS 3 Crash Course for Beginners 2022 </a
      >, but my version is using composition API
    </p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
