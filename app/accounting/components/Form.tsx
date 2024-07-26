'use client';  //>用來明確指定這個component是Client端的component

import styled from 'styled-components';
import { useState } from 'react';


// >針對要傳進來的props，定義好他的名稱，以及因為他是函式，所屬的參數數量、資料型態、與回傳值型態
interface AccountingFormProps {
  onAddRecord: (type: string, amount: string, description: string) => void; 
  //?針對Typescript 函式這段寫法，要再去記錄下來，=> void表示沒有回傳值
}


const FormContainer=styled.section`
  background: white;
  padding: 1rem;
  margin: 1rem 0;

  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  display: flex;
  align-items: center;
  justify-content: center;

  
  width: 100%;
  max-width: 600px;

  @media(max-width:600px){
    flex-direction: column;
    gap:1rem;
  }
`;

const Select=styled.select`
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media(max-width:600px){
    display: block;
    width: 70%;
  }
`;

const Input=styled.input`
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media(max-width:600px){
    display: block;
    width: 70%;
  }
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

  @media(max-width:600px){
    width: 50%;
  }
`;


export default function AccountingForm(props: AccountingFormProps) {

    // >使用 useState hook 來管理表單輸入的狀態+記帳紀錄
    const [type,setType]=useState('');
    const [amount,setAmount]=useState('');
    const [description,setDescription]=useState('');


    const handleAddRecord = () => {

      if (type && amount && description) {
        props.onAddRecord(type, amount, description); 
        //>這邊比較卡：反正就是將現在的值，做為參數，傳遞給onAddRecord props，而這個props裡面是個函式，所以其實就是『將這三個值做為那個函式的參數』傳遞出去

        setType('');
        setAmount('');
        setDescription('');
      }
      else{alert("請記得選取開銷類別與所有欄位都有內容！")}
      
    };
  
    return (
      <>
        <FormContainer>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="" disabled>選擇類別</option>
            <option value="收入">收入</option>
            <option value="支出">支出</option>
          </Select>
          <Input
            type="text"
            placeholder="請輸入項目內容"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            type="number"
            placeholder="請輸入金額"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button type="button" onClick={handleAddRecord}>新增紀錄</Button>
        </FormContainer>
      </>
    );
  }