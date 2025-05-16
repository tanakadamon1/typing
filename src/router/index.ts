import { createRouter, createWebHistory } from 'vue-router'
import inputText from '@/components/inputText.vue'
import addQuestion from '@/components/addQuestion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'game',
      component: inputText,
    },
    {
      path: '/add',
      name: 'add',
      component: addQuestion,
    },
  ],
})

export default router
