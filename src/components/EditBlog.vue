<template>
  <div id="add-blog">
   <h2>编辑博客</h2>
   <form v-if="!submmited">
     <label>博客标题</label>
     <input type="text" v-model="blog.title" required />
     <label>博客内容</label>
     <textarea v-model="blog.content"></textarea>
     <div id="checkboxes">
       <label>Vue.js</label>
       <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Node.js</label>
       <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>React.js</label>
       <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Javascript</label>
       <input type="checkbox" value="javascript" v-model="blog.categories">
     </div>
     <label for="">作者：</label>
     <select v-model="blog.author">
       <option :key="author.id" v-for="author in authors">
         {{author}}
       </option>
       
     </select>
     <button @click.prevent="post">编辑博客</button>
   </form>
   <hr>
   <div id="preview">
     <h3>博客总览</h3>
     <p>博客标题：{{blog.title}}</p>
     <p>博客内容：</p>
     <p>{{blog.content}}</p>
     <p>博客分类：</p>
     <ul>
       <li :key="item.id" v-for="item in blog.categories">{{item}} </li>
     </ul>
     <p>作者：{{blog.author}}</p>
   </div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
        id:this.$route.params.id,
      blog:{ },
      authors:["Hemiah",'Henry','Bucky'],
      submmited:false
    }
  },
  methods:{
      fetchData(){
        //   console.log(this.id);
        this.$http.get('https://vuedemo-979ea-default-rtdb.firebaseio.com/posts/' + this.id + ".json")
        .then(response =>{
            // console.log(response.body);
            this.blog = response.body;
        })
      },
    post:function(){
      this.$http.put('https://vuedemo-979ea-default-rtdb.firebaseio.com/posts/' + this.id + ".json",this.blog)
      .then(function(data){
        // console.log(data);
        this.submmited = true;
      });
    }
  },
  created(){
      this.fetchData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label{
  display: block;
  margin: 20px 0 10px;

}
input[type ="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}
textarea{
  height: 150px;
}
#checkboxes label{
  display: inline-block;
  margin-top: 0;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes{
  margin-top: 20px;
}
button{
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
</style>
