<template>
    <div class="card text-center">
        <router-link :to="{name: 'project', params:{ slug: project.slug }}">
        
            <img :src="`${store.imgPath}${project.image}`" :alt="project.title">
            <div class="card-body">
                <div class="proj-title mb-0 h5">
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
@use '../assets/style/partials/variables' as *;
.card{
    padding-left: 0;
    padding-right: 0;
    background-color: var(--rose-quartz);
}
.proj-title{
    color: var(--bordeaux);
}
</style>