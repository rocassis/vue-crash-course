<script setup>
import Customer from "../components/Customer.vue";
import Employee from "../components/Employee.vue";
import Greeting from "../components/Greeting.vue";
import AuthUser from "../components/AuthUser.vue";
</script>

<template>
  <div class="mt-5">
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <p>Use of props</p>
          <Customer
            name="Barry Burton"
            age="35"
            designation="Official detective"
          />
        </div>
        <div class="col-6">
          <p>Use of variables</p>
          <Employee />
        </div>
        <div class="col-6 m-2"></div>
        <div class="col-12 m-2"><Greeting /></div>
        <div class="col-12 m-2"><AuthUser /></div>
      </div>
    </div>
  </div>
</template>
