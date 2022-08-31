<template>
  <div>
    <h3>User details</h3>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-if="errorMessage">
      <h3 class="text-danger">{{ errorMessage }}</h3>
    </div>
    <div v-if="!loading">
      <pre>
            {{ user }}
        </pre
      >
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { User2Services } from "../services/User2Services";
import Loading from "./Loading.vue";

let loading = ref(false);
let user = ref([]);
let errorMessage = ref(null);
let route = useRoute();

async function fetchUser() {
  let userId = route.params.userId;
  user.value = userId;
  loading.value = true;
  try {
    let response = await User2Services.fetchUser(userId);
    user.value = response.data;
    loading.value = false;
    console.log(user.value);
  } catch (error) {
    loading.value = false;
    errorMessage.value = error;
  }
}
onMounted(() => {
  fetchUser();
});
</script>
