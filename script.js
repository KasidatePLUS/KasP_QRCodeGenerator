let btn = document.querySelector(".button");
let qr_code_element = document.querySelector(".qr-code");
let programselected = 0;

var radio = document.querySelectorAll(".radio");

radio[0].onclick = function () {
  programselected = 0;
  document.body.style.backgroundImage = "linear-gradient(to right, #808080, #3fada8)"; radio[1].style.color = "";
  radio[2].style.color = "";
}
radio[1].onclick = function () {
  programselected = 1;
  document.body.style.backgroundImage = "linear-gradient(to right, #FFC371, #FF5F6D)";
}
radio[2].onclick = function () {
  programselected = 2;
  document.body.style.backgroundImage = "linear-gradient(to right, #CB3066, #16BFFD)";
}

btn.addEventListener("click", () => {
  let user_input = document.querySelector("#input_text");
  let program = document.querySelector("#selectprogram");
  
  if (user_input.value != "") {
    if (qr_code_element.childElementCount == 0) {
      generate(user_input);
    } else {
      qr_code_element.innerHTML = "";
      generate(user_input);
    }
  } else {
    console.log("not valid input");
    qr_code_element.style = "display: none";
  }

});

function generate(user_input) {
  qr_code_element.style = "";
    var qrcode = new QRCode(qr_code_element, {
      text: `${user_input.value}`,
      width: 270, //128
      height: 270,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  
  
  let download = document.createElement("button");
  qr_code_element.appendChild(download);

  let download_link = document.createElement("a");
  download_link.setAttribute("download", "qr_code.png");
  download_link.innerText = "Download";

  download.appendChild(download_link);

  let qr_code_img = document.querySelector(".qr-code img");
  let qr_code_canvas = document.querySelector("canvas");

  if (qr_code_img.getAttribute("src") == null) {
    setTimeout(() => {
      download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`);
    }, 300);
  } else {
    setTimeout(() => {
      download_link.setAttribute("href", `${qr_code_img.getAttribute("src")}`);
    }, 300);
  }

}


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}