//up code here
const ref = firebase.database().ref("Game");
document.querySelector("#btnStartGame").disabled = true
document.querySelector("#btnStartGame2").disabled = true
ref.on('value', snapshot => {
  getGameInfo(snapshot);
})

function getGameInfo(snapshot) {
  document.getElementById('inputPlayer-x').value = '';
  document.getElementById('inputPlayer-o').value = '';
  document.getElementById('inputPlayer2-x').value = '';
  document.getElementById('inputPlayer2-o').value = '';
  snapshot.forEach((data) => {
      const gameInfos = data.val();
      Object.keys(gameInfos).forEach(key => {
          switch (key) {
              case 'user-x-name':
                  playerX = gameInfos[key];
                  document.getElementById('inputPlayer-x').value = gameInfos[key];
                  break;
              case 'user-o-name':
                  playerO = gameInfos[key];
                  document.getElementById('inputPlayer-o').value = gameInfos[key];
                  break;
              case 'user-x-img':
                  playerX = gameInfos[key];
                  document.getElementById('profileX').src = gameInfos[key];
                  break;
              case 'user-o-img':
                  playerO = gameInfos[key];
                  document.getElementById('profileO').src = gameInfos[key];
                  break;
              case 'user-x-name-2':
                  playerX = gameInfos[key];
                  document.getElementById('inputPlayer2-x').value = gameInfos[key];
                  break;
              case 'user-o-name-2':
                  playerO = gameInfos[key];
                  document.getElementById('inputPlayer2-o').value = gameInfos[key];
                  break;
              case 'user-x-img-2':
                  playerX = gameInfos[key];
                  document.getElementById('profileX2').src = gameInfos[key];
                  break;
              case 'user-o-img-2':
                  playerO = gameInfos[key];
                  document.getElementById('profileO2').src = gameInfos[key];
                  break;
              case 'user-x-score':
                  playerO = gameInfos[key];
                  document.getElementById('score-x').src = gameInfos[key];
                  break;
              case 'user-o-score':
                  playerO = gameInfos[key];
                  document.getElementById('score-o').src = gameInfos[key];
                  break;
              case 'user-x-score-2':
                  playerO = gameInfos[key];
                  document.getElementById('score-x2').src = gameInfos[key];
                  break;
              case 'user-o-score-2':
                  playerO = gameInfos[key];
                  document.getElementById('score-o2').src = gameInfos[key];
                  break;
          }
    })
    if (gameInfos["user-x-name"] && gameInfos["user-o-name"]){
        document.querySelector("#btnStartGame").disabled = false
        document.querySelector("#waiting-text").innerHTML = "Click START GAME"
    }
    else {
        
        document.querySelector("#waiting-text").innerHTML = "Waiting for players..."
    }

    if (gameInfos.status === "start"){
        checkWinner()
       
        //document.querySelector("#btnCancel-x").disabled = true
        //document.querySelector("#btnCancel-o").disabled = true
        const boxes = document.querySelectorAll(".table-col")
        boxes.forEach(box => {box.addEventListener("click", inputBox)})
    }
    else if (gameInfos.status === "finish") {
        
        //document.querySelector("#btnCancel-x").disabled = false
        //document.querySelector("#btnCancel-o").disabled = false
        const boxes = document.querySelectorAll(".table-col")
        boxes.forEach(box => {box.removeEventListener("click", inputBox)})
    }
    else{
        //document.querySelector("#btnCancel-x").disabled = false
        //document.querySelector("#btnCancel-o").disabled = false
        const boxes = document.querySelectorAll(".table-col")
        boxes.forEach(box => {box.removeEventListener("click", inputBox)})
    }

    if (gameInfos.turn){
        document.querySelector("#waiting-text").innerHTML = `Turn: ${gameInfos.turn}`
    }

    if (gameInfos.tables){
        for (const box in gameInfos.tables){
            document.querySelector(`#${box} p`).innerHTML = gameInfos.tables[box]
        }
    }
    else{
        const boxes = document.querySelectorAll(".table-col p")
        boxes.forEach(box => {box.innerHTML = ""})
    }

    if (gameInfos.winner == "draw"){
        document.querySelector("#waiting-text").innerHTML = `GAME DRAW`
    }
    else if (gameInfos.winner){
        document.querySelector("#waiting-text").innerHTML = `Bruuh ${gameInfos.winner} you are loser!` //revest***
    }
    if (gameInfos.logoutPhotoX){
        document.getElementById("profileX").src = `${gameInfos.logoutPhotoX}`
        ref.child('game-1').child("logoutPhotoX").remove();
    }
    if (gameInfos.logoutPhotoO){
        document.getElementById("profileO").src = `${gameInfos.logoutPhotoO}`
        ref.child('game-1').child("logoutPhotoO").remove();
    }
    if (gameInfos.logoutScoreX){
        document.getElementById("score-x").innerHTML = `(${gameInfos.logoutScoreX})`
        ref.child('game-1').child("logoutScoreX").remove();
    }
    if (gameInfos.logoutScoreO){
        document.getElementById("score-o").innerHTML = `(${gameInfos.logoutScoreO})`
        ref.child('game-1').child("logoutScoreO").remove();
    }
    //room2 here
    if (gameInfos["user-x-name-2"] && gameInfos["user-o-name-2"]){
        document.querySelector("#btnStartGame2").disabled = false
        document.querySelector("#waiting-text2").innerHTML = "Click START GAME"
    }
    else {
        
        document.querySelector("#waiting-text2").innerHTML = "Waiting for players..."
    }

    if (gameInfos.status2 === "start"){
        checkWinner2()
       
        //document.querySelector("#r2btnCancel-x").disabled = true
        //document.querySelector("#r2btnCancel-o").disabled = true
        const boxes2 = document.querySelectorAll(".tab2")
        boxes2.forEach(box2 => {box2.addEventListener("click", inputBox2)})
    }
    else if (gameInfos.status2 === "finish") {
        
        //document.querySelector("#r2btnCancel-x").disabled = false
        //document.querySelector("#r2btnCancel-o").disabled = false
        const boxes2 = document.querySelectorAll(".tab2")
        boxes2.forEach(box2 => {box2.removeEventListener("click", inputBox2)})
    }
    else{
        //document.querySelector("#r2btnCancel-x").disabled = false
        //document.querySelector("#r2btnCancel-o").disabled = false
        const boxes2 = document.querySelectorAll(".tab2")
        boxes2.forEach(box2 => {box2.removeEventListener("click", inputBox2)})
    }

    if (gameInfos.turn2){
        document.querySelector("#waiting-text2").innerHTML = `Turn: ${gameInfos.turn2}`
    }

    if (gameInfos.tables2){
        for (const box2 in gameInfos.tables2){
            document.querySelector(`#${box2} p`).innerHTML = gameInfos.tables2[box2]
            
        }
    }
    else{
        const boxes2 = document.querySelectorAll(".tab2 p")
        boxes2.forEach(box2 => {box2.innerHTML = ""})
    }

    if (gameInfos.winner2 == "draw"){
        document.querySelector("#waiting-text2").innerHTML = `GAME DRAW`
    }
    else if (gameInfos.winner2){
        document.querySelector("#waiting-text2").innerHTML = `Bruuh ${gameInfos.winner2} you are loser!` //revest***
    }
    if (gameInfos.logoutPhotoX2){
        document.getElementById("profileX2").src = `${gameInfos.logoutPhotoX2}`
        ref.child('game-2').child("logoutPhotoX2").remove();
    }
    if (gameInfos.logoutPhotoO2){
        document.getElementById("profileO2").src = `${gameInfos.logoutPhotoO2}`
        ref.child('game-2').child("logoutPhotoO2").remove();
    }
    if (gameInfos.logoutScoreX2){
        document.getElementById("score-x2").innerHTML = `(${gameInfos.logoutScoreX2})`
        ref.child('game-2').child("logoutScoreX2").remove();
    }
    if (gameInfos.logoutScoreO2){
        document.getElementById("score-o2").innerHTML = `(${gameInfos.logoutScoreO2})`
        ref.child('game-2').child("logoutScoreO2").remove();
    }
  })
}

