<template>
<div class="content">
    <swiper :options="swiperOption" ref="mySwiper" class="banner">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <a :href="slide.link"><img :src="slide.img" alt="slide.text"></a>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <section class="services">
        <div class="fb container">
            <div class="service" v-for="service in services">
                <div class="img">
                    <img :src="service.img" alt="服务">
                </div>
                <h4 class="title" v-text="service.title"></h4>
                <p class="desc" v-text="service.desc"></p>
            </div>
        </div>
    </section>
    <div class="lists">
        <div class="container">
            <h4 class="center-block title">感言</h4>
            <div class="fb list" v-for="item in lists">
                <div class="img"><img :src="item.img" alt=""></div>
                <div class="info fb">
                    <h4 class="name">{{item.type}}  {{item.name}}<small>{{item.age}}  {{item.addr}}</small></h4>
                    <p class="date">{{item.date}}</p>
                    <p class="desc" v-text="item.desc"></p>
                </div>
            </div>
            <button class="center-block more" style="display:none" @click="join">加入妈妈派</button>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import {
    swiper,
    swiperSlide
} from 'vue-awesome-swiper'
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
                    // console.log('onSlideChangeEnd', swiper.realIndex)
                }
            },
            services: [{
                title: '稳定的收入',
                desc: '对于符合要求的月嫂，妈妈派承诺1年提供8个单，并且保证每个单的到手收入。不足部分由公司补偿。',
                img: 'http://img.padmom.com/Ftr7DAN1EQmeC0Bz8Ru4PqsRMF4x?imageslim'
            }, {
                title: '专业 · 保障',
                desc: '专业的设备 专人的对接 月嫂在线咨询通道 月子精美电子名片 工作保险',
                img: 'http://img.padmom.com/FnpKQSZi-e0Rx5t381_8GDPhhADx?imageslim'
            }],
            lists: [{
                type: '月嫂',
                name: '吴洋',
                age: 36,
                addr: '广东广州',
                img: 'http://img.padmom.com/Flww7H5pLcTxJ1NdZaUBSxuiocRC',
                desc: '我是月嫂吴洋，在来到妈妈派之前我已经从事了月嫂5年，从早期的自己找私单到各个平台挂单，再到后来到了妈妈派，让我体会最深的就是每次下单以后回到公司，公司的老师们都会和我谈心，问我有没有什么委屈难过的事情，可以和她们说，每次聊天完，心情都很美丽，还有每次休息时候都会参加公司举办的月嫂沙龙，让我学会到了很多知识，谢谢妈妈派，我会尽心尽力的做好自己的每一个单的。',
                date: '2017年6月7日加入妈妈派'
            }, {
                type: '月嫂',
                name: '张丽',
                age: 45,
                addr: '湖北荆门',
                img: 'http://img.padmom.com/FjYDf_Sczax_DT5xSt9byN_Uagyq',
                desc: '我是月嫂张丽，已经做了10年的月嫂了，10年前偶然进入了这个行业，欣然的发现自己尽然非常的喜欢小宝宝，从此爱上了这个职业。后来经过姐妹介绍，来到了妈妈派，入职时候参加了公司的入职考试以及体检，培训老师和我们说了公司的一个管理制度，之后的话一直在妈妈派接单，17年都被老师们排满了，感谢老师们。',
                date: '2017年6月5日加入妈妈派'
            }, {
                type: '育婴师',
                name: '刘厚芳',
                age: 34,
                addr: '广西南宁',
                img: 'http://img.padmom.com/FulrHZfrRsFZ8If1OCKwoUe0epNZ',
                desc: '我是月嫂刘厚芳，虽然我只有30出头，不过我已经从事月嫂4年多了，从刚到妈妈派时候的10800已经升级到了12800，在服务的过程中，我发现专业的学习培训和以往的单靠经验积累大有不同，所以我参加了高级催乳师，高级产康师的培训，并且获得了相关的证书，我正在朝着15800的方向而努力。',
                date: '2017年6月1日加入妈妈派'
            }]
        }
    },
    methods: {
        ...mapActions([
            'getAll'
        ]),
        join() {
            this.$router.push({
                name: 'Join'
            })
        }
    },
    mounted() {
        this.getAll()
    }
}
</script>

<style scoped lang="scss">
.services {
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    .service {
        width: 450px;
        text-align: center;
        background-color: #ededeb;
        .img {
            width: 100%;
            height: 363px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        h4 {
            font-size: 20px;
            margin-top: 18px;
            margin-bottom: 15px;
            color: #000;
            overflow: hidden;
        }
        p {
            padding: 0 50px 30px 50px;
            overflow: hidden;
            font-size: 14px;
            line-height: 1.4;
            color: #666;
        }
    }
}
.lists {
    background-color: #ededeb;
    padding-top: 0px;
    overflow: hidden;
    .title {
        font-size: 24px;
        color: #ff9966;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .list {
        background-color: #fff;
        padding: 16px 31px;
        margin-bottom: 50px;
        .img {
            width: 275px;
            height: 275px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .info {
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            margin-left: 77px;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            .name {
                font-size: 24px;
                color: #ff9966;
                margin-top: 43px;
                margin-bottom: 29px;
                small {
                    margin-left: 90px;
                    font-size: 16px;
                    color: #333;
                }
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
                margin-bottom: 19px;
            }
        }
    }
    .more {
        width: 293px;
        height: 81px;
        margin-top: -10px;
        margin-bottom: 33px;
        font-size: 32px;
        line-height: 53px;
        color: #ff9966;
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 0;
        &:hover {
            cursor: pointer;
            border-color: #ff9966;
        }
    }
}
</style>
