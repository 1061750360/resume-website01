<template>
    <div class="container">
        <div class="home">
            <div class="wrapper">
                <div class="header">
                    <p class="title">Hello,I'm Snake</p>
                    <p class="motto">Never, never, never, never give up</p>
                    <p class="name">我叫朽木自雕</p>
                    <p class="desc">一块自我雕刻的朽木</p>
                    <p class="email"><i class="iconfont icon-email"></i>m17364250251@163.com</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: "Home",
    mounted() {
      // 该类需要获取元素的一些属性，故需要在mounted中定义
      class ParallaxTiltEffect{
        constructor(element) {
          // 最大旋转角度
          this.maxRotateDeg = 20
          // 获取到元素
          this.element = document.querySelectorAll(element)[0]
          // 获取宽高的一半
          this.halfW = this.element.clientWidth / 2
          this.halfH = this.element.clientHeight /2
          this.init()
        }
        init(){
          // 绑定鼠标事件
          this.element.addEventListener("mouseenter", this.handleMouseEnter.bind(this))
          this.element.addEventListener("mousemove", this.handleMouseMove.bind(this))
          this.element.addEventListener("mouseleave", this.handleMouseLeave.bind(this))

        }
        computed(offsetX, offsetY){
          // 获取鼠标位置距离元素中心点的距离, 然后除以 this.halfW，得到百分比
          let dxPercent = (offsetX - this.halfW) / this.halfW
          let dyPercent = -(offsetY - this.halfH) / this.halfH
          let rotateX = this.maxRotateDeg * dxPercent
          let rotateY = this.maxRotateDeg * dyPercent
          this.setElementRotate(rotateY, rotateX)
        }
        handleMouseEnter(e){
          e = e || window.e
          let {offsetX, offsetY} = e
          // requestAnimationFrame设置刷新帧率随浏览器画面刷新而刷新
          requestAnimationFrame(() => {
            return this.computed(offsetX, offsetY)
          })
        }
        handleMouseMove(e){
          e = e || window.e
          let {offsetX, offsetY} = e
          // requestAnimationFrame设置刷新帧率随浏览器画面刷新而刷新
          requestAnimationFrame(() => {
            return this.computed(offsetX, offsetY)
          })
        }
        handleMouseLeave(){
          this.setElementRotate(0, 0)
        }
        setElementRotate(rotateX, rotateY){
          // js设置css变量的方式
          this.element.style.setProperty('--X', rotateX + "deg");
          this.element.style.setProperty('--Y', rotateY + "deg");
        }
      }
      // 创建一个实例
      new ParallaxTiltEffect(".header")
    }
  }
</script>

<style lang="less" scoped>
    .container{
        width: 100%;
        height: 100%;
        background: url("../../../assets/images/background1.jpg") no-repeat;
        background-size: cover;
        .home{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(86, 83, 100, .7);
            .wrapper{
                -webkit-transform: perspective(1000px);
                -moz-transform: perspective(1000px);
                -ms-transform: perspective(1000px);
                -o-transform: perspective(1000px);
                transform: perspective(1000px);
                transform-style: preserve-3d;
                -webkit-transform-style: preserve-3d;
                .header{
                    text-align: center;
                    color: #fff;

                    /* css定义变量的方式 */
                    --X: 0;
                    --Y: 0;
                    position: relative;
                    width: 550px;
                    height: 350px;
                    background-color: transparent;
                    border-radius: 10px;
                    cursor: pointer;
                    -webkit-transform: rotateX(var(--X)) rotateY(var(--Y));
                    -moz-transform: rotateX(var(--X)) rotateY(var(--Y));
                    -ms-transform: rotateX(var(--X)) rotateY(var(--Y));
                    -o-transform: rotateX(var(--X)) rotateY(var(--Y));
                    transform: rotateX(var(--X)) rotateY(var(--Y));
                    transition: all 0.5s ease;
                    box-shadow: 0 0 25px 10px hsla(0, 0%, 0%, .2);
                    *{
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                    }
                    .title{
                        font-family: 'Bree Serif', 'Arial', 'Helvetica', 'sans-serif', serif;
                        font-size: 70px;
                        font-weight: 800;
                        margin: 20px;
                    }
                    .motto{
                        font-family: 'Bree Serif', 'Arial', 'Helvetica', 'sans-serif', serif;
                        font-size: 25px;
                        font-weight: 800;
                        margin: 20px;
                    }
                    .name{
                        font-size: 20px;
                    }
                    .desc{
                        font-size: 20px;
                    }
                    .email{
                        font-size: 20px;
                        -webkit-user-select: text;
                        -moz-user-select: text;
                        -ms-user-select: text;
                        user-select: text;
                        .iconfont{
                            font-size: 18px;
                            font-weight: 800;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }
</style>
