import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue';
export type Input = {
  text: string,
  hiragana: string
}
export const useTextListStore = defineStore('textList', () => {
  const STORAGE_KEY = 'textList'

  // ローカルストレージからデータを取得して初期化
  const storedData = localStorage.getItem(STORAGE_KEY)
  const textList: Ref<Input[]> = ref(storedData ? JSON.parse(storedData) : [
    { text: '田中', hiragana: 'たなか' },
    { text: '財布', hiragana: 'さいふ' },
    { text: '時計', hiragana: 'とけい' }
  ])

  // 変更をローカルストレージに保存
  watch(textList, (newVal) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal))
  }, { deep: true })

  return { textList }
})