const btnJoins = document.querySelectorAll('.btn-join'); 
btnJoins.forEach(btnJoin => btnJoin.addEventListener('click', joinGame));
const r2btnJoins = document.querySelectorAll('.r2btn-join'); 
r2btnJoins.forEach(r2btnJoin => r2btnJoin.addEventListener('click', joinGame));

function joinGame(event) {
  const currentUser = firebase.auth().currentUser;
  //console.log('[Join] Current user:', currentUser);
      if (document.getElementById("lobby").innerHTML == "Room1") {
        const btnJoinID = event.currentTarget.getAttribute('id');
        const player = btnJoinID[btnJoinID.length - 1];
        if (currentUser) {
            if (`${player}` == 'x') { 
              document.querySelector('#btnCancel-o').disabled = true;
              document.querySelector('#btnJoin-o').disabled = true; 
              document.querySelector("#leave").disabled = true;
            }
            if (`${player}` == 'o') {
              document.querySelector('#btnCancel-x').disabled = true;
              document.querySelector('#btnJoin-x').disabled = true; 
              document.querySelector("#leave").disabled = true;
            }
        }
        const playerForm = document.getElementById(`inputPlayer-${player}`);
        if (playerForm.value == '') {
          // Add player into database 
            let tmpID = `user-${player}-id`;
            let tmpName = `user-${player}-name`;
            let tmpImg = `user-${player}-img`;
            let tmpScore = `user-${player}-score`;
            ref.child('game-1').update({
                [tmpID]: currentUser.uid,
                [tmpName]: currentUser.displayName,
                [tmpImg]: currentUser.photoURL,
                [tmpScore]: 0,
            });
            //console.log(currentUser.displayName + ' added.');
            //console.log(currentUser.photoURL + ' added.');
            event.currentTarget.disabled = true;
          }
        }
      if (document.getElementById("lobby").innerHTML == "Room2") {
        const btnJoinID = event.currentTarget.getAttribute('id');
        const player = btnJoinID[btnJoinID.length - 1];
        if (currentUser) {
            if (`${player}` == 'x') { 
              document.querySelector('#r2btnJoin-o').disabled = true; 
              document.querySelector('#r2btnCancel-o').disabled = true; 
              document.querySelector("#leave2").disabled = true;
            }
            if (`${player}` == 'o') { 
              document.querySelector('#r2btnJoin-x').disabled = true; 
              document.querySelector('#r2btnCancel-x').disabled = true;
              document.querySelector("#leave2").disabled = true;
            }
        }
        const playerForm = document.getElementById(`inputPlayer2-${player}`);
        if (playerForm.value == '') {
          // Add player into database 
          let tmpID2 = `user-${player}-id-2`;
          let tmpName2 = `user-${player}-name-2`;
          let tmpImg2 = `user-${player}-img-2`;
          let tmpScore2 = `user-${player}-score-2`;
          ref.child('game-2').update({
            [tmpID2]: currentUser.uid,
            [tmpName2]: currentUser.displayName,
            [tmpImg2]: currentUser.photoURL,
            [tmpScore2]: 0,
          });
          event.currentTarget.disabled = true;
        }
      }
  }


