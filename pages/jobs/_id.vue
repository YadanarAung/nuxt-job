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
             LoginUser - {{loginUser}}
              <el-form ref="jobForm" :model="jobForm" :rules="rules" label-width="120px">
                    <el-form-item label="Title" prop="title">
                        <el-input v-model="jobForm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="Description" prop="description">
                        <el-input type="textarea" v-model="jobForm.description"></el-input>
                    </el-form-item>
                    <el-form-item label="Company" prop="company">
                        <el-input v-model="jobForm.company"></el-input>
                    </el-form-item>
                    <el-form-item label="Salary" prop="salary">
                        <el-input type="number" v-model="jobForm.salary"></el-input>
                    </el-form-item>
                     <el-form-item>
                        <el-button type="primary" @click="onSubmit('jobForm')">Update</el-button>
                        <el-button @click="onCancel">Cancel</el-button>
                    </el-form-item>
                </el-form>
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
  import nuxtStorage from 'nuxt-storage';
  import general from '~/mixins/general.js';
  export default {
    data() {
      return {
        jobForm : {},
        loginUser: '',
        rules: {
            title: [
                    { required: true, message: 'Please input title', trigger: 'blur' },
                ],
            description: [
                    { required: true, message: 'Please input description', trigger: 'blur' },
                ],
            company: [
                    { required: true, message: 'Please input company', trigger: 'blur' },
                ],
            salary: [
                    { required: true, message: 'Please input salary', trigger: 'blur' },
                ],
            }
        }
    },
    components:{
          asidebar
    },
    mixins:[general],
    methods:{
        onSubmit(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$axios.put(process.env.APP_URL+'/api/jobs/'+this.$route.params.id, {'title':this.jobForm.title, 'description':this.jobForm.description, 'company':this.jobForm.company, 'salary':this.jobForm.salary})
                    .then(res=>{
                        this.showSuccessDialog('Update job successfully!');
                        this.$router.push('/jobs');
                    })
                }
            })
        },
        onCancel(){
            this.$router.push('/jobs');
        }
    },
    mounted(){
        console.log("login user");
        console.log(nuxtStorage.localStorage.getData('user'));
            return this.$axios.get(process.env.APP_URL+'/api/jobs/'+this.$route.params.id)
            .then((res) => {
                this.jobForm = res.data.data;
            })
        }
    }
  
</script>
