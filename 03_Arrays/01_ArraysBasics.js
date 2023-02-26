let guestName = prompt("Enter the Guest name");


let guestNameList = ["Jani", "Redan", "Rahul", "Golu", "Vinay"];


let isGuestName = guestNameList.includes(guestName);

if(isGuestName == true){
    alert("Welcome");
}else{
    alert("Sorry, may be next time");
}