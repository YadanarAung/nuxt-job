<template>
  <section class="container">
    <el-container style="height: 500px; border: 1px solid #eee">
       <asidebar/>
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>Tom</span>
            </el-header>
            
            <el-main>
            <h1>Store</h1>
            Count-{{ jobCount }} - {{job_count}} - {{$store.state.job.jobCount}}
            -{{$store.state.test.testCount}}
            </el-main>
        </el-container>
    </el-container>
    
  </section>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
    import asidebar from '~/components/aside.vue';
    import { mapGetters, mapState } from "vuex";
    import nuxtStorage from 'nuxt-storage';
    import general from '~/mixins/general.js';
    export default {
        data() {
            return {
                
            }
        },
         computed: {    
        ...mapGetters({
            jobCount:"job/jobCount"
        }),

        ...mapState({
                job_count: state => state.job.jobCount
            })
      },
        components:{
            asidebar
        },
        mixins: [general],
        methods:{
            
        }
    };
</script>
