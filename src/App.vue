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
import Header from './components/Header'
import Footer from './components/Footer'
import Recommond from './components/Recommond'
export default {
    name: 'app',
    components: {
        'v-header': Header,
        'v-footer': Footer,
        'v-recommond': Recommond
    }
}
</script>

<style>
#app {
    min-width: 1000px;
    /*padding-top: 150px;*/
}
</style>
