<template>
  <div>
    <form action="">
        <div class="label_input">
            <label for="id">id</label>
            <input id="id" v-model="userId" placeholder="userId"/>
        </div>
        <div class="label_input">
            <label for="nickname">nickname</label>
            <input id="nickname" v-model="userNickname" placeholder="userNickname" />
        </div>
        <div class="label_input">
            <label for="password">password</label>
            <input id="password" v-model="userPassword" placeholder="userPassword" />
        </div>
        <div class="label_input">
            <label for="passwordconfirm">passwordconfirm</label>
            <input id="passwordconfirm" v-model="userPasswordConfirm" placeholder="userPasswordConfirm" />
        </div>
        <div class="label_input">
            <label for="email">email</label>
            <input id="email" v-model="userEmail" placeholder="userEmail" />
        </div>
        <div class="label_input">
            <label for="address">address</label>
            <input id="address" v-model="userAddress" placeholder="userAddress" />
        </div>
        <div>
            <button @click="loginSubmit">로그인</button>
        </div>
    </form>
  </div>
</template>

<script>
import { fetchUser } from '@/api/login'
export default {
  data() {
    return {
      userData:{
        userId: null,
        userNickname: null,
        userPassword: null,
        userPasswordConfirm: null,
        userEmail: null,
        userAddress: null
      }
    };
  },
  methods: {
    async loginSubmit() {
      if(this.userData.userId !== null){
        try {
            const { data } = await fetchUser(this.userData)
            console.log(data)
            this.$store.commit('SETLOGIN', data)
            this.$store.commit('LOGINCHECK', data.token)            
        } catch (error) {
            const errmsg = error.errmsg     
            confirm('에러', errmsg)       
        }
      }      
     

    //   if (res.status === 200) {
    //           // 로그인 성공시 처리해줘야할 부분
    //           this.$store.commit("SETLOGIN", res.data);
    //           this.$router.push("이동할 페이지 path");
    //         }
    },
  },
}
</script>

<style>

</style>