const btnCancels = document.querySelectorAll('.btn-cancel-join-game');
btnCancels.forEach(btnCancel => btnCancel.addEventListener("click", cancelJoin));
const r2btnCancels = document.querySelectorAll('.r2btn-cancel-join-game');
r2btnCancels.forEach(btnCancel => btnCancel.addEventListener("click", cancelJoin));
function cancelJoin(event) {
    const currentUser = firebase.auth().currentUser;
    //console.log('[Cancel] Current user:', currentUser);
    if (currentUser) {
        const btnCanceID = event.currentTarget.getAttribute('id');
        const player = btnCanceID[btnCanceID.length - 1];
      if (document.getElementById("lobby").innerHTML == "Room1") {
        const playerForm = document.getElementById(`inputPlayer-${player}`);
        if (playerForm.value && playerForm.value === currentUser.displayName) {
            // Delete player from database 
            let tmpID = `user-${player}-id`;
            let tmpName = `user-${player}-name`;
            let tmpImg = `user-${player}-img`;
            let tmpScore = `user-${player}-score`;
            ref.child('game-1').child(tmpID).remove();
            ref.child('game-1').child(tmpName).remove();
            ref.child('game-1').child(tmpImg).remove();
            ref.child('game-1').child(tmpScore).remove();
            //console.log(`delete on id: ${currentUser.uid}`);
            document.querySelector(`#btnJoin-${player}`).disabled = false;
            
        }
        if (`${player}` == 'x') { 
          document.querySelector(`#btnJoin-o`).disabled = false;
          document.querySelector('#btnCancel-o').disabled = false;
          document.querySelector("#leave").disabled = false;
          ref.child("game-1").update({
            logoutPhotoX: "image/user-circle.png",
            logoutScoreO: "0",
        })
        }
        if (`${player}` == 'o') { 
          document.querySelector(`#btnJoin-x`).disabled = false;
          document.querySelector('#btnCancel-x').disabled = false;
          document.querySelector("#leave").disabled = false;
          ref.child("game-1").update({
            logoutPhotoO: "image/user-circle.png",
            logoutScoreX: "0",
        })
        }
      }
      if (document.getElementById("lobby").innerHTML == "Room2") {
        const playerForm = document.getElementById(`inputPlayer2-${player}`);
        if (playerForm.value && playerForm.value === currentUser.displayName) {
            // Delete player from database 
            let tmpID2 = `user-${player}-id-2`;
            let tmpName2 = `user-${player}-name-2`;
            let tmpImg2 = `user-${player}-img-2`;
            let tmpScore2 = `user-${player}-score-2`;
            ref.child('game-2').child(tmpID2).remove();
            ref.child('game-2').child(tmpName2).remove();
            ref.child('game-2').child(tmpImg2).remove();
            ref.child('game-2').child(tmpScore2).remove();
            //console.log(`delete on id: ${currentUser.uid}`);
            document.querySelector(`#r2btnJoin-${player}`).disabled = false;
        }
        if (`${player}` == 'x') { 
            document.querySelector(`#r2btnJoin-o`).disabled = false;
            document.querySelector('#r2btnCancel-o').disabled = false;
            document.querySelector("#leave2").disabled = false;
            ref.child("game-2").update({
              logoutPhotoX2: "image/user-circle.png",
              logoutScoreO2: "0",
          })
        }
        if (`${player}` == 'o') { 
            document.querySelector(`#r2btnJoin-x`).disabled = false;
            document.querySelector('#r2btnCancel-x').disabled = false;
            document.querySelector("#leave2").disabled = false;
            ref.child("game-2").update({
              logoutPhotoO2: "image/user-circle.png",
              logoutScoreX2: "0",
          })
        }
      }
    }
}

