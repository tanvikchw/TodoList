import * as React from "react";
import DeleteAndShowTodoList from "./DeleteAndShowTodoList";
// tslint:disable-next-line:ordered-imports
import { ITodoProps } from './TodoList';
export interface ITodoProps{
  term: string,
  items : string[],
  filteredItems : string[],
  key: any
};
class TodoList  extends React.Component<{}, ITodoProps>{

  constructor(props: any){
    super(props);
    this.state = {
      term: '',
      // tslint:disable-next-line:object-literal-sort-keys
      items: [],
      filteredItems : [],
      key: ''
    };
    this.createTasks = this.createTasks.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  public createTasks(item : any) {
    // tslint:disable-next-line:jsx-no-lambda
    return <li onClick={() => this.deleteItem(item.key)} 
                key={item.key}>{item.text}</li>
  }
  public onChange = (event: any) => {
    this.setState({term: event.target.value});
  }

  public onSubmit = (event : any) => {
    event.preventDefault()
    this.setState({
      term: '',
      // tslint:disable-next-line:object-literal-sort-keys
      items: [...this.state.items, this.state.term]
    });
  }

  public deleteItem(key : any) {
    const filteredItems = this.state.items.filter((item, index) => {
      return (index !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }
 
  
  public render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input value={this.state.term} onChange={this.onChange}  placeholder = "enter task" /> 
        <button type= "submit" > + </button>
      </form>
      <br/><br/><br/>
      <DeleteAndShowTodoList items={this.state.items} onDelete={this.deleteItem}/>
        </div>
    );
  }
}

export default TodoList;
