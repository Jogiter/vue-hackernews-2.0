<template>
<div class="content">
    <!-- <swiper :options="swiperOption" ref="mySwiper" class="banner">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <a :href="slide.link"><img :src="slide.img" alt="slide.text"></a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(slide, index) in swiperSlides" :key="index">
                <a :href="slide.link"><img :src="slide.img" alt="slide.text"></a>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
    <div class="site-info">
        <p class="name" v-text="site.name"></p>
        <p class="desc" v-text="site.desc"></p>
    </div>
    <section class="services">
        <div class="fb container">
            <a class="service" v-for="service in services" :href="service.url">
                <img :src="service.img" alt="服务">
                <h4 class="title" v-text="service.title"></h4>
                <p class="desc" v-text="service.desc"></p>
            </a>
        </div>
    </section>
    <section class="articles" style="display:none">
        <div class="fb container">
            <div class="main">
                <a href="" @click.prevent="goArticle(articles[0].id)">
                    <img :src="articles[0] ? articles[0].banner : ''" alt="">
                    <!-- <h4 v-text="articles[0] ? articles[0].title : ''"></h4> -->
                </a>
            </div>
            <div class="fb right">
                <a href="" v-for="article in articles.slice(1)" @click.prevent="goArticle(article.id)">
                    <img :src="article.banner" alt="">
                    <!-- <h4 v-text="article.title"></h4> -->
                </a>
            </div>
        </div>
    </section>
    <section class="navbars container">
        <div class="title fa">
            <h2 :class="activeIndex === 0 ? 'active' : ''" @click="tabNav(0)">金牌月嫂</h2>
            <h2 :class="activeIndex === 1 ? 'active' : ''" @click="tabNav(1)">金牌育婴师</h2>
        </div>
        <ul class="fb list">
            <li v-for="item in lists">
                <a href="" @click.prevent="viewDetail(item.id)">
                    <div class="img">
                        <img :src="item.avatar" alt="">
                    </div>
                    <div class="info">
                        <p class="name fb"><span class="black" v-text="item.name"></span><span class="age" v-text="item.age"></span><span class="addr" v-text="item.birth_place"></span></p>
                        <p class="price" v-text="item.service_price"></p>
                        <p class="desc" v-text="item.experience"></p>
                    </div>
                </a>
            </li>
        </ul>
    </section>
</div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Vue from 'vue'
if (process.browser) {
    const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
    Vue.use(VueAwesomeSwiper)
}

export default {
    name: 'hello',
    components: {
        // swiper: swiper,
        // 'swiper-slide': swiperSlide
    },
    computed: {
        swiperSlides() {
            return this.$store.state.banner
        },
        articles() {
            return this.$store.state.articles
        },
        nanny() {
            return this.$store.state.recommended_nanny
        },
        nursemaid() {
            return this.$store.state.recommended_nursemaid
        },
        // ...mapGetters({
        //     swiperSlides: 'banner',
        //     articles: 'articles',
        //     nanny: 'recommended_nanny',
        //     nursemaid: 'recommended_nursemaid',
        // })
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            site: {
                name: '妈妈派育儿',
                desc: '国内首家综合服务育儿平台'
            },
            swiperOption: {
                autoplay: 3000,
                initialSlide: 1,
                loop: true,
                pagination: '.swiper-pagination',
                onSlideChangeEnd: swiper => {
                    console.log(swiper.realIndex)
                }
            },
            services: [{
                title: '月嫂服务',
                desc: '专业护理、生活护理、心理护理、疾病预防、产后恢复、带教培训产妇6维护理',
                img: 'http://img.padmom.com/Fm70v-pTUPWsoZkxHTOAyGc43Daa',
                url: '#matron'
            }, {
                title: '育婴师服务',
                desc: '生活照料、健康护理、常见疾病预防、宝宝早期训练、新生儿4维护理',
                img: 'http://img.padmom.com/FlPWYagmI5nKohhFPpozBxNFHdeh',
                url: '#nursery'
            }],
            lists: [],
            activeIndex: 0,
        }
    },
    methods: {
        // ...mapActions([
        //     'getAll'
        // ]),
        getAll(payload) {
            this.$store.dispatch('getAll', payload)
        },
        tabNav(index) {
            this.activeIndex = index
            this.lists = index == 1 ? this.nursemaid : this.nanny
        },
        viewDetail(id) {
            this.$router.push({
                name: 'MatronDetail',
                params: {
                    id
                }
            })
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
        this.getAll()
        setTimeout(() => {
            this.activeIndex = 0
            this.lists = this.nanny
        }, 200)
    }
}
</script>

