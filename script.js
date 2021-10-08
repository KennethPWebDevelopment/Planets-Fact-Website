'use strict'

let planets = [
    {
      "name": "Mercury",
      "overview": {
        "content": "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        "source": "https://en.wikipedia.org/wiki/Mercury_(planet)"
      },
      "structure": {
        "content": "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
        "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
      },
      "geology": {
        "content": "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
        "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
      },
      "rotation": "58.6 Days",
      "revolution": "87.97 Days",
      "radius": "2,439.7 KM",
      "temperature": "430°c",
      "images": {
        "planet": "./assets/planet-mercury.svg",
        "internal": "./assets/planet-mercury-internal.svg",
        "geology": "./assets/geology-mercury.png"
      }
    },
    {
      "name": "Venus",
      "overview": {
        "content": "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        "source": "https://en.wikipedia.org/wiki/Venus"
      },
      "structure": {
        "content": "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
        "source": "https://en.wikipedia.org/wiki/Venus#Internal_structure"
      },
      "geology": {
        "content": "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
        "source": "https://en.wikipedia.org/wiki/Venus#Surface_geology"
      },
      "rotation": "243 Days",
      "revolution": "224.7 Days",
      "radius": "6,051.8 KM",
      "temperature": "471°c",
      "images": {
        "planet": "./assets/planet-venus.svg",
        "internal": "./assets/planet-venus-internal.svg",
        "geology": "./assets/geology-venus.png"
      }
    },
    {
      "name": "Earth",
      "overview": {
        "content": "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        "source": "https://en.wikipedia.org/wiki/Earth"
      },
      "structure": {
        "content": "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
        "source": "https://en.wikipedia.org/wiki/Earth#Internal_structure"
      },
      "geology": {
        "content": "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
        "source": "https://en.wikipedia.org/wiki/Earth#Surface"
      },
      "rotation": "0.99 Days",
      "revolution": "365.26 Days",
      "radius": "6,371 KM",
      "temperature": "16°c",
      "images": {
        "planet": "./assets/planet-earth.svg",
        "internal": "./assets/planet-earth-internal.svg",
        "geology": "./assets/geology-earth.png"
      }
    },
    {
      "name": "Mars",
      "overview": {
        "content": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".",
        "source": "https://en.wikipedia.org/wiki/Mars"
      },
      "structure": {
        "content": "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
        "source": "https://en.wikipedia.org/wiki/Mars#Internal_structure"
      },
      "geology": {
        "content": "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
        "source": "https://en.wikipedia.org/wiki/Mars#Surface_geology"
      },
      "rotation": "1.03 Days",
      "revolution": "1.88 Years",
      "radius": "3,389.5 KM",
      "temperature": "-28°c",
      "images": {
        "planet": "./assets/planet-mars.svg",
        "internal": "./assets/planet-mars-internal.svg",
        "geology": "./assets/geology-mars.png"
      }
    },
    {
      "name": "Jupiter",
      "overview": {
        "content": "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
        "source": "https://en.wikipedia.org/wiki/Jupiter"
      },
      "structure": {
        "content": "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
        "source": "https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
      },
      "geology": {
        "content": "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
        "source": "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"
      },
      "rotation": "9.93 Hours",
      "revolution": "11.86 Years",
      "radius": "69,911 KM",
      "temperature": "-108°c",
      "images": {
        "planet": "./assets/planet-jupiter.svg",
        "internal": "./assets/planet-jupiter-internal.svg",
        "geology": "./assets/geology-jupiter.png"
      }
    },
    {
      "name": "Saturn",
      "overview": {
        "content": "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
        "source": "https://en.wikipedia.org/wiki/Saturn"
      },
      "structure": {
        "content": "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
        "source": "https://en.wikipedia.org/wiki/Saturn#Internal_structure"
      },
      "geology": {
        "content": "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
        "source": "https://en.wikipedia.org/wiki/Saturn#Atmosphere"
      },
      "rotation": "10.8 Hours",
      "revolution": "29.46 Years",
      "radius": "58,232 KM",
      "temperature": "-138°c",
      "images": {
        "planet": "./assets/planet-saturn.svg",
        "internal": "./assets/planet-saturn-internal.svg",
        "geology": "./assets/geology-saturn.png"
      }
    },
    {
      "name": "Uranus",
      "overview": {
        "content": "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
        "source": "https://en.wikipedia.org/wiki/Uranus"
      },
      "structure": {
        "content": "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
        "source": "https://en.wikipedia.org/wiki/Uranus#Internal_structure"
      },
      "geology": {
        "content": "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
        "source": "https://en.wikipedia.org/wiki/Uranus#Atmosphere"
      },
      "rotation": "17.2 Hours",
      "revolution": "84 Years",
      "radius": "25,362 KM",
      "temperature": "-195°c",
      "images": {
        "planet": "./assets/planet-uranus.svg",
        "internal": "./assets/planet-uranus-internal.svg",
        "geology": "./assets/geology-uranus.png"
      }
    },
    {
      "name": "Neptune",
      "overview": {
        "content": "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
        "source": "https://en.wikipedia.org/wiki/Neptune"
      },
      "structure": {
        "content": "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
        "source": "https://en.wikipedia.org/wiki/Neptune#Internal_structure"
      },
      "geology": {
        "content": "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
        "source": "https://en.wikipedia.org/wiki/Neptune#Atmosphere"
      },
      "rotation": "16.08 Hours",
      "revolution": "164.79 Years",
      "radius": "24,622 KM",
      "temperature": "-201°c",
      "images": {
        "planet": "./assets/planet-neptune.svg",
        "internal": "./assets/planet-neptune-internal.svg",
        "geology": "./assets/geology-neptune.png"
      }
    }
  ]

