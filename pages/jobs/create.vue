<template>
  <section class="container">
    <el-container style="height: 500px; border: 1px solid #eee">
        <asidebar/>
        <el-container>
            <el-main>
                <el-form ref="jobForm" :model="jobForm" :rules="rules" label-width="120px" class="demo-ruleForm">
                    <el-form-item label="Title" prop="title">
                        <el-input v-model="jobForm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="Description" prop="desc">
                        <el-input type="textarea" v-model="jobForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="Company" prop="company">
                        <el-input v-model="jobForm.company"></el-input>
                    </el-form-item>
                    <el-form-item label="Salary" prop="salary">
                        <el-input type="number" v-model="jobForm.salary"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('jobForm')">Create</el-button>
                        <el-button @click="onCancel">Cancel</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
           
        </el-container>
    </el-container>
    
  </section>
</template>

<style>
  
</style>

<script>
    import asidebar from '~/components/aside.vue';
    import headerbar from '~/components/header.vue';
    import { mapState } from "vuex";
    import general from '~/mixins/general.js';
    export default {
        data() {
            return {
                jobForm : {
                title:'',
                company:'',
                desc:'',
                salary:''
                },
                rules: {
                    title: [
                            { required: true, message: 'Please input title', trigger: 'blur' },
                        ],
                    desc: [
                            { required: true, message: 'Please input description', trigger: 'blur' },
                        ],
                    company: [
                            { required: true, message: 'Please input company', trigger: 'blur' },
                        ],
                    salary: [
                            { required: true, message: 'Please input salary', trigger: 'blur' },
                        ],
                    }
                };
            },
        components:{
            asidebar,
            headerbar
        },
        mixins: [general],
        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$axios.post(process.env.APP_URL+'/api/jobs', {'title':this.jobForm.title, 'description':this.jobForm.desc, 'company':this.jobForm.company, 'salary':this.jobForm.salary}).then(res=>{
                        this.showSuccessDialog('Save job successfully!');
                        this.$router.push('/jobs');
                    })
                } 
            });
            },
            onCancel(){
                this.$router.push('/jobs');
            }
        },
        mounted(){
            //localStorage.clear();
            // return console.log(this.cars);
        },
        computed: {
            ...mapState({
                cars: state => state.cars.list,
                car: state => state.cars.car
            })
        }
    };
</script>
