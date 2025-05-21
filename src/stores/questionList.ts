// src/stores/questionList.ts
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabase'

export type Question = {
  id?: number
  text: string
  hiragana: string
}

export const useQuestionListStore = defineStore('questionList', () => {
  const questionList = ref<Question[]>([])

  const init = async () => {
    const { data, error } = await supabase
      .from('questions')
      .select('*')
      .order('id', { ascending: true })
    if (!error && data) questionList.value = data
  }

  const add = async (item: Question) => {
    const { error } = await supabase.from('questions').insert([item])
    if (!error) await init()
  }

  const remove = async (id: number) => {
    const { error } = await supabase.from('questions').delete().eq('id', id)
    if (!error) await init()
  }

  return { questionList, init, add, remove }
})
