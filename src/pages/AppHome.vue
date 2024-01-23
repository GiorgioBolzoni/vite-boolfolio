<template>
    <div class="container">
        <h1 class="py-3">
        HOME
    </h1>

    <h3 class="py-4">Portfolio di Giorgio Bolzoni</h3>

    <div>
        <h5>Panoramica sui progetti</h5>
        <!-- <ProjectsCarousel/> -->
    </div>
    <div>
        <h5>Le tecnologie utilizzate</h5>
        <!-- mettere carosello  -->
    </div>

    </div>
    </template>
    
    <script>
    import {store} from "../data/store";
    import axios from "axios";
    import ProjectsCarousel from '../components/ProjectCarousel.vue';
        export default {
            name:'AppAbout',
            components:{
                ProjectsCarousel,
            },
            data(){
                return{
                    store,
                    projects:[],
                };
            }, 
            methods:{
                getAllProjects(){
                axios.get(store.apiUrl + this.store.endpoints.projects, {params:{page: this.currentPage}}).then((resp)=>{
                    console.log(resp.data);
                    this.projects = resp.data.results.data;
                    })
                },
            },
            mounted() {
                this.getAllProjects();
    
            }
        }
    </script>
    
    <style lang="scss" scoped>
    
    </style>