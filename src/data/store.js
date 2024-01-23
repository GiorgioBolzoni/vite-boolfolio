import {reactive} from 'vue';

export const store = reactive({
   apiUrl:"http://127.0.0.1:8000/api",
   endpoints:{
      projects: '/projects',
      types: '/types',
      technologies: '/technologies',
   },
   imgPath: "http://127.0.0.1:8000/storage/",
   socialLink:[
      {
         name:'GitHub',
         icon:'fa-github',
         url: 'https://github.com/GiorgioBolzoni'
      },
      {
         name:'LinkedIn',
         icon:'fa-linkedin-in',
         url: 'https://www.linkedin.com/in/giorgio-bolzoni?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bn7riuv69SpmX1UUNOnq%2FBg%3D%3D'
      }
   ]
});