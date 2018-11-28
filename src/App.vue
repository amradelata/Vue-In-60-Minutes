
tutorial link
---------------------------https://www.youtube.com/watch?v=z6hQqgvGI4Y----------------------
<template>
  <div>
    <myName></myName>
    <router-view></router-view>
  </div>
</template>

<script>
// Imports
import header from "./components/header.vue";
import users from "./components/users.vue";
import myName from "./components/myName.vue";

export default {
  components: {
    "app-header": header,
    "app-users": users,
    myName: myName
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
input {
  padding: 10px;
}
ul {
  list-style-type: none;
}
</style>