import React ,{Component} from 'react';
import './index.css'
export default class App extends Component{
  constructor()
  {
     super()
     this.state = {
       player: "X",
       board: ["","","","","","","","",""]
     }
    
   }

   squareClicked(index)
   {
     let player = this.state.player
     let board = this.state.board
     board[index]  = player

     let win_pos = [
       [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
     ]

     for(let i=0; i<win_pos.length;i++)
      {
          
          const [a,b,c] = win_pos[i];
          
          if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            
                alert(`winner! Player ${player} has won`)
                window.location.reload(false);
              }
                        
          

      }




     player = (player === 'X')? "O" : "X";
     this.setState({
       player:player,
       board : board
     })
    //  console.log("index",index)
   }
  render()
  {
    return(
      <div className = "App">
          <div className = "Board">
              {this.state.board.map((Square, index)=>{
                return(<div onClick ={ ()=>{this.squareClicked(index)}} className = "Square"><h4 className="letter">{Square}</h4></div>)
              })}           
           </div>

      </div>
    )
  }
}
