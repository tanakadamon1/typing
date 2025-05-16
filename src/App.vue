<script setup lang="ts">



</script>

<template>
  <h1>読み方当てるゲーム</h1>
  <nav>
    <div class="navItem">
      <RouterLink to="/">ゲーム</RouterLink>
    </div> |
    <div class="navItem">
      <RouterLink to="add">問題追加</RouterLink>
    </div>
  </nav>
  <router-view />
</template>

<style scoped>
h1{
  margin-bottom: 24px;
}
nav{
  max-width: 1000px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  .navItem{
    font-size: 1.2rem;
    font-weight: bold;
    a{
      color: rgb(28, 219, 92) !important;
      text-decoration: none;
      padding: 4px 8px;
    }
    &:hover{
      opacity: .7;
    }
  }
}
.router-link-active{
  border: 1px solid rgb(28, 219, 92);
}
</style>