const btnStartGame = document.querySelector("#btnStartGame");
btnStartGame.addEventListener("click", startGame)

function startGame(event){
    ref.child("game-1").update({
        status: "start",
        turn: "X",
        tables: "",
    })
}
const btnStartGame2 = document.querySelector("#btnStartGame2");
btnStartGame2.addEventListener("click", startGame2)

function startGame2(event){
    ref.child("game-2").update({
        status2: "start",
        turn2: "X",
        tables2: "",
    })
}
const btnTerminateGame = document.querySelector("#restart");
btnTerminateGame.addEventListener("click", terminateGame)

function terminateGame(event){
    ref.child("game-1").child("status").remove()
    ref.child("game-1").child("turn").remove()
    ref.child("game-1").child("tables").remove()
    ref.child("game-1").child("winner").remove()
}
const btnTerminateGame2 = document.querySelector("#restart2");
btnTerminateGame2.addEventListener("click", terminateGame2)

function terminateGame2(event){
    ref.child("game-2").child("status2").remove()
    ref.child("game-2").child("turn2").remove()
    ref.child("game-2").child("tables2").remove()
    ref.child("game-2").child("winner2").remove()
}
function inputBox(event){
  ref.child("game-1").once("value", snapshot => {
      data = snapshot.val()
      currentUser = firebase.auth().currentUser
      id = event.currentTarget.id
      if (data.turn === "X" && data["user-x-name"] === currentUser.displayName && !data["tables"][id]){
          ref.child("game-1").child("tables").update({
              [id]: data.turn
          })
          ref.child("game-1").update({
              turn: "O"
          })
      }
      else if (data.turn === "O" && data["user-o-name"] === currentUser.displayName && !data["tables"][id]){
          ref.child("game-1").child("tables").update({
              [id]: data.turn
          })
          ref.child("game-1").update({
              turn: "X"
          })
      }
  })
}
function inputBox2(event){
    ref.child("game-2").once("value", snapshot => {
        data = snapshot.val()
        currentUser = firebase.auth().currentUser
        id = event.currentTarget.id
        if (data.turn2 === "X" && data["user-x-name-2"] === currentUser.displayName && !data["tables2"][id]){
            ref.child("game-2").child("tables2").update({
                [id]: data.turn2
            })
            ref.child("game-2").update({
                turn2: "O"
            })
        }
        else if (data.turn2 === "O" && data["user-o-name-2"] === currentUser.displayName && !data["tables2"][id]){
            ref.child("game-2").child("tables2").update({
                [id]: data.turn2
            })
            ref.child("game-2").update({
                turn2: "X"
            })
        }
    })
  }

