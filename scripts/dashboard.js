// Dashboard-specific functionality for the periodic table

// Element data
const elements = [
    // Period 1
    { number: 1, symbol: "H", name: "Hydrogen", mass: "1.008", category: "nonmetals", group: 1, period: 1, xpos: 1, ypos: 1 },
    { number: 2, symbol: "He", name: "Helium", mass: "4.0026", category: "noble", group: 18, period: 1, xpos: 18, ypos: 1 },
    
    // Period 2
    { number: 3, symbol: "Li", name: "Lithium", mass: "6.94", category: "alkali", group: 1, period: 2, xpos: 1, ypos: 2 },
    { number: 4, symbol: "Be", name: "Beryllium", mass: "9.0122", category: "alkaline", group: 2, period: 2, xpos: 2, ypos: 2 },
    { number: 5, symbol: "B", name: "Boron", mass: "10.81", category: "metalloids", group: 13, period: 2, xpos: 13, ypos: 2 },
    { number: 6, symbol: "C", name: "Carbon", mass: "12.011", category: "nonmetals", group: 14, period: 2, xpos: 14, ypos: 2 },
    { number: 7, symbol: "N", name: "Nitrogen", mass: "14.007", category: "nonmetals", group: 15, period: 2, xpos: 15, ypos: 2 },
    { number: 8, symbol: "O", name: "Oxygen", mass: "15.999", category: "nonmetals", group: 16, period: 2, xpos: 16, ypos: 2 },
    { number: 9, symbol: "F", name: "Fluorine", mass: "18.998", category: "halogens", group: 17, period: 2, xpos: 17, ypos: 2 },
    { number: 10, symbol: "Ne", name: "Neon", mass: "20.180", category: "noble", group: 18, period: 2, xpos: 18, ypos: 2 },
    
    // Period 3
    { number: 11, symbol: "Na", name: "Sodium", mass: "22.990", category: "alkali", group: 1, period: 3, xpos: 1, ypos: 3 },
    { number: 12, symbol: "Mg", name: "Magnesium", mass: "24.305", category: "alkaline", group: 2, period: 3, xpos: 2, ypos: 3 },
    { number: 13, symbol: "Al", name: "Aluminum", mass: "26.982", category: "post-transition", group: 13, period: 3, xpos: 13, ypos: 3 },
    { number: 14, symbol: "Si", name: "Silicon", mass: "28.085", category: "metalloids", group: 14, period: 3, xpos: 14, ypos: 3 },
    { number: 15, symbol: "P", name: "Phosphorus", mass: "30.974", category: "nonmetals", group: 15, period: 3, xpos: 15, ypos: 3 },
    { number: 16, symbol: "S", name: "Sulfur", mass: "32.06", category: "nonmetals", group: 16, period: 3, xpos: 16, ypos: 3 },
    { number: 17, symbol: "Cl", name: "Chlorine", mass: "35.45", category: "halogens", group: 17, period: 3, xpos: 17, ypos: 3 },
    { number: 18, symbol: "Ar", name: "Argon", mass: "39.948", category: "noble", group: 18, period: 3, xpos: 18, ypos: 3 },
    
    // Period 4
    { number: 19, symbol: "K", name: "Potassium", mass: "39.098", category: "alkali", group: 1, period: 4, xpos: 1, ypos: 4 },
    { number: 20, symbol: "Ca", name: "Calcium", mass: "40.078", category: "alkaline", group: 2, period: 4, xpos: 2, ypos: 4 },
    { number: 21, symbol: "Sc", name: "Scandium", mass: "44.956", category: "transition", group: 3, period: 4, xpos: 3, ypos: 4 },
    { number: 22, symbol: "Ti", name: "Titanium", mass: "47.867", category: "transition", group: 4, period: 4, xpos: 4, ypos: 4 },
    { number: 23, symbol: "V", name: "Vanadium", mass: "50.942", category: "transition", group: 5, period: 4, xpos: 5, ypos: 4 },
    { number: 24, symbol: "Cr", name: "Chromium", mass: "51.996", category: "transition", group: 6, period: 4, xpos: 6, ypos: 4 },
    { number: 25, symbol: "Mn", name: "Manganese", mass: "54.938", category: "transition", group: 7, period: 4, xpos: 7, ypos: 4 },
    { number: 26, symbol: "Fe", name: "Iron", mass: "55.845", category: "transition", group: 8, period: 4, xpos: 8, ypos: 4 },
    { number: 27, symbol: "Co", name: "Cobalt", mass: "58.933", category: "transition", group: 9, period: 4, xpos: 9, ypos: 4 },
    { number: 28, symbol: "Ni", name: "Nickel", mass: "58.693", category: "transition", group: 10, period: 4, xpos: 10, ypos: 4 },
    { number: 29, symbol: "Cu", name: "Copper", mass: "63.546", category: "transition", group: 11, period: 4, xpos: 11, ypos: 4 },
    { number: 30, symbol: "Zn", name: "Zinc", mass: "65.38", category: "transition", group: 12, period: 4, xpos: 12, ypos: 4 },
    { number: 31, symbol: "Ga", name: "Gallium", mass: "69.723", category: "post-transition", group: 13, period: 4, xpos: 13, ypos: 4 },
    { number: 32, symbol: "Ge", name: "Germanium", mass: "72.630", category: "metalloids", group: 14, period: 4, xpos: 14, ypos: 4 },
    { number: 33, symbol: "As", name: "Arsenic", mass: "74.922", category: "metalloids", group: 15, period: 4, xpos: 15, ypos: 4 },
    { number: 34, symbol: "Se", name: "Selenium", mass: "78.971", category: "nonmetals", group: 16, period: 4, xpos: 16, ypos: 4 },
    { number: 35, symbol: "Br", name: "Bromine", mass: "79.904", category: "halogens", group: 17, period: 4, xpos: 17, ypos: 4 },
    { number: 36, symbol: "Kr", name: "Krypton", mass: "83.798", category: "noble", group: 18, period: 4, xpos: 18, ypos: 4 },
    
    // Period 5
    { number: 37, symbol: "Rb", name: "Rubidium", mass: "85.468", category: "alkali", group: 1, period: 5, xpos: 1, ypos: 5 },
    { number: 38, symbol: "Sr", name: "Strontium", mass: "87.62", category: "alkaline", group: 2, period: 5, xpos: 2, ypos: 5 },
    { number: 39, symbol: "Y", name: "Yttrium", mass: "88.906", category: "transition", group: 3, period: 5, xpos: 3, ypos: 5 },
    { number: 40, symbol: "Zr", name: "Zirconium", mass: "91.224", category: "transition", group: 4, period: 5, xpos: 4, ypos: 5 },
    { number: 41, symbol: "Nb", name: "Niobium", mass: "92.906", category: "transition", group: 5, period: 5, xpos: 5, ypos: 5 },
    { number: 42, symbol: "Mo", name: "Molybdenum", mass: "95.95", category: "transition", group: 6, period: 5, xpos: 6, ypos: 5 },
    { number: 43, symbol: "Tc", name: "Technetium", mass: "98", category: "transition", group: 7, period: 5, xpos: 7, ypos: 5 },
    { number: 44, symbol: "Ru", name: "Ruthenium", mass: "101.07", category: "transition", group: 8, period: 5, xpos: 8, ypos: 5 },
    { number: 45, symbol: "Rh", name: "Rhodium", mass: "102.91", category: "transition", group: 9, period: 5, xpos: 9, ypos: 5 },
    { number: 46, symbol: "Pd", name: "Palladium", mass: "106.42", category: "transition", group: 10, period: 5, xpos: 10, ypos: 5 },
    { number: 47, symbol: "Ag", name: "Silver", mass: "107.87", category: "transition", group: 11, period: 5, xpos: 11, ypos: 5 },
    { number: 48, symbol: "Cd", name: "Cadmium", mass: "112.41", category: "transition", group: 12, period: 5, xpos: 12, ypos: 5 },
    { number: 49, symbol: "In", name: "Indium", mass: "114.82", category: "post-transition", group: 13, period: 5, xpos: 13, ypos: 5 },
    { number: 50, symbol: "Sn", name: "Tin", mass: "118.71", category: "post-transition", group: 14, period: 5, xpos: 14, ypos: 5 },
    { number: 51, symbol: "Sb", name: "Antimony", mass: "121.76", category: "metalloids", group: 15, period: 5, xpos: 15, ypos: 5 },
    { number: 52, symbol: "Te", name: "Tellurium", mass: "127.60", category: "metalloids", group: 16, period: 5, xpos: 16, ypos: 5 },
    { number: 53, symbol: "I", name: "Iodine", mass: "126.90", category: "halogens", group: 17, period: 5, xpos: 17, ypos: 5 },
    { number: 54, symbol: "Xe", name: "Xenon", mass: "131.29", category: "noble", group: 18, period: 5, xpos: 18, ypos: 5 },
    
    // Period 6
    { number: 55, symbol: "Cs", name: "Cesium", mass: "132.91", category: "alkali", group: 1, period: 6, xpos: 1, ypos: 6 },
    { number: 56, symbol: "Ba", name: "Barium", mass: "137.33", category: "alkaline", group: 2, period: 6, xpos: 2, ypos: 6 },
    { number: 57, symbol: "La", name: "Lanthanum", mass: "138.91", category: "lanthanides", group: 3, period: 6, xpos: 3, ypos: 6 },
    { number: 72, symbol: "Hf", name: "Hafnium", mass: "178.49", category: "transition", group: 4, period: 6, xpos: 4, ypos: 6 },
    { number: 73, symbol: "Ta", name: "Tantalum", mass: "180.95", category: "transition", group: 5, period: 6, xpos: 5, ypos: 6 },
    { number: 74, symbol: "W", name: "Tungsten", mass: "183.84", category: "transition", group: 6, period: 6, xpos: 6, ypos: 6 },
    { number: 75, symbol: "Re", name: "Rhenium", mass: "186.21", category: "transition", group: 7, period: 6, xpos: 7, ypos: 6 },
    { number: 76, symbol: "Os", name: "Osmium", mass: "190.23", category: "transition", group: 8, period: 6, xpos: 8, ypos: 6 },
    { number: 77, symbol: "Ir", name: "Iridium", mass: "192.22", category: "transition", group: 9, period: 6, xpos: 9, ypos: 6 },
    { number: 78, symbol: "Pt", name: "Platinum", mass: "195.08", category: "transition", group: 10, period: 6, xpos: 10, ypos: 6 },
    { number: 79, symbol: "Au", name: "Gold", mass: "196.97", category: "transition", group: 11, period: 6, xpos: 11, ypos: 6 },
    { number: 80, symbol: "Hg", name: "Mercury", mass: "200.59", category: "transition", group: 12, period: 6, xpos: 12, ypos: 6 },
    { number: 81, symbol: "Tl", name: "Thallium", mass: "204.38", category: "post-transition", group: 13, period: 6, xpos: 13, ypos: 6 },
    { number: 82, symbol: "Pb", name: "Lead", mass: "207.2", category: "post-transition", group: 14, period: 6, xpos: 14, ypos: 6 },
    { number: 83, symbol: "Bi", name: "Bismuth", mass: "208.98", category: "post-transition", group: 15, period: 6, xpos: 15, ypos: 6 },
    { number: 84, symbol: "Po", name: "Polonium", mass: "209", category: "metalloids", group: 16, period: 6, xpos: 16, ypos: 6 },
    { number: 85, symbol: "At", name: "Astatine", mass: "210", category: "halogens", group: 17, period: 6, xpos: 17, ypos: 6 },
    { number: 86, symbol: "Rn", name: "Radon", mass: "222", category: "noble", group: 18, period: 6, xpos: 18, ypos: 6 },
    
    // Period 7
    { number: 87, symbol: "Fr", name: "Francium", mass: "223", category: "alkali", group: 1, period: 7, xpos: 1, ypos: 7 },
    { number: 88, symbol: "Ra", name: "Radium", mass: "226", category: "alkaline", group: 2, period: 7, xpos: 2, ypos: 7 },
    { number: 89, symbol: "Ac", name: "Actinium", mass: "227", category: "actinides", group: 3, period: 7, xpos: 3, ypos: 7 },
    { number: 104, symbol: "Rf", name: "Rutherfordium", mass: "267", category: "transition", group: 4, period: 7, xpos: 4, ypos: 7 },
    { number: 105, symbol: "Db", name: "Dubnium", mass: "268", category: "transition", group: 5, period: 7, xpos: 5, ypos: 7 },
    { number: 106, symbol: "Sg", name: "Seaborgium", mass: "269", category: "transition", group: 6, period: 7, xpos: 6, ypos: 7 },
    { number: 107, symbol: "Bh", name: "Bohrium", mass: "270", category: "transition", group: 7, period: 7, xpos: 7, ypos: 7 },
    { number: 108, symbol: "Hs", name: "Hassium", mass: "277", category: "transition", group: 8, period: 7, xpos: 8, ypos: 7 },
    { number: 109, symbol: "Mt", name: "Meitnerium", mass: "278", category: "transition", group: 9, period: 7, xpos: 9, ypos: 7 },
    { number: 110, symbol: "Ds", name: "Darmstadtium", mass: "281", category: "transition", group: 10, period: 7, xpos: 10, ypos: 7 },
    { number: 111, symbol: "Rg", name: "Roentgenium", mass: "282", category: "transition", group: 11, period: 7, xpos: 11, ypos: 7 },
    { number: 112, symbol: "Cn", name: "Copernicium", mass: "285", category: "transition", group: 12, period: 7, xpos: 12, ypos: 7 },
    { number: 113, symbol: "Nh", name: "Nihonium", mass: "286", category: "post-transition", group: 13, period: 7, xpos: 13, ypos: 7 },
    { number: 114, symbol: "Fl", name: "Flerovium", mass: "289", category: "post-transition", group: 14, period: 7, xpos: 14, ypos: 7 },
    { number: 115, symbol: "Mc", name: "Moscovium", mass: "290", category: "post-transition", group: 15, period: 7, xpos: 15, ypos: 7 },
    { number: 116, symbol: "Lv", name: "Livermorium", mass: "293", category: "post-transition", group: 16, period: 7, xpos: 16, ypos: 7 },
    { number: 117, symbol: "Ts", name: "Tennessine", mass: "294", category: "halogens", group: 17, period: 7, xpos: 17, ypos: 7 },
    { number: 118, symbol: "Og", name: "Oganesson", mass: "294", category: "noble", group: 18, period: 7, xpos: 18, ypos: 7 },
    
    // Lanthanides
    { number: 58, symbol: "Ce", name: "Cerium", mass: "140.12", category: "lanthanides", group: 3, period: 8, xpos: 4, ypos: 9 },
    { number: 59, symbol: "Pr", name: "Praseodymium", mass: "140.91", category: "lanthanides", group: 3, period: 8, xpos: 5, ypos: 9 },
    { number: 60, symbol: "Nd", name: "Neodymium", mass: "144.24", category: "lanthanides", group: 3, period: 8, xpos: 6, ypos: 9 },
    { number: 61, symbol: "Pm", name: "Promethium", mass: "145", category: "lanthanides", group: 3, period: 8, xpos: 7, ypos: 9 },
    { number: 62, symbol: "Sm", name: "Samarium", mass: "150.36", category: "lanthanides", group: 3, period: 8, xpos: 8, ypos: 9 },
    { number: 63, symbol: "Eu", name: "Europium", mass: "151.96", category: "lanthanides", group: 3, period: 8, xpos: 9, ypos: 9 },
    { number: 64, symbol: "Gd", name: "Gadolinium", mass: "157.25", category: "lanthanides", group: 3, period: 8, xpos: 10, ypos: 9 },
    { number: 65, symbol: "Tb", name: "Terbium", mass: "158.93", category: "lanthanides", group: 3, period: 8, xpos: 11, ypos: 9 },
    { number: 66, symbol: "Dy", name: "Dysprosium", mass: "162.50", category: "lanthanides", group: 3, period: 8, xpos: 12, ypos: 9 },
    { number: 67, symbol: "Ho", name: "Holmium", mass: "164.93", category: "lanthanides", group: 3, period: 8, xpos: 13, ypos: 9 },
    { number: 68, symbol: "Er", name: "Erbium", mass: "167.26", category: "lanthanides", group: 3, period: 8, xpos: 14, ypos: 9 },
    { number: 69, symbol: "Tm", name: "Thulium", mass: "168.93", category: "lanthanides", group: 3, period: 8, xpos: 15, ypos: 9 },
    { number: 70, symbol: "Yb", name: "Ytterbium", mass: "173.05", category: "lanthanides", group: 3, period: 8, xpos: 16, ypos: 9 },
    { number: 71, symbol: "Lu", name: "Lutetium", mass: "174.97", category: "lanthanides", group: 3, period: 8, xpos: 17, ypos: 9 },
    
    // Actinides
    { number: 90, symbol: "Th", name: "Thorium", mass: "232.04", category: "actinides", group: 3, period: 9, xpos: 4, ypos: 10 },
    { number: 91, symbol: "Pa", name: "Protactinium", mass: "231.04", category: "actinides", group: 3, period: 9, xpos: 5, ypos: 10 },
    { number: 92, symbol: "U", name: "Uranium", mass: "238.03", category: "actinides", group: 3, period: 9, xpos: 6, ypos: 10 },
    { number: 93, symbol: "Np", name: "Neptunium", mass: "237", category: "actinides", group: 3, period: 9, xpos: 7, ypos: 10 },
    { number: 94, symbol: "Pu", name: "Plutonium", mass: "244", category: "actinides", group: 3, period: 9, xpos: 8, ypos: 10 },
    { number: 95, symbol: "Am", name: "Americium", mass: "243", category: "actinides", group: 3, period: 9, xpos: 9, ypos: 10 },
    { number: 96, symbol: "Cm", name: "Curium", mass: "247", category: "actinides", group: 3, period: 9, xpos: 10, ypos: 10 },
    { number: 97, symbol: "Bk", name: "Berkelium", mass: "247", category: "actinides", group: 3, period: 9, xpos: 11, ypos: 10 },
    { number: 98, symbol: "Cf", name: "Californium", mass: "251", category: "actinides", group: 3, period: 9, xpos: 12, ypos: 10 },
    { number: 99, symbol: "Es", name: "Einsteinium", mass: "252", category: "actinides", group: 3, period: 9, xpos: 13, ypos: 10 },
    { number: 100, symbol: "Fm", name: "Fermium", mass: "257", category: "actinides", group: 3, period: 9, xpos: 14, ypos: 10 },
    { number: 101, symbol: "Md", name: "Mendelevium", mass: "258", category: "actinides", group: 3, period: 9, xpos: 15, ypos: 10 },
    { number: 102, symbol: "No", name: "Nobelium", mass: "259", category: "actinides", group: 3, period: 9, xpos: 16, ypos: 10 },
    { number: 103, symbol: "Lr", name: "Lawrencium", mass: "266", category: "actinides", group: 3, period: 9, xpos: 17, ypos: 10 }
];

