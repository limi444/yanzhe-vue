import axios from 'axios'

let host = 'http://127.0.0.1:8000/api'

// 获取商品类别信息
export const getCategory = params => {
  if ('id' in params) {
    return axios.get(`${host}/categorys/` + params.id + '/')
  } else {
    return axios.get(`${host}/categorys/`, params)
  }
}

export const getNavbar = params => { return axios.get(`${host}/navbars/`, { params: params }) }

export const getWiseWord = params => { return axios.get(`${host}/wisewords/`, { params: params }) }
// 博客文章
export const getBlogsArticle = articleId => { return axios.get(`${host}/blogs/${articleId}` + '/') }
export const listBlogsArticle = params => { return axios.get(`${host}/blogs/`, { params: params }) }
export const createBlogsArticle = params => { return axios.post(`${host}/blogs/`, params) }
export const updateBlogsArticle = params => { return axios.put(`${host}/blogs/` + params.id + '/', params) }

export const listBlogsCategory = params => { return axios.get(`${host}/blogs-category/`, { params: params }) }

// 教程文章
export const getArticle = articleId => { return axios.get(`${host}/tutorials/${articleId}` + '/') }
export const listArticle = params => { return axios.get(`${host}/tutorials/`, { params: params }) }
export const createArticle = params => { return axios.post(`${host}/tutorials/`, params) }
export const updateArticle = params => { return axios.put(`${host}/tutorials/` + params.id + '/', params) }
// 论坛随笔
export const getForumsNote = articleId => { return axios.get(`${host}/forums/${articleId}` + '/') }
export const listForumsNote = params => { return axios.get(`${host}/forums/`, { params: params }) }
export const createForumsNote = params => { return axios.post(`${host}/forums/`, params) }
export const updateForumsNote = params => { return axios.put(`${host}/forums/` + params.id + '/', params) }

// User
export const getUserDetail = params => { return axios.get(`${host}/users/${userId}` + '/')}
export const updateUserInfo = params => { return axios.get(`${host}/users/${userId}` + '/')}

// 登陆
export const login = params => { return axios.post(`${host}/login/`, params) }
// 注册
export const register = parmas => { return axios.post(`${host}/users/`, parmas) }
// 获取热门搜索关键词
export const getHotSearch = params => { return axios.get(`${host}/hotsearchs/`) }
// 短信
export const getMessage = parmas => { return axios.post(`${host}/captcha/`, parmas) }
