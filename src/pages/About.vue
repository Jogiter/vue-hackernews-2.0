<template>
<div class="content">
    <swiper :options="swiperOption" ref="mySwiper" class="banner">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <a :href="slide.link"><img :src="slide.img" alt="slide.text"></a>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <section class="resonance">
        <div class="container center-block">
            <h2 class="title">关于妈妈派</h2>
            <p>妈妈派月嫂是定位</p>
            <p>专业化、年轻化的月嫂服务平台，</p>
            <p>我们提供如朋友一样的专业月嫂。<p>
            <p>因为我们知道，当你需要一个月嫂的时候，你其实需要的是一个专家，</p>
            <p>为你提供专业的服务和指导，所以她必须具有专业技能；</p>
            <p>因为我们还知道，当你需要一个月嫂的时候，你其实需要的是一个朋友，</p>
            <p>陪伴你度过初为人母喜悦之月，所以她必须善于沟通和交流；</p>
            <p class="light">"妈妈派月嫂，做你月子中的专业朋友!"</p>
        </div>
    </section>
    <section class="articles">
        <div class="container">
            <h2 class="title">公司展示</h2>
            <div class="fb">
                <div class="main">
                    <a :href="articles[0].url">
                        <img :src="articles[0].img" alt="">
                        <h4 v-text="articles[0].title"></h4>
                    </a>
                </div>
                <div class="fb right">
                    <a :href="article.url" v-for="article in articles.slice(1)">
                        <img :src="article.img" alt="">
                    </a>
                </div>
            </div>
        </div>
    </section>
    <baidu-map class="map" :center="{lng: 113.925678, lat: 22.494875}" :zoom="20" :scroll-wheel-zoom="false">
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-marker :position="{lng: 113.925678, lat: 22.494875}" :dragging="true">
        </bm-marker>
    </baidu-map>
</div>
</template>

<script>
import {
    swiper,
    swiperSlide
} from 'vue-awesome-swiper'
import { mapActions, mapGetters } from 'vuex'
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
    ak: 'P0NLNIhpiuSi1gXsPNEWoj6B'
})
export default {
    name: 'Parenting',
    components: {
        swiper: swiper,
        'swiper-slide': swiperSlide
    },
    computed: {
        ...mapGetters({
            swiperSlides: 'banner',
        })
    },
    data() {
        return {
            name: 'Join',
            swiperOption: {
                autoplay: 3000,
                initialSlide: 1,
                loop: true,
                pagination: '.swiper-pagination',
                onSlideChangeEnd: swiper => {
                    console.log('onSlideChangeEnd', swiper.realIndex)
                }
            },
            articles: [{
                url: 'javascript:;',
                img: 'http://img.padmom.com/Fk-KfW8xNNUe2D3TujC6jhbJmywB?imageslim',
            }, {
                url: 'javascript:;',
                img: 'http://img.padmom.com/FnfJVbihNhwLeKJIFejVVvB4FQSK?imageslim',
            }, {
                url: 'javascript:;',
                img: 'http://img.padmom.com/FpSvmdRgLjTb0ViIvGY3afAcx3_P?imageslim',
            }],
        }
    }
}
</script>

<style scoped lang="scss">
$base-color: #ff9966;
.resonance {
    .container {
        padding-left: 11px;
        padding-right: 11px;
    }
    .title {
        font-size: 24px;
        color: $base-color;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    p {
        font-size: 24px;
        color: #000;
        line-height: 50px;

    }
    .light {
        line-height: 50px;
        font-size: 32px;
        color: $base-color;
    }
}
.articles {
    .container {
        padding-left: 22px;
        padding-right: 22px;
    }
    .title {
        font-size: 24px;
        color: $base-color;
        text-align: center;
        margin-bottom: 25px;
    }
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #fff;
    a {
        display: block;
        overflow: hidden;
    }
    .main, .main a {
        width: 576px;
        height: 582px;
        overflow: hidden;
        position: relative;
        img {
            width: 100%;
            height: 100%;
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
        width: 348px;
        height: 582px;
        flex-direction: column;
        a {
            width: 100%;
            height: 276px;
            position: relative;
            img {
                width: 100%;
                height: 100%;
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
.map {
    width: 100%;
    height: 721px;
    display: none;
}
</style>
