const contactForm = document.querySelector("#contactForm");
const fileInput = document.querySelector("#file");
const fileList = document.querySelector("#filelist");

const messageField = document.querySelector("#message");
const messageLength = document.querySelector("#messageLength");

// Display typed message length
messageField.addEventListener("input", (event) => {
  const length = event.target.value.length;
  messageLength.textContent = length + "/280";
});

// Prevent user from typing more than 280 char
messageField.addEventListener("keydown", (event) => {
  if (event.target.value.length >= 280) {
    event.preventDefault();
  }
});

fileInput.addEventListener("change", () => {
  updateFileDisplay();
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  send(e, "../mailer/mailer.php");
});

function updateFileDisplay() {
  fileList.innerHTML = "";
  for (let i = 0; i < fileInput.files.length; i++) {
    fileList.innerHTML += fileInput.files.item(i).name + "<br>";
  }
}

function send(event, php) {
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  var req = new XMLHttpRequest();
  req.open("POST", php, true);
  req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
      json = JSON.parse(this.response);
      console.log(json);

      if (json.result == "success") {
        alert("Сообщение отправлено");
      } else {
        alert("Ошибка. Сообщение не отправлено");
      }
    } else {
      alert("Ошибка сервера. Номер: " + req.status);
    }
  };

  req.onerror = function () {
    alert("Ошибка отправки запроса");
  };
  req.send(new FormData(event.target));
}
