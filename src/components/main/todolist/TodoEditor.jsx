import React from "react";
import * as S from "../Main.style";
import Input from "../Input";
import Button from "../Button";

export default function TodoEditor() {
  return (
    <S.AddTodoWrapper>
      <Input />
      <Button text={"+ 추가하기"}></Button>
    </S.AddTodoWrapper>
  );
}
