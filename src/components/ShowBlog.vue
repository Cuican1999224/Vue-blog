<template>
  <div id="show-blog" v-thenme="'wide'">
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索相关标题">
      <div :key="blog.id" v-for="blog in filterdBlogs" class="single-blog">
         <router-link :to="'/blog/' + blog.id"> <h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
          <article>{{blog.content | snippet}}</article>
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
      this.$http.get('https://vuedemo-979ea-default-rtdb.firebaseio.com/posts.json')
      .then(function(data){
        //   console.log(data.json());
          return data.json()
        //   this.blogs = data.body.slice(0,10)
        //   console.log(this.blogs);
      })
      .then(function(data){
          var blgosArray = [];
          for(let key in data){
            //   console.log(data[key]);
            data[key].id = key
            blgosArray.push(data[key])
          }
        //   console.log(blgosArray);
        this.blogs = blgosArray;
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
    border: 1px dotted #aaa;
}
#show-blog a{
    color: #444;
    text-decoration: none;
}
input[type = "text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
</style>
