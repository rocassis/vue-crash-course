<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>User List</h3>
        <p>
          Data fetched with axios from
          "https://jsonplaceholder.typicode.com/users"
        </p>
        <p>Click on the user name to see details about the user</p>
        <div v-if="loading">
          <Loading />
        </div>
        <div v-if="errorMessage">
          <h3 class="text-danger">{{ errorMessage }}</h3>
        </div>
        <div class="col" v-if="!loading && users.length > 0">
          <table
            class="table table-hover text-center table-light table-striped-columns"
          >
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
                <td>
                  <router-link
                    class="text-decoration-none fw-bold text-success"
                    :to="{ path: 'user/' + user.id }"
                  >
                    {{ user.name }}
                  </router-link>
                </td>
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
import { ref, onBeforeMount } from "vue";
import { User2Services } from "../services/User2Services";
import Loading from "./Loading.vue";

let loading = ref(false);
let users = ref([]);
let errorMessage = ref(null);

async function fetchData() {
  try {
    loading.value = true;
    let response = await User2Services.fetchAllUsers();
    users.value = response.data;
    loading.value = false;
  } catch (error) {
    loading.value = false;
    errorMessage.value = error;
  }
}

onBeforeMount(() => {
  fetchData();
});
</script>
