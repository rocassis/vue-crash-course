<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>User List</h3>
        <p>Data fetched from local file</p>
        <div class="row">
          <table class="table table-hover text-center table-striped">
            <thead class="text-bg-success text-black">
              <th>ID</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Company</th>
              <th>Website</th>
              <th>Location</th>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.company.name }}</td>
                <td>{{ user.website }}</td>
                <td>{{ user.address.city }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { UserService } from "@/services/UserService";

let users = reactive(UserService.getAllUsers());
</script>
