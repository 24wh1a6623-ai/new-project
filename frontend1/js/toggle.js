var users=[
    {
        "name" : "john doe",
        "gender" : "male",
        "image" : "/image/john.png"
    },
    {
        "name" : "jane doe",
        "gender" : "female",
        "image" : "/image/jane.png"
    }
]

var curId = 0;

function toggle(){
    curId = (curId + 1)%2;
    var user = users[curId];
    document.getElementById("user-img").src = user.image;

    document.getElementById("user-name").innerText=user.name;
    document.getElementById("user-gender").innerText=user.gender;
        
}