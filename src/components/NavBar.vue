<template>
  <nav class="navbar">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <RouterLink class="nav-link fw-bold" to="/">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link fw-bold" to="/counter">Counter</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link fw-bold" to="/general"
          >Reactivity</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link fw-bold" to="/register"
          >Form Register</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link fw-bold" to="/users">Users List</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link fw-bold" to="/about">About</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style>
.nav {
  --bs-nav-link-color: none !important;
}
</style>
