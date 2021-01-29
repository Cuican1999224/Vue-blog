<template>
  <div id="show-blog" v-thenme="'wide'">
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索相关内容">
      <div :key="blog.id" v-for="blog in filterdBlogs" class="single-blog">
          <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
          <article>{{blog.body | snippet}}</article>
      </div>

  </div>
</template>

<script>

export default {
  name: 'show-blog',
  data(){
      return {
          blogs:[],
          search:""
      }
  },
  created(){
      this.$http.get('./../static/posts.json')
      .then(function(data){
          this.blogs = data.body.slice(0,10)
          console.log(this.blogs);
      })
  },
  computed:{
      filterdBlogs:function(){
          return this.blogs.filter((blog) =>{
              return blog.title.match(this.search)
          })
      }
  }
}
</script>

<style>
#show-blog{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
