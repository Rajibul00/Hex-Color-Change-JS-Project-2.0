let bodycolor = document.body;
let button = document.querySelector('button')
function changecolor(){
    let hashtag = '#';
    let hashtag2 = '#';
    let colorcode = '0123456789abcdef';
for(i=0;i<6;i++){
    hashtag+=colorcode[Math.floor(Math.random()*16)];
    hashtag2+=colorcode[Math.floor(Math.random()*16)]
}

    bodycolor.style.backgroundColor= hashtag;
button.style.backgroundColor= hashtag2;
button.style.color='white';

};
