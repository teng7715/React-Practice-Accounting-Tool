'use client';  //>用來明確指定這個component是Client端的component

import styled from 'styled-components';
import Link from 'next/link';


const Main=styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f7f7f7;
`;


const Title=styled.h1`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;


const Button=styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #0070f3;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;


const FormContainer=styled.section`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  width: 300px;
`;


const Form=styled.form`
  display: flex;
  flex-direction: column;
`;


const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #666;
`;


const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;


export default function Home() {
  return (
    <Main>

      <Title>React 練習專案</Title>

      <Link href="/accounting" passHref>
        <Button type="button">
          不登入/註冊，立即開始試用記帳小工具
        </Button>
      </Link>

      <FormContainer>
          <Title>登入系統</Title>
          <Form>
            <Label>電子郵件</Label>
            <Input type="email" placeholder="test@example.com" />
            <Label>密碼</Label>
            <Input type="password" />
            <Button type="submit">登入</Button>
          </Form>
      </FormContainer>

      <FormContainer>
          <Title>註冊帳戶</Title>
          <Form>
            <Label>電子郵件</Label>
            <Input type="email" placeholder="test@example.com" />
            <Label>密碼</Label>
            <Input type="password" />
            <Button type="submit">註冊</Button>
          </Form>
      </FormContainer>

    </Main>
  );
}