// Color mapping for element categories
const categoryColors = {
    "alkali": "#ff9999",
    "alkaline": "#ffde99",
    "transition": "#ffc0c0",
    "post-transition": "#cccccc",
    "metalloids": "#ccff99",
    "nonmetals": "#a0ffa0",
    "halogens": "#ffff99",
    "noble": "#c0ffff",
    "lanthanides": "#ffbfff",
    "actinides": "#ff99cc"
};

// Initialize the periodic table
function initPeriodicTable() {
    const table = document.getElementById('periodicTable');
    
    // Create a 10x18 grid
    for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 18; col++) {
            const elementDiv = document.createElement('div');
            elementDiv.className = 'PT-dashboard-empty';
            elementDiv.style.gridColumn = col;
            elementDiv.style.gridRow = row;
            
            // Check if an element exists at this position
            const element = elements.find(el => el.xpos === col && el.ypos === row);
            
            if (element) {
                elementDiv.className = 'PT-dashboard-element';
                elementDiv.style.backgroundColor = categoryColors[element.category];
                elementDiv.setAttribute('data-element', element.number);
                
                elementDiv.innerHTML = `
                    <div class="PT-dashboard-atomic-number">${element.number}</div>
                    <div class="PT-dashboard-symbol">${element.symbol}</div>
                    <div class="PT-dashboard-name">${element.name}</div>
                    <div class="PT-dashboard-atomic-mass">${element.mass}</div>
                `;
                
                // Add click event to show details
                elementDiv.addEventListener('click', () => showElementDetails(element));
            }
            
            table.appendChild(elementDiv);
        }
    }
}

