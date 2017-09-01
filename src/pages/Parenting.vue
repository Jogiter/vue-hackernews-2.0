<template>
<div class="content">
    <!-- <swiper :options="swiperOption" ref="mySwiper" class="banner">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <a :href="slide.link"><img :src="slide.img" alt="slide.text"></a>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper> -->
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(slide, index) in swiperSlides" :key="index">
                <a :href="slide.link"><img :src="slide.img" alt="slide.text"></a>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
    <div class="navbars">
        <div class="fa container tabs">
            <span class="tab line" :class="activeIndex == index ? 'on' : ''" @click="changeTab(index, item.id)" v-for="(item, index) in tabs">{{item.name}}</span>
        </div>
    </div>
    <div class="lists">
        <div class="container">
            <div class="fb list" v-for="item in articles" @click.prevent="goArticle(item.id)">
                <div class="img"><img :src="item.banner" alt=""></div>
                <div class="info fb">
                    <h4 class="title" v-text="item.title"></h4>
                    <p class="desc" v-text="item.desc"></p>
                    <p class="date">发布时间：{{item.created_time.slice(0, 19).replace(/T/, ' ')}}</p>
                </div>
            </div>
            <div class="pagination fa">
                <button class="center-block prev" @click="getPrevPage" :class="pageno != 1 ? '' : 'disabled'" >上一页</button>
                <button class="center-block next" @click="getNextPage" :class="hasNext ? '' : 'disabled'" >下一页</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
// import {
//     swiper,
//     swiperSlide
// } from 'vue-awesome-swiper'

import Vue from 'vue'
if (process.browser) {
    const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
    Vue.use(VueAwesomeSwiper)
}

export default {
    name: 'Parenting',
    components: {
        // swiper: swiper,
        // 'swiper-slide': swiperSlide
    },
    computed: {
        swiperSlides() {
            return this.$store.state.banner
        },
        lists() {
            return this.$store.state.category
        },
        // ...mapGetters({
        //     swiperSlides: 'banner',
        //     lists: 'category',
        // }),
        tabs() {
            return this.lists.categories
        },
        articles() {
            return this.lists.articles
        },
        hasNext() {
            return this.lists.has_next
        }
    },
    data() {
        return {
            name: 'About',
            swiperOption: {
                autoplay: 3000,
                initialSlide: 1,
                loop: true,
                pagination: '.swiper-pagination',
                onSlideChangeEnd: swiper => {
                }
            },
            id: 1,
            pageno: 1,
            pagesize: 5,
            activeIndex: 0,
        }
    },
    methods: {
        // ...mapActions([
        //     'getCategory'
        // ]),
        getCategory(payload) {
            this.$store.dispatch('getCategory', payload)
        },
        changeTab(index, id) {
            this.id = id;
            this.pageno = 1
            this.activeIndex = index;
            this.getCategory({
                id: this.id,
                pagesize: this.pagesize,
                pageno: this.pageno
            })
        },
        getNextPage() {
            this.pageno = this.pageno + 1
            this.getCategory({
                id: this.id,
                pagesize: this.pagesize,
                pageno: this.pageno
            })
        },
        getPrevPage() {
            if (this.pageno > 1) {
                this.pageno = this.pageno - 1
                this.getCategory({
                    id: this.id,
                    pagesize: this.pagesize,
                    pageno: this.pageno
                })
            }
        },
        goArticle(id) {
            this.$router.push({
                name: 'ArticleDetail',
                params: {
                    id
                }
            })
        }
    },
    mounted() {
        this.getCategory({
            id: this.id,
            pagesize: this.pagesize,
            pageno: this.pageno
        })
    }
}
</script>

<style lang="scss">
.navbars {
    margin-top: 50px;
    margin-bottom: 0px;
    .tabs {
        background-color: #ff9966;
        border-radius: 5px;
        padding-left: 8px;
        padding-right: 8px;
        .tab {
            display: inline-block;
            font-size: 24px;
            line-height: 76px;
            color: #fff;
            &:hover {
                cursor: pointer;
            }
            &.on {
                color: #000;
            }
        }
        .tab+.tab.line:before {
            content: '';
            position: absolute;
            width: 1px;
            height: 22px;
            margin-left: -60px;
            margin-top: 28px;
            background-color: #fff;
        }
    }
}
.lists {
    background-color: #ededeb;
    padding-top: 43px;
    overflow: hidden;
    .list {
        background-color: #fff;
        padding: 25px 30px 32px;
        margin-bottom: 30px;
        .img {
            width: 200px;
            height: 200px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .info {
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            margin-left: 50px;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            .title {
                font-size: 20px;
                color: #000;
                margin-top: 20px;
                margin-bottom: 29px;
            }
            .desc {
                -webkit-flex: 1;
                -ms-flex: 1;
                flex: 1;
                font-size: 16px;
                line-height: 1.4;
                color: #333;
            }
            .date {
                font-size: 16px;
                color: #666;
                margin-bottom: 18px;
            }
        }
    }
    .pagination {
        a,
        button {
            width: 120px;
            height: 50px;
            margin-bottom: 30px;
            font-size: 20px;
            line-height: 50px;
            color: #000;
            background-color: #ff9966;
            border: 0;
            border-radius: 5px;
            &:hover {
                cursor: pointer;
            }
            &.disabled {
                cursor: not-allowed;
                background-color: #ccc;
            }
        }
    }
}
</style>
