<template>
<section class="recommed">
    <div class="fa container" v-show="type === 'recommed'">
        <!-- <img src="../assets/Index/logo.png" alt="logo" class="logo"> -->
        <span class="desc" v-text="text"></span>
        <a :href="btn.url" class="btn" :target="btn.target" v-text="btn.text" @click.prevent="tabView"></a>
    </div>
    <div class="getprice" v-show="type === 'getprice'">
        <div class="header fa">
            <!-- <img src="../assets/Index/logo.png" alt="logo" class="logo"> -->
            <span class="desc" v-text="text"></span>
            <img src="../assets/Index/close.png" alt="" class="close" @click.prevent="tabView">
        </div>
        <div class="form">
            <h2 class="center-block title">请填写您的需求</h2>
            <div class="fb item">
                <div class="left">
                    <p>所在地区：</p>
                </div>
                <div class="right fb">
                    <v-distpicker @selected="onSelected"></v-distpicker>
                </div>
            </div>
            <div class="fb item">
                <div class="left">
                    <p>所需服务：</p>
                </div>
                <div class="right fb">
                    <div class="input big two text-center" :class="serviceType==1 ? 'on' : ''" @click.prevent="chooseType(1)">月嫂</div>
                    <div class="input big two text-center" :class="serviceType==2 ? 'on' : ''" @click.prevent="chooseType(2)">育婴师</div>
                </div>
            </div>
            <div class="fb item" v-show="serviceType==1">
                <div class="left">
                    <p>预产期：</p>
                </div>
                <div class="right fb">
                    <select class="input" v-model="date">
                        <option :value="item" v-for="item in dateList" v-text="item"></option>
                    </select>
                </div>
            </div>
            <div class="fb item" v-show="serviceType==2">
                <div class="left">
                    <p>宝宝年龄：</p>
                </div>
                <div class="right fb">
                    <select class="input" v-model="nursy">
                        <option :value="item" v-for="item in nursyList" v-text="item"></option>
                    </select>
                </div>
            </div>
            <div class="fb item">
                <div class="left">
                    <p>您的称呼：</p>
                </div>
                <div class="right fb">
                    <div class="input big"><input type="text" v-model="username" maxlength=6 placeholder="如李先生/李小姐"></div>
                </div>
            </div>
            <div class="fb item">
                <div class="left">
                    <p>手机号码：</p>
                </div>
                <div class="right fb">
                    <div class="input big"><input type="text" v-model="mobile" maxlength=11 placeholder="具体信息发送到你的手机"></div>
                </div>
            </div>
            <div class="item btn">
                <button class="btn-getprice" id="getprice" @click="getQuote">获取报价</button>
            </div>
        </div>
    </div>
    <div id="pop" v-show="showPop">
        <div class="info"><img src="http://img.padmom.com/FkSCJcsdX7mP7p3dV5u4_YpKrWK_" alt=""><span class="txt">预约成功</span></div>
        <p class="remind">请耐心等待，客户经理会尽快电话和您沟通</p>
    </div>
    <div class="mask" v-show="showPop" @click="hidePop"></div>
</section>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex'
import {
    formatData
} from '../lib/util'
import VDistpicker from 'v-distpicker'

export default {
    name: 'footer',
    components: {
        VDistpicker
    },
    data() {
        return {
            type: 'recommed',
            text: '为您推荐合适的月嫂',
            btn: {
                text: '点击',
                url: '#clickbtn',
                target: '_blank'
            },
            dateList: [
                '宝宝已出生',
                '2017年8月',
                '2017年9月',
                '2017年10月',
                '2017年11月',
                '2017年12月',
                '2018年1月',
                '2018年2月',
                '2018年3月',
                '2018年4月',
                '2018年5月',
            ],
            date: '宝宝已出生',
            nursyList: [
                '宝宝刚满月',
                '满月~一岁',
                '一岁到两岁',
                '两岁到三岁'
            ],
            nursy: '宝宝刚满月',
            serviceType: 1,
            address: '',
            username: '',
            mobile: '',
            showPop: false,
        }
    },
    methods: {
        ...mapActions({
            getPrice: 'getPrice'
        }),
        tabView() {
            if (this.type === 'getprice') {
                this.type = 'recommed'
                // document.body.style.overflow = 'auto'
            } else {
                this.type = 'getprice'
                // document.body.style.overflow = 'hidden'
            }
        },
        onSelected(data) {
            this.address = data.province.value + data.city.value + data.area.value
        },
        chooseType(index) {
            this.serviceType = index
        },
        hidePop() {
            this.showPop = false
        },
        getQuote() {
            this.getPrice({
                data: {
                    address: this.address,
                    service_type: this.serviceType,
                    baby_status: this.serviceType == 1 ? this.date : this.nursy,
                    name: this.username,
                    phone: this.mobile,
                },
                callback: res => {
                    this.type = 'recommed'
                    this.showPop = true

                    this.address = ''
                    this.serviceType = 1
                    this.duedate = ''
                    this.username = ''
                    this.mobile = ''
                }
            })
        },
    },
    mounted() {
        this.serviceType = 1
    }
}
</script>

