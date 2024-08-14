/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                customGradientFrom: "#ae00a8",
                customGradientVia: "#9f28b0",
                customGradientVia2: "#903ab7",
                customGradientVia3: "#8146bb",
                customGradientTo: "#7150bd",
            },
        },
        fontFamily: {
            sans: ["ui-sans-serif", "system-ui"],
            serif: ["ui-serif", "Georgia"],
            roboto: ["ui-monospace", "SFMono-Regular"],
            display: ["Oswald"],
            body: ['"Open Sans"'],
            montserrat: ["Montserrat Black"],
            raleway: ["Raleway Bold"],
        },
    },
    plugins: [],
};
