import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export type Question = {
  id?: number
  text: string
  hiragana: string
}

export const useQuestionListStore = defineStore('questionList', () => {
  const questionList = ref<Question[]>([])

  const init = async () => {
    try {
      const res = await axios.get('http://localhost:3001/questions')
      questionList.value = res.data
    } catch (error) {
      console.error('初期化エラー', error)
    }
  }

  const add = async (item: Question) => {
    try {
      await axios.post('http://localhost:3001/questions', item)
      await init()
    } catch (error) {
      console.error('追加エラー', error)
    }
  }

  const remove = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/questions/${id}`)
      await init()
    } catch (error) {
      console.error('削除エラー', error)
    }
  }

  return { questionList, init, add, remove }
})
