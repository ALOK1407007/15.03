import React, { Component } from 'react';
import './app.css'
class App extends Component {
     constructor(){
          super()
             this.state={
               count : 0
             }
     }
     handleINC=()=>{
          this.setState({
               count : this.state.count+1
          })
     }
     handleDEC=()=>{
          this.setState({
               count :this.state.count-1
          })
     }
     handleRESET=()=>{
          this.setState({
               count : 0
          })
     }

     render() {
          
          return (
               <div className='a'>
                   <div className='b'>{this.state.count}</div>
                   <div className='c'>
                   <button onClick={this.handleINC} className='a1'>+ increment</button>
                   <button onClick={this.handleDEC} className='a2'>- decrement</button>
                   <button onClick={this.handleRESET} className='a3'>RESET</button>
                   </div>
                    
                   
               </div>
          );
     }
}

export default App;
