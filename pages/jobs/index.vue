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
                <el-table :data="jobs">
                    <el-table-column prop="id" label="Id" width="140">
                    </el-table-column>
                    <el-table-column prop="title" label="Title" width="120">
                    </el-table-column>
                    <el-table-column prop="description" label="Description">
                    </el-table-column>
                    <el-table-column prop="company" label="Company">
                    </el-table-column>
                    <el-table-column prop="salary" label="Salary">
                    </el-table-column>
                   <el-table-column
                    fixed="right"
                    label="Operations"
                    width="120">
                    <template slot-scope="scope">
                        <el-button @click="edit(scope.row.id)" type="text" size="small">Edit</el-button>
                        <el-button @click="handleDelete(scope.row.id)" type="text" size="small">Delete</el-button>
                    </template>
                    </el-table-column>  
            </el-table>
            </el-main>
        </el-container>
    </el-container>
    <el-dialog
    title="Tips"
    :visible.sync="dialogVisible"
    width="30%"
    >
    <span>Are you sure to delete?</span>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirmDelete">Confirm</el-button>
    </span>
    </el-dialog>
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
                //jobs: [],
                dialogVisible: false ,
                id:0
            }
        },
         computed: {    
        ...mapGetters({
            jobs: "job/jobs",
            jobCount:"job/jobCount"
        }),

        ...mapState({
                job_count: state => state.job.jobCount
            })
      },
        asyncData ({ store, params }) {
            console.log('hello');
            console.log(process.env.APP_URL);
            nuxtStorage.localStorage.setData('user', 'yadanar');

            store.dispatch("job/setJobs")
          /*  return axios.get(process.env.APP_URL+'/api/jobs')
            .then((res) => {
                return {jobs:res.data.data}
            })*/
        },
        components:{
            asidebar
        },
        mixins: [general],
        methods:{
            edit(id){
                this.$router.push ("/jobs/"+id);
            },

            handleDelete(id){
               this.dialogVisible = true;
               this.id = id;
            },

            async confirmDelete(){
                await this.deleteJob();
                this.dialogVisible = false;
            },

            deleteJob(){
                this.$axios.delete(process.env.APP_URL+'/api/jobs/'+this.id).then(res=>{
                    this.$store.commit("job/DELETE_JOB", { id: this.id });
                    this.showSuccessDialog('Delete job successfully!');
               })
            }
        }
    };
</script>
