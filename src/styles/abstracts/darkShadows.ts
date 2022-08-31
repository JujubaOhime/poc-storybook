const brandShadows = {
	// Brand default
	"shadow-brand-default-2dp":
		"0 8px 20px -8px rgba(10, 7, 14, 0.72), 0 0 10px rgba(10, 7, 14, 0.72)",

	"shadow-brand-default-4dp":
		"0 16px 24px -10px rgba(10, 7, 14, 0.7), 0 1px 15px rgba(10, 7, 14, 0.72)",

	"shadow-brand-default-6dp":
		"0 24px 28px -12px rgba(10, 7, 14, 0.68), 0 2px 20px rgba(10, 7, 14, 0.72)",

	"shadow-brand-default-8dp":
		"0 32px 32px -14px rgba(10, 7, 14, 0.66), 0 3px 25px rgba(10, 7, 14, 0.72)",

	"shadow-brand-default-10dp":
		"0 40px 36px -16px rgba(10, 7, 14, 0.64), 0 4px 30px rgba(10, 7, 14, 0.72) ",

	// Brand Soft
	"shadow-brand-soft-1dp": "0 6px 60px -4px rgba(10, 7, 14, 0.88) ",

	"shadow-brand-soft-2dp": "0 -8px 64px -4px #000",

	"shadow-brand-soft-3dp": "0 8px 64px -4px #000",

	// Brand Candy
	"shadow-brand-candy-4dp": "0 10px 30px -14px rgba(37, 0, 88, 0.82)",
};

const neutralShadows = {
	// Neutral Default
	"shadow-neutral-default-2dp":
		"0 8px 20px -8px rgba(0, 0, 0, 0.72), 0 0 10px rgba(0, 0, 0, 0.72)",

	"shadow-neutral-default-4dp":
		"0 16px 24px -10px rgba(0, 0, 0, 0.7), 0 1px 15px rgba(0, 0, 0, 0.72) ",

	"shadow-neutral-default-6dp":
		"0 24px 28px -12px rgba(0, 0, 0, 0.68), 0 2px 20px rgba(0, 0, 0, 0.72)",

	"shadow-neutral-default-8dp":
		"0 32px 32px -14px rgba(0, 0, 0, 0.66), 0 3px 25px rgba(0, 0, 0, 0.72) ",

	"shadow-neutral-default-10dp":
		"0 40px 36px -16px rgba(0, 0, 0, 0.64), 0 4px 30px rgba(0, 0, 0, 0.72) ",

	// Neutral Soft
	"shadow-neutral-soft-1dp": "0 6px 60px -4px rgba(10, 7, 14, 0.88)",

	// Neutral Candy
	"shadow-neutral-candy-4dp": "0 10px 30px -12px #000",
};

const themeShadows = {
	// Theme
	"shadow-theme-default-2dp": "$shadow-brand-default-2dp",
	"shadow-theme-default-4dp": "$shadow-brand-default-4dp",
	"shadow-theme-default-6dp": "$shadow-brand-default-6dp",
	"shadow-theme-default-8dp": "$shadow-brand-default-8dp",
	"shadow-theme-default-10dp": "$shadow-brand-default-10dp",

	"shadow-theme-soft-1dp": "$shadow-brand-soft-1dp",

	"shadow-theme-candy-4dp": "$shadow-brand-candy-4dp",
};

export const darkShadows = {
	...brandShadows,
	...neutralShadows,
	...themeShadows,
};
