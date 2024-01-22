<template>
    <div v-if="project">
    
        <div class="container">
            <div class="d-flex align-items-center justify-content-between py-3">
                <h1 class="me-3">{{ project.title }}</h1>
                <div class="type bg-warning">{{ project.type.name }}</div>
            </div>
            <div class="w-100 mb-3">
                <img :src="store.imgPath + project.image" :alt="project.title">
            </div>
            <div class="d-flex column-gap-3 mb-3">
    
                <div v-for="technology in project.technologies" class="tech-tag bg-success">
                    {{ technology.name }}
                </div>
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
            mounted(){
                this.getProjectData();
            }
        }
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