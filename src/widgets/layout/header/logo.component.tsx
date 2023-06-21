import { IconComponent } from "@shared/ui";
import { useTheme } from "next-themes";
import { useThemeContext } from "@shared/lib";
import clsx from "clsx";
import { useMounted } from "@shared/lib/hooks/useMounted";
import { useAnimationStore } from "@shared/lib/store";
import { useRouter } from "next/router";

interface ILogoProps {
  mobileMenu?: boolean;
}

export function Logo(props: ILogoProps) {
  const { theme, systemTheme } = useTheme();
  const { temperatureTheme } = useThemeContext();
  const _theme = theme === "system" ? systemTheme : theme;
  const mounted = useMounted();

  const { asPath } = useRouter();
  const isHome = asPath === "/";
  const { shouldAnimate } = useAnimationStore();

  const { mobileMenu } = props;

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={clsx(
        "fixed top-0 left-0",
        isHome &&
          shouldAnimate &&
          "will-change-[top,left] animate-logo-enter-mobile lg:animate-logo-enter-lg",
        !shouldAnimate &&
          "relative w-[128px] h-[31px] lg:w-[150px] lg:h-[36px] 2xl:w-[166px] 2xl:h-[40px]",
        mobileMenu && "relative"
      )}
    >
      <div
        className={clsx(
          "overflow-hidden flex flex-col",
          isHome &&
            shouldAnimate &&
            "animate-logo-overflow-mobile lg:animate-logo-overflow-lg will-change-[transform,width]",
          !shouldAnimate && "w-full h-full"
        )}
      >
        <svg
          key="logoLight"
          name="logoLight"
          viewBox="0 0 138 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(
            "m-0 duration-300 min-w-[128px] lg:min-w-[150px] 2xl:min-w-[166px]",
            isHome &&
              shouldAnimate &&
              "animate-main-logo-width-mobile lg:animate-main-logo-width-lg will-change-[width]",
            _theme !== "light" && "opacity-0",
            shouldAnimate && _theme !== "light" && "hidden",
            !shouldAnimate && "absolute top-0 left-0 w-full h-full",
            temperatureTheme === "winter" ? "fill-winter" : "fill-summer"
          )}
        >
          <path
            d="M60.4657 24.7544H57.8072V13.0726H60.4657V14.6189C61.0247 14.0174 61.708 13.5413 62.4694 13.2229C63.2355 12.9023 64.0616 12.7458 64.8934 12.7635C67.7474 12.7635 69.375 14.5975 69.375 17.6174V24.7544H66.7196V18.1887C66.7196 15.9056 65.4652 15.1663 63.8878 15.1663C63.2039 15.1928 62.5361 15.3789 61.9391 15.7095C61.3468 16.0373 60.8433 16.5013 60.4712 17.0621L60.4651 24.7538L60.4657 24.7544ZM72.5904 24.7544V13.0726H75.2483V24.7538H72.5904V24.7544ZM72.5904 10.8513V8.38733H75.2483V10.8519H72.5904V10.8513ZM77.9736 23.8747V21.437C79.4333 22.384 81.1489 22.873 82.8952 22.8397C84.5753 22.8397 85.5531 22.3168 85.5531 21.4609C85.5531 21.0088 85.256 20.7485 84.8136 20.5322C84.4367 20.3904 84.0512 20.2718 83.6594 20.1773L82.1581 19.8193C79.4025 19.1533 78.0999 18.1942 78.0999 16.1793C78.0999 14.0611 79.9935 12.7531 83.2145 12.7531C85.0598 12.7531 86.5611 13.1105 87.6676 13.8015V16.1548C86.3426 15.3997 84.8445 14.9906 83.3147 14.9659C81.6656 14.9659 80.8277 15.4889 80.8277 16.2495C80.8277 16.7016 81.1501 16.9643 81.5925 17.1788C81.8729 17.2979 82.4329 17.4494 82.7491 17.5362L84.1495 17.8209C86.9058 18.4165 88.284 19.6543 88.284 21.5097C88.284 23.6248 86.1688 25.0526 83.0183 25.0526C80.9762 25.063 79.0324 24.565 77.9736 23.8741V23.8747ZM92.5632 15.3337H89.9808V13.0732H92.5632V9.67031H95.221V13.072H99.033V15.3337H95.221V20.8291C95.221 22.1616 95.8349 22.709 97.1147 22.709C97.7477 22.7144 98.3725 22.5676 98.9353 22.2813V24.4936C98.3752 24.873 97.4594 25.0624 96.2551 25.0624C93.9921 25.0624 92.5632 23.849 92.5632 21.5659V15.3337ZM102.8 23.2808C102.194 22.7208 101.713 22.0415 101.39 21.2867C101.068 20.5363 100.911 19.7268 100.929 18.912C100.91 18.098 101.067 17.2893 101.389 16.5397C101.713 15.7855 102.193 15.107 102.8 14.5481C104.055 13.3598 105.632 12.7641 107.561 12.7641C109.491 12.7641 111.057 13.3598 112.322 14.5481C112.928 15.1072 113.408 15.7858 113.731 16.5397C114.052 17.2912 114.207 18.0995 114.188 18.912C114.202 19.7256 114.043 20.5329 113.722 21.2825C113.4 22.0366 112.923 22.7169 112.322 23.2808C111.068 24.4697 109.494 25.063 107.561 25.063C105.629 25.063 104.052 24.4704 102.8 23.2808ZM110.404 21.6857C110.776 21.3217 111.068 20.8857 111.262 20.4051C111.454 19.9273 111.544 19.415 111.524 18.901C111.523 18.3943 111.42 17.8929 111.22 17.4263C111.02 16.9596 110.728 16.5371 110.36 16.1835C109.608 15.4601 108.6 15.0559 107.55 15.0576C106.5 15.0559 105.492 15.4601 104.74 16.1835C104.372 16.5371 104.08 16.9596 103.88 17.4263C103.68 17.8929 103.577 18.3943 103.576 18.901C103.56 19.414 103.652 19.9248 103.846 20.4009C104.042 20.8796 104.334 21.3139 104.705 21.6771C105.079 22.0431 105.524 22.3311 106.013 22.5239C106.505 22.7177 107.032 22.8131 107.561 22.8043C108.088 22.8159 108.613 22.7224 109.101 22.53C109.588 22.3387 110.03 22.0514 110.401 21.6857H110.404ZM116.572 24.7544V13.072H119.23V15.0955C120.042 13.7416 121.812 12.7635 123.683 12.7635C123.766 12.7586 123.849 12.7666 123.93 12.7879V15.3582C123.684 15.3282 123.437 15.3117 123.19 15.3093C121.297 15.3093 119.795 16.3797 119.23 17.593V24.7544H116.572ZM42.9491 8.38672H36.6172L38.1383 10.8513H42.9497V8.38733L42.9491 8.38672ZM51.9784 8.38672V18.0995C51.9784 21.2171 50.1838 22.9076 47.4523 22.9076C44.7214 22.9076 42.9491 21.2116 42.9491 18.0995V13.0244H40.2429V17.9999C40.2429 20.3563 40.9069 22.1628 42.2374 23.4495C43.5679 24.7361 45.3186 25.3452 47.4523 25.3452C49.5873 25.3452 51.315 24.7092 52.6647 23.425C54.015 22.1414 54.6815 20.3318 54.6815 18.0078V8.38733H51.9784V8.38672ZM138 23.8796C138 23.5436 137.98 23.2051 137.969 22.8666V12.9181H135.314V20.6019C134.942 21.1633 134.438 21.6277 133.845 21.9557C133.247 22.2866 132.579 22.4725 131.894 22.4982C130.317 22.4982 129.065 21.7614 129.065 19.4777V12.9187H126.408V20.0557C126.408 21.8274 126.968 23.1898 128.001 24.0152C128.931 24.752 130.015 24.8278 130.883 24.909C132.019 25.047 133.172 24.8649 134.208 24.3836C134.595 24.1939 134.958 23.9595 135.289 23.6853V23.8472C135.305 24.2116 135.269 24.5763 135.183 24.931C134.88 26.1688 133.878 27.5715 132.443 27.9106C132.19 27.9709 131.93 27.999 131.67 27.9943C131.67 27.9943 126.909 27.9943 126.508 27.9729L128.416 30.4942C128.816 30.5156 131.67 30.5321 131.67 30.5321C133.234 30.5161 134.738 29.9384 135.902 28.907C136.893 27.9397 137.57 26.7039 137.849 25.3562C137.951 24.8705 138.002 24.3757 138 23.8802V23.8796Z"
            fill="#0F1A20"
          />
          <path d="M19.5762 20.9652C20.8402 21.0479 22.1081 20.8765 23.304 20.4614C24.9682 19.8752 26.4786 18.9254 27.7237 17.6821C28.6298 16.7614 29.3605 15.6852 29.8803 14.5059C30.2101 16.5361 30.1074 18.6106 29.5777 20.6002C28.8588 21.0938 28.0854 21.5041 27.2725 21.8231C25.7614 22.4205 24.1334 22.6693 22.5113 22.5506C20.5136 22.3928 18.6027 21.6727 17.0024 20.4749C17.1646 20.532 17.3304 20.5861 17.4975 20.6353C18.1766 20.8185 18.8734 20.9291 19.5762 20.9652Z" />
          <path
            opacity="0.5"
            d="M26.8866 25.6672C25.1996 26.1736 23.4075 26.2504 21.6822 25.8897C19.9621 25.532 18.3616 24.7468 17.0304 23.6075C15.9425 22.6556 15.088 21.4694 14.5322 20.1394C16.0558 21.6707 18.6747 23.5909 22.3969 23.8742C24.0399 23.9965 25.6906 23.7832 27.2473 23.2474C27.4268 23.1878 27.6032 23.1227 27.7795 23.0545C28.1496 22.9101 28.511 22.7411 28.8693 22.5641C28.5929 23.1747 28.2709 23.7638 27.9058 24.3265C27.5949 24.7943 27.2545 25.2422 26.8866 25.6672Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.0388 30.2445C14.3764 30.8661 16.8321 30.907 19.1894 30.3637C21.3935 29.8501 23.4426 28.8222 25.1667 27.3651C23.877 27.5088 22.5713 27.4425 21.3039 27.1684C19.3877 26.7494 17.6057 25.866 16.1169 24.5968C15.1821 23.7826 14.3973 22.813 13.7975 21.7315C13.2918 20.8172 12.907 19.842 12.6527 18.83C12.3525 17.6452 12.2158 16.4267 12.2461 15.207L12.2451 15.2026C12.2206 15.1002 12.1957 14.9954 12.1737 14.8936C11.5682 14.7344 11 14.4591 10.501 14.0831C10.0055 13.7099 9.58964 13.2427 9.27757 12.7085C8.72082 11.6781 8.58349 10.4748 8.8939 9.34672C8.91194 9.25712 8.94819 9.17211 9.00043 9.09689C9.05268 9.02167 9.11981 8.95781 9.19775 8.90921C9.27689 8.86037 9.36509 8.82776 9.45713 8.8133C9.54917 8.79885 9.64319 8.80283 9.73365 8.82503C9.82392 8.84652 9.90873 8.88633 9.98275 8.94196C10.0568 8.99759 10.1184 9.06782 10.1637 9.14825C10.209 9.22732 10.237 9.31492 10.2461 9.40541C10.2551 9.49589 10.245 9.58726 10.2163 9.67362C9.99818 10.477 10.0909 11.3324 10.4762 12.0713C10.7294 12.4995 11.0744 12.8671 11.4868 13.1479C11.9022 13.431 12.3745 13.6213 12.8711 13.7058C12.8952 13.7035 12.9194 13.7035 12.9435 13.7058C13.259 13.7594 13.5794 13.7785 13.899 13.763C15.1378 13.0439 16.5208 12.6044 17.9499 12.4756C19.381 12.3461 20.8234 12.5298 22.1752 13.0139L23.4247 11.4556L23.0125 10.6654L15.7833 7.02891C15.6311 6.95087 15.5135 6.81999 15.4554 6.66145C15.3972 6.50415 15.4028 6.33025 15.4696 6.17602L16.7134 3.35925L14.0054 5.78398C13.9032 5.87333 13.7769 5.9312 13.6421 5.95051C13.5072 5.96982 13.3697 5.94975 13.2461 5.89274L11.6137 5.12649C11.4819 5.06627 11.3736 4.96611 11.3055 4.84199C11.2368 4.71725 11.2114 4.57469 11.2325 4.43459L11.35 3.54114L11.014 3.6499C9.80622 4.06236 8.65977 4.63424 7.6055 5.35016C6.70886 5.96957 5.88408 6.68571 5.14626 7.48547C2.90053 9.86596 1.60841 12.9519 1.50507 16.1816C1.4574 17.448 1.58082 18.715 1.87203 19.9489C2.4875 22.5679 3.8602 24.9512 5.82141 26.8059C7.57492 28.4459 9.71141 29.6275 12.0388 30.2445Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.4077 11.3447C30.2608 11.2506 30.0874 11.2062 29.9132 11.2181C29.7391 11.23 29.5733 11.2974 29.4408 11.4106C29.3087 11.5238 29.2182 11.6777 29.1846 11.8466L29.1844 11.8474C28.8346 13.6721 27.9557 15.3557 26.6556 16.6915C25.9346 17.414 23.3256 19.7648 19.6761 19.5256L19.6717 19.5253C18.9129 19.4737 17.1885 19.3551 15.6566 18.0757C14.9358 17.4713 14.3707 16.7048 14.0084 15.8401L14.008 15.839C13.9196 15.6338 13.8424 15.424 13.7767 15.2106C13.9066 15.2088 14.0365 15.2021 14.1655 15.191C14.2914 15.1822 14.4131 15.1427 14.5197 15.0759C15.646 14.3992 16.9181 13.9976 18.2313 13.9042C19.5448 13.8107 20.8619 14.0283 22.0741 14.5389L22.0749 14.5392C22.2366 14.6059 22.4156 14.6191 22.5854 14.5768C22.7551 14.5345 22.9068 14.439 23.0179 14.3043L24.8622 12.0125C24.9554 11.8968 25.0129 11.7565 25.0275 11.6089C25.0421 11.4613 25.0134 11.3127 24.9447 11.1812L24.9446 11.1808L24.2418 9.81906L24.2416 9.81863C24.1647 9.67114 24.0429 9.55173 23.8937 9.47735L17.1219 6.07771L19.3178 1.08131L19.3183 1.08027C19.3883 0.916484 19.3985 0.735144 19.3482 0.56501C19.2976 0.394275 19.1899 0.245894 19.0431 0.144379C18.8958 0.0423517 18.7187 -0.00803429 18.5395 0.0010427C18.3603 0.0101215 18.1891 0.0781812 18.053 0.194642L13.3945 4.36185L12.767 4.06778L12.944 2.73549L12.944 2.73495C12.9602 2.60863 12.9446 2.48031 12.8985 2.36153C12.8525 2.24291 12.7776 2.13756 12.6807 2.05485C12.5836 1.97071 12.4677 1.91101 12.3426 1.88072C12.2175 1.85042 12.087 1.85042 11.9619 1.88073C10.1048 2.32547 8.34356 3.09872 6.76249 4.16348L6.76166 4.16405C5.77082 4.84388 4.86122 5.63366 4.05051 6.5181C1.5639 9.14789 0.129314 12.5589 0.00952537 16.1309C-0.0393267 17.5236 0.0998902 18.9164 0.423459 20.2724C1.06149 23.01 2.45369 25.5175 4.44435 27.5144C6.45414 29.5309 8.97872 30.9661 11.7473 31.6662C14.2943 32.3221 16.9632 32.3569 19.5267 31.7676C20.0398 31.65 20.5467 31.5063 21.045 31.3367L21.046 31.3363C24.3718 30.1705 27.2185 27.9823 29.1529 25.1026L29.1536 25.1015C30.0674 23.7059 30.7358 22.1664 31.1303 20.5485L31.1305 20.5478C31.4493 19.2061 31.5451 16.4506 31.5451 16.4506C31.5451 16.4506 31.6026 12.1104 30.4077 11.3447ZM27.8063 17.7634C28.631 16.9254 29.3119 15.9601 29.823 14.9059C30.077 16.7836 29.9601 18.6923 29.4769 20.5291C28.7753 21.0068 28.0217 21.4048 27.2304 21.7154L27.2301 21.7155C25.7353 22.3064 24.1248 22.5526 22.5202 22.4352C20.789 22.2984 19.1238 21.7347 17.6734 20.8004C18.2948 20.954 18.9297 21.048 19.5695 21.0809C20.8488 21.1644 22.1319 20.9909 23.3421 20.5708L23.3426 20.5706C25.0231 19.9788 26.5483 19.0197 27.8056 17.7641L27.8063 17.7634ZM1.97932 19.9225C2.58957 22.5192 3.95064 24.8824 5.89536 26.7216C7.63482 28.3484 9.7543 29.5206 12.0631 30.1327C14.3825 30.7494 16.8191 30.79 19.158 30.2509C21.2213 29.7701 23.1475 28.8349 24.7951 27.5164C23.6168 27.6104 22.4296 27.5315 21.274 27.2816L21.2738 27.2816C19.339 26.8585 17.5397 25.9665 16.0364 24.685L16.0354 24.6842C15.0906 23.8612 14.2971 22.8809 13.6908 21.7876C13.1803 20.8646 12.7918 19.8801 12.535 18.8583C12.2335 17.6683 12.0955 16.4445 12.1246 15.2193C12.1064 15.1429 12.0878 15.0646 12.0703 14.9871C11.476 14.8216 10.9181 14.5464 10.4259 14.1756C9.91821 13.7932 9.49203 13.3144 9.1722 12.767L9.17122 12.7653L9.17031 12.7636C8.6 11.7081 8.45883 10.4756 8.77583 9.31981C8.79727 9.21619 8.83948 9.11793 8.89993 9.0309C8.96117 8.94271 9.03983 8.86791 9.13108 8.81102L9.13153 8.81074C9.22379 8.75381 9.32654 8.71582 9.43375 8.69898C9.54082 8.68216 9.65018 8.68677 9.75544 8.71255C9.861 8.73774 9.96023 8.78433 10.0469 8.84946C10.1335 8.91457 10.2057 8.99679 10.2589 9.09102C10.3121 9.18413 10.3452 9.28731 10.3558 9.39392C10.3664 9.49949 10.3548 9.60606 10.3219 9.70692C10.1126 10.4803 10.2018 11.3035 10.5721 12.0151C10.8164 12.4275 11.1491 12.7816 11.5466 13.0523C11.9443 13.3233 12.396 13.5064 12.8711 13.5893C12.8971 13.5877 12.9232 13.5881 12.9492 13.5906L12.9533 13.591L12.9575 13.5917C13.2555 13.6423 13.5581 13.6614 13.8601 13.6487C15.1072 12.9295 16.4976 12.4898 17.934 12.3604C19.3544 12.2318 20.7858 12.4083 22.1309 12.8774L23.2817 11.4422L22.9217 10.7521L15.7251 7.13199C15.3654 6.9476 15.1938 6.50879 15.358 6.13003L15.3583 6.1293L16.3852 3.80375L14.0762 5.87121C13.8346 6.08233 13.4831 6.13216 13.1922 5.99791L13.1915 5.99759L11.5601 5.23184L11.5596 5.23157C11.252 5.09077 11.0618 4.75893 11.1124 4.41858L11.2059 3.70776L11.0451 3.75981C9.84759 4.16885 8.71087 4.7359 7.66554 5.4457C6.77605 6.06021 5.95786 6.77065 5.22594 7.56402L5.22506 7.56496C2.99844 9.92518 1.71779 12.9843 1.61536 16.1853L1.61534 16.186C1.56806 17.442 1.69049 18.6987 1.97932 19.9225ZM21.7058 25.7764C20.005 25.4227 18.4224 24.6463 17.1062 23.52C16.184 22.713 15.4316 21.7356 14.8899 20.6443C16.4685 22.0987 18.9661 23.7293 22.3883 23.9897C24.0468 24.1131 25.7131 23.8979 27.2845 23.3571C27.4661 23.2968 27.6441 23.231 27.8213 23.1625L27.8216 23.1624C28.0944 23.0559 28.362 22.9365 28.6262 22.8109C28.3847 23.3113 28.1117 23.7963 27.809 24.263C27.5071 24.7172 27.1772 25.1524 26.821 25.566C25.162 26.0582 23.4012 26.1308 21.7058 25.7764ZM13.6257 8.68458L13.67 8.68233L13.6746 8.67778C13.9344 8.63881 14.1801 8.5342 14.388 8.37362L14.5356 8.2596L13.2056 7.61174L13.1899 7.60889C13.0421 7.58222 12.89 7.57827 12.7409 7.5962L12.7379 7.59656L12.7349 7.59708C12.4686 7.64328 12.2175 7.75257 12.0027 7.91576L11.8457 8.03507L13.2418 8.64504L13.2509 8.64737C13.3733 8.67844 13.4996 8.69098 13.6257 8.68458Z"
            fill="#0F1A20"
          />
        </svg>
        <IconComponent
          key="logoDark"
          name="logoDark"
          className={clsx(
            "m-0 duration-300 min-w-[128px] lg:min-w-[150px] 2xl:min-w-[166px]",
            isHome &&
              shouldAnimate &&
              "animate-main-logo-width-mobile lg:animate-main-logo-width-lg will-change-[width]",
            _theme !== "dark" && "opacity-0",
            shouldAnimate && _theme !== "dark" && "hidden",
            !shouldAnimate && "absolute top-0 left-0 w-full h-full",
            temperatureTheme === "winter" ? "fill-winter" : "fill-summer"
          )}
        />
      </div>
    </div>
  );
}
