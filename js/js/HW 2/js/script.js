function enterNames() {
    var namesArray = [];
    for (var i = 0; i < 5; i++) {
        namesArray[i] = prompt('Enter name ' + (i + 1));
        console.log('name ' + (i + 1) + ' : ' + namesArray[i]);
    }
    return namesArray;
}


function checkUser() {
    var namesArray = enterNames();
    var userName = prompt('Please, enter user name:');
    for (var i = 0; i < namesArray.length; i++) {
        if (namesArray[i] === userName) {
            alert(userName + ', you entered successful!');
            return;
        }
    }
    alert('Error! Incorrect user name!');
}

checkUser();