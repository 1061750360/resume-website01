<template>
    <div class="box">
        <div class="nav-wrapper">
            <div class="nav-toggle" @click="toggleNav" :class="visitedCls">
                <div class="icon"></div>
            </div>
            <div class="nav-text">导航</div>
        </div>
        <transition name="slide">
            <div class="nav-menu-wrapper" v-show="showFlag" ref="NavMenuWrapper">
                <div class="nav-menu">
                    <ul class="items">
                        <li class="item" :key="item.id" v-for="item in menuList">
                            <a href="javascript:void(0);" :class="{'actived' : item.id === curIndex}" @click="selectItem(item.id)" >{{item.name}}<span class="line"></span></a>
                        </li>
                    </ul>
                    <div class="logo">
                        <img src="../../assets/images/logo.png" alt="">
                        <span class="text">朽木</span>
                        <div class="wrapper">
                            <span class="site-url">xmzd.wang</span>
                            <span class="qq">QQ:1061750360</span>
                        </div>
                        <span class="text">自雕</span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
  export default {
    name: "Navgation",
    data(){
      return {
        showFlag: false
      }
    },
    props: {
      curIndex: {
        type: Number,
        default: 1
      },
      menuList: {
        type: Array,
        default: () => [
          {id:1, name: "首页"},
          {id:2, name: "关于我"},
          {id:3, name: "技能掌握"},
          {id:4, name: "我的经历"},
          {id:5, name: "我的作品"},
          {id:6, name: "联系我"},
        ]
      }
    },
    methods: {
      toggleNav(){
        this.showFlag = !this.showFlag
        if(this.showFlag){
          this._disabledMouseWheel(this.$refs.NavMenuWrapper)
        }
      },
      selectItem(id){
        // 当某项被选中的时候，将当前的curIndex改为被选择的id，然后向父组件派发事件，并告诉哪一项被选择了，然后让父组件跳转到fullpage的第几页
        this.$emit("select", id)
        this.toggleNav()
      },
      _scrollFunc(evt) {
        evt = evt || window.event;
        if(evt.preventDefault) {
          // Firefox
          evt.preventDefault();
          evt.stopPropagation();
        } else {
          // IE
          evt.cancelBubble=true;
          evt.returnValue = false;
        }
        return false;
      },
      _disabledMouseWheel(obj) {
        // 禁用某个元素的鼠标滚轮事件
        if (document.addEventListener) {
          obj.addEventListener('DOMMouseScroll', this._scrollFunc, false);
        }//W3C
        obj.onmousewheel  = this._scrollFunc;//IE/Opera/Chrome
      }
    },
    computed: {
      visitedCls(){
        if(this.showFlag){
          return 'visited'
        }else{
          return ''
        }
      }
    }
  }
</script>

<style lang="less" scoped>
    .box{
        .nav-wrapper{
            position: fixed;
            right: 2%;
            top: 4%;
            z-index: 999;
            .nav-toggle{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: transparent;
                box-shadow: 0 3px 0 rgba(0,0,0,0.2);
                cursor: pointer;
                transition: all 0.5s ease;
                &:hover{
                    background: @color-blue;
                }
                &:hover+.nav-text{
                    opacity: 1;
                }
                .icon{
                    position: absolute;
                    top: 28px;
                    left: 15px;
                    width: 30px;
                    height: 4px;
                    background-color: white;
                    border-radius: 2px;
                    transition: all 0.5s ease;
                    &::before{
                        content: '';
                        position: absolute;
                        top: -10px;
                        width: 30px;
                        height: 4px;
                        background-color: white;
                        border-radius: 2px;
                        transition: all 0.5s ease;
                        transform-origin: left center;
                    }
                    &::after{
                        content: '';
                        position: absolute;
                        top: 10px;
                        width: 30px;
                        height: 4px;
                        background-color: white;
                        border-radius: 2px;
                        transition: all 0.5s ease;
                        transform-origin: left center;
                    }
                }
            }
            .visited{
                background: @color-CCC;
                .icon{
                    width: 0;
                    &::before{
                        transform: translate(3px,-1px) rotateZ(45deg);
                    }
                    &::after{
                        transform: translate(3px,1px) rotateZ(-45deg);
                    }
                }
            }
            .nav-text{
                opacity: 0;
                width: 60px;
                height: 30px;
                background: @color-blue;
                position: absolute;
                top: 73px;
                right: 0;
                -moz-border-radius: 5px;
                -webkit-border-radius: 5px;
                border-radius: 5px;
                text-align: center;
                line-height: 30px;
                color: #fff;
                font-size: 12px;
                transition: all 0.5s ease;
                &::before{
                    content: "";
                    position: absolute;
                    right: 22px;
                    top: -8px;
                    width: 0;
                    height: 0;
                    border-left: 8px solid transparent;
                    border-bottom: 8px solid @color-blue;
                    border-right: 8px solid transparent;
                }
            }
        }
        .nav-menu-wrapper{
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: rgba(0,0,0,0.3);
            z-index: 998;
            box-sizing: border-box;
            &.slide-enter-active,
            &.slide-leave-active{
                transition: all 0.5s ease;
                .nav-menu{
                    transition: all 0.5s ease;
                    .items,
                    .logo{
                        transition: all 0.5s ease;
                    }
                }
            }
            &.slide-enter,
            &.slide-leave-to{
                opacity: 0;
                .nav-menu{
                    right: -18%;
                    .items,
                    .logo{
                        right: -13%;
                    }
                }
            }
            .nav-menu{
                position: absolute;
                right: 0;
                width: 18%;
                border-bottom: @color-grey 100vh solid;
                border-left: transparent 180px solid;
                border-top: none;
                border-right: none;
                .items{
                    position: fixed;
                    top: 50%;
                    right: 1%;
                    transform: translateY(-50%);
                    .item{
                        width: 156px;
                        display: flex;
                        justify-content: flex-end;
                        a{
                            position: relative;
                            display: inline-block;
                            padding: 15% 30px;
                            color: #686967;
                            font-size: 24px;
                            transition: all 0.5s ease;
                            &.actived{
                                color: @color-blue;
                                .line{
                                    width: 100%;
                                }
                            }
                            &:hover{
                                color: @color-blue;
                                .line{
                                    width: 100%;
                                }
                            }
                            .line{
                                position: absolute;
                                top: 50%;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                margin: 0 auto;
                                display: block;
                                width: 0;
                                height: 2px;
                                background: @color-blue;
                                transition: all 0.5s ease;
                            }
                        }
                    }
                }
                .logo{
                    position: fixed;
                    bottom: 5%;
                    right: 5%;
                    display: flex;
                    justify-content: center;
                    img{
                        width: 50px;
                        height: 50px;
                    }
                    .text{
                        font-size: 34px;
                    }
                    .wrapper{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-content: center;
                        text-align: center;
                        .site-url{

                        }
                        .qq{
                            font-weight: 600;
                            color: #fff;
                            background: black;
                            padding: 0 5px;
                            border-radius: 4px;
                        }
                    }

                }
            }
        }
    }
</style>
