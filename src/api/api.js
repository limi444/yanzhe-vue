import axios from 'axios'
//
 let host = 'http://127.0.0.1:8000'
// let host = 'http://119.29.97.152:8000'

// 获取商品类别信息
export const getTutorialsCategory = params => {
  	if ('id' in params) {
      return axios.get(`${host}/api/tcategorys/` + params.id + '/')
    } else {
      return axios.get(`${host}/api/tcategorys/`, params)
    }
} 

export const getBlogssCategory = params => {
  	if ('id' in params) {
      return axios.get(`${host}/api/bcategorys/` + params.id + '/')
    } else {
      return axios.get(`${host}/api/bcategorys/`, params)
    }
} 

export const getForumsCategory = params => {
  	if ('id' in params) {
      return axios.get(`${host}/api/fcategorys/` + params.id + '/')
    } else {
      return axios.get(`${host}/api/fcategorys/`, params)
    }
}
  

export const getNavbar = params => { return axios.get(`${host}/api/navbars/`, { params: params }) }
export const uploadimg = params => { return axios.post(`${host}/images/upload/`, params ) }

export const getWiseWord = params => { return axios.get(`${host}/api/wisewords/`, { params: params }) }
// 博客文章
export const getBlogsArticle = articleId => { return axios.get(`${host}/api/blogs/${articleId}` + '/') }
export const listBlogsArticle = params => { return axios.get(`${host}/api/blogs/`, { params: params }) }
export const createBlogsArticle = params => { return axios.post(`${host}/api/blogs/`, params) }
export const updateBlogsArticle = params => { return axios.put(`${host}/api/blogs/` + params.id + '/', params) }

export const listBlogsCategory = params => { return axios.get(`${host}/api/blogs-category/`, { params: params }) }

// 教程文章
export const getArticle = articleId => { return axios.get(`${host}/api/tutorials/${articleId}` + '/') }
export const listArticle = params => { return axios.get(`${host}/api/tutorials/`, { params: params }) }
export const createArticle = params => { return axios.post(`${host}/api/tutorials/`, params) }
export const updateArticle = params => { return axios.put(`${host}/api/tutorials/` + params.id + '/', params) }
// 论坛随笔
export const getForumsNote = articleId => { return axios.get(`${host}/api/forums/${articleId}` + '/') }
export const listForumsNote = params => { return axios.get(`${host}/api/forums/`, { params: params }) }
export const createForumsNote = params => { return axios.post(`${host}/api/forums/`, params) }
export const updateForumsNote = params => { return axios.put(`${host}/api/forums/` + params.id + '/', params) }

// User
export const getUserDetail = params => { return axios.get(`${host}/api/users/${userId}` + '/')}
export const updateUserInfo = params => { return axios.get(`${host}/api/users/${userId}` + '/')}

// 登陆
export const login = params => { return axios.post(`${host}/api/token/obtain/`, params) }
// 注册
export const register = parmas => { return axios.post(`${host}/api/users/`, parmas) }
// 获取热门搜索关键词
// export const getHotSearch = params => { return axios.get(`${host}/hotsearchs/`) }
// 短信
export const getMessage = parmas => { return axios.post(`${host}/captcha/`, parmas) }
