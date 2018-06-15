import * as React from 'react';
interface IshowTodoListProps{
  items : string[]
  onDelete: (e: React.MouseEvent<any>)=>any;
}
  
   const DeleteAndShowTodoList = (props: IshowTodoListProps ) =>{
    return(
  <ul>
    {
      props.items.map((item : any, index: any) => <li key={index}>{item}

      <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        props.onDelete(index);
      }} > X </button>
      </li>)
    }
  </ul>
    )
}
  export default DeleteAndShowTodoList;