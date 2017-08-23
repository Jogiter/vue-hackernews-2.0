<template>
    <div class="detail">
        <div class="container order">
            <div class="fb list">
                <div class="img"><img :src="info.avatar" alt=""></div>
                <div class="info fb">
                    <h4 class="title" v-text="info.name"></h4>
                    <div class="desc">
                        <p>年龄：<span v-text="info.age"></span></p>
                        <p>籍贯：<span v-text="info.birth_place"></span></p>
                        <p>服务价格：<span class="color-default" v-text="info.service_price"></span></p>
                    </div>
                    <button class="btn-order" v-text="btnText" @click="showOrder"></button>
                </div>
            </div>
        </div>
        <section class="skills">
            <div class="container">
                <h2>服务技能</h2>
                <div class="fb bs">
                    <div class="service" v-for="service in services">
                        <img :src="service.img" alt="服务">
                        <h4 class="title" v-text="service.title"></h4>
                        <p class="desc" v-html="service.desc"></p>
                    </div>
                </div>
            </div>
        </section>
        <section class="promises">
            <div class="container">
                <h2>服务保障</h2>
                <div class="promise" v-for="item in items">
                    <p class="name" v-text="item.name"></p>
                    <p class="desc" v-text="item.desc"></p>
                </div>
            </div>
        </section>

        <div id="form" v-show="showForm">
            <h2 class="center-block title">提交预约信息</h2>
            <input type="text" class="center-block tel" placeholder="请填写您的手机号" v-model="phone" maxlength="11">
            <input type="text" class="center-block name" placeholder="请填写您的称呼" v-model="name" maxlength="6">
            <button class="center-block submit" @click="submit">提交</button>
        </div>
        <div class="mask" v-show="showForm" @click="hideOrder"></div>

        <div id="pop" v-show="showPop">
            <div class="info"><img src="http://img.padmom.com/FkSCJcsdX7mP7p3dV5u4_YpKrWK_" alt=""><span class="txt">预约成功</span></div>
            <p class="remind">请耐心等待，客户经理会尽快电话和您沟通</p>
        </div>
        <div class="mask" v-show="showPop" @click="hidePop"></div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'MatronDetail',
        computed: {
            ...mapGetters({
                swiperSlides: 'banner',
                info:  'server',
                // articles: 'articles',
                // nursemaid: 'recommended_nursemaid',
            })
        },
        data() {
            return {
                btnText: '立即预约',
                showForm: false, // 展示预约浮层
                name: '',
                phone: '',
                showPop: false,
                services: [{
                    title: '宝宝护理',
                    desc: '宝宝常见疾病预防<br />婴儿大小便的清洁与记录<br />口腔、肚脐、臀部的清洁<br />拍嗝溢奶处理，喂奶方式及技巧传授<br />每日眼、耳、鼻的清洗<br />喂奶、喂水、换尿布<br />日光浴、空气浴、洗浴<br />黄疸观察护理脐带消毒护理<br />婴儿衣物及奶具的清洁消毒<br />宝宝体温体重测量及记录',
                    //img: 'http://padmom.com/static/img/7.png'
                    img:'http://img.padmom.com/Fm70v-pTUPWsoZkxHTOAyGc43Daa?imageslim'
                }, {
                    title: '宝宝早教',
                    desc: '婴儿哄睡<br />婴儿按摩、抚触<br />婴儿游泳、锻炼身体指导<br />婴儿情绪安抚<br />情感与社会行为培养<br />亲子互动游戏设计<br />婴儿洗澡指导<br />感知与语言动作训练<br />亲子互动指导<br />早期情感和潜能开发',
                    //img: 'http://padmom.com/static/img/8.png'
                    img:'http://img.padmom.com/FlPWYagmI5nKohhFPpozBxNFHdeh'
                }],
                items: [{
                    name: '慈铭体检',
                    desc: '联合慈铭体检机构，全国连锁专业权威,检查结果不合格的服务员，妈妈派坚决不予录用，为全国客户送去最贴心的健康保障！'
                }, {
                    name: '背景调查',
                    desc: '专业职场征信平台——较真背调，对服务员的犯罪记录、风险信息等进行核实，对于审查不过关的服务员，妈妈派坚决不予录用。'
                }, {
                    name: '服务督导',
                    desc: '自上户开始，月嫂将严格执行我们规定的“6+4标准化服务”并设有专人每日督导，最大化保证客户的服务质量。'
                }, {
                    name: '纠纷保障',
                    desc: '我们为所有上户月嫂，缴纳上户保险和服务保障金，遇到任何可能的意外，我们都应对自如。'
                }]
            }
        },
        methods: {
            ...mapActions([
                'getServerInfo',
                'order'
            ]),
            showOrder() {
                this.showForm = true
            },
            hideOrder() {
                this.showForm = false
            },
            hidePop() {
                this.showPop = false
            },
            submit() {
                this.order({
                    data: {
                        name: this.name,
                        phone: this.phone,
                        babysitter_id: this.$route.params.id
                    },
                    callback: res => {
                        this.showForm = false
                        this.showPop = true
                    }
                })
            }
        },
        mounted() {
            this.getServerInfo({
                id: this.$route.params.id
            })
        }
    }