// Show element details
function showElementDetails(element) {
    const detailsDiv = document.getElementById('elementDetails');
    detailsDiv.className = 'PT-dashboard-element-details active';
    detailsDiv.setAttribute('data-element', element.number);
    
    detailsDiv.innerHTML = `
        <div class="PT-dashboard-detail-header">
            <div class="PT-dashboard-detail-color" style="background-color: ${categoryColors[element.category]}"></div>
            <div>
                <h2>${element.name} (${element.symbol})</h2>
                <p><span data-i18n="atomic-number">Atomic Number</span>: ${element.number} | <span data-i18n="atomic-mass">Atomic Mass</span>: ${element.mass}</p>
            </div>
        </div>
        <div class="PT-dashboard-detail-info">
            <div class="PT-dashboard-info-item"><span class="PT-dashboard-info-label" data-i18n="category">Category</span>: ${getTranslatedCategoryName(element.category)}</div>
            <div class="PT-dashboard-info-item"><span class="PT-dashboard-info-label" data-i18n="group">Group</span>: ${element.group}</div>
            <div class="PT-dashboard-info-item"><span class="PT-dashboard-info-label" data-i18n="period">Period</span>: ${element.period}</div>
            <div class="PT-dashboard-info-item"><span class="PT-dashboard-info-label" data-i18n="electron-configuration">Electron Configuration</span>: ${getElectronConfig(element.number)}</div>
            <div class="PT-dashboard-info-item"><span class="PT-dashboard-info-label" data-i18n="phase-stp">Phase at STP</span>: ${getPhase(element.number)}</div>
            <div class="PT-dashboard-info-item"><span class="PT-dashboard-info-label" data-i18n="density">Density</span>: ${getDensity(element.number)} <span data-i18n="g-cm3">g/cm³</span></div>
            <div class="PT-dashboard-info-item"><span class="PT-dashboard-info-label" data-i18n="melting-point">Melting Point</span>: ${getMeltingPoint(element.number)}<span data-i18n="celsius">°C</span></div>
            <div class="PT-dashboard-info-item"><span class="PT-dashboard-info-label" data-i18n="boiling-point">Boiling Point</span>: ${getBoilingPoint(element.number)}<span data-i18n="celsius">°C</span></div>
        </div>
    `;
    
    // Update the labels in the details with current language
    document.querySelectorAll('#elementDetails [data-i18n]').forEach(element => {
		const key = element.getAttribute('data-i18n');
		if (translations[currentLanguage] && translations[currentLanguage][key]) {
			element.textContent = translations[currentLanguage][key];
		}
	});
    
    // Scroll to details
    detailsDiv.scrollIntoView({ behavior: 'smooth' });
}

