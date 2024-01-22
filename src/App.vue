<template>
  <AppHeader></AppHeader>
  <div class="main">
    <router-view></router-view>
  </div>
  <AppFooter></AppFooter>
  
   
  </template>
  
  <script>
  import axios from "axios";
  
  import {store} from "./data/store";
  import test from './components/TestComponent.vue';
  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/AppFooter.vue';
    export default {
      components:{
        test,
        AppHeader,
        AppFooter,
      },
      data(){
        return{
          store,
          projects:[],
          technologies:[],
          types:[],
          currentPage: 1,
          lastPage:0
        }
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
      getAllTypes(){
        axios.get(store.apiUrl + this.store.endpoints.types).then((resp)=>{
          console.log(resp.data);
          this.types = resp.data.results;
        })
      },
      getAllTechnologies(){
        axios.get(store.apiUrl + this.store.endpoints.technologies).then((resp)=>{
          console.log(resp.data);
          this.technologies = resp.data.results;
        })
      },
    },
    mounted() {
      this.getAllProjects();
      this.getAllTypes();
      this.getAllTechnologies();
    }
    }
  </script>
  
  <style lang="scss" scoped>
    .main{
      height: calc(100vh - 180px);
    }
  </style>