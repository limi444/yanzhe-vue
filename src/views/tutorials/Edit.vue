<template>
  <div id="markdown">
    <!-- Sidebar -->
<!--    <aside class="side-bar">-->
<!--      <div class="toolbar">-->
<!--        <button @click="addNote" :title="notes.length + ' note(s) already'"><i class="material-icons">add</i> Add note</button>-->
<!--      </div>-->
<!--      <div class="notes">-->
<!--        <div class="note"-->
<!--             v-for="note of sortedNotes"-->
<!--             :class="{selected: note === selectedNote}"-->
<!--             :key="note.id"-->
<!--             @click="selectNote(note)"><i class="icon material-icons" v-if="note.favorite">star</i>{{note.title}}</div>-->
<!--      </div>-->
<!--    </aside>-->
      <!-- Main pane -->
      <section class="content box">
          <div class="edit-form">
            <fieldset class="module aligned ">
              <div class="form-row field-title">
                <div>
                  <label class="required" for="id_title">标题:</label>
                  <input type="text" name="title" maxlength="255" required="" id="id_title" v-model="articleData.title">
                </div>
              </div>
              <div class="form-row field-descri">
                <div>
                  <label for="id_descri">摘要:</label>
                  <input type="text" name="descri" maxlength="1024" id="id_descri" v-model="articleData.descri">
                </div>
              </div>
              <CategorySelect v-model="selectedCategory" v-on:selectCategoryhandle="listenToCategory"></CategorySelect>
              <div class="form-row field-status">
                <div>
                  <label class="required" for="id_status">状态:</label>
                  <select name="status" id="id_status" v-model.number="articleData.status">
                    <option value="1" selected="">正常</option>
                    <option value="0">删除</option>
                    <option value="2">草稿</option>
                    <option value="3">置顶</option>
                  </select>
                </div>
              </div>
              <div class="form-row field-edit_mode">
                <div>
                  <label class="required" for="id_edit_mode">编辑器类型:</label>
                  <select name="edit_mode" id="id_edit_mode" v-model.number="articleData.edit_mode">
                    <option value="1" selected="">markdown</option>
                    <option value="2">ckeditor</option>
                  </select>
                </div>
              </div>

              <div class="form-row field-content">
                <label for="id_content">文章内容:</label>
                <textarea name="content" cols="40" rows="10" class="vLargeTextField" id="id_content" v-model="articleData.content"></textarea>
              </div>
              <div class="toolbar status-bar">
                <span class="date">
                  <span class="label">Created</span>
                  <span class="value">{{ articleData.create_time | date }}</span>
                </span>
                <span class="lines">
                  <span class="label">Lines</span>
                  <span class="value">{{ linesCount }}</span>
                </span>
                <span class="words">
                  <span class="label">Words</span>
                  <span class="value">{{ wordsCount }}</span>
                </span>
                <span class="characters">
                  <span class="label">Characters</span>
                  <span class="value">{{ charactersCount }}</span>
                </span>
              </div>
            </fieldset>

            <div class="submit-row">
              <button @click="updateArticleData" title="_save">保存</button>
              <button @click="removeNote" title="_addanother">保存并增加另一个</button>
              <button @click="removeNote" title="_continue">保存并继续编辑</button>
            </div>
          </div>
      </section>

      <!-- Preview pane -->
      <aside class="preview box" v-html="articlePreview">
      </aside>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import marked from 'marked'
import CategorySelect from '../../components/CategorySelect'
import {getArticle, updateArticle, createArticle} from '../../api/api'
Vue.filter('date', time => moment(time).format('YYYY-MM-DD HH:mm'))

