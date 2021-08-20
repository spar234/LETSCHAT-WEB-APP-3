user_name = localStroage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + "|";

function addFriend()
{

      room_name = document.getElementById("room_name").value;
purpose : "adding room name"
});

localStorage.setItem("room_name , " room_name);

window.location = "kwitter_page.html";

}

function getDate() {  firebase.database().rel("/").on('value,' function(snapshot)( document.getElementById("output").innerHTML
room_name = childKey;
console.log("Room Name = " + room_name);
row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)'>#"+ Room_name + "</div><hr>";
document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name)
    window.location = "kwitter_page.html";

}
function onclick (){
      removeItem 
}
     