<style lang="scss">
.content {
    background-color: #ededeb;
    .banner {
        background-color: #fff;
    }
    .site-info {
        text-align: center;
        font-size: 22px;
        line-height: 22px;
        overflow: hidden;
        background-color: #fff;
        .name {
            margin: 0;
            padding: 0;
            margin-top: 12px;
            color: #f7a953;
        }
        .desc {
            margin: 12px 0;
            padding: 0;
            color: #666666;
        }
    }
    .services {
        width: 100%;
        padding-top: 30px;
        padding-bottom: 30px;
        .service {
            width: 450px;
            text-align: center;
            background-color: #fff;
            img {
                width: 100%;
                height: auto;
                vertical-align: top;
            }
            h4 {
                font-size: 20px;
                margin-top: 18px;
                margin-bottom: 15px;
                color: #000;
                overflow: hidden;
            }
            p {
                padding: 0 50px 30px;
                overflow: hidden;
                font-size: 14px;
                line-height: 28px;
                color: #666;
            }
        }
    }
    .articles {
        width: 100%;
        padding-top: 30px;
        padding-bottom: 30px;
        background-color: #fff;
        a {
            display: block;
            overflow: hidden;
        }
        .main,
        .main a {
            width: 589px;
            height: 535px;
            overflow: hidden;
            position: relative;
            img {
                width: 100%;
                max-width: 100%;
                height: auto;
            }
            h4 {
                position: absolute;
                font-size: 32px;
                top: 15px;
                right: 15px;
                -webkit-transition: all 0.3s;
                -o-transition: all 0.3s;
                transition: all 0.3s;
                color: #000;
                display: table;
            }
        }
        .right {
            width: 365px;
            height: 535px;
            flex-direction: column;
            a {
                width: 100%;
                height: 169px;
                position: relative;
                img {
                    width: 100%;
                    max-width: 100%;
                    height: auto;
                }
                h4 {
                    position: absolute;
                    font-size: 20px;
                    top: 15px;
                    right: 15px;
                    -webkit-transition: all 0.3s;
                    -o-transition: all 0.3s;
                    transition: all 0.3s;
                    color: #000;
                    display: table;
                }
            }
        }
    }
    .navbars {
        padding-bottom: 30px;
        font-weight: bold;
        font-family: Yuanti;
        .title {
            margin-top: 35px;
            margin-bottom: 30px;
            font-size: 24px;
            color: #000;
            h2:hover {
                cursor: pointer;
            }
            .active {
                color: #ff9966;
            }
        }
        .list {
            flex-wrap: wrap;
            list-style-type: none;
            margin: 0;
            padding: 0;
            li {
                margin-bottom: 43px;
                background-color: #fff;
                a {
                    width: 284px;
                    display: block;
                    overflow: hidden;
                    padding: 25px;
                    box-sizing: border-box;
                    text-decoration: none;
                }
                .img {
                    width: 234px;
                    height: 234px;
                    overflow: hidden;
                    img {
                        width: 100%;
                    }
                }
                .info {
                    margin-top: 14px;
                    p {
                        margin: 0;
                        padding: 0;
                    }
                    padding: 0 10px;
                    font-size: 16px;
                    color: #9e9e9e;
                    .black {
                        font-size: 20px;
                        color: #333;
                        font-family: Yuanti;
                    }
                    .name {
                        margin-bottom: 10px;
                        font-family: Yuanti;
                    }
                    .price {
                        margin-bottom: 10px;
                        font-family: Yuanti;
                    }
                    .desc {
                        margin-bottom: 0;
                        font-family: Yuanti;
                    }
                    .age {
                        font-family: Yuanti;
                        margin-top: 6px;
                    }
                    .addr {
                        font-family: Yuanti;
                        margin-top: 6px;
                    }
                }
            }
        }
    }
}
</style>