export default {
  name: 'edit',
  props: {
    category_id: Number
  },
  components: {
    CategorySelect
  },
  data () {
    return {
      selectedCategory: 0,
      articleData: {
        title: '',
        descri: '',
        content: '',
        status: 1,
        edit_mode: 1,
        category: 0,
        create_time: ''
      },
      // These are loaded from localStorage and have a default value
      // Don't forget the JSON parsing for the notes array
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      selectedId: localStorage.getItem('selected-id') || null
    }
  },
  created () {
    // (typeof(localStorage.username) !== 'undefined')
    this.articleId = this.$route.params.articleId
    // 如果存在articleId，就获取文章数据进行更新
    if (this.articleId) {
      this.getArticleData()
    }
  },
  // Computed properties
  computed: {
    // selectedArticle () {
    //   // We return the matching note with selectedId
    //   return this.notes.find(note => note.id === this.selectedId)
    // },

    articlePreview () {
      // Markdown rendered to HTML
      return this.articleData ? marked(this.articleData.content) : ''
    },

    // sortedNotes () {
    //   return this.notes.slice().sort((a, b) => a.created - b.created)
    //     .sort((a, b) => (a.favorite === b.favorite) ? 0 : a.favorite ? -1 : 1)
    // },

    linesCount () {
      if (this.articleData) {
        // Count the number of new line characters
        return this.articleData.content.split(/\r\n|\r|\n/).length
      }
      return 0
    },

    wordsCount () {
      if (this.articleData) {
        var s = this.articleData.content
        // Turn new line cahracters into white-spaces
        s = s.replace(/\n/g, ' ')
        // Exclude start and end white-spaces
        s = s.replace(/(^\s*)|(\s*$)/gi, '')
        // Turn 2 or more duplicate white-spaces into 1
        s = s.replace(/[ ]{2,}/gi, ' ')
        // Return the number of spaces
        return s.split(' ').length
      }
      return 0
    },

    charactersCount () {
      if (this.articleData) {
        return this.articleData.content.split('').length
      }
      return 0
    }
  },

  // Change watchers
  watch: {
    // When our notes change, we save them
    notes: {
      // The method name
      handler: 'saveNotes',
      // We need this to watch each note's properties inside the array
      deep: true
    },
    // Let's save the selection too
    selectedId (val) {
      localStorage.setItem('selected-id', val)
    }
  },

  methods: {
    listenToCategory: function (cateid) {
      this.articleData.category = cateid
    },
    getArticleData () {
      getArticle(this.articleId).then((response) => {
        // console.log(response.data)
        this.articleData = response.data
      })
        .catch(function (error) {
          console.log(error)
        })
    },
    updateArticleData () {
      // 如果存在articleId，就获取文章数据进行更新
      if (this.articleId) {
        updateArticle(this.articleData).then((response) => {
          // console.log(this.articleData)
          // console.log(response)
          // this.articleData = response.data
          this.$router.push({path: `/tutorials/detail/${this.articleId}`})
        })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        createArticle(this.articleData).then((response) => {
          console.log(this.articleData)
          this.articleId = response.data.id
          this.$router.push({name: 'Detail', params: { articleId: this.articleId }})
        })
      }
    },
    // Add a note with some default content and select it
    addNote () {
      const time = Date.now()
      // Default new note
      const article = {
        id: String(time),
        title: 'New note ' + (this.notes.length + 1),
        content: '**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!',
        created: time,
        favorite: false
      }
      // Add
      this.notes.push(article)
      // Select
      this.selectNote(article)
    },

    // Remove the selected note and select the next one
    removeNote () {
      if (this.selectedArticle && confirm('Delete the note?')) {
        // Remove the note in the notes array
        const index = this.notes.indexOf(this.selectedArticle)
        if (index !== -1) {
          this.notes.splice(index, 1)
        }
      }
    },

    selectNote (note) {
      // This will update the 'selectedNote' computed property
      this.selectedId = note.id
    },

    saveNotes () {
      // Don't forget to stringify to JSON before storing
      localStorage.setItem('notes', JSON.stringify(this.notes))
      // console.log('Notes saved!', new Date())
    },

    favoriteNote () {
      // this.selectedNote.favorite = !this.selectedNote.favorite
      // this.selectedNote.favorite = this.selectedNote.favorite ^ true
      this.selectedArticle.favorite ^= true
    }
  }
}

</script>

<style scoped>

/*#markdown > * {*/
/*  margin: 10px;*/
/*  float: left;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  !*width: 150px;*!*/
/*  min-height: 500px;*/
/*  border: 4px solid red;*/
/*  !*> * {*!*/
/*  !*  flex: auto 0 0;*!*/
/*  !*}*!*/
/*  }*/

#markdown {
  margin-top: 10px;
  align-items : flex-end;
  /*width: auto;*/
  min-width: 900px;
  min-height: 600px;
  /*沿水平主轴让元素从左向右排列*/
  /*flex-direction:row;*/
}

.box {
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  width:45%;
  min-height: inherit;
  float:left;
  border-radius: 10px;
  background:#fefefe url(../../static/images/tutorials/post_bg.gif) top repeat-x;
}
.content {
  min-width: 53%;
  display: flex;
  /*沿垂直主轴让元素从上向下排列*/
  flex-direction: column;
}

.preview {
  padding: 10px;
  text-align: left;
  /*display: flex;*/
  /*flex-direction: column;*/
  height: 300px;
  flex: 1 1 auto;
  overflow: auto;
  border: solid 5px #cccccc;
  border-radius: 10px;
}
fieldset {
  margin-top: 2px;
  border-radius: 10px;
  padding: 5px 10px;
  text-align: left;
}
.field-content {
  height: 400px;
}

textarea {
  width: 100%;
  min-height: 92%;
  resize: none;
  /*border: none;*/
  box-sizing: border-box;
  margin: 0 4px;
  font-family: monospace;
}

button,
input,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  box-sizing: border-box;
  outline: none !important;
}

button {
  background: #40b883;
  color: white;
  border-radius: 3px;
  border: none;
  display: inline-block;
  padding: 8px 12px;
  cursor: pointer;
}

button:hover {
  background: #63c89b;
}

input {
  width: 400px;
  border: solid 1px #ade2ca;
  border-radius: 3px;
  padding: 2px 10px;
  background: #f0f9f5;
  color: #666;
}

button,
input {
  height: 34px;
}

.toolbar {
  padding: 4px;
  box-sizing: border-box;
}

.status-bar {
  margin-top: -5px;
  margin-left: 5px;
  font-size: 12px;
  /*margin: 0 10px;*/
  padding: 0 20px;
  color: #777;
  background-color: #eeeeee;
  border-radius: 5px;
}
.status-bar > span {
  margin-right: 30px;
}
.status-bar > span .label{
  color: #40b883;
}

a {
  color: #40b883;
}
</style>