function checkWinner(){
  ref.child("game-1").once("value", snapshot => {
      data = snapshot.val()
      currentUser = firebase.auth().currentUser
      turns = ["X", "O"]

      if (data.winner2){
          return
      }

      for (const turn of turns){
          win1 = data["tables"]["row-1-col-1"] == turn && data["tables"]["row-1-col-2"] == turn && data["tables"]["row-1-col-3"] == turn 
          win2 = data["tables"]["row-2-col-1"] == turn && data["tables"]["row-2-col-2"] == turn && data["tables"]["row-2-col-3"] == turn 
          win3 = data["tables"]["row-3-col-1"] == turn && data["tables"]["row-3-col-2"] == turn && data["tables"]["row-3-col-3"] == turn 
          win4 = data["tables"]["row-1-col-1"] == turn && data["tables"]["row-2-col-1"] == turn && data["tables"]["row-3-col-1"] == turn 
          win5 = data["tables"]["row-1-col-2"] == turn && data["tables"]["row-2-col-2"] == turn && data["tables"]["row-3-col-2"] == turn 
          win6 = data["tables"]["row-1-col-3"] == turn && data["tables"]["row-2-col-3"] == turn && data["tables"]["row-3-col-3"] == turn 
          win7 = data["tables"]["row-1-col-1"] == turn && data["tables"]["row-2-col-2"] == turn && data["tables"]["row-3-col-3"] == turn 
          win8 = data["tables"]["row-1-col-3"] == turn && data["tables"]["row-2-col-2"] == turn && data["tables"]["row-3-col-1"] == turn 

          if (win1 || win2 || win3 || win4 || win5 || win6 || win7 || win8){
            id = data[`user-${turn.toLowerCase()}-score`]
            score = parseInt(document.getElementById(`score-${turn.toLowerCase()}`).innerHTML.slice(1,-1))+1
            if (turn == 'X'){
                ref.child("game-1").update({
                    status: "finish",
                    winner: turn,
                    'user-x-score': score
                })
                document.getElementById(`score-x`).innerHTML = "("+score+")";
                return
            }
            if (turn == 'O'){
                ref.child("game-1").update({
                    status: "finish",
                    winner: turn,
                    'user-o-score': score
                })
                document.getElementById(`score-o`).innerHTML = "("+score+")";
                return
            }
        }
          if (data["tables"]["row-1-col-1"] && data["tables"]["row-1-col-2"] && data["tables"]["row-1-col-3"] && data["tables"]["row-2-col-1"] && data["tables"]["row-2-col-2"] && data["tables"]["row-2-col-3"] && data["tables"]["row-3-col-1"] && data["tables"]["row-3-col-2"] && data["tables"]["row-3-col-3"]){
              ref.child("game-1").update({
                  status: "finish",
                  winner: "draw"
              })
              return
          }
      }
  })
}

