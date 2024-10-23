const clickMe = document.getElementById('btn');
const textS = document.getElementById('text')

let randomN = ['A','B','C','D','E','F', '1','2','3','4','5','6'];

clickMe.addEventListener('click', () =>{
    let result = "#";

    for (let i = 0; i < 6; i++){
        let random = randomN[Math.floor(Math.random() * randomN.length)]
        result += random;
}
    textS.innerHTML = result;
    document.body.style.backgroundColor = result;
});



