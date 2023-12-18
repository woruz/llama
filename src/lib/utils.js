export const convert_array_to_object_for_dropdown_data = (input_array) => {
    const result_obj = {}
    console.log({ input_array })
    input_array.forEach(element => {
        result_obj[element] = element.split(" ").join("-").toLowerCase()
    })

    return result_obj
}
export const utils_data_for_form = {
    company_name_or_location: [
        "Belfor Abbotsford",
        "Belfor Brockville",
        "Belfor Calgary",
        "Belfor Chatham",
        "Belfor Collingwood",
        "Belfor Corner Brook",
        "Belfor Courtenay",
        "Belfor Dartmouth",
        "Belfor Dieppe",
        "Belfor Duncan",
        "Belfor Edmonton",
        "Belfor Gander",
        "Belfor Halifax",
        "Belfor Hamilton",
        "Belfor Kelowna",
        "Belfor Kingston",
        "Belfor Kitchener",
        "Belfor Labrador",
        "Belfor Lanark",
        "Belfor Lindsay",
        "Belfor London",
        "Belfor Markham",
        "Belfor Mississauga",
        "Belfor Moncton",
        "Belfor Montreal",
        "Belfor Mt. Tremblant",
        "Belfor Nanaimo",
        "Belfor Ottawa",
        "Belfor Owen Sound",
        "Belfor Paradise",
        "Belfor Perth",
        "Belfor Prince George",
        "Belfor Quispamsis",
        "Belfor Red Deer",
        "Belfor Sarnia",
        "Belfor St. John",
        "Belfor St. John's",
        "Belfor Stratford",
        "Belfor Surrey",
        "Belfor Toronto",
        "Belfor Vancouver",
        "Belfor Victoria",
        "Belfor Windsor",
        "Belfor Winnipeg",
        "DANAR - Montreal",
        "DANAR - Northshore"
    ],

    requester_name: [
        "BELFOR",
        "Brett MacKenzie ",
        "Emily Lees",
        "Kamala Brown",
        "Kristy Persson",
        "Ryan O'Neill",
        "Tracey Paris",
        "FIRST GENERAL",
        "PDS",
        "PUROCLEAN",
        "SERVICEMASTER",
        "WINMAR"
    ],

    countries: ['United States', 'Canada'],

    canada_cites: [
        "Calgary",
        "Edmonton",
        "Fort McMurray",
        "Grand Prairie",
        "Vancouver",
        "Prince George",
        "Vancouver Island",
        "Kelowna",
        "Winnipeg",
        "Brandon",
        "Saint John",
        "Moncton",
        "Fredericton",
        "St. John's",
        "Corner Brook",
        "Halifax",
        "Sydney",
        "Barrie",
        "Burlington",
        "Kitchener",
        "Kingston",
        "London",
        "Ottawa",
        "Sudbury",
        "St. Catharines",
        "Thunder Bay",
        "Toronto",
        "Windsor",
        "Charlottetown",
        "Quebec",
        "Montreal",
        "Saguenay",
        "Outaouais",
        "Abitibi",
        "Cantons-de-l'Est",
        "Regina",
        "Saskatoon"
    ],

    us_cities: [
        "Andalusia",
        "Anniston",
        "Birmingham",
        "Decatur",
        "Dothan",
        "Florence",
        "Gadsden",
        "Guntersville",
        "Huntsville",
        "Jasper",
        "Mobile",
        "Montgomery",
        "Opelika",
        "Scottsboro",
        "Tuscaloosa",
        "Anchorage",
        "Fairbanks",
        "Juneau",
        "Batesville",
        "El Dorado",
        "Fayetteville",
        "Fort Smith",
        "Jonesboro",
        "Little Rock",
        "West Memphis",
        "Flagstaff",
        "Lake Havasu",
        "Phoenix",
        "Prescott",
        "Tucson",
        "Yuma",
        "Bakersfield",
        "San Benardino",
        "Bishop",
        "Santa Barbara",
        "East Bay",
        "Eureka",
        "Fresno",
        "San Fernando",
        "Los Angeles",
        "Lancaster",
        "Merced",
        "Modesto",
        "Santa Maria",
        "Orange",
        "SF Peninula",
        "Palm Springs",
        "Ridgecrest",
        "Redding",
        "Sacramento",
        "South Bay",
        "San Diego",
        "Salinas",
        "San Luis Obispo",
        "Santa Rosa",
        "San Rafael",
        "S. Lake Tahoe",
        "Santa Cruz",
        "Tuolumne",
        "Truckee",
        "Ukiah",
        "Ventura",
        "Victorville",
        "Visalia",
        "Simi Valley",
        "Boulder",
        "Colorado Springs",
        "Denver",
        "Durango",
        "Fort Collins",
        "Grand Junction",
        "Glenwood Springs",
        "Pueblo",
        "Resort",
        "Hartford",
        "New Haven",
        "Stamfort",
        "Washington",
        "Dover",
        "Wilimngton",
        "Delray Beach",
        "Daytona Beach",
        "Fort Lauderdale",
        "Fort Myers",
        "Fort Pierce",
        "Gainesville",
        "Jacksonville",
        "Jupiter",
        "Key West",
        "Leesburg",
        "Melbourne",
        "Miami",
        "Naples",
        "Ocala",
        "Orlando",
        "Panama City",
        "Pensacola",
        "Sebring",
        "Spring Hill",
        "St. Petersburg",
        "Sarasota",
        "Tampa",
        "Tallahassee",
        "West Palm Beach",
        "Win Haven",
        "Athens",
        "Atlanta",
        "Augusta",
        "Brunswick",
        "Carrollton",
        "Columbus",
        "Macon",
        "Rome",
        "Savannah",
        "Valdosta",
        "Honolulu",
        "Hawaii Outer Island",
        "Wailuku",
        "Burlington",
        "Council Bluffs",
        "Cedar Rapids",
        "Davenport",
        "Des Moines",
        "Dubuque",
        "Fort Dodge",
        "Mason City",
        "Sioux City",
        "Waterloo",
        "Boise",
        "Coeur D'Alene",
        "Idaho Falls",
        "Lewiston",
        "Pocatello",
        "Sun Valley Resort",
        "Twin Falls",
        "Bloomington",
        "Chicago",
        "Champaign",
        "Decatur",
        "East St. Louis",
        "Marion",
        "Moline",
        "Mattoon",
        "Mount Vernon",
        "Peoria",
        "Peru",
        "Rockford",
        "Springfield",
        "Evansville",
        "Fort Wayne",
        "Gary",
        "Indianapolis",
        "Michigan City",
        "Muncie",
        "New Albany",
        "South Bend",
        "Terre Haute",
        "West Lafayette",
        "Hutchinson",
        "Kansas City",
        "Kansas State",
        "Topeka",
        "Wichita",
        "Ashland",
        "Bowling Green",
        "Covington",
        "London",
        "Louisville",
        "Lexington",
        "Owensboro",
        "Paducah",
        "Alexandria",
        "Baton Rouge",
        "Houma",
        "Lafayette",
        "Lake Charles",
        "Mandeville",
        "Monroe",
        "New Orleans",
        "Shreveport",
        "Boston",
        "Eastern Massachusetts",
        "Islands",
        "Springfield",
        "Baltimore",
        "Cumberland",
        "Frederick",
        "Rockville",
        "Salisbury",
        "St. Charles",
        "Bangor",
        "Portland",
        "Ann Arbor",
        "Battle Creek",
        "Detroit",
        "Flint",
        "Gaylord",
        "Grand Rapids",
        "Kalamazoo",
        "Lansing",
        "Marquette",
        "Mount Pleasant",
        "Muskegon",
        "Saginaw",
        "Traverse City",
        "Bemidji",
        "Brainerd",
        "Detr-Lakes",
        "Duluth",
        "Hibbing",
        "Marshall",
        "Mankato",
        "Minneapolis",
        "Rochester",
        "St. Cloud",
        "Thief River Falls",
        "Cape Girardeau",
        "Chillichothe",
        "Columbia",
        "Joplin",
        "Kansas City",
        "Kirksville",
        "Osage Beach",
        "Rolla",
        "Sedalia",
        "St. Joseph",
        "St. Louis",
        "Springfield",
        "Greenville",
        "Gulfport",
        "Hattiesburg",
        "Jackson",
        "Meridian",
        "Southaven",
        "Tupelo",
        "Billings",
        "Bozeman",
        "Butte",
        "Great Falls",
        "Helena",
        "Kalispell",
        "Missoula",
        "Sidney",
        "Asheville",
        "Charlotte",
        "Chapel Hill",
        "Elizabeth City",
        "Fayetteville",
        "Greensboro",
        "Hickory",
        "High Point",
        "Kinston",
        "Raleigh",
        "Wilmington",
        "Winston-Salem",
        "Bismark",
        "Fargo",
        "Grand Forks",
        "Minot",
        "Grand Island",
        "Lincoln",
        "Norfolk",
        "North Platte",
        "Omaha",
        "Scottsbluff",
        "Manchester",
        "Atlantic City",
        "Camden",
        "Newark",
        "Paterson",
        "Toms River",
        "Alburquerque",
        "Clovis",
        "Farmington",
        "Hobbs",
        "Las Cruces",
        "Roswell",
        "Santa Fe",
        "Las Vegas",
        "Elko",
        "Reno",
        "Albany ",
        "Binghamton",
        "Buffalo",
        "Long Island",
        "Manhattan",
        "Outer Boroughs",
        "Rochester",
        "Syracuse",
        "Utica",
        "White Plains",
        "Akron",
        "Canton",
        "Cincinnati",
        "Cleveland",
        "Columbus",
        "Dayton",
        "Lima",
        "Mansfield",
        "Newark",
        "Portsmouth",
        "Toledo",
        "Youngstown",
        "Ada",
        "Enid",
        "Lawton",
        "Muskogee",
        "Oklahoma City",
        "Tulsa",
        "Bend",
        "Corvallis",
        "Eugene",
        "Medford",
        "Pendleton",
        "Portland",
        "Roseburg",
        "Salem",
        "Allentown",
        "Altoona",
        "Erie",
        "Harrisburg",
        "Johnstown",
        "Lancaster",
        "Pittsburgh",
        "Philadelphia",
        "Reading",
        "Scranton",
        "West Chester",
        "Willamsport",
        "San Juan",
        "Providence",
        "Aiken",
        "Beaufort",
        "Charleston",
        "Columbia",
        "Florence",
        "Greenwood",
        "Greenville",
        "Hilton Head Island",
        "Myrtle Beach",
        "Rock Hill",
        "Aberdeen",
        "Rapid City",
        "Sioux Falls",
        "Chattanooga",
        "Cookeville",
        "Jackson",
        "Johnson City",
        "Knoxville",
        "Memphis",
        "Murfreesboro",
        "Nashville",
        "Abilene",
        "Amarillo",
        "Austin",
        "Bay City",
        "Beaumont",
        "Belton",
        "Corpus Christi",
        "College Station",
        "Dallas/Fort Worth",
        "El Paso",
        "Galveston",
        "Houston",
        "Lubbock",
        "McAllen",
        "Midland",
        "San Antonio",
        "Sherman",
        "San Angelo",
        "Texarkana",
        "The Woodlands",
        "Tyler",
        "Victoria",
        "Waco",
        "Wichita Falls",
        "Bountiful",
        "Cedar City",
        "Logan",
        "Ogden",
        "Orem",
        "St. George",
        "Salt Lake City",
        "Park City",
        "Arlington",
        "Blacksburg",
        "Bristol",
        "Charlottesville",
        "Danville",
        "Dale City",
        "Frederickburg",
        "Lynchburg",
        "Norfolk",
        "Richmond",
        "Roanoke",
        "Winchester",
        "Burlington",
        "Rutland",
        "Bellingham",
        "Everett",
        "Kennewick",
        "Olympia",
        "Seattle",
        "Spokane",
        "Tacoma",
        "Vancouver",
        "Wenatchee",
        "Yakima",
        "Appleton",
        "Eau Claire",
        "Green Bay",
        "La Crosse",
        "Madison",
        "Milwaukee",
        "Racine",
        "Wausau",
        "Beckley",
        "Bluefield",
        "Charleston",
        "Fairmont",
        "Huntington",
        "Logan",
        "Parkersburg",
        "Wheeling",
        "Casper",
        "Cheyenne",
        "Cody",
        "Gillette",
        "Riverton",
        "Rock Springs",
        "Sheridan"
    ],

    canada_provinces: [
        "AB",
        "BC",
        "MB",
        "NB",
        "NL",
        "NS",
        "NT",
        "NU",
        "ON",
        "PE",
        "QC",
        "SK",
        "YT"
    ],

    type_of_loss: [
        "CAT 1 - Flood",
        "CAT 3 - Sewer Back Up",
        "Collapse",
        "Earthquake",
        "Fire",
        "Hail",
        "Hurricane",
        "Lightning",
        "Smoke",
        "Theft",
        "Tornado",
        "Vandalism"
    ],

    carrier_name: [
        "Allstate",
        "AMA",
        "Aviva",
        "BCAA",
        "Chubb",
        "Contractor Connection",
        "Cooperators",
        "DGIG",
        "Economical",
        "Farmers",
        "Gore",
        "Heartland",
        "Intact",
        "Liberty Mutual",
        "RSA",
        "State Farm",
        "TDMM",
        "Travelers",
        "USAA",
        "Wawanessa",
        "Other"
    ],

    type_of_request: [
        "E - Interior Only",
        "E - Exterior Only",
        "E - Separate Contents Only",
        "E - Interior & Exterior",
        "E & C - Interior & Separate Contents",
        "E & C - Exterior & Separate Contents",
        "E & C - Interior, Exterior & Separate Contents",
        "R - Interior Only",
        "R - Exterior Only",
        "R - Interior & Exterior",
        "R & C - Interior & Separate Contents",
        "R & C - Exterior & Separate Contents",
        "R & C - Interior, Exterior & Separate Contents",
        "E & R - Interior Only",
        "E & R - Exterior Only",
        "E & R - Interior & Exterior",
        "E & R & C - Interior Only & Separate Contents",
        "E & R & C - Exterior Only & Separate Contents",
        "E & R & C - Interior, Exterior & Separate Contents "
    ],

    outside_service_area: ["Yes", "No"],

    percentages: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20"
    ]
}