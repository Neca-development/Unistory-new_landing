import dynamic from "next/dynamic";
import React from "react";

const unistory = dynamic(() => import("@public/assets/icons/unistory.svg"));
const logoLight = dynamic(() => import("@public/assets/icons/logo-light.svg"));
const logoDark = dynamic(() => import("@public/assets/icons/logo-dark.svg"));
const sun = dynamic(() => import("@public/assets/icons/sun.svg"));
const sunset = dynamic(() => import("@public/assets/icons/sunset.svg"));
const winter = dynamic(() => import("@public/assets/icons/winter.svg"));
const summer = dynamic(() => import("@public/assets/icons/summer.svg"));
const earth = dynamic(() => import("@public/assets/icons/earth.svg"));
const earthColor = dynamic(() => import("@public/assets/icons/earth-colored.svg"));
const rocket = dynamic(() => import("@public/assets/icons/rocket.svg"));
const cloud = dynamic(() => import("@public/assets/icons/cloud.svg"));
const cloudEmpty = dynamic(() => import("@public/assets/icons/cloud-empty.svg"));
const lightning = dynamic(() => import("@public/assets/icons/lightning.svg"));
const light = dynamic(() => import("@public/assets/icons/light.svg"));
const rainOne = dynamic(() => import("@public/assets/icons/rain-1.svg"));
const rainTwo = dynamic(() => import("@public/assets/icons/rain-2.svg"));
const rainThree = dynamic(() => import("@public/assets/icons/rain-3.svg"));
const grid = dynamic(() => import("@public/assets/icons/grid.svg"));
const layout = dynamic(() => import("@public/assets/icons/layout.svg"));
const folder = dynamic(() => import("@public/assets/icons/folder.svg"));
const phone01 = dynamic(() => import("@public/assets/icons/phone-01.svg"));
const phone02 = dynamic(() => import("@public/assets/icons/phone-02.svg"));
const monitor = dynamic(() => import("@public/assets/icons/monitor.svg"));
const bitcoin = dynamic(() => import("@public/assets/icons/bitcoin.svg"));
const arrowRight = dynamic(
	() => import("@public/assets/icons/arrow-right.svg")
);

const puddle = dynamic(() => import("@public/assets/icons/puddle.svg"));
const message = dynamic(() => import("@public/assets/icons/message.svg"));
const clip = dynamic(() => import("@public/assets/icons/clip.svg"));
const logoDarkOutline = dynamic(
	() => import("@public/assets/icons/logo-dark-outline.svg")
);
const telegram = dynamic(() => import("@public/assets/icons/telegram.svg"));
const whatsApp = dynamic(() => import("@public/assets/icons/whatsApp.svg"));
const clutch = dynamic(() => import("@public/assets/icons/clutch.svg"));
const upwork = dynamic(() => import("@public/assets/icons/upwork.svg"));
const closeLight = dynamic(
	() => import("@public/assets/icons/close-light.svg")
);
const closeDark = dynamic(() => import("@public/assets/icons/close-dark.svg"));
const menuBtnLight = dynamic(
	() => import("@public/assets/icons/menu-btn-light.svg")
);
const menuBtnDark = dynamic(
	() => import("@public/assets/icons/menu-btn-dark.svg")
);

const iconTypes = {
	unistory,
	logoLight,
	logoDark,
	sun,
	sunset,
	winter,
	summer,
	earth,
	earthColor,
	rocket,
	cloud,
	cloudEmpty,
	lightning,
	light,
	rainOne,
	rainTwo,
	rainThree,
	grid,
	layout,
	folder,
	phone01,
	phone02,
	monitor,
	bitcoin,
	arrowRight,
	puddle,
	message,
	clip,
	logoDarkOutline,
	telegram,
	whatsApp,
	clutch,
	upwork,
	closeLight,
	closeDark,
	menuBtnLight,
	menuBtnDark,
};

export type IconsTypes = keyof typeof iconTypes;

export interface IIconComponentProperties
	extends React.SVGAttributes<SVGElement> {
	name: IconsTypes;
}

export const IconComponent = React.memo(
	({ name, ...props }: IIconComponentProperties) => {
		const Icon = iconTypes[name];
		return <Icon {...props} />;
	}
);
