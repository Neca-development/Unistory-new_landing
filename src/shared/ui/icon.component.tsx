import dynamic from "next/dynamic";
import React from "react";

const unistory = dynamic(() => import("@public/assets/icons/unistory.svg"));
const logoLight = dynamic(() => import("@public/assets/icons/logo-light.svg"));
const logoDark = dynamic(() => import("@public/assets/icons/logo-dark.svg"));
const sun = dynamic(() => import("@public/assets/icons/sun.svg"));
const winter = dynamic(() => import("@public/assets/icons/winter.svg"));
const summer = dynamic(() => import("@public/assets/icons/summer.svg"));
const earth = dynamic(() => import("@public/assets/icons/earth.svg"));
const rocket = dynamic(() => import("@public/assets/icons/rocket.svg"));
const cloud = dynamic(() => import("@public/assets/icons/cloud.svg"));
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
const message = dynamic(() => import("@public/assets/icons/message.svg"));
const clip = dynamic(() => import("@public/assets/icons/clip.svg"));
const logoDarkOutline = dynamic(
	() => import("@public/assets/icons/logo-dark-outline.svg")
);
const telegram = dynamic(() => import("@public/assets/icons/telegram.svg"));
const whatsApp = dynamic(() => import("@public/assets/icons/whatsApp.svg"));
const clutch = dynamic(() => import("@public/assets/icons/clutch.svg"));
const upwork = dynamic(() => import("@public/assets/icons/upwork.svg"));
const menuBtn = dynamic(() => import("@public/assets/icons/menu-btn.svg"));
const closeLight = dynamic(
	() => import("@public/assets/icons/close-light.svg")
);
const closeDark = dynamic(() => import("@public/assets/icons/close-dark.svg"));

const iconTypes = {
	unistory,
	logoLight,
	logoDark,
	sun,
	winter,
	summer,
	earth,
	rocket,
	cloud,
	grid,
	layout,
	folder,
	phone01,
	phone02,
	monitor,
	bitcoin,
	arrowRight,
	message,
	clip,
	logoDarkOutline,
	telegram,
	whatsApp,
	clutch,
	upwork,
	menuBtn,
	closeLight,
	closeDark,
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
