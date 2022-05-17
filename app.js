let znak;                                                                               // promenljiva za smestanje simbola X i O
let upis = document.querySelector('.ispisTexta');                                       // paragraf za informisanje igracha, za upis texta
let dugme = document.querySelectorAll('.grid-item');                                    // selektuje sva polja, tablu za igru, pravi Nodelist
let blokada = 0;                                                                        // dok se ne klikne New round nista se ne deshava na tabli
const poljaTabele = Array.from(dugme);                                                  // od Node list-e pravimo niz kako bi manipulisali elementima istog
let bojaX = document.getElementById('iks');
let bojaO= document.getElementById('oks');
let score1 = document.querySelector('.ispisTextaX');
let scoreX = 0;
let score2 = document.querySelector('.ispisTextaO');
let scoreO = 0;
let rezultat = document.querySelector('.rezultat');

window.onload = () => {                                                                 // pri uchitavanju stranice obavesti igracha shta treba da uradi kako bi
        upis.innerText = 'Click "New round" to start game.';                            // zapocheo igru
}

document.querySelector('.novaRunda').addEventListener("click", () => {                  // kada se pritisne button New round automatski se izvrshi random odabir jednog
        const simboli = [ 'X' , 'O'];                                                   // od 2 simbola i igrach se obaveshtava ko je na potezu da igra, takodje se skida
        znak = simboli[Math.floor(Math.random() * simboli.length)];                     // blokada kako bi se simboli mogli postaviti u polja na tabli
        blokada = 1;
        upis.innerText = znak + ' play first, good luck!';
        rezultat.innerText = "Score: ";
        score1.innerText = 'X - ' + scoreX;
        score2.innerText = 'O - ' + scoreO;
        bojaO.style.background = '';
        bojaX.style.background = '';
        znak ==='O' ? (bojaO.style.background ="yellow", bojaX.style.background = '') :  (bojaX.style.background  = 'yellow', bojaO.style.background = '');

        dugme.forEach(button => { 
                button.innerText = "";
                button.style.background = '';
        });
})


dugme.forEach(button => {                                                               // za svaki button iz Node liste se nalazi koji je pritisnut i shodno tome u njega 
        button.addEventListener("click", () => {                                        // se upisuje odredjeni simbol, ovde se menja simbol kada igrach jedan igrach postavi svoj,
                if (blokada === 1) {                                                    // takodje se ovde vrsi provera da li je neki od igraca postavio znakove u odgovarajucoj formi, tj. da li je pobedio
                        if (button.innerText === "") {                                  // i na osnovu toga se menja boja pozadine polja tabele gde su simboli formirani u pobednichi niz.
                                let indexPolja = poljaTabele.indexOf(button);
                                poljaTabele[indexPolja].innerText = znak;

                                if (poljaTabele[0].innerText === znak && poljaTabele[1].innerText === znak &&  poljaTabele[2].innerText === znak){
                                        poljaTabele[0].style.background = 'lightgreen';
                                        poljaTabele[1].style.background = 'lightgreen'; 
                                        poljaTabele[2].style.background = 'lightgreen';
                                        upis.innerText = znak + ' has WON!';
                                        znak === 'X' ? (scoreX++, score1.innerText = 'X - ' + scoreX) : (scoreO++, score2.innerText = 'O - ' + scoreO);
                                        blokada = 0;
                                        return;
                                }
                                else if (poljaTabele[3].innerText === znak &&  poljaTabele[4].innerText === znak &&  poljaTabele[5].innerText === znak){ 
                                        upis.innerText = znak + ' has WON!';
                                        poljaTabele[3].style.background = 'lightgreen';
                                        poljaTabele[4].style.background = 'lightgreen'; 
                                        poljaTabele[5].style.background = 'lightgreen'; 
                                        blokada = 0;
                                        return;
                                }
                                else if (poljaTabele[6].innerText === znak &&  poljaTabele[7].innerText === znak &&  poljaTabele[8].innerText === znak){       
                                        upis.innerText = znak + ' has WON!';
                                        poljaTabele[6].style.background = 'lightgreen';
                                        poljaTabele[7].style.background = 'lightgreen'; 
                                        poljaTabele[8].style.background = 'lightgreen'; 
                                        blokada = 0;
                                        return;
                                }
                                else if (poljaTabele[0].innerText === znak &&  poljaTabele[3].innerText === znak &&  poljaTabele[6].innerText === znak){       
                                        upis.innerText = znak + ' has WON!';
                                        poljaTabele[0].style.background = 'lightgreen';
                                        poljaTabele[3].style.background = 'lightgreen'; 
                                        poljaTabele[6].style.background = 'lightgreen';
                                        blokada = 0;
                                        return;
                                }
                                else if (poljaTabele[1].innerText === znak &&  poljaTabele[4].innerText === znak &&  poljaTabele[7].innerText === znak){       
                                        upis.innerText = znak + ' has WON!';
                                        poljaTabele[1].style.background = 'lightgreen';
                                        poljaTabele[4].style.background = 'lightgreen'; 
                                        poljaTabele[7].style.background = 'lightgreen'; 
                                        blokada = 0;
                                        return;
                                }
                                else if (poljaTabele[2].innerText === znak &&  poljaTabele[5].innerText === znak &&  poljaTabele[8].innerText === znak){      
                                        upis.innerText = znak + ' has WON!';
                                        poljaTabele[2].style.background = 'lightgreen';
                                        poljaTabele[5].style.background = 'lightgreen'; 
                                        poljaTabele[8].style.background = 'lightgreen'; 
                                        blokada = 0;
                                        return;
                                }
                                else if (poljaTabele[0].innerText === znak &&  poljaTabele[4].innerText === znak &&  poljaTabele[8].innerText === znak){       
                                        upis.innerText = znak + ' has WON!';
                                        poljaTabele[0].style.background = 'lightgreen';
                                        poljaTabele[4].style.background = 'lightgreen'; 
                                        poljaTabele[8].style.background = 'lightgreen'; 
                                        blokada = 0;
                                        return;
                                }
                                else if (poljaTabele[2].innerText === znak &&  poljaTabele[4].innerText === znak &&  poljaTabele[6].innerText === znak){       
                                        upis.innerText = znak + ' has WON!';
                                        poljaTabele[2].style.background = 'lightgreen';
                                        poljaTabele[4].style.background = 'lightgreen'; 
                                        poljaTabele[6].style.background = 'lightgreen'; 
                                        blokada = 0;
                                        return;
                                }
                                znak === 'X'  ? znak  = 'O' : znak = 'X';
                                znak ==='O' ? (bojaO.style.background ="yellow", bojaX.style.background = '') :  (bojaX.style.background  = 'yellow', bojaO.style.background = '');
                                upis.innerText = znak + ' turn to play';
                        }
                        else {
                                alert(' This place is already taken, try another! ');
                        }
                }
        });
})

