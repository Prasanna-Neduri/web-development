var arr=[
    {
        "name":"John Doe",
        "gender":"male",
        "image":"john.png"
    },
    {
        "name":"Jane Doe",
        "gender":"female",
        "image":"jane.png"
    }
]
let index=0;

function toogle(){
    if(index==0){
        index=1;
    }
    else{
        index=0;
    }
    document.getElementById("user-name").innerText=arr[index].name;
    document.getElementById("user-gender").innerText=arr[index].gender;
    document.getElementById("user-image").src=arr[index].image;
}

function randomUser(){
    fetch("https://randomuser.me/api")
        .then(function(rawData){
            return rawData.json();
        })
        .then(function(jsonData){
            var user=jsonData.results[0];
            var gender=user.gender;
            var fullName=user.name.title+" "+user.name.first+" "+user.name.last;
            document.getElementById("user-name").innerText=fullName;
            document.getElementById("user-gender").innerText=gender;
            document.getElementById("user-image").src=user.picture.large;})

        }