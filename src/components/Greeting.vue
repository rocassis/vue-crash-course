<template>
  <div class="col-12">
    <div class="card shadow-lg">
      <div class="card-body text-black">
        <h3>Hello {{ message }}</h3>
        <p><small>Use of functions parameters to show text</small></p>
        <button class="btn btn-success m-1" @click="greetings('good morning')">
          Good Morning
        </button>
        <button class="btn btn-info m-1" @click="greetings('good afternoon')">
          Good Afternoon
        </button>
        <button class="btn btn-danger m-1" @click="greetings('Good evening')">
          Good evening
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let message = ref("");

//Methods
function greetings(value) {
  message.value = value;
}
</script>
