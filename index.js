var element1 = document.getElementsByClassName('column');
var board = ['','','','','','','','',''];

function switchValue(val){
    if(val==='X') val = 'O';
    else val= 'X';
    return val;
}
function checkComplete(){
    for(var i=0;i<9;i++){
        if(board[i]===''){
            return false;
        }
    }
    return true;
}
function checkWinner() {
    if(board[0]===board[1] && board[0]===board[2]){ return board[0];}
    if(board[3]===board[4] && board[3]===board[5]){return board[3];} 
    if(board[6]===board[7] && board[6]===board[8]){return board[6];} 
    if(board[0]===board[3] && board[3]===board[6]){return board[0];} 
    if(board[1]===board[4] && board[1]===board[7]){return board[1];} 
    if(board[2]===board[5] && board[5]===board[8]){return board[2];} 
    if(board[0]===board[4] && board[0]===board[8]){return board[0];} 
    if(board[2]===board[4] && board[2]===board[6]){return board[2];} 
    return '';
    
}
function maxwin(val){
    if (checkWinner()==='X') return -1;
    if (checkWinner()==='O') return (1);
    if (checkComplete()=== true) return 0;
    var ans = 0;
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if ( board[i*3+j] === '' ){
                board[i*3+j] = val;
                var temp = maxwin(switchValue(val));
                if(val==='O'){
                        if(ans<temp) ans = temp;
                }
                else if(val==='X'){
                        if(ans>temp) ans = temp;
                }
                board[i*3+j] = '';
            }
        }
    }
    return ans;
}
function computermove(){
    var p = -1;
    var q = -1;
    var highest = -1;
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if ( board[i*3 + j] === '' ){
                board[i*3 + j] = 'O';
                var val = 'X';
                var temp= maxwin(val);
                if(temp >= highest){
                    highest = temp;
                    p=i;
                    q=j;
                }
                board[i*3 + j] = '';
            }
        }
    }
    board[p*3+q] = 'O';
    element1[p*3+q].innerHTML = "O";
    element1[p*3+q].style.opacity = 1;
}
function usermove(square){
    this.style.opacity = 1;
    var a = this.textContent;
    if(a === ""){
        this.innerHTML = "X";
        this.style.color = "#00AAF5";
        board[square.target.id] = 'X';
        if(checkWinner()!=''){
            greetWinner();
        }
        computermove();
        if(checkWinner()!=''){
            greetWinner();
        }
        
    } 
}
function startGame(){
    board = ['','','','','','','','',''];
    for ( var i = 0; i < element1.length; i++) { 
        element1[i].innerHTML = "";
        element1[i].style.opacity = 0.75;
        element1[i].style.backgroundColor= "#ffffff";
        element1[i].style.color="#2E48C9";
        
    }

    for ( var i = 0; i < element1.length; i++) { 
        element1[i].style.cursor = 'pointer';
        element1[i].addEventListener('click',usermove,false);
        
    }

}


function greetWinner(){
    var greeted = false;
    
    if(board[0]===board[1] && board[0]===board[2]){
        element1[0].style.backgroundColor = "#758AA2";
        element1[1].style.backgroundColor = "#758AA2";
        element1[2].style.backgroundColor = "#758AA2";
        greeted = true;
    }
    else if(board[3]===board[4] && board[3]===board[5]){
        element1[3].style.backgroundColor = "#758AA2";
        element1[4].style.backgroundColor = "#758AA2";
        element1[5].style.backgroundColor = "#758AA2";
        greeted = true;

    } 
    else if(board[6]===board[7] && board[6]===board[8]){
        element1[6].style.backgroundColor = "#758AA2";
        element1[7].style.backgroundColor = "#758AA2";
        element1[8].style.backgroundColor = "#758AA2";
        greeted = true;

    } 
    else if(board[0]===board[3] && board[3]===board[6]){
        element1[0].style.backgroundColor = "#758AA2";
        element1[3].style.backgroundColor = "#758AA2";
        element1[6].style.backgroundColor = "#758AA2";
        greeted = true;

    } 
    else if(board[1]===board[4] && board[1]===board[7]){
        element1[1].style.backgroundColor = "#758AA2";
        element1[4].style.backgroundColor = "#758AA2";
        element1[7].style.backgroundColor = "#758AA2";
        greeted = true;

    } 
    else if(board[2]===board[5] && board[5]===board[8]){
        element1[8].style.backgroundColor = "#758AA2";
        element1[5].style.backgroundColor = "#758AA2";
        element1[2].style.backgroundColor = "#758AA2";
        greeted = true;

    } 
    else if(board[0]===board[4] && board[0]===board[8]){
        element1[0].style.backgroundColor = "#758AA2";
        element1[8].style.backgroundColor = "#758AA2";
        element1[4].style.backgroundColor = "#758AA2";
        greeted = true;

    } 
    else if(board[2]===board[4] && board[2]===board[6]){
        element1[2].style.backgroundColor = "#758AA2";
        element1[4].style.backgroundColor = "#758AA2";
        element1[6].style.backgroundColor = "#758AA2";
        greeted = true;

    }
    else{
        greeted = false;
    }

}
startGame();
