const brandShadows = {
	// Brand default
	"shadow-brand-default-2dp":
		"0 8px 20px -8px rgba(46, 0, 118, 0.06), 0 0 10px rgba(46, 0, 118, 0.08)",

	"shadow-brand-default-4dp":
		"0 16px 24px -10px rgba(46, 0, 118, 0.07), 0 1px 15px rgba(46, 0, 118, 0.08)",

	"shadow-brand-default-6dp":
		"0 24px 28px -12px rgba(46, 0, 118, 0.08), 0 2px 20px rgba(46, 0, 118, 0.08)",

	"shadow-brand-default-8dp":
		"0 32px 32px -14px rgba(46, 0, 118, 0.09), 0 3px 25px rgba(46, 0, 118, 0.08)",

	"shadow-brand-default-10dp":
		"0 40px 36px -16px rgba(46, 0, 118, 0.1), 0 4px 30px rgba(46, 0, 118, 0.08)",

	// Brand Soft
	"shadow-brand-soft-1dp": "0 6px 60px -4px rgba(46, 0, 118, 0.1)",

	"shadow-brand-soft-2dp": "0 -8px 64px -4px rgba(46, 0, 118, 0.12)",

	"shadow-brand-soft-3dp": "0 8px 64px -4px rgba(46, 0, 118, 0.12)",

	// Brand Candy
	"shadow-brand-candy-4dp": "0 8px 22px -12px rgba(173, 0, 255, 0.8)",
};

const neutralShadows = {
	// Neutral Default
	"shadow-neutral-default-2dp":
		"0 8px 20px -8px rgba(17, 17, 17, 0.06), 0 0 10px rgba(17, 17, 17, 0.08)",

	"shadow-neutral-default-4dp":
		"0 16px 24px -10px rgba(17, 17, 17, 0.07), 0 1px 15px rgba(17, 17, 17, 0.08)",

	"shadow-neutral-default-6dp":
		"0 24px 28px -12px rgba(17, 17, 17, 0.08), 0 2px 20px rgba(17, 17, 17, 0.08)",

	"shadow-neutral-default-8dp":
		"0 32px 32px -14px rgba(17, 17, 17, 0.09),0 3px 25px rgba(17, 17, 17, 0.08)",

	"shadow-neutral-default-10dp":
		"0 40px 36px -16px rgba(17, 17, 17, 0.1), 0 4px 30px rgba(17, 17, 17, 0.08)",

	// Neutral Soft
	"shadow-neutral-soft-1dp": "0 6px 60px -4px rgba(17, 17, 17, 0.1)",

	// Neutral Candy
	"shadow-neutral-candy-4dp": "0 8px 22px -12px rgba(17, 17, 17, 0.8)",
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

export const shadows = {
	...brandShadows,
	...neutralShadows,
	...themeShadows,
};
