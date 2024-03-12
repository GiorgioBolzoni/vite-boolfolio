<template>
    <footer>
        <div class="py-5 container d-flex justify-content-between align-items-center">
            <div class="text-white">© Giorgio Bolzoni | 2023 | Boolean - Classe #107</div>
            <div class="d-flex column-gap-3">
                <a :href="icon.url" target="_blank" class="social-icon d-flex align-items-center justify-content-center" v-for="icon in store.socialLink">
                    <i class="social fa-brands px-3" :class="icon.icon"></i>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
import {store} from "../data/store";

    export default {
        name: 'AppFooter',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
    footer{
        background-color: var(--eerie-black);
        color: white;
        height: 120px;
        position: fixed;
        width: 100%;
        z-index: 99;
        bottom: 0;
    }
    .fa-brands{
        font-size: 2em;
    }
</style>