function checkWinner2(){
    ref.child("game-2").once("value", snapshot => {
        data = snapshot.val()
        currentUser = firebase.auth().currentUser
        turns = ["X", "O"]
  
        if (data.winner2){
            return
        }
  
        for (const turn of turns){
            win1 = data["tables2"]["r2row-1-col-1"] == turn && data["tables2"]["r2row-1-col-2"] == turn && data["tables2"]["r2row-1-col-3"] == turn 
            win2 = data["tables2"]["r2row-2-col-1"] == turn && data["tables2"]["r2row-2-col-2"] == turn && data["tables2"]["r2row-2-col-3"] == turn 
            win3 = data["tables2"]["r2row-3-col-1"] == turn && data["tables2"]["r2row-3-col-2"] == turn && data["tables2"]["r2row-3-col-3"] == turn 
            win4 = data["tables2"]["r2row-1-col-1"] == turn && data["tables2"]["r2row-2-col-1"] == turn && data["tables2"]["r2row-3-col-1"] == turn 
            win5 = data["tables2"]["r2row-1-col-2"] == turn && data["tables2"]["r2row-2-col-2"] == turn && data["tables2"]["r2row-3-col-2"] == turn 
            win6 = data["tables2"]["r2row-1-col-3"] == turn && data["tables2"]["r2row-2-col-3"] == turn && data["tables2"]["r2row-3-col-3"] == turn 
            win7 = data["tables2"]["r2row-1-col-1"] == turn && data["tables2"]["r2row-2-col-2"] == turn && data["tables2"]["r2row-3-col-3"] == turn 
            win8 = data["tables2"]["r2row-1-col-3"] == turn && data["tables2"]["r2row-2-col-2"] == turn && data["tables2"]["r2row-3-col-1"] == turn 
  
            if (win1 || win2 || win3 || win4 || win5 || win6 || win7 || win8){
              id = data[`user-${turn.toLowerCase()}-score-2`]
              score = parseInt(document.getElementById(`score-${turn.toLowerCase()}2`).innerHTML.slice(1,-1))+1
              if (turn == 'X'){
                  ref.child("game-2").update({
                      status2: "finish",
                      winner2: turn,
                      'user-x-score-2': score
                  })
                  document.getElementById(`score-x2`).innerHTML = "("+score+")";
                  return
              }
              if (turn == 'O'){
                  ref.child("game-2").update({
                      status2: "finish",
                      winner2: turn,
                      'user-o-score-2': score
                  })
                  document.getElementById(`score-o2`).innerHTML = "("+score+")";
                  return
              }
          }
            if (data["tables2"]["r2row-1-col-1"] && data["tables2"]["r2row-1-col-2"] && data["tables2"]["r2row-1-col-3"] && data["tables2"]["r2row-2-col-1"] && data["tables2"]["r2row-2-col-2"] && data["tables2"]["r2row-2-col-3"] && data["tables2"]["r2row-3-col-1"] && data["tables2"]["r2row-3-col-2"] && data["tables2"]["r2row-3-col-3"]){
                ref.child("game-2").update({
                    status2: "finish",
                    winner2: "draw"
                })
                return
            }
        }
    })
  }