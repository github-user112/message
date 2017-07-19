import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import msg from '@/components/msg'
import me from '@/components/me'
import people from '@/components/people'
import wechat from '@/components/wechat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: '/',
          redirect: '/msg',
        },
        {
          path: '/people',
          component:people,
        },
        {
          path: '/msg',
          name: 'msg',
          component: msg,
        },
        {
          path: '/me',
          name: 'me',
          component: me,
        },
      ],
    },
    {
      path: '/wechat',
      name: 'wechat',
      component: wechat,
    },
  ],
})