// Helper functions for element properties
function getElectronConfig(number) {
    // Simplified electron configurations for display
    const configs = {
        1: "1s¹",
        2: "1s²",
        3: "[He] 2s¹",
        6: "[He] 2s² 2p²",
        8: "[He] 2s² 2p⁴",
        11: "[Ne] 3s¹",
        17: "[Ne] 3s² 3p⁵",
        18: "[Ne] 3s² 3p⁶",
        19: "[Ar] 4s¹",
        26: "[Ar] 3d⁶ 4s²",
        29: "[Ar] 3d¹⁰ 4s¹",
        36: "[Ar] 3d¹⁰ 4s² 4p⁶",
        54: "[Kr] 4d¹⁰ 5s² 5p⁶",
        86: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶"
    };
    return configs[number] || "Not available";
}

function getPhase(number) {
    let phase;
    if (number <= 2) phase = "gas";
    else if (number <= 10) phase = number === 6 ? "solid" : "gas";
    else if (number <= 18) phase = number === 11 || number === 12 ? "solid" : "gas";
    else if (number <= 36) phase = number === 35 ? "liquid" : "solid";
    else if (number <= 54) phase = number === 80 ? "liquid" : "solid";
    else if (number <= 86) phase = "solid";
    else phase = "solid";
    
    return translations[currentLanguage][phase] || phase;
}

