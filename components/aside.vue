<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']" @select="handleSelect">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-menu"></i>Jobs</template>
                <el-menu-item-group>
                    <el-menu-item index="1.1">List</el-menu-item>
                    <el-menu-item index="1.2">Add New</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>


<style>
  .el-aside {
    color: #333;
  }
</style>
<script>
    export default{
        methods: {
            handleSelect(key, keyPath) {
                this.activeIndex = key;
                if (key === "1.1")
                    this.$router.push("/jobs");
                else if(key == "1.2")
                    this.$router.push("/jobs/create");
                // this.$router.push ({name:"category-id", params: { id: key }/* query: { id:'AliceBlue'} */ });
            }
        }
    }
</script>