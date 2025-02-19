// userlogged question - 
let user_Logged = false;
let userStatus;
switch (user_Logged){
    case true:
        userStatus = "Class-1"
        break;
    case false:
        userStatus = "Class-2"
        break;
    default :
      userStatus = "unknown"   
}
console.log(userStatus);