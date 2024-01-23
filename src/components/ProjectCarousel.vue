<template>
    <section id="projects-carousel">
      <div class="container">
        <div class="mb-3">Carosello progetti</div>
        <div class="text-center">
          <button class="btn">
            <router-link :to="{ name: 'projects' }" class="text-white">
              <span class="me-2">See all Projects</span>
              <i class="fa-solid fa-arrow-right"></i>
            </router-link>
          </button>
  
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div
                v-for="(project, index) in store.projects"
                :key="index"
                :class="{ 'carousel-item': true, active: index === 0 }"
                data-bs-interval="10000"
              >
                <div class="card border">
                  <img
                    :src="`${store.imgPath}${project.image}`"
                    :alt="project.title"
                  />
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { store } from "../data/store";
  
  export default {
    name: "ProjectsCarousel",
  };
  </script>
  
  <style lang="scss" scoped>
  @use "../assets/style/partials/variables" as *;
  </style>
  