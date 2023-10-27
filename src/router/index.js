import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Auth from '@/components/Auth.vue'
import Register from '@/components/Register'
import GroupList from '@/components/GroupList'
import GroupCreate from '@/components/GroupCreate'
import ProfileList from '@/components/ProfileList'
import ProfileCreate from '@/components/ProfileCreate'
import TaskList from '@/components/TaskList'
import TaskCreate from '@/components/TaskCreate'
import ListList from '@/components/ListList'
import ListCreate from '@/components/ListCreate'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile-list',
    name: 'ProfileList',
    component: ProfileList
  },
  {
    path: '/profile-list/:msg',
    name: 'ProfileUpdatedList',
    component: ProfileList
  },
  {
    path: '/profile-create',
    name: 'ProfileCreate',
    component: ProfileCreate
  },
  {
    path: '/profile-create/:pk',
    name: 'ProfileUpdate',
    component: ProfileCreate
  },
  {
    path: '/group-list',
    name: 'GroupList',
    component: GroupList
  },
  {
    path: '/group-list/:msg',
    name: 'GroupUpdatedList',
    component: GroupList
  },
  {
    path: '/group-create',
    name: 'GroupCreate',
    component: GroupCreate
  },
  {
    path: '/group-create/:pk',
    name: 'GroupUpdate',
    component: GroupCreate
  },
  {
    path: '/task-list',
    name: 'TaskList',
    component: TaskList
  },
  {
    path: '/task-list/:msg',
    name: 'TaskUpdatedList',
    component: TaskList
  },
  {
    path: '/task-create',
    name: 'TaskCreate',
    component: TaskCreate
  },
  {
    path: '/task-create/:pk',
    name: 'TaskUpdate',
    component: TaskCreate
  },
  {
    path: '/list-list',
    name: 'ListList',
    component: ListList
  },
  {
    path: '/list-list/:msg',
    name: 'ListUpdatedList',
    component: ListList
  },
  {
    path: '/list-create',
    name: 'ListCreate',
    component: ListCreate
  },
  {
    path: '/list-create/:pk',
    name: 'ListUpdate',
    component: ListCreate
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path:'/register',
    name: 'Register',
    component: Register
  } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
