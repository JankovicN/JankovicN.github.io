const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        //otvori meni
        nav.classList.toggle('nav-active');


        //animiraj linkove
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.5}s`;
            }
        });

        //animacija burgera
        burger.classList.toggle('toggle');

    });
}

navSlide();

/*Stranica prozivodi*/

function proizvodiDugmici() {

    var ukupno = 0;

    document.getElementById("ta1").value = "\n";

    document.getElementById("dugme1").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina1"), 2000); });
    document.getElementById("dugme2").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina2"), 2000); });
    document.getElementById("dugme3").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina3"), 2000); });
    document.getElementById("dugme4").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina4"), 2000); });
    document.getElementById("dugme5").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina5"), 1500); });
    document.getElementById("dugme6").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina6"), 1500); });
    document.getElementById("dugme7").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina7"), 1500); });
    document.getElementById("dugme8").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina8"), 1000); });
    document.getElementById("dugme9").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina9"), 1750); });
    document.getElementById("dugme10").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina10"), 1750); });
    document.getElementById("dugme11").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina11"), 2300); });
    document.getElementById("dugme12").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina12"), 2000); });
    document.getElementById("dugme13").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina13"), 1700); });
    document.getElementById("dugme14").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina14"), 1000); });
    document.getElementById("dugme15").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina15"), 1100); });
    document.getElementById("dugme16").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina16"), 800); });
    document.getElementById("dugme17").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina17"), 2000); });
    document.getElementById("dugme18").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina18"), 1000); });
    document.getElementById("dugme19").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina19"), 2500); });
    document.getElementById("dugme20").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina20"), 1500); });
    document.getElementById("dugme21").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina21"), 2400); });
    document.getElementById("dugme22").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina22"), 1200); });
    document.getElementById("dugme23").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina23"), 3000); });
    document.getElementById("dugme24").addEventListener("click", function() { dodajTekst(this, document.getElementById("kolicina24"), 2700); });

    function dodajTekst(element, kolicina, cena) {
        var kol = kolicina.value;
        ukupno += cena * kol;
        document.getElementById("ta1").value += kol + "x " + element.value + "\n";
        console.log(element.value + " " + kol);
        element.disabled = true;
        kolicina.disabled = true;
        document.getElementById("cena").innerText = ukupno;

        document.getElementById("cena-labele").style.color = "black";
    }

    document.getElementById("ponisiti").addEventListener("click", () => {

        ukupno = 0;

        var dugmici = document.getElementsByClassName("dugme");
        for (let i = 0; i < dugmici.length; i++) {
            dugmici[i].disabled = false;
        }
        var kolicina = document.getElementsByClassName("kolicina-proizvoda");
        for (let i = 0; i < kolicina.length; i++) {
            kolicina[i].disabled = false;
            kolicina[i].value = 1;
        }
        document.getElementById("cena").innerText = "---";
        document.getElementById("cena-labele").style.color = "rgb(119, 119, 119)";
        document.getElementById("ta1").value = "\n";
    });

    document.getElementById("naruci").addEventListener("click", () => {


        if (document.getElementById("ta1").value === '\n') {
            alert("Vasa korpa je prazna!");
        } else if (document.getElementById("proizvodi-ime").value === '') {
            alert("Molimo unesite Vase ime!");
        } else if (document.getElementById("proizvodi-prezime").value === '') {
            alert("Molimo unesite Vase prezime!");
        } else if (document.getElementById("proizvodi-adresa").value === '') {
            alert("Molimo unesite Vasu adresu!");
        } else if (document.getElementById("proizvodi-telefon").value === '') {
            alert("Molimo unesite Vas telefon!");
        } else {
            confirm("Vasa korpa: " + document.getElementById("ta1").value + "\nCena: " + document.getElementById("cena").innerText);

            document.getElementById("proizvodi-ime").value = '';
            document.getElementById("proizvodi-prezime").value = '';
            document.getElementById("proizvodi-adresa").value = '';
            document.getElementById("proizvodi-telefon").value = '';
            document.getElementById("ta1").value = "";

        }
    });
}
proizvodiDugmici();