// Mercury Buttons

if (window.location.pathname == '/index.html' || window.location.pathname == 'https://kennethpwebdevelopment.github.io/Planets-Fact-Website/index.html') {

    let mercuryBtn1 = document.querySelector("#mercury-btn1");
    let mercuryBtn2 = document.querySelector("#mercury-btn2");
    let mercuryBtn3 = document.querySelector("#mercury-btn3");
    let mercuryImg = document.querySelector("#mercury-img");
    let mercuryText = document.querySelector("#mercury-text");
    let mercuryGeology = document.querySelector("#mercury-geology");
    let wikipediaLink = document.querySelector("#wikipedia-link");

    mercuryBtn1.addEventListener("click", function () {
        mercuryText.innerHTML = planets[0].overview["content"];
        mercuryBtn1.style.backgroundColor = "#419EBB";
        mercuryBtn2.style.backgroundColor = "#070724";
        mercuryBtn3.style.backgroundColor = "#070724";
        mercuryImg.src = planets[0].images["planet"]
        wikipediaLink.href = planets[0].overview["source"];
        mercuryGeology.style.display = "none";
    })

    mercuryBtn2.addEventListener("click", function () {
        mercuryText.innerHTML = planets[0].structure["content"];
        mercuryBtn1.style.backgroundColor = "#070724";
        mercuryBtn2.style.backgroundColor = "#419EBB";
        mercuryBtn3.style.backgroundColor = "#070724";
        mercuryImg.src = planets[0].images["internal"];
        wikipediaLink.href = planets[0].structure["source"];
        mercuryGeology.style.display = "none";
    })

    mercuryBtn3.addEventListener("click", function () {
        mercuryText.innerHTML = planets[0].geology["content"];
        mercuryBtn1.style.backgroundColor = "#070724";
        mercuryBtn2.style.backgroundColor = "#070724";
        mercuryBtn3.style.backgroundColor = "#419EBB";
        mercuryImg.src = planets[0].images["planet"];
        wikipediaLink.href = planets[0].geology["source"];
        mercuryGeology.style.display = "block";
    })

}

// Venus Buttons

