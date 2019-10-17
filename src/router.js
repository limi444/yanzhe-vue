import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import forumsBase from './views/forums/forums_base'
import forumsIndex from './views/forums/Index'

import blogsBase from './views/blogs/blogs_base'
import blogsIndex from './views/blogs/Index'

import tutorialBase from './views/tutorials/tutorial_base'
import tutorialIndex from './views/tutorials/Index'
import tutorialList from './views/tutorials/List'

import userInfo from './views/users/userInfo'
import Login from './views/users/Login'
import Register from './views/users/Register'
import FindPwd from './views/users/FindPwd'

// 定义测试路由
import Category from './components/CategorySelect'
import Edit from './components/Edit'
import Detail from './components/Detail'

// import Comments from '../components/Comments'
// import userInfo from '../views/users/userInfo'
// import sendEmail from '../views/utils/sendEmail'
// const list = {template: '<div>[[[[[=list view=]]]]]</div>'}
// const CategoryList = {template: '<div>Category_list view</div>'}
// const Create = {template: '<div>Create_article view</div>'}
const Delete = {template: '<div>Delete_article view</div>'}
// const Update = {template: '<div>Update_article view</div>'}

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/tutorials',
      // name: 'base',
      component: tutorialBase,
      children: [
        {
          path: 'index',
          name: 'tutorialsIndex',
          components: {
            main: tutorialIndex
          }
        },
        {
          path: 'category',
          name: 'tutorialsCategory',
          components: {
            main: tutorialIndex
          }
        },
        {
          path: 'category/:categoryId',
          name: 'tutorialsCategoryList',
          props: true,
          components: {
            main: tutorialIndex
          }
        },
        {
          path: 'list',
          name: 'tutorialsList',
          components: {
            main: tutorialList
          }
        },
        {
          path: 'list/:categoryId',
          name: 'tutorialsListArticle',
          props: true,
          components: {
            main: tutorialList
          }
        },
        {
          path: 'create',
          name: 'tutorialsCreate',
          components: {
            main: Edit
          }
        },
        {
          path: 'detail/:articleId',
          name: 'tutorialsDetail',
          // props: true,
          components: {
            main: Detail
          }
        },
        {
          path: 'update/:articleId',
          name: 'tutorialsUpdate',
          props: true,
          components: {
            main: Edit
          }
        },
        {
          path: 'delete/:articleId',
          name: 'tutorialsDelete',
          props: true,
          components: {
            main: Delete
          }
        }
      ]
    },
    {
      path: '/blogs',
      // name: 'base',
      component: blogsBase,
      children: [
        {
          path: 'index',
          name: 'blogsIndex',
          components: {
            main: blogsIndex
          }
        },
        {
          path: 'category',
          name: 'blogsCategory',
          components: {
            main: blogsIndex
          }
        },
        {
          path: 'category/:categoryId',
          name: 'blogsCategoryList',
          props: true,
          components: {
            main: blogsIndex
          }
        },
        {
          path: 'list',
          name: 'blogsList',
          components: {
            main: blogsIndex
          }
        },
        {
          path: 'list/:categoryId',
          name: 'blogsListArticle',
          props: true,
          components: {
            main: blogsIndex
          }
        },
        {
          path: 'create',
          name: 'blogsCreate',
          components: {
            main: blogsIndex
          }
        },
        // {
        //   path: 'detail',
        //   name: 'Detail',
        //   props: true,
        //   components: {
        //     main: Detail
        //   }
        // },
        {
          path: 'detail/:articleId',
          name: 'blogsDetail',
          props: true,
          components: {
            main: Detail
          }
        },
        {
          path: 'update/:articleId',
          name: 'blogsUpdate',
          props: true,
          components: {
            main: blogsIndex
          }
        },
        {
          path: 'delete/:articleId',
          name: 'blogsDelete',
          props: true,
          components: {
            main: Delete
          }
        }
      ]
    },
    {
      path: '/forums',
      // name: 'base',
      component: forumsBase,
      children: [
        {
          path: 'index',
          name: 'forumsIndex',
          components: {
            main: forumsIndex
          }
        },
        {
          path: 'category',
          name: 'forumsCategory',
          components: {
            main: blogsIndex
          }
        },
        {
          path: 'category/:categoryId',
          name: 'forumsCategoryList',
          props: true,
          components: {
            main: blogsIndex
          }
        },
        {
          path: 'list',
          name: 'forumsList',
          components: {
            main: blogsIndex
          }
        },
        {
          path: 'list/:categoryId',
          name: 'forumsListArticle',
          props: true,
          components: {
            main: blogsIndex
          }
        },
        {
          path: 'create',
          name: 'forumsCreate',
          components: {
            main: Edit
          }
        },
        {
          path: 'detail/:articleId',
          name: 'forumsDetail',
          props: true,
          components: {
            main: Detail
          }
        },
        {
          path: 'update/:articleId',
          name: 'forumsUpdate',
          props: true,
          components: {
            main: blogsIndex
          }
        },
        {
          path: 'delete/:articleId',
          name: 'forumsDelete',
          props: true,
          components: {
            main: Delete
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/findpwd',
      component: FindPwd
    },
    {
      path: '/userinfo',
      component: userInfo
    },
    {
      path: '/test',
      component: Category
    }
  ]
})
