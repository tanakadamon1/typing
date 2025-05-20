<script setup lang="ts">
import { useQuestionListStore } from '@/stores/questionList'
import { ref, watch } from 'vue';

const store = useQuestionListStore()
const inputText = ref<string>('')
const questionText = ref<string>('')
const questionHiragana = ref<string>('')
const questionNow = ref<number>(0)
let inshow = true
const max:number = store.questionList.length

function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
// 問題代入
const question = () => {
  if(store.questionList.length > questionNow.value){
    questionText.value = store.questionList[questionNow.value].text
    questionHiragana.value = store.questionList[questionNow.value].hiragana

  }
  else{
    questionText.value = '終了'
    inshow = false

  }
}

// 合ってるか比較
const comparison = () => {  
  return questionHiragana.value == inputText.value ? true : false
}

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  console.log('リアルタイム入力:', target.value)
  if (comparison()) {
    questionNow.value++
    inputText.value = ''
    console.log('正解')
    question()
  }
}


shuffleArray(store.questionList)
question()


</script>

<template>
  <p>お題の読み方をひらがなで入力</p>
  <p class="questionText">{{ questionText }}</p>
  <input v-if="inshow" type="text" v-model="inputText" @compositionend="onInput" >
  <p>{{ questionNow }} / {{ max }}</p>
</template>

<style scoped>
.questionText{
  font-weight: bold;
  font-size: 2rem;
  margin: 40px auto 24px;
}


</style>