
//Bài 1: Tìm số nguyên dương nhỏ nhất sao cho 1 + 2 + ... + n > 10000


document.querySelector("#btnSearch").addEventListener('click', function () {
     var n = 0;
     var s = 0;
     while (s < 10000) {
       n++;
       s = s + n;
     }
     document.querySelector("#result").innerHTML ='Số nguyên dương cần tìm: ' + n;

});

//Bài 2: Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n (Sử dụng vòng lặp và hàm)
document.querySelector("#btnSum").addEventListener('click', function () {
    var x = document.querySelector("#nhapSoX").value * 1;
    var n = document.querySelector("#nhapSoN").value * 1;
    var s = 0;
    var lt = 1;
    for ( var i = 0; i < n; i++) {
        lt = lt * x;
        s = s + lt;
    }
    document.querySelector("#result2").innerHTML = s ;
});

//Bài 3 :Nhập vào n. Tính giai thừa 1*2*...n
document
  .querySelector("#btnGiaiThua")
  .addEventListener("click", function () {
    var n = document.querySelector("#nhapN").value * 1;
    var giai_thua = 1;
    for ( var i = 1; i <= n; i++) {
        giai_thua *= i;
    }
    document.querySelector("#result3").innerHTML = giai_thua;
  });

  //Bài 4: Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh.
  document.querySelector("#taoDiv").addEventListener("click", function () {
    var div = document.getElementsByClassName('color');
    for ( var i = 0; i < div.length; i++) {
        if( (i + 1) % 2 == 0) {
            div[i].style.background = 'red';     
        } else  div[i].style.background = "blue";
        div[i].style.display = 'block';
    }

  });