const users= [
    {user_Id:1, userName: "Rakesh", gender:"Male"},
    {user_Id:2, userName: "sakib", gender:"Male"},
    {user_Id:3, userName: "sarfaraaz", gender:"Male"}
]

for (let user of users) {
    console.log(`ID: ${user.user_Id}, Name: ${user.userName}, Gender: ${user.gender}`);
}



