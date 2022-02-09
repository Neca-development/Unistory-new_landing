document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.style.filter = "initial";
    document.body.style.animation = "initial";
  }, 3000);

  const bg = document.querySelector(".privacy-popup__close_bg");
  const privacyPopup = document.querySelector(".privacy-popup");
  const privacyLink = document.querySelector("#privacyPolicy");
  console.log(privacyLink);
  const cross = document.querySelector(".privacy-popup__cross");
  cross.addEventListener("click", () => {
    privacyPopup.style.display = "none";
    bg.style.display = "none";
  });
  bg.addEventListener("click", () => {
    privacyPopup.style.display = "none";
    bg.style.display = "none";
  });
  privacyLink.addEventListener("click", () => {
    privacyPopup.style.display = "block";
    bg.style.display = "block";
  });
});
