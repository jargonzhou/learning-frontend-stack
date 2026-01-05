<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="[todo.completed ? 'completed' : '']"
    >
      {{ todo.text }}
      <input
        type="checkbox"
        v-model="todo.completed"
        data-test="todo-checkbox"
      />
    </div>

    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>

<script lang="ts">
// import {ref, Ref} from "vue"
import { Component, Vue } from "vue-property-decorator";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component
export default class TodoApp extends Vue {
  // data
  todos: Todo[] = [{ id: 1, text: "Learn Vue.js 2", completed: false }];
  newTodo = "";

  // methods
  createTodo() {
    this.todos.push({ id: 2, text: this.newTodo, completed: false });
  }
}
</script>