if (window.location.pathname == '/venus.html') {

    let venusBtn1 = document.querySelector("#venus-btn1");
    let venusBtn2 = document.querySelector("#venus-btn2");
    let venusBtn3 = document.querySelector("#venus-btn3");
    let venusImg = document.querySelector("#venus-img");
    let venusText = document.querySelector("#venus-text");
    let venusGeology = document.querySelector("#venus-geology");
    let wikipediaLink = document.querySelector("#wikipedia-link");


    venusBtn1.addEventListener("click", function () {
        venusText.innerHTML = planets[1].overview["content"];
        venusBtn1.style.backgroundColor = "#EDA249";
        venusBtn2.style.backgroundColor = "#070724";
        venusBtn3.style.backgroundColor = "#070724";
        venusImg.src = planets[1].images["planet"]
        wikipediaLink.href = planets[1].overview["source"];
        venusGeology.style.display = "none";
    })

    venusBtn2.addEventListener("click", function () {
        venusText.innerHTML = planets[1].structure["content"];
        venusBtn1.style.backgroundColor = "#070724";
        venusBtn2.style.backgroundColor = "#EDA249";
        venusBtn3.style.backgroundColor = "#070724";
        venusImg.src = planets[1].images["internal"];
        wikipediaLink.href = planets[1].structure["source"];
        venusGeology.style.display = "none";
    })

    venusBtn3.addEventListener("click", function () {
        venusText.innerHTML = planets[1].geology["content"];
        venusBtn1.style.backgroundColor = "#070724";
        venusBtn2.style.backgroundColor = "#070724";
        venusBtn3.style.backgroundColor = "#EDA249";
        venusImg.src = planets[1].images["planet"];
        wikipediaLink.href = planets[1].geology["source"];
        venusGeology.style.display = "block";
    })

}

// Earth Buttons

if (window.location.pathname == '/earth.html') {

    let earthBtn1 = document.querySelector("#earth-btn1");
    let earthBtn2 = document.querySelector("#earth-btn2");
    let earthBtn3 = document.querySelector("#earth-btn3");
    let earthImg = document.querySelector("#earth-img");
    let earthText = document.querySelector("#earth-text");
    let earthGeology = document.querySelector("#earth-geology");
    let wikipediaLink = document.querySelector("#wikipedia-link");


    earthBtn1.addEventListener("click", function () {
        earthText.innerHTML = planets[2].overview["content"];
        earthBtn1.style.backgroundColor = "#6f2ed6";
        earthBtn2.style.backgroundColor = "#070724";
        earthBtn3.style.backgroundColor = "#070724";
        earthImg.src = planets[2].images["planet"]
        wikipediaLink.href = planets[2].overview["source"];
        earthGeology.style.display = "none";
    })

    earthBtn2.addEventListener("click", function () {
        earthText.innerHTML = planets[2].structure["content"];
        earthBtn1.style.backgroundColor = "#070724";
        earthBtn2.style.backgroundColor = "#6f2ed6";
        earthBtn3.style.backgroundColor = "#070724";
        earthImg.src = planets[2].images["internal"];
        wikipediaLink.href = planets[2].structure["source"];
        earthGeology.style.display = "none";
    })

    earthBtn3.addEventListener("click", function () {
        earthText.innerHTML = planets[2].geology["content"];
        earthBtn1.style.backgroundColor = "#070724";
        earthBtn2.style.backgroundColor = "#070724";
        earthBtn3.style.backgroundColor = "#6f2ed6";
        earthImg.src = planets[2].images["planet"];
        wikipediaLink.href = planets[2].geology["source"];
        earthGeology.style.display = "block";
    })

}

// Mars Buttons

if (window.location.pathname == '/mars.html') {

    let marsBtn1 = document.querySelector("#mars-btn1");
    let marsBtn2 = document.querySelector("#mars-btn2");
    let marsBtn3 = document.querySelector("#mars-btn3");
    let marsImg = document.querySelector("#mars-img");
    let marsText = document.querySelector("#mars-text");
    let marsGeology = document.querySelector("#mars-geology");
    let wikipediaLink = document.querySelector("#wikipedia-link");


    marsBtn1.addEventListener("click", function () {
        marsText.innerHTML = planets[3].overview["content"];
        marsBtn1.style.backgroundColor = "#CD5120";
        marsBtn2.style.backgroundColor = "#070724";
        marsBtn3.style.backgroundColor = "#070724";
        marsImg.src = planets[3].images["planet"]
        wikipediaLink.href = planets[3].overview["source"];
        marsGeology.style.display = "none";
    })

    marsBtn2.addEventListener("click", function () {
        marsText.innerHTML = planets[3].structure["content"];
        marsBtn1.style.backgroundColor = "#070724";
        marsBtn2.style.backgroundColor = "#CD5120";
        marsBtn3.style.backgroundColor = "#070724";
        marsImg.src = planets[3].images["internal"];
        wikipediaLink.href = planets[3].structure["source"];
        marsGeology.style.display = "none";
    })

    marsBtn3.addEventListener("click", function () {
        marsText.innerHTML = planets[3].geology["content"];
        marsBtn1.style.backgroundColor = "#070724";
        marsBtn2.style.backgroundColor = "#070724";
        marsBtn3.style.backgroundColor = "#CD5120";
        marsImg.src = planets[3].images["planet"];
        wikipediaLink.href = planets[3].geology["source"];
        marsGeology.style.display = "block";
    })

}

