<template>
<div>
   <div class="left-padding">
        <img src="../assets/logo.png" alt class="logo" />
        <div class="flex icon-field">
          <img src="../assets/home.png" class="icon" />
          <p>ホーム</p>
        </div><!-- /.flex -->
        <div class="flex icon-field">
          <img src="../assets/profile.png"  class="icon /">
          <p>プロフィール</p>
        </div><!-- /.flex -->
        <div class="flex icon-field">
          <img src="../assets/logout.png" class="icon" />
          <p>ログアウト</p>
        </div><!-- /.flex -->
      </div><!-- /.left-padding -->
      <ShareMessage />
</div>
</template>
<script>
import ShareMessage from "../components/ShareMessage";
export default {
  components:{
    ShareMessage
  }
};
</script>

<style scoped>
.left-padding {
 margin: 20px;
}
.flex{
display: flex;
}
.logo {
 width: 100px;
}
.icon-field {
 margin-top: 15px;
 cursor: pointer;
}
.icon-field p {
 font-size: 16px;
 padding-left: 15px;
}
.icon{
  width: 25px;
}
</style>
