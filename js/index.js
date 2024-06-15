let FtoC = document.getElementById("f-to-c");
let formula = document.querySelector(".formula");
let formula2 = document.querySelector(".formula-2");
let inputAngka = document.getElementById("inputAngka");
let showhasil = document.getElementById("hasil");
let cara = document.getElementById("cara");
let desc1 = document.getElementById("desc1");
let desc1Change = document.getElementById("desc1-change");
let desc2 = document.getElementById("desc2");
let desc2Change = document.getElementById("desc2-change");

function changeFormula(){
    formula.style.display = 'none';
    formula2.style.display = 'flex';
}

function changeFormula2(){
    formula.style.display = 'flex';
    formula2.style.display = 'none';
}

function konversi(){
    let inputNilai = parseFloat(inputAngka.value);
    let hasilKonversiCtoF = (inputNilai * 1.8) + 32;
    let hasilKonversiFtoC = (inputNilai - 32) / 1.8;
    let inputKosong = document.getElementById("inputKosong");
    
    if(desc1.style.display === 'flex' && desc2.style.display === 'flex'){
        if(isNaN(inputNilai)){
            showhasil.value = " ";
            inputKosong.textContent = "Inputan tidak boleh kosong";
        }
        else{
            showhasil.value = hasilKonversiCtoF;
            inputKosong.textContent = "";
            cara.value = inputNilai + "°C * (9/5) + 32 = " + hasilKonversiCtoF + "°F";
        }
    }
    else{
        if(isNaN(inputNilai)){
            showhasil.value = " ";
            inputKosong.textContent = "Inputan tidak boleh kosong";
        }
        else{
            showhasil.value = hasilKonversiFtoC;
            inputKosong.textContent = "";
            cara.value = inputNilai + "°F - 32 / (9/5) = " + hasilKonversiFtoC + "°C";
        }
    }
}

function reverse(){
    reset();
    if(desc1.style.display === 'flex' &&  desc2.style.display === 'flex'){
        desc1.style.display = 'none';
        desc1Change.style.display = 'flex';
        desc2.style.display = 'none';
        desc2Change.style.display = 'flex';
    } else{
        desc1.style.display = 'flex';
        desc1Change.style.display = 'none';
        desc2.style.display = 'flex';
        desc2Change.style.display = 'none';
    }
}

function reset(){
    inputAngka.value = "";
    showhasil.value = "";
    cara.value = "";
}

let now = new Date();
let tahunSekarang = now.getFullYear();

document.getElementById("tahun").textContent = tahunSekarang;