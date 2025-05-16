import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue';
export type Input = {
  text: string,
  hiragana: string
}
export const useTextListStore = defineStore('textList', () => {
const textList: Ref<Input[]> = ref([
  {
    text: '田中',
    hiragana: 'たなか'
  },
  {
    text: '財布',
    hiragana: 'さいふ'
  },
  {
    text: '時計',
    hiragana: 'とけい'
  },

]);
  return { textList }
})
