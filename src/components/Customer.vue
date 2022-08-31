<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <div class="grid">
      <div class="row">
        <div class="col">
          <h3>Customer</h3>
          <ul class="list-group">
            <li class="list-group-item">Name: {{ name }}</li>
            <li class="list-group-item">Age: {{ age }}</li>
            <li class="list-group-item">Designation: {{ designation }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
