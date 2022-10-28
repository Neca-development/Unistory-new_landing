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

  function openPopup() {
    privacyPopup.style.display = "block";
    bg.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closePopup() {
    privacyPopup.style.display = "none";
    bg.style.display = "none";
    document.body.style.overflow = "auto";
  }

  if (privacyLinkForm) {
    privacyLinkForm.addEventListener("click", () => {
      openPopup();
    });
  }

  privacyLinkFooter.addEventListener("click", () => {
    openPopup();
  });

  cross.addEventListener("click", () => {
    closePopup();
  });

  bg.addEventListener("click", () => {
    closePopup();
  });
});
