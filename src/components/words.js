const PROGRAMING_LANG = [
  "c",
  "csharp",
  "css",
  "dart",
  "delphi",
  "elixir",
  "erlang",
  "fortran",
  "golang",
  "groovy",
  "haskell",
  "html",
  "java",
  "javascript",
  "kotlin",
  "matlab",
  "objectivec",
  "perl",
  "php",
  "python",
  "r",
  "ruby",
  "rust",
  "scala",
  "sql",
  "swift",
  "typescript",
];

const COUNTRY_LIST = [
  "afghanistan",
  "albania",
  "algeria",
  "andorra",
  "angola",
  "anguilla",
  "antigua",
  "argentina",
  "armenia",
  "aruba",
  "australia",
  "austria",
  "azerbaijan",
  "bahamas",
  "bahrain",
  "bangladesh",
  "barbados",
  "belarus",
  "belgium",
  "belize",
  "benin",
  "bermuda",
  "bhutan",
  "bolivia",
  "bosnia",
  "botswana",
  "brazil",
  "brunei",
  "bulgaria",
  "burkinafaso",
  "burundi",
  "cambodia",
  "cameroon",
  "capeverde",
  "chad",
  "chile",
  "china",
  "colombia",
  "congo",
  "cookislands",
  "costarica",
  "cotedivoire",
  "croatia",
  "cruiseship",
  "cuba",
  "cyprus",
  "czechrepublic",
  "denmark",
  "djibouti",
  "dominica",
  "dominicanrepublic",
  "ecuador",
  "egypt",
  "elsalvador",
  "equatorialguinea",
  "estonia",
  "ethiopia",
  "falklandislands",
  "faroeislands",
  "fiji",
  "finland",
  "france",
  "frenchpolynesia",
  "frenchwestindies",
  "gabon",
  "gambia",
  "georgia",
  "germany",
  "ghana",
  "gibraltar",
  "greece",
  "greenland",
  "grenada",
  "guam",
  "guatemala",
  "guernsey",
  "guinea",
  "guineabissau",
  "guyana",
  "haiti",
  "honduras",
  "hongkong",
  "hungary",
  "iceland",
  "india",
  "indonesia",
  "iran",
  "iraq",
  "ireland",
  "isleofman",
  "italy",
  "jamaica",
  "japan",
  "jersey",
  "jordan",
  "kazakhstan",
  "kenya",
  "kuwait",
  "kyrgyzrepublic",
  "laos",
  "latvia",
  "lebanon",
  "lesotho",
  "liberia",
  "libya",
  "liechtenstein",
  "lithuania",
  "luxembourg",
  "macau",
  "macedonia",
  "madagascar",
  "malawi",
  "malaysia",
  "maldives",
  "mali",
  "malta",
  "mauritania",
  "mauritius",
  "mexico",
  "moldova",
  "monaco",
  "mongolia",
  "montenegro",
  "montserrat",
  "morocco",
  "mozambique",
  "namibia",
  "nepal",
  "netherlands",
  "newcaledonia",
  "newzealand",
  "nicaragua",
  "niger",
  "nigeria",
  "norway",
  "oman",
  "pakistan",
  "palestine",
  "panama",
  "papuanewguinea",
  "paraguay",
  "peru",
  "philippines",
  "poland",
  "portugal",
  "puertorico",
  "qatar",
  "reunion",
  "romania",
  "russia",
  "rwanda",
  "samoa",
  "sanmarino",
  "satellite",
  "saudiarabia",
  "senegal",
  "serbia",
  "seychelles",
  "sierraleone",
  "singapore",
  "slovakia",
  "slovenia",
  "southafrica",
  "southkorea",
  "spain",
  "srilanka",
  "stkitts&amp;nevis",
  "stlucia",
  "stvincent",
  "st.lucia",
  "sudan",
  "suriname",
  "swaziland",
  "sweden",
  "switzerland",
  "syria",
  "taiwan",
  "tajikistan",
  "tanzania",
  "thailand",
  "timorl'este",
  "togo",
  "tonga",
  "tunisia",
  "turkey",
  "turkmenistan",
  "uganda",
  "ukraine",
  "emirates",
  "britain",
  "uruguay",
  "uzbekistan",
  "venezuela",
  "vietnam",
  "yemen",
  "zambia",
  "zimbabwe",
];

const LISTS = [PROGRAMING_LANG, COUNTRY_LIST];

function randomList() {
  var chosenListId = parseInt(Math.random() * 2);
  return chosenListId;
}
function randomWord() {
  var chosenListId = randomList();
  var chosenList = LISTS[chosenListId];
  var chosenWord = chosenList[Math.floor(Math.random() * chosenList.length)];
  console.log("id: " + chosenListId + " " + chosenWord);

  return [chosenListId, chosenWord];
}

export { randomWord };