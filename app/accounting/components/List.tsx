'use client';  //>用來明確指定這個component是Client端的component

import styled from 'styled-components';


interface Record {
    type: string;
    amount: string;
    description: string;
}

interface AccountingListProps {
    records: Record[];
    total: number;
    onDeleteRecord: (index: number) => void;
}

const ListContainer=styled.section`
  background: white;
  padding: 1rem;
  margin: 0.5rem 0;

  border-radius: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  max-width: 600px;
`;

const RecordDescription = styled.div`

  flex:none;
  width:40%;
  margin-right: 1rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media(max-width:600px){
    width:50%;
  }
`;

const RecordAmount=styled.div< {type:string} >` 
  //?這邊的Typescript寫法，要做筆記：反正這邊是 TypeScript 的泛型語法。
  //?我們指定了一個物件型別，這個物件必須包含一個名為 type 的屬性，而 type 的值必須是字串類型

  color: ${props => (props.type === '支出' ? 'red' : 'green')};
  flex:none;
  width:40%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media(max-width:600px){
    width:30%;
  }
`;

const DeleteButton=styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #e74c3c;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #c0392b;
  }

  @media(max-width:600px){
    padding: 0.25rem;
  }
`;

const TotalContainer=styled.div`
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: bold;
`;


export default function AccountingList(props: AccountingListProps) {

    const { records, total, onDeleteRecord } = props;
    
    return (
      <>
        {records.map((record, index) => (
          <ListContainer key={index}>
            <RecordDescription>{record.description}</RecordDescription>
            <RecordAmount type={record.type}>
              {record.type === '支出' ? `-${record.amount}` : `+${record.amount}`}
            </RecordAmount>
            <DeleteButton onClick={() => onDeleteRecord(index)}>刪除</DeleteButton>
          </ListContainer>
        ))}
        <TotalContainer>總計：{total}元</TotalContainer>
      </>
    );
  }