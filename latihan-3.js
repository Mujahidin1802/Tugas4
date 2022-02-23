var c = 34;
var CK = 5 / 5;
var CF = 9 / 5;
var CR = 4 / 5;

document.write("suhu : 34 ⁰C", "<br>", "<br>");
var hasilCK = CK * c + 273.15;
document.write(
  "hasil konverensi C  ➯ K = (   K = (5/5) x ⁰C + 273,15 ) ⟹ (5/5) x 34 + 273.15 = ",
  hasilCK,
  " &nbspK<br>"
);

var hasilCF = CF * c + 32;
document.write(
  "<br> hasil Konverensi C  ➯ F = (   ⁰F = (9/5) × ⁰C + 32 ) ⟹ (9/5) x 34+32 = ",
  hasilCF + " &nbsp⁰F <br>"
);
var hasilCR = CR * c;
document.write(
  "<br> hasil Kovenrensi C  ➯ R = (    ⁰R = (4/5) x ⁰C ) ⟹ (4/5) x 34 = ",
  hasilCR,
  " &nbsp⁰C"
);
