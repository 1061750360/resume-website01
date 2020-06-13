<template>
    <div class="container" ref="contactMe">
        <div class="sky" ref="sky">
            <canvas ref="canvas"></canvas>
            <div class="bg-img"></div>
            <div class="filter"></div>
        </div>
        <div class="contact-me">
            <div class="content">
                <div class="wrapper" :class="flag ? 'animated rotateInDownLeft' : '' " >
                    <div class="title">
                        <span>CONTACT </span>
                        <span>FOR ME</span>
                    </div>
                </div>
                <ul class="words" :class="flag ? 'animated rotateInDownLeft' : '' " >
                    <li class="word">灵感</li>
                    <li class="word">代码</li>
                    <li class="word">梦想</li>
                    <li class="word">未来</li>
                </ul>
                <p class="desc" :class="flag ? 'animated rotateInUpRight' : '' " >
                    学习是一个充实愉悦的过程<br>
                    喜欢尝试，期待新鲜事物<br>
                    前端即兴趣，兴趣即未来<br>
                    行路有良友，便是捷径<br>
                    期待有机会与您共事！
                </p>
                <ul class="icons" :class="flag ? 'animated rotateInUpRight' : '' " >
                    <li class="icon">
                        <a href="https://github.com/1061750360" target="_blank" title="Github" class="iconfont icon-github"></a>
                    </li>
                    <li class="icon">
                        <a href="https://blog.csdn.net/qq_16687863" target="_blank" title="CSDN博客" class="iconfont icon-csdn"></a>
                    </li>
                    <li class="icon">
                        <a href="javascript:void(0);" title="微信" class="iconfont icon-icon"></a>
                        <div class="qrcode">
                            <img src="../../../assets/images/wechat_qrcode.png" alt="">
                        </div>
                    </li>
                    <li class="icon">
                        <a href="javascript:void(0);" title="QQ" class="iconfont icon-qq"></a>
                        <div class="qrcode">
                            <img src="../../../assets/images/qq_qrcode.png" alt="">
                        </div>
                    </li>
                    <li class="icon">
                        <a href="javascript:void(0);" title="邮箱" class="iconfont icon-email"></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ContactMe",
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
        if(newVal === 6){
          this.flag = true
        }
      }
    },
    mounted() {
      // 以下全是星空背景动画的代码
      this.$refs.sky.width = window.innerWidth;
      this.$refs.sky.height = window.innerHeight;
      function Star(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.r = Math.floor(Math.random() * 2) + 1;
        let alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
        this.color = "rgba(255, 255, 255," + alpha + ")"
      }
      Star.prototype.draw = function() {
        ctx.fillStyle = this.color; // 填充色
        ctx.shadowBlur = this.r * 2; // 阴影
        ctx.beginPath(); // 起始路径
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false); // 弧
        ctx.closePath(); // 闭合路径
        ctx.fill(); // 图型填充
      }
      Star.prototype.move = function() {
        this.y -= .5;
        if (this.y <= -10) this.y = _Height + 10;
        this.draw();
      }
      Star.prototype.die = function() {
        stars[this.id] = null;
        delete stars[this.id];
      }

      let canvas = this.$refs.canvas,
        ctx = canvas.getContext("2d"),
        _Width = this.$refs.sky.width,
        _Height = this.$refs.sky.height,
        mouseMoving = false,
        mouseMoveChecker,
        mouseX,
        mouseY,
        stars = [],
        maxDistFromCursor = 50,
        // 星星数量
        initStarsPopulation = 125;
      setCanvasSize();
      __init__();
      function setCanvasSize() {
        canvas.setAttribute("width", _Width)
        canvas.setAttribute("height", _Height)
      }
      function __init__() {
        ctx.strokeStyle = "white";
        ctx.shadowColor = "white";
        for (let i = 0; i < initStarsPopulation; i++) {
          stars[i] = new Star(i, Math.floor(Math.random() * _Width), Math.floor(Math.random() * _Height));
        }
        ctx.shadowBlur = 0;
        animate();
      }
      function animate() {
        ctx.clearRect(0, 0, _Width, _Height);
        for (let i in stars) {
          stars[i].move();
        }
        requestAnimationFrame(animate);
      }
    }
  }
