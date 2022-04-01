const contactForm = document.querySelector("#contactForm");
const fileInput = document.querySelector("#file");
const fileList = document.querySelector("#filelist");

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
