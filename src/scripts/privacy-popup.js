document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.style.filter = "initial";
    document.body.style.animation = "initial";
  }, 3000);

  const privacyPopup = document.querySelector(".privacy-popup");
  const privacyLinkFooter = document.querySelector("#privacyPolicyFooter");
  const privacyLinkForm = document.querySelector("#privacyPolicyForm");
  const bg = document.querySelector(".privacy-popup__close_bg");
  const cross = document.querySelector(".privacy-popup__cross");

  if (privacyLinkForm) {
    privacyLinkForm.addEventListener("click", () => {
      privacyPopup.style.display = "block";
      bg.style.display = "block";
    });
  }

  privacyLinkFooter.addEventListener("click", () => {
    privacyPopup.style.display = "block";
    bg.style.display = "block";
  });

  cross.addEventListener("click", () => {
    privacyPopup.style.display = "none";
    bg.style.display = "none";
  });

  bg.addEventListener("click", () => {
    privacyPopup.style.display = "none";
    bg.style.display = "none";
  });
});
