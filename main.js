function addUser(){
    player1name=document.getElementById("player1NameInput").value
    player2name=document.getElementById("player2NameInput").value
    localStorage.setItem("player1Name",player1name)
    localStorage.setItem("player2Name",player2name)
    window.location="game_page.html"
}