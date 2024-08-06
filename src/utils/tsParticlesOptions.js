const options = {
    key: "lightHover",
    name: "Light Hover",
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#fff",
            animation: {
                enable: true,
                speed: 20,
                sync: true,
            },
        },
        shape: {
            type: "square",
        },
        opacity: {
            value: 1,
        },
        size: {
            value: {
                min: 5,
                max: 25,
            },
        },
        rotate: {
            value: 0,
            direction: "clockwise",
            animation: {
                speed: 5,
                enable: true,
            },
        },
        move: {
            enable: false,
            speed: 6,
            direction: "none",
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "light",
            },
            onClick: {
                enable: true,
                mode: "repulse",
            },
        },
        modes: {
            light: {
                area: {
                    gradient: {
                        start: "#3b5e98",
                        stop: "#17163e",
                    },
                },
                shadow: {
                    color: "#17163e",
                },
            },
        },
    },
    background: {
        color: "#17163e",
    },
  }

  export default options;