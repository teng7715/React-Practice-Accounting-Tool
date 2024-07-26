'use client';  //>用來明確指定這個component是Client端的component

import styled from 'styled-components';
import Link from 'next/link';
import AccountingForm from './components/Form';
import AccountingList from './components/List';
import { useEffect, useState } from 'react';


//++等待優化的項目

  //++研究部署到vercel
  //++確定成功後，研究放到Firebase

interface Record {
  type: string;
  amount: string;
  description: string;
}

const Main=styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  padding-inline: 3%;
  
  background-color: #f7f7f7;
`;

const Title=styled.h1`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;

const HomeButton=styled.button`
    padding: 0.5rem;
    margin: 1rem 0;
    border: none;
    border-radius: 4px;
    background-color: #0070f3;

    color: white;
    cursor: pointer;

    &:hover {
      background-color: #005bb5;
    }
`;


export default function Accounting() {

  const [records, setRecords]=useState<Record[]>([]);
  const [total, setTotal]=useState(0);

  useEffect(()=>{

    const totalAmount=records.reduce((acc,record)=>{ //?reduce的使用方法，再多複習幾次
        return record.type === '支出' ? acc - parseInt(record.amount) : acc + parseInt(record.amount)
    },0)

    setTotal(totalAmount)

  },[records])


  const handleAddRecord=(type: string, amount: string, description: string) => {
    const newRecord: Record={ type, amount, description };
    setRecords([...records, newRecord]); //? 展開運算符號 Spread operator「 … 」
  };


  const handleDeleteRecord=(index:number) => {
    console.log("這是要刪除的index編號",index)

    // >將現有的每一筆記帳紀錄透過filter過篩，跟要刪除的紀錄index值不同的，我們才放入新的紀錄當中
    const newRecords=records.filter((_,i)=> (i !== index )); 
    setRecords(newRecords);

    // ? 在參數中使用_，表示是一個佔位符號。常用在當我們不打算使用某個參數，但它必須存在於函數定義中以滿足語法要求時
    // __犯的錯誤紀錄：filfer裡面的函式是要有回傳值得喔！我一開始寫成records.filter((_,i)=> {i !== index})，直接沒在過篩的哈哈
  }

  return (
    <Main>
      <Title>記帳小工具</Title>
      <AccountingForm onAddRecord={handleAddRecord}></AccountingForm>
      <AccountingList records={records} total={total} onDeleteRecord={handleDeleteRecord} ></AccountingList>

    <Link href="/" passHref>
      <HomeButton type="button">回到首頁</HomeButton>
    </Link>
    
    </Main>
  );
}