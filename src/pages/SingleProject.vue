<template>
    <div v-if="project">
    
        <div class="py-3 container">
            <h1 class="me-3">{{ project.title }}</h1>

            <div class="d-flex align-items-center justify-content-around py-3">
                <div class="type bg-type">{{ project.type.name }}</div>
                <div v-for="technology in project.technologies" class="tech-tag bg-success">
                    {{ technology.name }}
                </div>
            </div>
            <div class="w-100 my-3 text-center">
                <img :src="store.imgPath + project.image" :alt="project.title">
            </div>
            <p class="w-100 my-3 text-center">
                {{ project.body }}
            </p>
            <div class="d-flex column-gap-3 mb-3">
    
                
            </div>
    
        </div>
        
    
    </div>
    </template>
    
    <script>
    import axios from "axios";
    import {store} from "../data/store";
        export default {
            name:'SingleProject',
            data(){
                return{
                    store,
                    project:null,
                }
            },
            methods:{
                getProjectData(){
                    axios.get(`${this.store.apiUrl}${this.store.endpoints.projects}/${this.$route.params.slug}`).then((resp)=>{
                    console.log(resp.data);
                    if(resp.data.results){
                        this.project = resp.data.results;
    
                    }else{
                        this.$router.push({name: 'not-found'});
                    }
                })  
             }
            },
           // mounted(){
         //     this.$watch(() => this.$route.params, (toParams, previousParams) => {
         //  if(toParams !== previousParams){
           //  this.getProduct();
         //      }
         //   }
         // )
            // watch: {
            //     'this.$route.params.slug': function (newSlug, oldSlug) {
            //     if (newSlug !== oldSlug) {
            //         this.getProjectData();
            //     }
            //     },
            // },
            mounted(){
                this.getProjectData();
            }
        };
    </script>
    
    <style lang="scss" scoped>
    .type{
        border-radius: 20px;
        padding: 0 10px;
    }
    .tech-tag{
        // height: 50px;
        // width: 50px;
        border-radius: 30px;
    
        padding: 15px 15px;
    }
    </style>