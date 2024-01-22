<template>
    <div>
        <main class="container">
            <h1>Projects List</h1>

                <div>
                    <div v-for="project in projects" :key="project.id" class="row py-5 row border w-100 d-flex justify-content-between">

                        <ProjectCard class="col-3" :project="project"/>

                        <div class="px-3 border col-9">
                            {{project.body}} 
                        </div>
                    </div>
                </div>
                
        </main>

    </div>
</template>

<script>
import {store} from "../data/store";
import axios from "axios";
import ProjectCard from '../components/ProjectCard.vue';

    export default {
        name:'AppProjects',
        components:{
            ProjectCard,
        },
        data(){
            return{
                store,
                projects:[],
                currentPage: 1,
                lastPage:0
            };
        }, 
        methods:{
            getAllProjects(){
            axios.get(store.apiUrl + this.store.endpoints.projects, {params:{page: this.currentPage}}).then((resp)=>{
                console.log(resp.data);
                this.projects = resp.data.results.data;
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
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