<style lang="scss">
.recommed {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: 1000px;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.6);
    .container {
        width: 780px;
        .logo {
            vertical-align: top;
            width: 65px;
            height: 47px;
            margin-top: 4.4px;
            margin-bottom: 4.4px;
        }
        .desc {
            font-size: 23px;
            margin-top: 14.6px;
            margin-bottom: 14.6px;
            margin-left: 7.3px;
            color: #fff;
        }
        .btn {
            color: #fff;
            text-decoration: none;
            font-size: 20.5px;
            height: 35px;
            line-height: 35px;
            margin: 11px 0;
            padding: 0 10px;
            border: 2px solid #fff;
            border-radius: 5px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
    }
}
.getprice {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    .header {
        width: 780px;
        margin-left: auto;
        margin-right: auto;
        .logo {
            vertical-align: top;
            width: 65px;
            height: 46.8px;
            margin-top: 2.9px;
            margin-bottom: 6.6px;
        }
        .desc {
            font-size: 23.4px;
            color: #fff;
            margin-top: 18.3px;
        }
        .close {
            width: 38.8px;
            height: 39.5px;
            vertical-align: top;
            margin-top: 8.8px;
            margin-bottom: 8.8px;
        }
    }
    .form {
        min-height: 200px;
        background-color: #fff;
        overflow: hidden;
        padding-bottom: 25px;
        .title {
            font-size: 28px;
            margin-top: 22.5px;
        }
        .item {
            padding-left: 252px;
            padding-right: 252px;
            height: 64px;
            line-height: 64px;
            &.btn {
                margin-top: 27.7px;
            }
            .left {
                width: 135px;
                p {
                    text-align: left;
                    font-size: 20px;
                }
            }
            .right {
                -webkit-flex: 1;
                -ms-flex: 1;
                flex: 1;
                -ms-align-items: center;
                align-items: center;
                .address {
                    width: 100%;
                    display: -webkit-flex;
                    display: -ms-flex;
                    display: flex;
                    justify-content: space-between;
                }
                .input {
                    position: relative;
                    height: 31px;
                    line-height: 31px;
                    border: 1px solid #ccc;
                    border-radius: 3px;
                    font-size: 16px;
                    width: 100%;
                    overflow: hidden;
                    &.on {
                        color: #ff9966;
                    }
                    &.big {
                        height: 46px;
                        line-height: 46px;
                        input {
                            height: 46px;
                            line-height: 46px;
                        }
                    }
                    &.three {
                        width: 28%;
                    }
                    &.two {
                        width: 45%;
                    }
                    input {
                        display: block;
                        padding: 3px 10px;
                        width: 100%;
                        height: 31px;
                        line-height: 31px;
                        font-size: 16px;
                        border: 0;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                    }
                    i {
                        position: absolute;
                        top: 50%;
                        right: 0;
                        width: 19px;
                        height: 12px;
                        margin-top: -6px;
                        margin-right: 8px;
                        transition: transform 0.3s;
                        background-image: url("../assets/Index/down.png");
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                        &.on {
                            -webkit-transform: rotateX(180deg);
                            -ms-transform: rotateX(180deg);
                            transform: rotateX(180deg);
                        }
                    }
                }
            }
            .btn-getprice {
                width: 100%;
                height: 49px;
                font-size: 28px;
                background-color: #ff9966;
                color: #fff;
                border: 0;
            }
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
