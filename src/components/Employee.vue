<script setup>
let employee = {
  name: "Rebecca",
  age: "19",
  designation: "Biochemical",
};
</script>

<template>
  <div class="container">
    <div class="grid">
      <div class="row">
        <div class="col">
          <h3>Employee</h3>
          <ul class="list-group">
            <li class="list-group-item">Name: {{ employee.name }}</li>
            <li class="list-group-item">Age: {{ employee.age }}</li>
            <li class="list-group-item">
              Designation: {{ employee.designation }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
