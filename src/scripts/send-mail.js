import axios from "axios";

const contactForm = document.querySelector("#contactForm");
const fileInput = document.querySelector("#file");
const fileList = document.querySelector("#filelist");
const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const phoneInput = document.querySelector("#phoneInput");

const messageField = document.querySelector("#message");
const messageLength = document.querySelector("#messageLength");

const maxMessageLength = messageField.getAttribute("maxlength");

// Display typed message length
messageField.addEventListener("input", (event) => {
  const length = event.target.value.length;
  messageLength.textContent = length + "/" + maxMessageLength;
});

// Prevent user from typing more than 280 char
// key code 8 - backspace, 46 - delete
messageField.addEventListener("keydown", (event) => {
  if (
    event.target.value.length >= maxMessageLength &&
    event.keyCode !== 8 &&
    event.keyCode !== 46
  ) {
    event.preventDefault();
  }
});

// Adding '+' to phone number
phoneInput.addEventListener("input", (event) => {
  if (event.target.value.length === 1 && event.target.value[0] !== "+") {
    phoneInput.value = "+" + event.target.value;
  }
});

fileInput.addEventListener("change", () => {
  updateFileDisplay();
});

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const dataToSend = new FormData();
  dataToSend.append("name", nameInput.value);
  dataToSend.append("email", emailInput.value);
  dataToSend.append("phoneNumber", phoneInput.value);
  dataToSend.append("description", messageField.value);

  if (fileInput.files.length > 0) {
    if (fileInput.files[0].size < 2000000) {
      dataToSend.append("attachment", fileInput.files[0]);
    } else {
      alert("Too large attachment, max 20mb");
      return;
    }
  }

  try {
    await axios.post("https://unistory.app/api/contact", dataToSend);
    alert("Your request has been successfully sent!");
    contactForm.reset();
    fileList.innerHTML = "Attach files";
    messageLength.textContent = `0/${maxMessageLength}`;
  } catch (error) {
    console.log(error);
  }
});

function updateFileDisplay() {
  fileList.innerHTML = fileInput.files.item(0).name;
}
