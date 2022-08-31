<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <p>Counter using Composition API</p>
        <div class="card shadow-lg text-bg-secondary">
          <div class="card-body">
            <h3>count {{ count }}</h3>
            <button class="btn btn-success m-1" @click="increment">
              Increment
            </button>
            <button class="btn btn-warning m-1" @click="decrement">
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let count = ref(0);

//Methods
function increment() {
  count.value++;
}

function decrement() {
  if (count.value == 0) {
    return false;
  }
  count.value--;
}
</script>

<style></style>
