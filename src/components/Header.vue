<template>
<header class="clearfix headroom">
    <div class="container fb">
        <div class="nav-header">
            <img :src="logo" alt="logo" class="logo" v-show="logo">
            <img :src="site" alt="妈妈派育儿" class="site" v-show="site">
        </div>
        <ul class="nav">
            <li v-for="item in navbars">
                <router-link :to="{ name: item.link }">{{item.text}}</router-link>
            </li>
        </ul>
    </div>
</header>
</template>

<script>
(function() {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
</script>


<script>
const logo = require('../assets/Index/logo.png')
const site = "http://img.padmom.com/FiLxtbPdZiuz0y-vuqAZ19EoNvIB"
// const Headroom = require('headroom.js')
export default {
    name: 'header',
    data() {
        return {
            logo,
            site,
            navbars: [{
                link: 'Index',
                text: '首页'
            }, {
                link: 'Matron',
                text: '月嫂'
            }, {
                link: 'Nursery',
                text: '育婴师'
            }, {
                link: 'Parenting',
                text: '育儿百科'
            }, {
                link: 'Join',
                text: '加入妈妈派'
            }, {
                link: 'About',
                text: '关于我们'
            }]
        }
    },
    mounted() {
        // var myElement = document.querySelector("header");
        // var headroom  = new Headroom(myElement);
        // headroom.init();
    }
}
</script>

<style scoped lang="scss">
ol,
ul {
    padding: 0;
    margin: 0;
}
header {
    background-color: #fff;
    .nav-header {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        -ms-align-items: center;
        align-items: center;
        font-family: Yuanti;
        .logo {
            vertical-align: bottom;
            width: 80px;
            height: 58px;
        }
        .site {
            vertical-align: bottom;
            width: 107px;
            height: 48px;
            margin-left: 8px;
            margin-right: 82px;
        }
    }
    .nav {
        float: right;
        width: 694px;
        height: 100px;
        line-height: 100px;
        list-style-type: none;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        justify-content: space-between;
        li {
            a {
                text-decoration: none;
                color: #585858;
                font-size: 18px;
                //font-weight: bold;
                font-family: 微软雅黑;
            }
        }
    }
}
</style>
