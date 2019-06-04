const maindiv = document.getElementById('maindiv');

const btnSubmit = document.getElementById('btnChange');

btnSubmit.addEventListener('click', function(){
    console.log("hello world!");
    maindiv.innerHTML ="hello world!";
});

/*
//use any one
btnSubmit.addEventListener('click', () => changesome(maindiv));


const changesome = dividiv => {
    console.log("hi world");
    dividiv.innerHTML = "hi world";
};

*/
