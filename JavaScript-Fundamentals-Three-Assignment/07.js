const userMap = new Map()
userMap.set("username",{name: "Peter", age: 18, email: "peter@outlook.com"})

userMap.set("username",{name: "Peter England", age: 20, email: "peterengland@outlook.com"})

userMap.delete("username")

const userInfo = userMap.get("username")

if (userInfo) {
    console.log(userInfo.name)
} else {
    console.log("User not found!")
}



/*========================
OUTPUT :
    User not found!
========================*/