// Jupiter Buttons

if (window.location.pathname == '/jupiter.html') {

    let jupiterBtn1 = document.querySelector("#jupiter-btn1");
    let jupiterBtn2 = document.querySelector("#jupiter-btn2");
    let jupiterBtn3 = document.querySelector("#jupiter-btn3");
    let jupiterImg = document.querySelector("#jupiter-img");
    let jupiterText = document.querySelector("#jupiter-text");
    let jupiterGeology = document.querySelector("#jupiter-geology");
    let wikipediaLink = document.querySelector("#wikipedia-link");


    jupiterBtn1.addEventListener("click", function () {
        jupiterText.innerHTML = planets[4].overview["content"];
        jupiterBtn1.style.backgroundColor = "#D83A34";
        jupiterBtn2.style.backgroundColor = "#070724";
        jupiterBtn3.style.backgroundColor = "#070724";
        jupiterImg.src = planets[4].images["planet"]
        wikipediaLink.href = planets[4].overview["source"];
        jupiterGeology.style.display = "none";
    })

    jupiterBtn2.addEventListener("click", function () {
        jupiterText.innerHTML = planets[4].structure["content"];
        jupiterBtn1.style.backgroundColor = "#070724";
        jupiterBtn2.style.backgroundColor = "#D83A34";
        jupiterBtn3.style.backgroundColor = "#070724";
        jupiterImg.src = planets[4].images["internal"];
        wikipediaLink.href = planets[4].structure["source"];
        jupiterGeology.style.display = "none";
    })

    jupiterBtn3.addEventListener("click", function () {
        jupiterText.innerHTML = planets[4].geology["content"];
        jupiterBtn1.style.backgroundColor = "#070724";
        jupiterBtn2.style.backgroundColor = "#070724";
        jupiterBtn3.style.backgroundColor = "#D83A34";
        jupiterImg.src = planets[4].images["planet"];
        wikipediaLink.href = planets[4].geology["source"];
        jupiterGeology.style.display = "block";
    })

}

// Saturn Buttons

if (window.location.pathname == '/saturn.html') {

    let saturnBtn1 = document.querySelector("#saturn-btn1");
    let saturnBtn2 = document.querySelector("#saturn-btn2");
    let saturnBtn3 = document.querySelector("#saturn-btn3");
    let saturnImg = document.querySelector("#saturn-img");
    let saturnText = document.querySelector("#saturn-text");
    let saturnGeology = document.querySelector("#saturn-geology");
    let wikipediaLink = document.querySelector("#wikipedia-link");


    saturnBtn1.addEventListener("click", function () {
        saturnText.innerHTML = planets[5].overview["content"];
        saturnBtn1.style.backgroundColor = "#D14C32";
        saturnBtn2.style.backgroundColor = "#070724";
        saturnBtn3.style.backgroundColor = "#070724";
        saturnImg.src = planets[5].images["planet"]
        wikipediaLink.href = planets[5].overview["source"];
        saturnGeology.style.display = "none";
    })

    saturnBtn2.addEventListener("click", function () {
        saturnText.innerHTML = planets[5].structure["content"];
        saturnBtn1.style.backgroundColor = "#070724";
        saturnBtn2.style.backgroundColor = "#D14C32";
        saturnBtn3.style.backgroundColor = "#070724";
        saturnImg.src = planets[5].images["internal"];
        wikipediaLink.href = planets[5].structure["source"];
        saturnGeology.style.display = "none";
    })

    saturnBtn3.addEventListener("click", function () {
        saturnText.innerHTML = planets[5].geology["content"];
        saturnBtn1.style.backgroundColor = "#070724";
        saturnBtn2.style.backgroundColor = "#070724";
        saturnBtn3.style.backgroundColor = "#D14C32";
        saturnImg.src = planets[5].images["planet"];
        wikipediaLink.href = planets[5].geology["source"];
        saturnGeology.style.display = "block";
    })

}

