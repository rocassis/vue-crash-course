<template>
  <div class="container">
    <div class="row">
      <div class="card shadow-lg">
        <div class="card-body text-black">
          <div v-if="isLoggedIn">
            <h3>Welcome User</h3>
            <p>
              Welcome to my page made with VueJS 3. This is a conditional text
              using the directive 'v-if', so when the value is 'true', this text
              is loaded!
            </p>
          </div>

          <div v-if="!isLoggedIn">
            <h3>Thak You!!!</h3>
            <p>Thak you for visit my page! Click on the button abbove</p>
          </div>

          <button
            v-if="!isLoggedIn"
            class="btn btn-success btn-sm m-1"
            @click="login"
          >
            Login
          </button>
          <button
            v-if="isLoggedIn"
            class="btn btn-danger btn-sm m-1"
            @click="logout"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let isLoggedIn = ref(false);

function login() {
  isLoggedIn.value = true;
}

function logout() {
  isLoggedIn.value = false;
}
</script>

<style></style>
