<template>
  <div class="flex">
    <div class="left">
      <SideNavi />
    </div><!-- /.left -->
    <div class="right">
      <div class="title">
        <p>プロフィール</p>
      </div><!-- /.title -->
      <div class="profile">
      <div class="flex-profile">
        <p class="profile-name">{{name}}</p><!-- /.profile-name -->
        <div @click="edit">
        <button>変更する</button>
        </div>
      </div><!-- /.flex-profile -->
    <p class="text" v-if="active">{{profile}}</p><!-- /.text -->
    <input type="text" v-model="profile" v-else />
     </div><!-- /.profile -->
     <Message />    
    </div><!-- /.right -->
  </div><!-- /.flex -->
</template>
<script>
import SideNavi from "../components/SideNavi";
import Message from "../components/Message"
export default {
  data(){
    return{
      active:"太郎",
      profile:"私は太郎です"
    };
  },
  components:{
    SideNavi,
    Message
  }
};
</script>
<style scoped>
.left {
  width: 22%;
  height: 100vh;
}
.right {
  width: 78%;
  height: 100vh;
}
.flex {
  display: flex;
}
.profile {
  padding: 20px;
  border-bottom: solid 1px white;
  border-left: 1px solid white;
}
.profile-name {
  font-size: 24px;
}
.title {
  border-bottom: 1px solid white;
  border-left: 1px solid white;
  padding: 15px;
}
.title p {
  font-size: 20px;
  font-weight: bold;
}
.flex-profile {
  display: flex;
  justify-content: space-between;
}
button {
  width: 100px;
  text-align: center;
  padding: 8px 0 10px;
  color: #fff;
  background-color: #5419da;
  border-radius: 25px;
  display: block;
  margin: 0 0 0 auto;
}
</style>