// Uranus Buttons

if (window.location.pathname == '/uranus.html') {

    let uranusBtn1 = document.querySelector("#uranus-btn1");
    let uranusBtn2 = document.querySelector("#uranus-btn2");
    let uranusBtn3 = document.querySelector("#uranus-btn3");
    let uranusImg = document.querySelector("#uranus-img");
    let uranusText = document.querySelector("#uranus-text");
    let uranusGeology = document.querySelector("#uranus-geology");
    let wikipediaLink = document.querySelector("#wikipedia-link");


    uranusBtn1.addEventListener("click", function () {
        uranusText.innerHTML = planets[6].overview["content"];
        uranusBtn1.style.backgroundColor = "#1EC2A4";
        uranusBtn2.style.backgroundColor = "#070724";
        uranusBtn3.style.backgroundColor = "#070724";
        uranusImg.src = planets[6].images["planet"]
        wikipediaLink.href = planets[6].overview["source"];
        uranusGeology.style.display = "none";
    })

    uranusBtn2.addEventListener("click", function () {
        uranusText.innerHTML = planets[6].structure["content"];
        uranusBtn1.style.backgroundColor = "#070724";
        uranusBtn2.style.backgroundColor = "#1EC2A4";
        uranusBtn3.style.backgroundColor = "#070724";
        uranusImg.src = planets[6].images["internal"];
        wikipediaLink.href = planets[6].structure["source"];
        uranusGeology.style.display = "none";
    })

    uranusBtn3.addEventListener("click", function () {
        uranusText.innerHTML = planets[6].geology["content"];
        uranusBtn1.style.backgroundColor = "#070724";
        uranusBtn2.style.backgroundColor = "#070724";
        uranusBtn3.style.backgroundColor = "#1EC2A4";
        uranusImg.src = planets[6].images["planet"];
        wikipediaLink.href = planets[6].geology["source"];
        uranusGeology.style.display = "block";
    })

}

// Neptune Buttons

if (window.location.pathname == '/neptune.html') {

    let neptuneBtn1 = document.querySelector("#neptune-btn1");
    let neptuneBtn2 = document.querySelector("#neptune-btn2");
    let neptuneBtn3 = document.querySelector("#neptune-btn3");
    let neptuneImg = document.querySelector("#neptune-img");
    let neptuneText = document.querySelector("#neptune-text");
    let neptuneGeology = document.querySelector("#neptune-geology");
    let wikipediaLink = document.querySelector("#wikipedia-link");


    neptuneBtn1.addEventListener("click", function () {
        neptuneText.innerHTML = planets[7].overview["content"];
        neptuneBtn1.style.backgroundColor = "#2D68F0";
        neptuneBtn2.style.backgroundColor = "#070724";
        neptuneBtn3.style.backgroundColor = "#070724";
        neptuneImg.src = planets[7].images["planet"]
        wikipediaLink.href = planets[7].overview["source"];
        neptuneGeology.style.display = "none";
    })

    neptuneBtn2.addEventListener("click", function () {
        neptuneText.innerHTML = planets[7].structure["content"];
        neptuneBtn1.style.backgroundColor = "#070724";
        neptuneBtn2.style.backgroundColor = "#2D68F0";
        neptuneBtn3.style.backgroundColor = "#070724";
        neptuneImg.src = planets[7].images["internal"];
        wikipediaLink.href = planets[7].structure["source"];
        neptuneGeology.style.display = "none";
    })

    neptuneBtn3.addEventListener("click", function () {
        neptuneText.innerHTML = planets[7].geology["content"];
        neptuneBtn1.style.backgroundColor = "#070724";
        neptuneBtn2.style.backgroundColor = "#070724";
        neptuneBtn3.style.backgroundColor = "#2D68F0";
        neptuneImg.src = planets[7].images["planet"];
        wikipediaLink.href = planets[7].geology["source"];
        neptuneGeology.style.display = "block";
    })

};
