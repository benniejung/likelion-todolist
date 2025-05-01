import React from "react";
import TodoEditor from "./TodoEditor";
import * as S from "../Main.style";
export default function Todolist() {
  return (
    <S.TodoListLayout>
      <S.SectionTitle>📝 My TodoList</S.SectionTitle>
      <TodoEditor />
      <S.TodoListWrapper></S.TodoListWrapper>
    </S.TodoListLayout>
  );
}
