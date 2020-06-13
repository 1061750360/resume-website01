<template>
    <div class="content">
        <!--导航菜单-->
        <navigation :cur-index="curIndex" @select="selectItem"></navigation>
        <!--右侧小导航菜单-->
        <div id="menu" :class="playingStateCls">
            <span class="active" data-menuanchor='/page1'><a href="#/page1"></a></span>
            <span data-menuanchor='/page2'><a href="#/page2"></a></span>
            <span data-menuanchor='/page3'><a href="#/page3"></a></span>
            <span data-menuanchor='/page4'><a href="#/page4"></a></span>
            <span data-menuanchor='/page5'><a href="#/page5"></a></span>
            <span data-menuanchor='/page6'><a href="#/page6"></a></span>
            <div class="play-btn" @click.stop="togglePlay" >
                <i class="iconfont icon-play" v-show="!playingState"></i>
                <i class="iconfont icon-pause" v-show="playingState"></i>
            </div>
            <audio loop ref="audio" src="../../assets/audio/wuyuetian.mp3"></audio>
        </div>
        <full-page :options="options" ref="fullpage">
            <div class="section">
                <home></home>
            </div>
            <div class="section">
                <about-me :cur-index="curIndex"></about-me>
            </div>
            <div class="section">
                <skill :cur-index="curIndex"></skill>
            </div>
            <div class="section">
                <my-experience :cur-index="curIndex"></my-experience>
            </div>
            <div class="section">
                <my-projects :cur-index="curIndex"></my-projects>
            </div>
            <div class="section">
                <contact-me :cur-index="curIndex"></contact-me>
            </div>
        </full-page>
    </div>
</template>
<script>
  import Home from "./Home/Home";
  import Navigation from "../Navigation/Navigation";
  import AboutMe from "./AboutMe/AboutMe";
  import Skill from "./Skill/Skill";
  import ContactMe from './ContactMe/ContactMe';
  import MyExperience from './MyExperience/MyExperience'
  import MyProjects from './MyProjects/MyProjects'

  export default {
    name: "Fullpage",
    data () {
      return {
        curIndex: 1,
        playingState: false,
        options: {
          scrollOverflow: true,
          scrollBar: false,
          navigation: true,
          anchors: ['/page1', '/page2', '/page3','/page4', '/page5', '/page6'],
          menu: '#menu',
          sectionsColor: ['#41b883', '#F3F2F3', '#0798ec', '#1bcee6', '#fec401', '#925B4B']
        }
      }
    },
    methods: {
      selectItem(index){
        // 当在大导航菜单选择某项时，让fullpage滚动到对应的page
        this.curIndex = index
        this.$refs.fullpage.api.moveTo(index)
      },
      togglePlay(){
        // 切换歌曲播放状态
        if(!this.playingState){
          this.$refs.audio.play()
        }else{
          this.$refs.audio.pause()
        }
        this.playingState = !this.playingState
      },
      refreshPath(){
        // 在页面刷新的时候，判断当前路径，并刷新 this.curIndex 的值
        let path = this.$route.path
        let index
        if(path === '/' || path === '/page1'){
          index = 0
        }else{
          index = this.options.anchors.findIndex((item) => {
            return item === path
          })
        }
        this.curIndex = index + 1
      }
    },
    computed: {
      playingStateCls(){
        // 播放状态不同决定了音乐的背景图片是否处于旋转状态
        if(this.playingState){
          return 'running'
        }else{
          return 'paused'
        }
      }
    },
    watch: {
      $route(newVal){
        // 这个只有在页面路由变化时才触发，页面刷新时不触发，所以需要为页面刷新写一个处理函数  refreshPath()
        // 路由变化时，也即滚动fullpage页面时，让大导航菜单跟着刷新到对应的导航菜单项
        // 至于为什么要这样处理，主要是fullpage的事件回调函数有bug
        let index = this.options.anchors.findIndex((item) => {
          return item === newVal.path
        })
        this.curIndex = index + 1
      }
    },
    created() {
        this.refreshPath()
    },
    components: {
      Home,
      Navigation,
      AboutMe,
      Skill,
      ContactMe,
      MyExperience,
      MyProjects
    }
  }
</script>

<style lang="less" scoped>
    @keyframes breath {
        0%{
            box-shadow: 0 0 0 0 rgba(37, 143, 184, 1);
            background: #fff;
        }
        100%{
            box-shadow: 0 0 0 10px rgba(37, 143, 184, 0.1);
            background: #dddedc;
        }
    }
    @keyframes imgRotate {
        0%{
            transform: rotateZ(0);
        }
        100%{
            transform: rotateZ(360deg);
        }
    }
    
    .content{
        #menu{
            position: fixed;
            top: 50%;
            right: 3%;
            transform: translateY(-50%);
            z-index: 99;
            &.running{
                &::after{
                    animation-play-state: running;
                }
            }
            &.paused{
                &::after{
                    animation-play-state: paused;
                }
            }
            &::after{
                position: absolute;
                bottom: -40px;
                right: -13px;
                width: 40px;
                height: 40px;
                background: url("../../assets/images/music.jpg") no-repeat;
                background-size: contain;
                border-radius: 50%;
                transition: background 0.3s ease-in;
                content: '';
                animation: imgRotate 6s infinite linear;
            }
            &::before{
                position: absolute;
                top: 24px;
                left: 0;
                width: 6px;
                height: 230px;
                display: block;
                border-right: 1px dashed #8c7576;
                content: '';
            }
            span{
                display: block;
                position: relative;
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: #dddedc;
                margin: 24px auto!important;
                cursor: pointer;
                z-index: 999;
                &.active{
                    background: #fff;
                    animation: breath 2s infinite;
                }
                &::before{
                    width: 6px;
                    height: 6px;
                    content: '';
                    border-radius: 50%;
                    background: @color-blue;
                    display: block;
                    position: absolute;
                    left: 50%;
                    margin-left: -3px;
                    top: 50%;
                    margin-top: -3px;
                }
                a{
                    position: relative;
                    display: block;
                    width: 100%;
                    height: 100%;
                    z-index: 1000;
                }
            }
            .play-btn{
                position: absolute;
                bottom: -40px;
                right: -13px;
                width: 40px;
                height: 40px;
                z-index: 100;
                background: transparent;
                border-radius: 50%;
                cursor: pointer;
                .iconfont{
                    width: 40px;
                    height: 40px;
                    font-size: 28px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    opacity: 0;
                    &:hover{
                        opacity: 1;
                        background: rgba(255,255,255,0.5);
                    }
                }
            }
        }
    }
</style>
