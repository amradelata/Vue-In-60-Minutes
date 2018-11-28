<template>
  <div class="users">
    <ul>
      <li>
        <router-link to="/" exact>Home</router-link>
        <!-- 'exact' tell me witch link is active -->
      </li>
      <li>
        <router-link to="/users" exact>users</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
</script>



<style scoped>
.users {
  background-color: #e2ecf3;
  text-align: center;
  padding: 20px;
  margin-bottom: 50px;
}
.contacted {
  text-decoration: line-through;
}
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000;
  text-decoration: none;
}
.router-link-active {
  border-bottom: 2px solid #000;
}
</style>
