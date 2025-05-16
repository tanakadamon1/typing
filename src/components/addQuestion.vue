<script setup lang="ts">
import { useTextListStore } from '@/stores/textList'
import { ref } from 'vue';

const store = useTextListStore()

const addText = ref<string>('')
const addHiragana = ref<string>('')

const addList = () => {
  store.textList.push({
    text: addText.value,
    hiragana: addHiragana.value
  })
  addText.value = ''
  addHiragana.value = ''
}

const deleteList = (index:number) => {
  store.textList.splice(index, 1)
}
</script>
<template>
    <div class="inputContainer">
      <p>問題<br><input type="text" v-model="addText"></p><br>
      <p>読み方（ひらがな）<br><input type="text" v-model="addHiragana"></p>
      <button @click="addList">追加する</button>
    </div>
    <h2>問題リスト</h2>
    <ul>
        <li v-for="(item, index) in store.textList" :key=index>{{ item.text }} | <span class="hiragana">{{ item.hiragana }}</span>
          <button @click="deleteList(index)">削除</button>
        </li>
    </ul>
</template>
<style scoped>
.hiragana{
    font-size: .8rem;
    color: rgb(114, 143, 238);
}
.inputContainer{
  margin-bottom: 24px;
  button{
    margin-top: 8px;
  }
}

ul{
  li{
    margin-bottom: 16px;
    button{
      margin-left: 8px;
    }
  }
}
</style>