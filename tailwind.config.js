module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            montserrat: ["montserrat"],
        },
        extend: {
            backgroundImage: (theme) => ({
                main: "url('/img/main.png')",
                experience: "url('/img/experience.png')",
                footer: "url('/img/bg-footer.png')",
                header: "url('/img/bg-header.png')",
            }),
            colors: {
                primary: "#ED915E",
                secondary: "#E85A4D",
                terciary: "#ffffff",
                firstGradient: "#F7C153",
                secondGradient: "#DC446F",
                colorTransparent: "rgba(255, 255, 254, 0.36)",
            },
        },
    },
    plugins: [],
};
