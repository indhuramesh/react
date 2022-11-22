import ReactDOM from 'react-dom/client';
class Hello extends  React.Component
{
   constructor(props)
   {
    super(props)
    this.state={id:101,name:"indhu"}
   }
   change=()=>{this.setState({name:"hiro"})}
   render()
   {
    return(<><h1>Hi{this.state.name}</h1>
    <button onClick={this.change}>click</button></>)
   }
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello name="indhu" />);