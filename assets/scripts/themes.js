const html = document.querySelector("html");

const btn = document.getElementById("toggler");


const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const themes = [
  {
    name: "Midnight",
    tooltip: "Boa noite! :)",
    src:'assets/icons/theme-moon.svg',
    srcInfo:'assets/icons/info-dark.svg',
    
    primary: getStyle(html, "--primary"),
    secondary: getStyle(html, "--secondary"),
    bgColor: getStyle(html, "--bg-color"),

    title: getStyle(html, "--title"),
    text:getStyle(html, "--text"),
    subtext: getStyle(html, "--subtext"),
  },

  {
    
    name: "Daylight",
    src:'assets/icons/theme-sun.svg',
    srcInfo:'assets/icons/info-light.svg',

    primary: "#0000ff",
    secondary: "#ccc",
    bgColor: "#fff",

    title: "#000",
    text:"#222",
    subtext: "#808080",
  },

  {
    name: "Sunset",
    src:'assets/icons/theme-candle.svg', 
    srcInfo:'assets/icons/info-sepia.svg',

    primary: "#5f0119",
    secondary: "#e5ddac",
    bgColor: "#e7ca70",

    title: "#3a1616",
    text: "#672008",
    subtext: "#672008",
  },
];

const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key])
  );
};

let count = 0;
btn.addEventListener("click", () => {
  count++;
  if (count >= themes.length) count = 0;
  console.log(`Theme index ${count}: ${themes[count].name}`);
  changeColors(themes[count]);
  document.getElementById("theme-icon").src = themes[count].src;
  document.getElementById("info-icon").src = themes[count].srcInfo;
  //document.getElementById("theme-title").innerHTML = `${themes[count].name} Theme`
  
});
