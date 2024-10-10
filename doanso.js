let random = Math.floor(Math.random() * 10) + 1;

function doanSo() {
    let numbergot = parseInt(document.getElementById("soNhap").value);

    if (isNaN(numbergot)) {
        document.getElementById("ketQua").innerHTML = "Invalid input";
        return;
    }

    if (numbergot === random) {
        document.getElementById("ketQua").innerHTML = "correct! congratulations!";
        random = Math.floor(Math.random() * 10) + 1;
    } else {
        document.getElementById("ketQua").innerHTML = "sai roi.";
    }
}