</script>

<style lang="less" scoped>
    .container{
        position: relative;
        width: 100%;
        height: 100%;
        .contact-me{
            width: 500px;
            height: 460px;
            position: absolute;
            top: 45%;
            left: 50%;
            -webkit-transform: translate(-50%,-50%);
            -moz-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            -o-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
            &::before{
                position: absolute;
                top: 0;
                right: 0;
                content: '';
                width: 160px;
                height: 100px;
                border-top: 6px solid #ffd200;
                border-right: 6px solid #ffd200;
            }
            &::after{
                position: absolute;
                bottom: 0;
                left: 0;
                content: '';
                width: 100%;
                height: 40px;
                border: 6px solid #ffd200;
                border-top: none;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
            }
            .content{
                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transform: translate(-50%,-50%);
                -moz-transform: translate(-50%,-50%);
                -ms-transform: translate(-50%,-50%);
                -o-transform: translate(-50%,-50%);
                transform: translate(-50%,-50%);
                width: 400px;
                height: 400px;
                .wrapper{
                    display: inline-block;
                    .title{
                        color: #fff;
                        font-size: 40px;
                        font-weight: 800;
                        line-height: 70px;
                        border-bottom: 1px solid #ffd200;
                        span:nth-child(1){
                            color: #ffd200;
                        }
                    }
                }
                .words{
                    display: flex;
                    justify-content: space-around;

                    .word{
                        margin-top: 10px;
                        height: 50px;
                        line-height: 50px;
                        font-size: 24px;
                        &:nth-child(1){
                            color: #e3723c;
                        }
                        &:nth-child(2){
                            color: #84c800;
                        }
                        &:nth-child(3){
                            color: #33ccff;
                        }
                        &:nth-child(4){
                            color: #9e966e;
                        }
                    }
                }
                .desc{
                    margin-top: 14px;
                    font-size: 18px;
                    color: #fff;
                    line-height: 35px;
                    text-align: center;
                    font-weight: 800;
                }
                .icons{
                    padding-top: 10px;
                    display: flex;
                    justify-content: space-around;
                    .icon{
                        position: relative;
                        .iconfont{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 40px;
                            height: 40px;
                            background: #404040;
                            border-radius: 50%;
                            color: #fff;
                            font-size: 24px;
                            cursor: pointer;
                            &:hover{
                                background: @color-blue;
                            }
                        }
                        .icon-qq:hover,.icon-icon:hover{
                            &+.qrcode{
                                display: block;
                            }
                        }
                        .qrcode{
                            display: none;
                            position: absolute;
                            top: -220px;
                            left: 50%;
                            .transformX(-50%);
                            width: 200px;
                            height: 200px;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                            &::after{
                                content: "";
                                position: absolute;
                                left: 50%;
                                bottom: -9px;
                                .transformX(-50%);
                                width: 0;
                                height: 0;
                                border-left: 10px solid transparent;
                                border-top: 10px solid #fff;
                                border-right: 10px solid transparent;
                            }
                        }
                    }
                }
            }
        }
    }

    // 星空背景动画
    .sky{
        position: relative;
        width: 100%;
        height: 100%;
        background: radial-gradient(65% 105% at bottom center, #f7f7b6 10%, #e96f92 40%,#75517d  65%, #1b2947);
    }
    .bg-img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(../../../assets/images/xkbg.png) repeat-x center bottom;
    }
    .filter{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(240,0,0,0.5);
        mix-blend-mode: overlay;
        animation: colorChange 30s ease-in-out infinite;
        animation-fill-mode: both;
    }
    @keyframes colorChange {
        0%,
        100% {
            opacity: 0;
        }
        50% {
            opacity: 0.9;
        }
    }
</style>
