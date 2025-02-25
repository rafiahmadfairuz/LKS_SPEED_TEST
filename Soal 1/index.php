<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalender PHP</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
        $bulan = isset($_GET['bulan']) ? intval($_GET['bulan']) : date('n');
        $tahun = isset($_GET['tahun']) ? intval($_GET['tahun']) : date('Y');
        $tanggalSekarang = date('j');
        $bulanSekarang = date('n');
        $tahunSekarang = date('Y');

        $bulanSebelumnya = $bulan - 1;
        $tahunSebelumnya = $tahun;
        if ($bulanSebelumnya < 1) {
            $bulanSebelumnya = 12;
            $tahunSebelumnya--;
        }

        $bulanBerikutnya = $bulan + 1;
        $tahunBerikutnya = $tahun;
        if ($bulanBerikutnya > 12) {
            $bulanBerikutnya = 1;
            $tahunBerikutnya++;
        }

        $hariPertamaBulan = mktime(0, 0, 0, $bulan, 1, $tahun);
        $jumlahHariBulan = date('t', $hariPertamaBulan);
        $hariMingguKe = date('w', $hariPertamaBulan);
        $namaBulan = [
            1 => 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ][$bulan];
        $hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    ?>

<div style="text-align: center;">

<div class="setting" style="margin-bottom: 10px;">
    <a href="?bulan=<?= $bulanSebelumnya ?>&tahun=<?= $tahunSebelumnya ?>"><< Bulan Sebelumnya</a>
    <?= $namaBulan . ' ' . $tahun ?>
    <a href="?bulan=<?= $bulanBerikutnya ?>&tahun=<?= $tahunBerikutnya ?>">>> Bulan Berikutnya</a>
</div>

        <table border="1">
            <tr>
                <?php foreach ($hari as $namaHari): ?>
                    <td><?= $namaHari ?></td>
                <?php endforeach; ?>
            </tr>

            <tr>
                <?php for ($i = 0; $i < $hariMingguKe; $i++): ?>
                    <td></td>
                <?php endfor; ?>

                <?php for ($tanggal = 1; $tanggal <= $jumlahHariBulan; $tanggal++): ?>
                    <?php
                        $hariIni = ($tanggal == $tanggalSekarang && $bulan == $bulanSekarang && $tahun == $tahunSekarang);
                        $hariSama = ($tanggal == $tanggalSekarang);
                    ?>
                    <td style="background-color: <?= $hariIni || $hariSama ? 'red' : 'white' ?>; color: <?= $hariIni || $hariSama ? 'white' : 'black' ?>;">
                        <?= $tanggal ?>
                    </td>
                    <?php if (($tanggal + $hariMingguKe) % 7 == 0): ?>
                        </tr><tr>
                    <?php endif; ?>
                <?php endfor; ?>

                <?php for ($i = ($hariMingguKe + $jumlahHariBulan) % 7; $i < 7 && $i > 0; $i++): ?>
                    <td></td>
                <?php endfor; ?>
            </tr>
        </table>
    </div>
</body>
</html>
