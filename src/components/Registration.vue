<template>
  <div class="container">
    <div class="row">
      <p>
        Register form using Composition API and reactivity to show in real time
        the typed data by user.
      </p>
      <div class="col-6">
        <div class="card text-bg-secondary shadow-lg">
          <div class="card-header bg-info">
            <h3>Register Here</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="mb-2">
                <label>Name</label>
                <input class="form-control" type="text" v-model="user.name" />
              </div>
              <div class="mb-2">
                <label>E-mail</label>
                <input class="form-control" type="text" v-model="user.email" />
              </div>
              <div class="mb-2">
                <label>Password</label>
                <input
                  class="form-control"
                  type="password"
                  v-model="user.password"
                />
              </div>
              <div class="mb-2">
                <input class="btn btn-success" type="submit" value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-6">
        <p>Object user preview</p>
        <pre>{{ user }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
let user = reactive({
  name: "",
  email: "",
  password: "",
});

//Methods
function register() {
  console.log(user);
}
</script>
