<template>
    <footer>
        <!-- <ul class="nav">
            <li v-for="item in navbars"><a :href="item.link" v-text="item.text"></a></li>
        </ul> -->
        
        <div class="bottom_left fl">
             <div class="contact">
                <img :src="contact.icon" alt="" class="icon">
                <strong v-text="contact.tel"></strong>
            </div>
            <div class="txt email" v-text="email"></div>
            <div class="txt address" v-text="address"></div>
            <div class="txt copyright" v-text="copyright"></div>
        </div>
        <div class="bottom_right fr">
            <div class="fr">
                <img alt="" class="ml10" style="width:100px;height:100px;" src="http://img.padmom.com/padmom_yuer.jpeg">
                <div class="qrcode_font">
                    妈妈派育儿
                </div>
            </div>
            <div class="fr mr40">
                <img alt="" style="width:100px;height:100px;" src="http://img.padmom.com/hongkong_yuer.jpeg">
                <div class="qrcode_font">
                    香港金牌月嫂
                </div>
            </div>
        </div>
       
    </footer>
</template>

<script>
    const contact = require('../assets/Index/contact.png')
    export default {
        name: 'footer',
        data() {
            return {
                navbars: [{
                    link: '#',
                    text: '联系合作'
                }, {
                    link: '#',
                    text: '加入妈妈派'
                }, {
                    link: '#',
                    text: '关于妈妈派育儿'
                }],
                contact: {
                    icon: contact,
                    tel: '0755-21614695'
                },
                email: '联系合作：faj@padmom.com',
                address: '公司地址：深圳市南山区蛇口太子路111号深圳自贸中心7楼',
                copyright: 'Copyright © 2017 padmom.com 粤ICP备17058922号'
            }
        }
    }
</script>

<style scoped lang="scss">
    footer {
        margin: 0 auto;
        background-color: #ff9966;
        text-align: left;
        color: #fff;
        padding: 26px;
        padding-bottom: 46px;
        padding-top:0px;
        height:260px;
        float:left;
        width:100%;
        .nav {
            margin: 0;
            padding: 0;
            margin-top: 13px;
            list-style-type: none;
            li {
                display: inline-block;
                &+li:before {
                    padding: 0 1px;
                    color: #fff;
                    content: "/";
                }
                a {
                    font-size: 20px;
                    color: #fff;
                    text-decoration: none;
                }
            }
        }
        .contact {
            margin: 0px auto;
            margin-bottom: 5px;
            img {
                vertical-align: top;
                width: 50px;
            }
            strong {
                display: inline-block;
                font-size: 30px;
                line-height: 50px;
                margin-left: 15px;
            }
        }
        .email {
            margin-bottom: 10px;
        }
        .address {
            margin-bottom: 10px;
        }
        .copyright {
            margin-bottom: 0;
        }
        .txt {
            font-size: 18px;
            color: #fff;
        }

        .bottom_left {
            width: 720px;
            height: 155px;
            margin-top: 29px;
        }
        .fl {
            float: left;
        }
        .bottom_right {
            margin-top: 50px;
        }
        .fr {
            float: right;
        }
        .mr40 {
            margin-right: 40px;
        }
        .ml10 {
            margin-left: 10px;
        }
        .qrcode_font{
            text-align: center;    
        }
    }
</style>
