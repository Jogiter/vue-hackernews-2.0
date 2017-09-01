<template>
    <div class="article">
        <div class="container">
            <div class="info">
                <h2 class="title text-center" v-text="article.title"></h2>
                <p class="content" v-html="article.content"></p>
                <p class="date" v-show="!!article.created_time">发布日期：{{article.created_time.slice(0, 19).replace(/T/, ' ')}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'Error',
        computed: {
            article() {
                return this.$store.state.article
            },
            // ...mapGetters({
            //     'article': 'article',
            // })
        },
        methods: {
            // ...mapActions([
            //     'getArticle'
            // ])
            getArticle(payload) {
                this.$store.dispatch('getArticle', payload)
            },
        },
        mounted() {
            this.getArticle({
                id: this.$route.params.id
            })
        }
    }
</script>

<style lang="scss">
.article {
    background-color: #ededeb;
    overflow: hidden;
    .container {
        overflow: hidden;
        .title {
            font-size: 32px;
            color: #000;
            font-weight: bold;
            margin-top: 37px;
            margin-bottom: 41px;
        }
        .info {
            overflow: hidden;
            margin-top: 40px;
            padding-left: 64px;
            padding-right: 64px;
            background-color: #fff;
            font-size: 20px;
            color: #333;
        }
        .date {
            margin-top: 85px;
            margin-bottom: 35px;
            font-size: 16px;
            color: #666;
        }
    }
}
</style>
