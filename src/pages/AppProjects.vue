<template>
    <div class="py-3 main">
        <main class="container">
            <h1>Projects List</h1>

            <!-- <div  class="d-flex flex-column align-content-between flex-shrink w-100 h-100 border"> -->
                <div>
                    <div v-for="project in projects" :key="project.id" class="row py-5 row w-100 d-flex justify-content-between align-items-center text-center">

                        <ProjectCard :project="project" class="col-12 col-lg-6"/>

                    <div class="col-12 col-lg-6">
                        <div class="px-5 body">
                            <p>{{ project.body }}</p>
                            <button class="btn btn-primary">
                                <router-link :to="{name: 'project', params:{ slug: project.slug }}" class="text-white">
                                    <span class="me-2">Read more</span>
                                     <i class="fa-solid fa-arrow-right"></i>
                                </router-link>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
                    <div class="d-flex justify-content-center mb-0 pag-div py-2">
                        <div class="pagination d-flex flex-column align-items-center w-25">
                            <div class="d-flex justify-content-center">
                                <button @click="getAllProjects(currentPage - 1)" :disabled="currentPage === 1 ? true : false" class="change-pag rounded-1">Indietro</button>
                                <button @click="getAllProjects(currentPage + 1)" :disabled="currentPage === lastPage ? true : false" class="change-pag rounded-1">Avanti</button>
                            </div>
                            <div class="d-flex py-2">
                                <span>Page:</span>
                            <ul class="d-flex">
                                <li v-for="n in lastPage">
                                <button @click="getAllProjects(n)">{{ n }}</button>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
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
            getAllProjects(n){
            axios.get(store.apiUrl + this.store.endpoints.projects, {params:{page: n}}).then((resp)=>{
                console.log(resp.data);
                this.projects = resp.data.results.data;
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                })
            },
        },
        mounted() {
            this.getAllProjects(this.currentPage);

        }
    }
</script>

<style lang="scss" scoped>
.body{
    button{
        background-color: var(--steel-blue);
        border: 1px solid transparent;
        &:hover{
            background-color: var(--orange-web);
            a{
                color: var(--black-ff) !important;
            }
        }
    }
}

.pagination{
    button{
        margin-right: 30px;
        
    }
}
li{
    list-style: none;
    button{
        background-color: transparent;
        border: none;
        color: var(--platinum);
        &:hover{
            color: var(--steel-blue);
        }
    }
}
.change-pag{
    background-color: var(--steel-blue);
    color: white;
    border: 1px solid var(--steel-blue);
    cursor: pointer;
    &:hover{
        background-color: var(--orange-web);
    border: 1px solid var(--orange-web);
    color: var(--black-ff);
    }
}
</style>