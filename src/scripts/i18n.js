import i18next from "i18next";
import jqueryI18next from "jquery-i18next";
import $ from "jquery";
import LanguageDetector from "i18next-browser-languagedetector";
import enJson from "../i18n/en.json";
import ruJson from "../i18n/ru.json";
import enIcon from "../icons/en.svg";
import ruIcon from "../icons/ru.svg";

const languages = {
  en: { nativeName: "English", icon: enIcon },
  ru: { nativeName: "Русский", icon: ruIcon },
};

const rerender = () => {
  $("body").localize();

  // $("title").text($.t("head.title"));
  // $("meta[name=description]").attr("content", $.t("head.description"));
};

$(function () {
  i18next.use(LanguageDetector).init(
    {
      debug: true,
      fallbackLng: ["en", "ru"],
      resources: {
        en: {
          translation: enJson,
        },
        ru: {
          translation: ruJson,
        },
      },
      saveMissing: true,
      detection: {},
    },
    (err, t) => {
      if (err) {
        return console.error(err);
      }

      jqueryI18next.init(i18next, $, { useOptionsAttr: true });

      // Create language menu buttons
      Object.keys(languages).map((lng) => {
        const btn = $("<button>", {
          text: languages[lng].nativeName,
          click: function () {
            i18next.changeLanguage(lng, () => rerender());
            $(".header__lngWindow").removeClass("header__lngWindow_open");
          },
        });
        var img = $("<img />", {
          src: languages[lng].icon,
          alt: languages[lng].nativeName,
        });
        img.prependTo(btn);
        $(".header__lngWindow").append(btn);
      });

      rerender();
    }
  );
});
