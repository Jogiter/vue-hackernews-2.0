<template>
<div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
    <v-recommond></v-recommond>
    <vue-up></vue-up>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Recommond from './components/Recommond.vue'
export default {
    name: 'app',
    components: {
        'v-header': Header,
        'v-footer': Footer,
        'v-recommond': Recommond
    }
}
</script>

<style lang="scss">
@import url("http://cdn.bootcss.com/Swiper/3.4.2/css/swiper.min.css");
@import url("./css/app.css");
@import url('./css/reset.css');
#app {
    min-width: 1000px;
    /*padding-top: 150px;*/
}

* {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.clearfix:after,
.clearfix:before {
    display: table;
    content: " ";
}

.active {
    color: #ff9933 !important;
}
.clearfix:after {
    clear: both;
}

.container {
    width: 1000px;
    margin: 0 auto;
}

.color-default {
    color: #ff9967;
}

.center-block {
    display: block;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

.text-center {
    text-align: center;
}

.text-lfet {
    text-align: lfet;
}

.text-right {
    text-align: right;
}

button,
input,
select {
    outline: none;
}

img {
    vertical-align: top;
}

a {
    text-decoration: none;
}

.desc {
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-all;
}

.swiper-wrapper img {
    width: 100%;
    height: auto;
}

.fb {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: space-between;
}

.fa {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: space-around;
}

.mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
}

.fxww {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

/*address css*/

.address select {
    width: 100px !important;
}

/*https://github.com/WickyNilliams/headroom.js*/

.headroom--pinned {
    transform: translateY(0);
}

.headroom--unpinned {
    transform: translateY(-100%);
}
</style>
