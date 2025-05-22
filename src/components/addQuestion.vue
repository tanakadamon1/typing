<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useQuestionListStore } from '@/stores/questionList'

const store = useQuestionListStore()

const addText = ref('')
const addHiragana = ref('')

onMounted(() => {
  store.init()
})


const addQuestion = () => {
  if (!addText.value || !addHiragana.value) return
  store.add({ text: addText.value, hiragana: addHiragana.value })
  addText.value = ''
  addHiragana.value = ''
}

const deleteQuestion = (id?: number) => {
  if (id === undefined) return
  store.remove(id)
}
</script>

<template>
  <div class="inputContainer">
    <p>問題<br /><input type="text" v-model="addText" /></p><br />
    <p>読み方（ひらがな）<br /><input type="text" v-model="addHiragana" /></p>
    <button @click="addQuestion">追加する</button>
  </div>

  <h2>問題リスト</h2>
  <ul>
    <li v-for="item in store.questionList" :key="item.id ?? item.text">
      {{ item.text }} | <span class="hiragana">{{ item.hiragana }}</span>
      <button @click="deleteQuestion(item.id)">削除</button>
    </li>
  </ul>
</template>

<style scoped>
.inputContainer button{
  margin-top: 24px;
  margin-bottom: 36px;
}
li {
  margin-bottom: 16px;
  font-weight: bold;
  button{
    margin-left: 8px;
  }
  .hiragana{
    font-size: .8rem;
    font-weight: normal;
    color: rgb(0, 183, 255);
  }
}
</style>