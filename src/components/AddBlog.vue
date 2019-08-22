<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submmited">
        <label for="">博客标题</label>
        <input type="text" v-model="blog.title" required />

        <label for="">博客内容</label>
        <textarea  v-model="blog.content"></textarea>

        <div id="checkboxes">
            <label>JavaScript</label>
             <input type="checkbox" value="JavaScript" v-model="blog.categories">

             <label>Vue.js</label>
             <input type="checkbox" value="Vue.js" v-model="blog.categories">

             <label>Node.js</label>
             <input type="checkbox" value="Node.js" v-model="blog.categories"> 

             <label>other</label>
             <input type="checkbox" value="other" v-model="blog.categories">
        </div>
        <label>作者:</label>
        <select v-model="blog.author">
            <option v-for="author in authors">
                {{author}}
            </option>
        </select>
        <button @click.prevent="post">添加博客</button>
    </form>
    <div v-if="submmited">
        <h3>您的博客发布成功!</h3>
    </div>

    <div id="preview">
        <h3>博客总览</h3>
        <p>博客标题: {{blog.title}}</p>
        <p>博客内容: {{blog.content}}</p>
        <p>博客分类:</p>
        <ul>
            <li v-for="category in blog.categories">
                {{category}}
            </li>
        </ul>
        <p>作者: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    //http://jsonplaceholder.typicode.com/
    //http://jsonplaceholder.typicode.com/posts
  name: 'add-blog',
  data () {
    return {
        blog:{
            title: "",
            content: "",
            categories: [],
            author: ""
        },
        authors: ["vF","Test","Excerpt"],
        submmited: false
    }
  },
  methods: {
      post: function(){
        //   this.$http.post("https://wd4757811722fvggvb.wilddogio.com/post.json",this.blog
        //     // {
        //     //   title: this.blog.title,
        //     //   body: this.blog.content,
        //     //   userId: 1
        //     // }
        //   )
        //var _this = this;
        axios.post("/post.json",this.blog)
          .then((data)=>{
               
              //console.log(data);
              //_this.submmited = true;
              this.submmited = true;
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #add-blog *{
        box-sizing: border-box;
    }
    label{
        display: block;
        margin: 8px 0 8px 0;
    }
    input[type="text"],textarea,select{
        display: block;
        width: 100%;
        padding: 6px;
        border: 1px solid #ccc;
    }
    textarea{
        height: 160px;
    }
    #checkboxes label{
        display: inline-block;
        margin-top: 0px;
    }
    #checkboxes input{
        display: inline-block;
        margin-right: 10px;
    }

    button{
        display: block;
        background: crimson;
        color: #ccc;
        font-size: 18px;
        border-radius: 4px;
        border: 0;
        padding: 12px;
        margin: 20px 0;
        cursor: pointer;
    }

    #preview{
        border: 1px dotted #ccc;
        padding: 20px 10px;
        margin: 20px 0;
    }
    h3{
        margin-top: 8px;
    }
</style>