function getDensity(number) {
    // Sample densities for display
    const densities = {
        1: 0.0000899,
        2: 0.0001785,
        3: 0.534,
        6: 2.267,
        8: 0.001429,
        11: 0.971,
        13: 2.7,
        26: 7.874,
        29: 8.96,
        47: 10.49,
        79: 19.32,
        82: 11.34
    };
    return densities[number] || translations[currentLanguage]["unknown"];
}

function getMeltingPoint(number) {
    // Sample melting points for display
    const meltingPoints = {
        1: -259.16,
        2: -272.2,
        3: 180.5,
        6: 3550,
        8: -218.79,
        11: 97.72,
        13: 660.32,
        26: 1538,
        29: 1084.62,
        47: 961.78,
        79: 1064.18,
        82: 327.46
    };
    return meltingPoints[number] || translations[currentLanguage]["unknown"];
}

function getBoilingPoint(number) {
    // Sample boiling points for display
    const boilingPoints = {
        1: -252.87,
        2: -268.93,
        3: 1342,
        6: 4027,
        8: -182.96,
        11: 883,
        13: 2519,
        26: 2862,
        29: 2562,
        47: 2162,
        79: 2856,
        82: 1749
    };
    return boilingPoints[number] || translations[currentLanguage]["unknown"];
}

// Filter elements by category
function setupCategoryFilters() {
    const buttons = document.querySelectorAll('.PT-dashboard-category-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            filterElements(category);
        });
    });
}

// Filter elements based on category
function filterElements(category) {
    const allElements = document.querySelectorAll('.PT-dashboard-element');
    
    allElements.forEach(element => {
        if (category === 'all') {
            element.style.opacity = '1';
            element.style.pointerEvents = 'auto';
        } else {
            const elementNumber = parseInt(element.getAttribute('data-element'));
            const elementData = elements.find(el => el.number === elementNumber);
            
            if (elementData && elementData.category === category) {
                element.style.opacity = '1';
                element.style.pointerEvents = 'auto';
            } else {
                element.style.opacity = '0.3';
                element.style.pointerEvents = 'none';
            }
        }
    });
}

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
    initPeriodicTable();
    setupCategoryFilters();
    setupLanguageSelector();
    
    // Also update element details if they're already showing
    const detailsDiv = document.getElementById('elementDetails');
    if (detailsDiv.classList.contains('active')) {
        const elementNumber = parseInt(detailsDiv.getAttribute('data-element'));
        const element = elements.find(el => el.number === elementNumber);
        if (element) {
            showElementDetails(element);
        }
    }
});