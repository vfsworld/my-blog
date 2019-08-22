 <template>
     <div id="single-blog">
         <h1>{{blog.title}}</h1>
         <p>作者: {{blog.author}}</p>
         <p class="category">分类:
             <ul>
                <li v-for="category in blog.categories" :key="category">{{category}}</li>
            </ul>
         </p>
         
         <article>{{blog.content}}</article>
     </div>
 </template>
 
 <script>
 import axios from 'axios'
 export default {
     name: 'single-blog',
     data(){
         return{
             id: this.$route.params.id,
             blog: {}
         }
     }, 
     created(){
         //this.$http.get("https://wd4757811722fvggvb.wilddogio.com/post/" + this.id + ".json")
         axios.get("/post/" + this.id + ".json")
            .then(data => {

                //console.log(data);
                //console.log(data.json());
                //return data.json();
                //return data.data;
                this.blog = data.data;
                //this.blog = data.body; 
                //console.log(this.blog);
            })
            // .then(data => {
            //     //console.log(data)
            //     this.blog = data
            // })
     }
 }
 </script>
 
 <style scoped>
    #single-blog{
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
        background: #eee;
        border: 1px dotted #aaa;
    }
 </style>
 