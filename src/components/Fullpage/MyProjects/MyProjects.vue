<template>
    <div class="container">
        <div class="my-projects">
            <div class="content"></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "MyProjects"
  }
</script>

<style lang="less" scoped>
    .container{
        width: 100%;
        height: 100%;
        background: url("../../../assets/images/background5.jpg") no-repeat;
        background-size: cover;
        .my-projects{
            width: 100%;
            height: 100%;
            background: rgba(86, 83, 100, .7);
            .content{

            }
        }
    }
</style>