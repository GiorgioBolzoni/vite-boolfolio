<template>
    <div class="card">
        <router-link :to="{name: 'project', params:{ slug: project.slug }}">
        
            <img :src="`${store.imgPath}${project.image}`" :alt="project.title">
            <div class="card-body">
                
                   <div>
                    {{ project.title }}
            
                   </div>
            </div>
        </router-link>
    </div>
</template>

<script>
import {store} from "../data/store";

    export default {
        name: 'ProjectCard',
        props:['project'],
        data(){
            return{
                store
            }
        }

    }
</script>

<style lang="scss" scoped>
.card{
    padding-left: 0;
    padding-right: 0;
}
</style>