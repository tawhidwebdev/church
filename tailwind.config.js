tailwind.config = {
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
        '3xl': '1600px',
      },
      colors: {
        navbg: "#0D0D0D",
        primary: "#161722",
        secondary: "#1C1D28",
        btn: "#FFD2A4",
        sectionbg: "#F5F2F0",
        blogbg: "#FFF5EB",
        afterbg: "#FFD0A0"
        },
      maxWidth: {
        container: "1280px",
        },
      fontFamily: {
        roboto: "'Roboto Condensed', sans-serif;"
        },
      backgroundImage: {
        'bannerimg': "url('./images/banner.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'worldimg': "url('./images/world.jpg')",
        'opacity': "linear-gradient(40deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%);",
        'gradint': "linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%)",
        'section': "linear-gradient(110deg, #CD5423 -53.83%, #FFD0A0 62.61%);"
        }
    }  
  }
}