</script>

<style scoped lang="scss">
.detail {
    background-color: #ededeb;
    overflow: hidden;
    .order {
        margin-top: 40px;
        background-color: #fff;
        .list {
            background-color: #fff;
            padding: 32px 30px 25px;
            .img {
                width: 203px;
                height: 203px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .info {
                -webkit-flex: 1;
                -ms-flex: 1;
                flex: 1;
                margin-left: 100px;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                .title {
                    font-size: 20px;
                    font-weight: bold;
                    color: #000;
                    margin-top: 15px;
                    margin-bottom: 9px;
                }
                .desc {
                    -webkit-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    font-size: 18px;
                    line-height: 32px;
                    color: #666;
                }
                .btn-order {
                    width: 216px;
                    height: 51px;
                    margin-top: 15px;
                    line-height: 51px;
                    text-align: center;
                    color: #fff;
                    font-size: 22px;
                    border: 0;
                    background-color: #ff9967;
                }
            }
        }
    }
    .skills {
        width: 100%;
        padding-top: 55px;
        .container {
            background-color: #fff;
            h2 {
                line-height: 87px;
                font-size: 20px;
                font-weight: bold;
                margin-left: 57px;
            }
            .bs {
                padding-bottom: 34px;
                width: 788px;
                margin-left: auto;
                margin-right: auto;
                .service {
                    width: 336px;
                    background-color: #fff;
                    img {
                        width: 100%;
                        height: auto;
                        vertical-align: top;
                    }
                    .title {
                        margin-top: 17px;
                        margin-bottom: 38px;
                        font-size: 18px;
                        font-weight: bold;
                        color: #000;
                        overflow: hidden;
                    }
                    .desc {
                        overflow: hidden;
                        font-size: 16px;
                        line-height: 34px;
                        color: #333;
                    }
                }
            }
        }
    }
    .promises {
        margin-top: 70px;
        margin-bottom: 76px;
        overflow: hidden;
        .container {
            background-color: #fff;
            padding: 75px 60px 46px;
            h2 {
                font-size: 22px;
                color: #000;
                font-weight: bold;
            }
            .promise {
                margin-top: 30px;
                .name {
                    font-size: 16px;
                    line-height: 32px;
                }
                .desc {
                    font-size: 16px;
                    line-height: 32px;
                }
            }
        }
    }
    #form {
        position: fixed;
        left: 50%;
        top: 40%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        background-color: #fff;
        width: 400px;
        height: 270px;
        z-index: 999;
        padding: 30px;
        .title {
            font-size: 28px;
            line-height: 1.4;
            font-weight: bold;
        }
        input {
            width: 240px;
            height: 34px;
            padding: 6px 12px;
            margin-top: 15px;
            margin-bottom: 15px;
            font-size: 14px;
            line-height: 1.42857143;
            color: #555;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ccc;
            border-radius: 4px;
            text-align: left !important;
        }
        .submit {
            border: 0;
            width: 240px;
            height: 34px;
            padding: 6px 12px;
            margin-top: 15px;
            margin-bottom: 15px;
            font-size: 14px;
            line-height: 1.42857143;
            background-color: #ff9967;
            margin-top: 20px;
            margin-bottom: 20px;
            color: #fff;
        }
    }
}
#pop {
    position: fixed;
    left: 50%;
    top: 40%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 600px;
    height: 270px;
    z-index: 999;
    padding: 30px;
    padding: 20px;
    .info {
        text-align: center;
        margin-top: 60px;
        margin-bottom: 40px;
        font-size: 20px;
        color: #ff9967;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        -ms-align-items: center;
        align-items: center;
        justify-content: center;
        .txt {
            margin-top: 7px;
        }
    }
    .remind {
        text-align: center;
        font-size: 20px;
        color: #666;
    }
}
</style>
