const tableBody = document.getElementById('tableBody');
const judul = document.getElementById('judul');

function buatTabel() {
    const input = document.getElementById('kelipatan');
    const value = input.value;

    if (value < 0) {
        alert('Angka tidak boleh negatif!');
        return;
    }

    tableBody.innerHTML = '';
    const kelipatan = value === '' ? 1 : parseInt(value);

    judul.innerText = `Kelipatan dari ${kelipatan}`;

    for (let i = 1; i <= 40; i++) {
        const tr = document.createElement('tr');
        const tdAngka = document.createElement('td');
        const tdKelipatan = document.createElement('td');

        tdAngka.innerText = i;
        tdKelipatan.innerText = `${i} (kelipatan dari ${kelipatan})`;

        if (i % kelipatan === 0) {
            tdKelipatan.classList.add('green');
        }

        tr.appendChild(tdAngka);
        tr.appendChild(tdKelipatan);
        tableBody.appendChild(tr);
    }
}

window.onload = buatTabel;