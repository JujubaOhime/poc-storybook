export const spriteDashboard =
	"/academy/next/static/images/sprite_dashboard.svg";
export const spriteApps = "/academy/next/static/images/sprite-apps.svg";
export const spriteHome = "/academy/next/static/images/sprite_home.svg";

const home = {
	logo: "0 0",
	"white-check": "2px -404px",
	"orange-check": "-223px -110px",
	"purple-check": "-204px -137px",
	"new-window": "-227px -501px",
	"new-window-hover": "-250px -501px",
};

const sprites: { [key: string]: string } = {
	add: "-10px -11px",
	arrow: "0 -11px",
	chart: "-44px -138px",
	chat: "-103px -34px",
	check: "-13px 0",
	"checkbox-check": "-49.9px -36px",
	"checkbox-hover": "-80px -36px",
	checkbox: "-27px -91px",
	"close-gray": "-74px -116px",
	"close-gray-hover": "-23.5px -113.5px",
	"close-purple": "-25px -72px",
	close: "-25px -72px",
	contracted: "-20px -138px",
	discord: "-97px -82px",
	drop: "0 0",
	"drop-gray": "0 -24px",
	email: "-44px -74px",
	error: "-20px -51px",
	filter: "-119px -57px",
	globe: "-45px -117px",
	"globe-hover": "-107px -116px",
	"icon-missed": "-109px 0",
	"icon-ok": "-77px 0",
	"icon-waiting": "-93px 0",
	info: "-58px -51px",
	"info-gray": "-90px -116px",
	"mini-checkbox": "-108.5px -17px",
	"mini-checkbox-hover": "-125.5px -17px",
	"paperclip-gray": "-62px -115px",
	"paperclip-gray-hover": "-11px -120px",
	"paperclip-purple": "0 -120px",
	pendingPayment: "-52px 0",
	phone: "-97px -58px",
	roundedClose: "-50px -89px",
	search: "-40px -51px",
	skype: "-73px -58px",
	student: "0 -138px",
	success: "0 -51px",
	"warning-red": "-78px -17px",
	"warning-orange": "-125px 0",
	warning: "0 -71px",
	warningFilled: "0 -96px",
	zoom: "-73px -82px",
	"google-play": "0 0",
	"google-play-mobile": "-197px 0",
	"apple-store": "0 -57px",
	"apple-store-mobile": "-197px -43px",
	...home,
};

export const sprite = (sprite: string, local = spriteDashboard) => {
	const position = sprites[sprite];

	return {
		fontSize: 0,
		backgroundImage: `url(${local})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: position,
	};
};
