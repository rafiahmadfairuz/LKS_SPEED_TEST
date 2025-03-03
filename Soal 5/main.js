const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const inputLabel = document.getElementById("label");
const inputNilai = document.getElementById("value");
const add = document.getElementById("add");

let daftarLabel = ["Januari", "Februari", "Maret", "April", "Mei"];
let daftarNilai = [10, 20, 15, 25, 30];

const margin = 50;
const lebarGrafik = canvas.width - 2 * margin;
const tinggiGrafik = canvas.height - 2 * margin;

add.addEventListener("click", function () {
    let labelBaru = inputLabel.value;
    let nilaiBaru = parseInt(inputNilai.value);

    if (labelBaru && !isNaN(nilaiBaru)) {
        daftarLabel.push(labelBaru);
        daftarNilai.push(nilaiBaru);
        inputLabel.value = "";
        inputNilai.value = "";
        gambarUlang();
    }
});

function cariNilaiTertinggi() {
    let maks = Math.max(...daftarNilai);
    return Math.ceil(maks / 10) * 10; // Dibulatkan ke kelipatan 10
}

function gambarUlang() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gambarGaris();
    gambarLabelX();
    gambarLabelY();
    gambarGrafik();
}

function gambarGaris() {
    ctx.beginPath();
    ctx.moveTo(margin, margin);
    ctx.lineTo(margin, canvas.height - margin);
    ctx.lineTo(canvas.width - margin, canvas.height - margin);
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function gambarLabelX() {
    ctx.font = "14px Arial";
    ctx.fillStyle = "black";

    for (let i = 0; i < daftarLabel.length; i++) {
        let x = margin + (i * (lebarGrafik / (daftarLabel.length - 1)));
        ctx.fillText(daftarLabel[i], x - 10, canvas.height - margin + 20);
    }
}

function gambarLabelY() {
    ctx.font = "14px Arial";
    ctx.fillStyle = "black";
    let maksY = cariNilaiTertinggi();

    for (let i = 0; i <= maksY; i += 10) {
        let y = canvas.height - margin - (i / maksY * tinggiGrafik);
        ctx.fillText(i, margin - 40, y + 5);
    }
}

function gambarGrafik() {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;

    let maksY = cariNilaiTertinggi();

    for (let i = 0; i < daftarNilai.length; i++) {
        let x = margin + (i * (lebarGrafik / (daftarLabel.length - 1)));
        let y = canvas.height - margin - (daftarNilai[i] / maksY * tinggiGrafik);

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();
}

gambarUlang();
