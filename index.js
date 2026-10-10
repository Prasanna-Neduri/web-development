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