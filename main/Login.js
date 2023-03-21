var objPeople = [
    {
        email : "Mortazah.alizada1051gmail.com",
        password : "12345678" 
    },
    {
        email : "Aardappel@gmail.com",
        password : "qwerty" 
    }
]
function getinfo()
{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    for ( var i = 0; i < objPeople.length;i++)
    {
        if (email == objPeople[i].email && password == objPeople[i].password){
            console.log("The user in logged in");
            //window.location.href='http://www.google.com';
            return;
        }

    }
    console.log('The email or password are wrong!');
}