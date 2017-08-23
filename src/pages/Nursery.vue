<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper" class="banner">
            <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
                <a :href="slide.link"><img :src="slide.img" alt="slide.text"></a>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <section class="works">
            <h2 class="title" v-text="part1.title"></h2>
            <ul class="fb fxww container">
                <li v-for="item in part1.list">
                    <img :src="item.img" alt="">
                    <p class="time" v-text="item.time"></p>
                    <p class="desc" v-html="item.desc"></p>
                </li>
            </ul>
        </section>
        <section class="guarantee">
            <h2 class="title" v-text="part2.title"></h2>
            <ul class="fb fxww container">
                <li v-for="item in part2.list">
                    <img :src="item.img" alt="">
                    <h2 v-text="item.title"></h2>
                    <p v-html="item.desc"></p>
                </li>
            </ul>
        </section>
        <section class="lists">
            <div class="container">
                <h2 class="title" v-text="title3"></h2>
                <ul class="fb list">
                    <li v-for="item in part3">
                        <a :href="item.id" @click.prevent="viewDetail(item.id)">
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
            </div>
        </section>
        <section class="questions">
            <h2 class="center-block title" v-text="title4"></h2>
            <div class="container">
                <ul>
                    <li v-for="(item, index) in part4">
                        <p v-text="(index + 1) + '、' + item.title" @click="goArticle(item.id)"></p>
                    </li>
                </ul>
                <div class="center-block">
                    <a :href="more.url" class="more" v-text="more.text"></a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name: 'Matron',
        components: {
            swiper: swiper,
            'swiper-slide': swiperSlide
        },
        computed: {
            ...mapGetters({
                swiperSlides: 'banner',
                part3: 'recommended_nursemaid',
                part4: 'faq',
            })
        },
        data() {
            return {
                swiperOption: {
                    autoplay: 3000,
                    initialSlide: 1,
                    loop: true,
                    pagination: '.swiper-pagination',
                    onSlideChangeEnd: swiper => {
                        console.log('onSlideChangeEnd', swiper.realIndex)
                    }
                },
                part1: {
                    title: '育婴师的一天',
                    list: [{
                        img: 'http://img.padmom.com/Fn0G8-D9uGyxz7wywzSpFi3DoMsn?imageslim',
                        time: '06:00-07:00',
                        desc: '育婴师起床洗漱、准备</br/>给宝宝洗脸、口、脐、臀</br/>测量宝宝体温、体重</br/>宝宝和妈妈互动'
                    }, {
                        img: 'http://img.padmom.com/FipayGINKwUTQl4KgyTo-ZB3ky8u?imageslim',
                        time: '08:00-10:00',
                        desc: '宝宝喂奶</br/>带宝宝户外活动(根据天气情况)</br/>为宝宝洗澡、抚触，做被动操</br/>训练婴儿抬头、坐、爬、站、走、跑、跳等'
                    }, {
                        img: 'http://img.padmom.com/FhCqciB5NglVjLZIDQraxGAdSAF5?imageslim',
                        time: '10:00-12:00',
                        desc: '午餐</br/>喂宝宝辅食</br/>宝宝餐后清洗碗筷</br/>宝宝午休'
                    }, {
                        img: 'http://img.padmom.com/Fh6RF3_g2Fi0LO2hIndUa8WqV4Td?imageslim',
                        time: '12:00-13:00',
                        desc: '清洗宝宝牙胶</br/>清洗宝宝玩具</br/>清洗宝宝活动区域</br/>喂辅食果泥'
                    }, {
                        img: 'http://img.padmom.com/FtNYmrNON-6D_sx7dzzQ7xT7X6OE?imageslim',
                        time: '13:00-15:00',
                        desc: '与宝宝玩乐早教</br/>讲故事唱儿歌、锻炼宝宝视听、语言能力</br/>按月龄选择玩具、锻炼宝宝精细动作</br/>与宝宝游戏，锻炼宝宝大动作'
                    }, {
                        img: 'http://img.padmom.com/FmPNNhQ-gHAHw3EUs7g6IL0r6xWe?imageslim',
                        time: '16:30-20:00',
                        desc: '清洗宝宝奶瓶，餐具，热水消毒</br/>清洗宝宝吸奶器、储奶瓶、热水消毒</br/>清洗宝宝衣物、口水巾、围嘴、饭衣</br/>宝宝哄睡'
                    }]
                },
                part2: {
                    title: '服务保障',
                    list: [{
                        img: 'http://img.padmom.com/FgOkSQ1eycFg1X3oRtZGIzFCjGoG?imageslim',
                        title: '业内最高保险',
                        desc: '为客户提供高额的人身伤害险，<br />为服务员提供数万元的人身意外伤害险'
                    }, {
                        img: 'http://img.padmom.com/FukUnl0ZY75J4Teyivb11Ji6oPpo?imageslim',
                        title: '千元服务保证金',
                        desc: '妈妈派服务员上户前缴纳1000元服务保障金；<br />有效遏制甩单等损害用户权益的行为'
                    }, {
                        img: 'http://img.padmom.com/FsRDAa21Ht7K33eipauxUphkm-LN?imageslim',
                        title: '专业权威机构体检',
                        desc: '月嫂入职体检统一安排在知名连锁机构——慈铭体检；<br />检查结果不合格，妈妈派坚决不予录用。'
                    }, {
                        img: 'http://img.padmom.com/FuJFVqDCg4AiuaDyMTLQt5YYZpqJ?imageslim',
                        title: '全员犯罪记录调查',
                        desc: '妈妈派入职的月嫂，都需经过专业职场征信平台——较真背调；<br />犯罪记录、风险信息等 审查不过关，妈妈派坚决不予录用。'
                    }]
                },
                title3: '育婴师',
                // part3: ,
                title4: '常见问题',
                // part4: ,
                more: {
                    url: 'javascript:;',
                    text: '更多问题'
                }
            }
        },
        methods: {
            ...mapActions([
                'getAll'
            ]),
            viewDetail(id) {
                this.$router.push({
                    name: 'NurseryDetail',
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
        }
    }
</script>

<style scoped lang="scss">
    .works {
        overflow: hidden;
        background-color: #f7f7f7;
        .title {
            padding-top: 65px;
            padding-bottom: 36px;
            text-align: center;
            font-size: 30px;
            line-height: 30px;
            color: #000;
            background-color: #fff;
        }
        ul, ol {
            list-style-type: none;
            margin-top: 24px;
            margin-bottom: 8px;
            li {
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                width: 310px;
                height: 300px;
                margin-bottom: 30px;
                text-align: center;
                background-color: #fff;
                img {
                    width: 95px;
                    height: 95px;
                    margin-top: 28px;
                    margin-bottom: 16px;
                    border-radius: 50%;
                }
                .time {
                    font-size: 24px;
                    color: #000;
                }
                .desc {
                    margin-top: 10px;
                    margin-left: auto;
                    margin-right: auto;
                    font-size: 12px;
                    line-height: 24px;
                    color: #666;
                }
            }
        }
    }
    .guarantee {
        overflow: hidden;
        background-color: #fff;
        .title {
            padding-top: 38px;
            padding-bottom: 38px;
            text-align: center;
            font-size: 24px;
            line-height: 24px;
            color: #000;
            background-color: #fff;
        }
        ul, ol {
            list-style-type: none;
            margin-bottom: 51px;
            li {
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                width: 450px;
                height: 260px;
                margin-bottom: 30px;
                text-align: center;
                background-color: #f7f7f7;
                img {
                    width: 215px;
                    height: 109px;
                    margin-top: 19px;
                    margin-bottom: 10px;
                }
                h2 {
                    font-size: 18px;
                    color: #ff9966;
                }
                p {
                    margin-left: auto;
                    margin-right: auto;
                    padding-left: 25px;
                    padding-right: 25px;
                    font-size: 14px;
                    line-height: 28px;
                    color: #666;
                }
            }
        }
    }
    .lists {
        padding-bottom: 30px;
        background-color: #f7f7f7;
        .title {
            color: #ff9966;
            padding-top: 38px;
            padding-bottom: 38px;
            text-align: center;
            font-size: 24px;
            line-height: 24px;
        }
        .list {
            flex-wrap: wrap;
            list-style-type: none;
            margin: 0;
            padding: 0;
            font-weight: bold;
            font-family: Yuanti;
            li {
                margin-bottom: 43px;
                background-color: #fff;
                a {
                    width: 284px;
                    display: block;
                    overflow: hidden;
                    padding: 25px;
                    box-sizing: border-box;
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
                        font-family:Yuanti;
                    }
                    .name {
                        margin-bottom: 10px;
                        font-family:Yuanti;
                    }
                    .price {
                        margin-bottom: 10px;
                        font-size: 14px;
                        font-family:Yuanti;
                    }
                    .age {
                        font-family:Yuanti;
                        margin-top:6px;
                    }
                    .desc {
                        margin-bottom: 0px;
                        font-family:Yuanti;
                    }
                    .addr {
                        font-family:Yuanti;
                        margin-top:6px;
                    }
                }
            }
        }
    }
    .questions {
        .title {
            margin-top: 40px;
            margin-bottom: 40px;
            font-size: 40px;
            line-height: 40px;
            color: #000;
        }
        ul, ol {
            margin: 0;
            padding: 0;
            list-style-type: none;
            margin-bottom: 68px;
            li>p {
                margin-left: 7px;
                margin-right: 7px;
                font-size: 24px;
                line-height: 60px;
            }
        }
        .more {
            display: inline-block;
            text-align: center;
            text-decoration: none;
            font-size: 32px;
            padding: 11px 50px 8px 50px;
            margin-bottom: 58px;
            border-radius: 5px;
            border: 1px solid #333;
            color: #333;
        }
    }
</style>
