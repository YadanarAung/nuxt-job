<template>
  <section class="container">
    <el-container style="height: 500px; border: 1px solid #eee">
       
        <el-container>
            <el-main>
                <h1>Direcitves</h1>

                <div v-demo="{ color: 'red', text: 'hello!' }"></div>
                 <input v-focus>
            </el-main>
           
        </el-container>
    </el-container>
    
  </section>
</template>

<style>
</style>

<script>
    import general from '~/mixins/general.js';
    export default {
        data() {
               
            },
        components:{
        },
        mixins: [general],
        methods: {
           
        },
        mounted(){
            //localStorage.clear();
            // return console.log(this.cars);
        },
        computed: {
          
        }
    };
</script>
