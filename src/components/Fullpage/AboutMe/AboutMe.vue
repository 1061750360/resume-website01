<template>
    <div class="container">
        <div class="about-me">
            <div class="content">
                <div class="title" :class="flag ? 'animated bounceInDown' : '' ">关于我</div>
                <div class="info">
                    <ul class="items" :class="flag ? 'animated bounceInRight' : '' ">
                        <li class="item">
                            <div class="img-wrapper">
                                <img src="../../../assets/images/i_age.svg" alt="">
                            </div>
                            <p>24岁</p>
                        </li>
                        <li class="item">
                            <div class="img-wrapper">
                                <img src="../../../assets/images/i_edu.svg" alt="">
                            </div>
                            <p>长江大学</p>
                        </li>
                        <li class="item">
                            <div class="img-wrapper">
                                <img src="../../../assets/images/i_site.svg" alt="">
                            </div>
                            <p>湖北/武汉</p>
                        </li>
                        <li class="item">
                            <div class="img-wrapper">
                                <img src="../../../assets/images/i_status.svg" alt="">
                            </div>
                            <p>寻找机遇</p>
                        </li>
                    </ul>
                </div>
                <div class="desc" :class="flag ? 'animated bounceInLeft' : '' ">
                    <p>
                        我叫WY，来自湖北咸宁，2019年毕业于长江大学物联网工程专业，毕业后在XXXX有限公司一直从事IT运维工作。
                        相较于运维工作，我更喜欢敲代码，并在主管的鼓励下开发了查询快件信息的桌面软件以及监控快件信息的钉钉机器人。
                    </p>
                    <p>
                        但这并不能让我满足，相较于其它语言，前端更易于去完成一个完整的项目，于是我开始学习研究前端技术。
                        从最基础的前端三件套CSS、HTML、Javascript到less、ES6、TS，再从Jquery、bootstrap等框架到基于MVVM的Vue框架。
                        这个过程让我收起了对前端页面仔的呆板印象，取而代之的是一种敬畏的心态。现在前端业务的复杂程度已经不输于后端。
                    </p>
                    <p>
                        我乐于分享，长期活跃在CSDN，在学习过程中，并将爬的坑都记录在自己的博客。并且在GitHub上发布了一些开源项目。
                    </p>
                </div>
                <div class="blog-addr" :class="flag ? 'animated bounceInUp' : '' " >
                    <a href="https://me.csdn.net/qq_16687863" target="_blank">前往我的博客</a>
                    <a href="https://github.com/1061750360" target="_blank">前往我的GitHub</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "AboutMe",
    data(){
      return {
        flag: false
      }
    },
    props: {
      curIndex: {
        type: Number,
        default: 1
      }
    },
    watch: {
      curIndex(newVal){
        if(newVal === 2){
          this.flag = true
        }
      }
    }
  }
</script>

<style lang="less" scoped>
    .container{
        width: 100%;
        height: 100%;
        background: url("../../../assets/images/background2.jpg") no-repeat;
        background-size: cover;
        .about-me{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(86, 83, 100, .7);
            .content{
                width: 80%;
                height: 80%;
                color: @color-font;
                .title{
                    font-size: @font-size-title;
                    text-align: center;
                    margin-bottom: 60px;
                }
                .info{
                    width: 80%;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    .items{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-content: space-between;
                        .item{
                            width: 200px;
                            height: 155px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .img-wrapper{
                                width: 100px;
                                height: 100px;
                                border-radius: 50%;
                                background: @color-blue;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                img{
                                    width: 80px;
                                    height: 80px;
                                }
                            }
                        }
                    }
                }
                .desc{
                    width: 80%;
                    margin: 40px auto;
                    font-size: 18px;
                    p{
                        margin-bottom: 10px;
                        line-height: 27px;
                    }
                }
                .blog-addr{
                    width: 80%;
                    margin: 0 auto;
                    a{
                        font-size: 18px;
                        color: @color-blue;
                        &:nth-child(1){
                            margin-right: 5px;
                        }
                    }

                }
            }
        }
    }

</style>
