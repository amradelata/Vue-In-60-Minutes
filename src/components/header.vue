<template>
  <div class="header">
    <input type="text" v-model="title">
    <!-- how to bind  -->
    <br>
    <h1>{{title}}</h1>
    <p v-if="showName">{{user.firstName}}</p>
    <p v-else>there is nobody</p>
    <ul>
      <li v-for="item in items">{{item.body}}</li>
    </ul>
    <button v-on:click="heloo('Hello')">say hello</button>
    <br>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
    <!--see the console -->
    <hr>
    <label>First Name</label>
    <input type="text" v-model="user.firstName">
    <br>
    <label>Last Name</label>
    <input type="text" v-model="user.lastName">
    <h3>{{fullName}}</h3>
    <hr>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "hello new worled",
      user: {
        firstName: "amr",
        lastName: "ata"
      },
      showName: false,
      items: [
        { body: "itemOne" },
        { body: "itemtwo" },
        { body: "itemthree" },
        { body: "itemfour" }
      ]
    };
  },
  methods: {
    heloo: function(e) {
      alert(e);
    },
    pressKey: function(e) {
      console.log(e.target.value);
    },
    enterHit: function() {
      console.log("you hit enter");
    }
  },
  computed: {
    fullName: function() {
      return this.user.firstName + " " + this.user.lastName;
    }
  }
};
</script>

<style scoped>
.header {
  text-align: center;
}
</style>