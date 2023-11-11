var istatus = document.querySelector("h5")
var addfriend = document.querySelector("button")

var check = 0;
addfriend.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "friends"
        istatus.style.color = "green"
        addfriend.innerHTML = "remove"
        check = 1
    } else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        addfriend.innerHTML = "Add Friend"
        check = 0

    }

})