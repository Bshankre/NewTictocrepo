let turn=true;


document.addEventListener("DOMContentLoaded", function() {
    // Get all buttons with class "box"
    var buttons = document.querySelectorAll(".box");
  
    // Loop through each button and add a click event listener
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        // Show a message when the button is clicked
        console.log('clicked');
        if (turn){
            button.innerText ="O";
            turn=false;
        }else{
            button.innerText="X";
            turn=true;
        }  
    // once the button is clicked and entered value "o" or "X" to avoid again changing the value we disable that button
       button.disabled=true; 
       checkwinner();
      });
      // checking the winner based on their patterns of winning
      const checkwinner=()=>{
        let pattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        for(let patt of pattern){
          let pos1 = buttons[patt[0]].innerText;
          let pos2 = buttons[patt[1]].innerText;
          let pos3 = buttons[patt[2]].innerText;
          if(pos1 !="" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                document.getElementsByTagName("p")[0].style.display="block";
                showWinner(pos1)
            }
          }
    }
}

//disable the buttons once the player is won the game
const disabledbutton =() =>{
    for(let button of buttons){
        button.disabled=true;
    }
}
//   this function displays the winner on the screen 
const showWinner = (winner) =>{
    document.getElementsByTagName("p")[0].innerText=`Congratulations Winner is ${winner}`;
    disabledbutton();
}
      });

      let resetbut = document.querySelector(".reset")
      resetbut.addEventListener("click",()=>{
        resetgame();
        // console.log('hi');
        
      })

      //function to reset all the buttons to empty state
const resetgame=()=>{
    for(let button of buttons){
        button.innerText="";
        button.disabled=false;
        document.getElementsByTagName("p")[0].style.display="none";
    } 
}
    });
 
 