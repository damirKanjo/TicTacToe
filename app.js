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
let separate = document.querySelector('.separator');
let rezultat = document.querySelector('.rezultat');
let check = 0;

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
        separate.innerText = '|';
        score2.innerText = 'O - ' + scoreO;
        bojaO.style.background = '';
        bojaX.style.background = '';
        check = 0;
        znak ==='O' ? (bojaO.style.background ="#ffdf87", bojaX.style.background = '') :  (bojaX.style.background  = '#ffdf87', bojaO.style.background = '');

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
                                check++;

                                if (poljaTabele[0].innerText === znak && poljaTabele[1].innerText === znak &&  poljaTabele[2].innerText === znak){
                                        polja(0,1,2,znak.toString());
                                        return;
                                }
                                else if (poljaTabele[3].innerText === znak &&  poljaTabele[4].innerText === znak &&  poljaTabele[5].innerText === znak){
                                        polja(3,4,5,znak.toString());
                                        return;
                                }
                                else if (poljaTabele[6].innerText === znak &&  poljaTabele[7].innerText === znak &&  poljaTabele[8].innerText === znak){
                                        polja(6,7,8,znak.toString());
                                        return;
                                }
                                else if (poljaTabele[0].innerText === znak &&  poljaTabele[3].innerText === znak &&  poljaTabele[6].innerText === znak){ 
                                        polja(0,3,6,znak.toString());
                                        return;
                                }
                                else if (poljaTabele[1].innerText === znak &&  poljaTabele[4].innerText === znak &&  poljaTabele[7].innerText === znak){ 
                                        polja(1,4,7,znak.toString());
                                        return;
                                }
                                else if (poljaTabele[2].innerText === znak &&  poljaTabele[5].innerText === znak &&  poljaTabele[8].innerText === znak){ 
                                        polja(2,5,8,znak.toString());
                                        return;
                                }
                                else if (poljaTabele[0].innerText === znak &&  poljaTabele[4].innerText === znak &&  poljaTabele[8].innerText === znak){
                                        polja(0,4,8,znak.toString());
                                        return;
                                }
                                else if (poljaTabele[2].innerText === znak &&  poljaTabele[4].innerText === znak &&  poljaTabele[6].innerText === znak){ 
                                        polja(2,4,6,znak.toString());
                                        return;
                                }
                
                                console.log(check)
                                znak === 'X'  ? znak  = 'O' : znak = 'X';
                                znak ==='O' ? (bojaO.style.background ="#ffdf87", bojaX.style.background = '') :  (bojaX.style.background  = '#ffdf87', bojaO.style.background = '');
                                upis.innerText = znak + ' turn to play';

                                check == 9 ? upis.innerText = 'No one won, play another!' : '';
                        }
                        else {
                                alert(' This place is already taken, try another! ');
                        }
                }
        });
})

function polja(a,b,c,znak) {
        poljaTabele[a].style.background = 'orange';
        poljaTabele[b].style.background = 'orange';
        poljaTabele[c].style.background = 'orange';
        upis.innerText = znak + ' has WON!' + '\r\n' + 'Play another round!';
        znak === 'X' ? (scoreX++, score1.innerText = 'X - ' + scoreX) : (scoreO++, score2.innerText = 'O - ' + scoreO);
        blokada = 0;
}
