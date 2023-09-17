<template>
  <div>
    <table class="zui-table">
      <thead>
          <tr>
              <th>name</th>
              <th>Position</th>
              <th>Height</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>{{ post.name }}</td>
              <td>{{ post.price }}</td>
              <td>
                <img :src="post.imageUrl" :alt="post.name + ' image'" />
              </td>
          </tr>
      </tbody>
  </table>
    <back>뒤로가기</back>
  </div>
</template>

<script>
import { fetchPostId } from '@/api/index'
import back from '@/components/common/Back.vue'

export default {
    components:{
      back
    },
    async asyncData({ params }) {   
        const res = await fetchPostId(params.id)
        return { post: res.data }
    },
}
</script>

<style scoped>
.zui-table {
    border: solid 1px #DDEEEE;
    border-collapse: collapse;
    border-spacing: 0;
    font: normal 13px Arial, sans-serif;
}
.zui-table thead th {
    background-color: #DDEFEF;
    border: solid 1px #DDEEEE;
    color: #336B6B;
    padding: 10px;
    text-align: left;
    text-shadow: 1px 1px 1px #fff;
}
.zui-table tbody td {
    border: solid 1px #DDEEEE;
    color: #333;
    padding: 10px;
    text-shadow: 1px 1px 1px #fff;
}
</style>