<template>
    <div id="editor">
        <div v-if="article.edit_mode===2">
            <editor-rich-text v-bind:article="article" @selectedMode="listenEditMode" @pullArticle="pullArticle"></editor-rich-text>
        </div>
        <div v-else>
            <editor-markdown v-bind:article="article" @selectedMode="listenEditMode" @pullArticle="pullArticle"></editor-markdown>
        </div>
        <div class="submit-row">
            <button @click="updateArticleData" title="_save">保存</button>
            <button @click="" title="_addanother">草稿</button>
            <button @click="" title="_continue">保存并增加另一个</button>
        </div>
    </div>
</template>

<script>
    import EditorMarkdown from "./editor_components/EditorMarkdown";
    import EditorRichText from "./editor_components/EditorRichText";
    // import EditorRichText from "./editor_components/tinymce_test";
    import {getArticle, updateArticle, createArticle} from '../api/api'
    export default {
        name: "Edit",
        data () {
            return {
                selectedCategory: 0,
                article: {
                    title: 'cml',
                    descri: '',
                    content: '',
                    status: 1,
                    edit_mode: 1,
                    category: 0,
                    create_time: ''
                }
            }
        },
        components: {
            EditorMarkdown,
            EditorRichText
        },
        methods: {
            getArticleData () {
                getArticle(this.articleId).then((response) => {
                    // alert('数据请求成功！')
                    // console.log(response.data)
                    this.article = response.data.result
                })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            updateArticleData () {
                // 如果存在articleId，就获取文章数据进行更新
                if (this.articleId) {
                    updateArticle(this.article).then((response) => {
                        // this.articleData = response.data
                        var type = this.$route.matched[0].path
                        if (type === '/blogs') {
                            this.$router.push({name: 'blogsDetail', params: { articleId: this.articleId }})
                        }
                        if (type === '/forums') {
                            this.$router.push({name: 'forumsDetail', params: { articleId: this.articleId }})
                        }
                        if (type === '/tutorials') {
                            this.$router.push({name: 'tutorialsDetail', params: { articleId: this.articleId }})
                        }
                    })
                        .catch(function (error) {
                            console.log(error)
                        })
                } else {
                    console.log(this.article)
                    // console.log(this.$store.state.create_article)
                    createArticle(this.article).then((response) => {

                        this.articleId = response.data.id
                        var type = this.$route.matched[0].path
                        if (type === '/blogs') {
                            this.$router.push({name: 'blogsDetail', params: { articleId: this.articleId }})
                        }
                        if (type === '/forums') {
                            this.$router.push({name: 'forumsDetail', params: { articleId: this.articleId }})
                        }
                        if (type === '/tutorials') {
                            this.$router.push({name: 'tutorialsDetail', params: { articleId: this.articleId }})
                        }
                    })
                        .catch((error) => {
                            console.log(error.data)
                        })
                }
            },
            listenEditMode (mode) {
                this.article.edit_mode = mode
            },
            pullArticle (article) {
                this.article = article
            }
        },
        created () {
            // (typeof(localStorage.username) !== 'undefined')
            this.articleId = this.$route.params.articleId
            // 如果存在articleId，就获取文章数据进行更新
            if (this.articleId) {
                this.getArticleData()
            }
        }
    }
</script>

<style scoped>
    .submit-row{
        float: left;
    }
    button {
        margin: 5px 30px;
        border-radius: 3px;
        border: none;
        display: inline-block;
        padding: 8px 12px;
        cursor: pointer;
    }

    button:hover {
        background: #CCCCCC;
    }
</style>
