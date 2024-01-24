<template>
    <div class="container">
        <form class="mb-2" @submit.prevent="submitForm">
        <div class="">
    <label for="name" class="form-label">Name</label>
    <input type="name" class="form-control" id="name" aria-describedby="name" v-model="name">
    <div id="name" class="form-text">Insert your name.</div>
  </div>
  <div class="">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="">
    <label for="address" class="form-label">Your Address</label>
    <input type="address" class="form-control" id="address" aria-describedby="addressHelp" v-model="address">
    <div id="addressHelp" class="form-text">We'll never share your address with anyone else.</div>
  </div>

  <div class="">
    <label for="message" class="form-label">Your message</label>
    <textarea class="form-control" name="message" id="message" cols="30" rows="4" v-model="message"></textarea>
    <div id="messageHelp" class="form-text">Insert your message</div>
  </div>

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>


  <button type="submit" class="btn btn-primary me-3">Submit</button>
  <button type="reset" class="btn btn-danger">Reset</button>
</form>
    </div>
</template>

<script>
    import axios from 'axios';
    import { store } from '@/data/store';
    export default {
        name:'ContactForm',
        data(){
            return{
                store,
                name:'',
                email:'',
                address:'',
                message:'',
                errors:[],
            }
        },
        methods:{
            submitForm(){
                if(this.name && this.email && this.address && this.message){
                    const formdata = {
                    name: this.name,
                    email: this.email,
                    address: this.address,
                    message: this.message,
                    };
                    axios.post(this.store.apiUrl + '/contacts', formdata).then((res)=>{
                        // console.log(res.data);
                        this.name = '';
                        this.email= '';
                        this.address = '';
                        this.message = '';
                    }).catch((err)=>{
                        console.log('error', err);
                    })
                }else{
                    if (!this.name) {
                    this.errors.push('Name required.');
                    }else if (!this.email) {
                        this.errors.push('Email required.');
                    }else if (!this.address) {
                        this.errors.push('Address required.');
                    }else if (!this.message) {
                        this.errors.push('Message required.');
                    }
                }
                
                
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>