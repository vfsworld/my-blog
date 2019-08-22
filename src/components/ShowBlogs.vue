<template>
  <div id="show-blogs" v-theme:column="'narrow'">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search">
    <div v-for="blog in filteredBlogs" class="single-blog">
        <router-link :to="'/blog/'+ blog.id">
            <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
        </router-link>
        <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'show-blogs',
  data (){
      return{
          blogs: [],
          search: ""
      }
  },
  created(){
      //this.$http.get("https://wd4757811722fvggvb.wilddogio.com/post.json")
      axios.get("/post.json")
      .then((data) => {
        //console.log(data);
        return data.data;
        //return data.json();
        //console.log(data.json());
          //this.blogs = data.body.slice(0,10);
          //console.log(this.blogs);
      })
      .then(data => {
          let blogsArray = [];
          for(let key in data){
              //console.log(key);
              //console.log(data[key]);
              data[key].id = key;
              blogsArray.push(data[key]);
          }
          //console.log(blogsArray);
          this.blogs = blogsArray;
          //console.log(this.blogs);
      }) 
  },
  computed:{
      filteredBlogs:function(){
          return this.blogs.filter((blog)=>{return blog.title.match(this.search);});
      }
  },
  filters:{
    //   "to-uppercase":function(value){
    //       return value.toUpperCase();
    //   }
    toUppercase(value){
        return value.toUpperCase();
    }
  },
  directives:{
      'rainbow':{
          bind(el,binding,vnode){
              el.style.color = "#" + Math.random()
                .toString(16).slice(2,8);
          }
      }
  }
}
</script>

<style>
    #show-blogs{
        max-width: 800px;
        margin: 0 auto;
    }
    .single-blog{
        padding: 20px;
        background: #eee;
        margin: 20px 0;
        box-sizing: border-box;
        border: 1px dotted #aaa;
    }
    #show-blogs a{
        color: #444;
        text-decoration: none;
    }
    input[type="text"]{
        padding: 10px;
        width: 100%;
        box-sizing: border-box
    }
</style>