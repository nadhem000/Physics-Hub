// Molar Mass Calculator JavaScript

// Atomic masses database (simplified)
const atomicMasses = {
    'H': 1.008, 'He': 4.0026, 'Li': 6.94, 'Be': 9.0122, 'B': 10.81,
    'C': 12.011, 'N': 14.007, 'O': 15.999, 'F': 18.998, 'Ne': 20.180,
    'Na': 22.990, 'Mg': 24.305, 'Al': 26.982, 'Si': 28.085, 'P': 30.974,
    'S': 32.06, 'Cl': 35.45, 'Ar': 39.948, 'K': 39.098, 'Ca': 40.078,
    'Sc': 44.956, 'Ti': 47.867, 'V': 50.942, 'Cr': 51.996, 'Mn': 54.938,
    'Fe': 55.845, 'Co': 58.933, 'Ni': 58.693, 'Cu': 63.546, 'Zn': 65.38,
    'Ga': 69.723, 'Ge': 72.630, 'As': 74.922, 'Se': 78.971, 'Br': 79.904,
    'Kr': 83.798, 'Rb': 85.468, 'Sr': 87.62, 'Y': 88.906, 'Zr': 91.224,
    'Nb': 92.906, 'Mo': 95.95, 'Tc': 98, 'Ru': 101.07, 'Rh': 102.91,
    'Pd': 106.42, 'Ag': 107.87, 'Cd': 112.41, 'In': 114.82, 'Sn': 118.71,
    'Sb': 121.76, 'Te': 127.60, 'I': 126.90, 'Xe': 131.29, 'Cs': 132.91,
    'Ba': 137.33, 'La': 138.91, 'Ce': 140.12, 'Pr': 140.91, 'Nd': 144.24,
    'Pm': 145, 'Sm': 150.36, 'Eu': 151.96, 'Gd': 157.25, 'Tb': 158.93,
    'Dy': 162.50, 'Ho': 164.93, 'Er': 167.26, 'Tm': 168.93, 'Yb': 173.05,
    'Lu': 174.97, 'Hf': 178.49, 'Ta': 180.95, 'W': 183.84, 'Re': 186.21,
    'Os': 190.23, 'Ir': 192.22, 'Pt': 195.08, 'Au': 196.97, 'Hg': 200.59,
    'Tl': 204.38, 'Pb': 207.2, 'Bi': 208.98, 'Po': 209, 'At': 210,
    'Rn': 222, 'Fr': 223, 'Ra': 226, 'Ac': 227, 'Th': 232.04,
    'Pa': 231.04, 'U': 238.03, 'Np': 237, 'Pu': 244, 'Am': 243,
    'Cm': 247, 'Bk': 247, 'Cf': 251, 'Es': 252, 'Fm': 257,
    'Md': 258, 'No': 259, 'Lr': 266, 'Rf': 267, 'Db': 268,
    'Sg': 269, 'Bh': 270, 'Hs': 277, 'Mt': 278, 'Ds': 281,
    'Rg': 282, 'Cn': 285, 'Nh': 286, 'Fl': 289, 'Mc': 290,
    'Lv': 293, 'Ts': 294, 'Og': 294
};

// Parse chemical formula and calculate molar mass
function calculateMolarMass(formula) {
    // Remove any spaces and convert to uppercase
    formula = formula.replace(/\s/g, '').toUpperCase();
    
    // Handle hydrates (compounds with water molecules)
    let hydratePart = '';
    let hydrateMultiplier = 1;
    
    if (formula.includes('·')) {
        const parts = formula.split('·');
        formula = parts[0];
        hydratePart = parts[1];
        
        // Parse hydrate multiplier (e.g., 5 in 5H2O)
        const hydrateMatch = hydratePart.match(/^(\d*)(H\d*O)$/);
        if (hydrateMatch) {
            hydrateMultiplier = hydrateMatch[1] ? parseInt(hydrateMatch[1]) : 1;
            hydratePart = hydrateMatch[2];
        }
    }
    
    let totalMass = 0;
    let breakdown = [];
    
    // Calculate mass of main compound
    const mainMass = parseFormula(formula, breakdown);
    totalMass += mainMass;
    
    // Calculate mass of hydrate part if present
    if (hydratePart) {
        const hydrateBreakdown = [];
        const hydrateMass = parseFormula(hydratePart, hydrateBreakdown) * hydrateMultiplier;
        totalMass += hydrateMass;
        
        // Add hydrate breakdown
        hydrateBreakdown.forEach(item => {
            breakdown.push({
                element: item.element,
                count: item.count * hydrateMultiplier,
                mass: item.mass * hydrateMultiplier
            });
        });
    }
    
    return {
        totalMass: Math.round(totalMass * 1000) / 1000, // Round to 3 decimal places
        breakdown: breakdown
    };
}

// Parse a chemical formula and return its molar mass
function parseFormula(formula, breakdown) {
    let mass = 0;
    let i = 0;
    
    while (i < formula.length) {
        // Parse element symbol (starts with uppercase, may have lowercase)
        let element = formula[i];
        i++;
        
        while (i < formula.length && formula[i].match(/[a-z]/)) {
            element += formula[i];
            i++;
        }
        
        // Parse count (digits after element)
        let count = 1;
        let countStr = '';
        
        while (i < formula.length && formula[i].match(/\d/)) {
            countStr += formula[i];
            i++;
        }
        
        if (countStr) {
            count = parseInt(countStr);
        }
        
        // Handle parentheses
        if (element === '(') {
            // Find matching closing parenthesis
            let j = i;
            let depth = 1;
            while (j < formula.length && depth > 0) {
                if (formula[j] === '(') depth++;
                if (formula[j] === ')') depth--;
                j++;
            }
            
            const subFormula = formula.substring(i, j - 1);
            i = j;
            
            // Parse multiplier after parentheses
            let multiplierStr = '';
            while (i < formula.length && formula[i].match(/\d/)) {
                multiplierStr += formula[i];
                i++;
            }
            
            const multiplier = multiplierStr ? parseInt(multiplierStr) : 1;
            const subMass = parseFormula(subFormula, breakdown) * multiplier;
            mass += subMass;
        } else if (atomicMasses[element]) {
            const elementMass = atomicMasses[element] * count;
            mass += elementMass;
            
            // Add to breakdown
            breakdown.push({
                element: element,
                count: count,
                mass: elementMass
            });
        }
    }
    
    return mass;
}

// Format number with proper decimal places
function formatNumber(num) {
    return Math.round(num * 1000) / 1000;
}

// Display calculation result
function displayResult(formula, result) {
    const resultDiv = document.getElementById('resultContent');
    
    if (!result) {
        resultDiv.innerHTML = `<div class="error" data-i18n="invalid-formula">Invalid chemical formula. Please check your input.</div>`;
        return;
    }
    
    let html = `
        <h3 data-i18n="calculation-result">Calculation Result</h3>
        <div class="PT-calculator1-formula-display">${formula}</div>
        <div class="PT-calculator1-total-mass" data-i18n="molar-mass-is">Molar Mass: <strong>${result.totalMass} g/mol</strong></div>
        <div class="PT-calculator1-breakdown">
            <h4 data-i18n="element-breakdown">Element Breakdown:</h4>
            <table>
                <thead>
                    <tr>
                        <th data-i18n="element">Element</th>
                        <th data-i18n="count">Count</th>
                        <th data-i18n="atomic-mass">Atomic Mass (g/mol)</th>
                        <th data-i18n="contribution">Contribution (g/mol)</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    result.breakdown.forEach(item => {
        html += `
            <tr>
                <td>${item.element}</td>
                <td>${item.count}</td>
                <td>${formatNumber(atomicMasses[item.element])}</td>
                <td>${formatNumber(item.mass)}</td>
            </tr>
        `;
    });
    
    html += `
                </tbody>
            </table>
        </div>
    `;
    
    resultDiv.innerHTML = html;
    
    // Update translations in the result
    document.querySelectorAll('#resultContent [data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// Initialize the calculator
document.addEventListener('DOMContentLoaded', () => {
    setupLanguageSelector();
    
    // Quick calculator functionality
    const calculateBtn = document.getElementById('calculateBtn');
    const formulaInput = document.getElementById('chemicalFormula');
    
    calculateBtn.addEventListener('click', () => {
        const formula = formulaInput.value.trim();
        if (formula) {
            const result = calculateMolarMass(formula);
            displayResult(formula, result);
        }
    });
    
    formulaInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            calculateBtn.click();
        }
    });
    
    // Calculation method 1: M from m and n
    const calcMolarMassBtn = document.getElementById('calcMolarMassBtn');
    calcMolarMassBtn.addEventListener('click', () => {
        const mass = parseFloat(document.getElementById('massInput').value);
        const moles = parseFloat(document.getElementById('molesInput').value);
        
        if (mass && moles && moles !== 0) {
            const molarMass = mass / moles;
            const resultDiv = document.getElementById('calcMolarMassResult');
            resultDiv.innerHTML = `M = ${formatNumber(mass)} g ÷ ${formatNumber(moles)} mol = <strong>${formatNumber(molarMass)} g/mol</strong>`;
            resultDiv.classList.add('show');
        }
    });
    
    // Calculation method 2: m from M and n
    const calcMassBtn = document.getElementById('calcMassBtn');
    calcMassBtn.addEventListener('click', () => {
        const molarMass = parseFloat(document.getElementById('molarMassInput').value);
        const moles = parseFloat(document.getElementById('molesInput2').value);
        
        if (molarMass && moles) {
            const mass = molarMass * moles;
            const resultDiv = document.getElementById('calcMassResult');
            resultDiv.innerHTML = `m = ${formatNumber(molarMass)} g/mol × ${formatNumber(moles)} mol = <strong>${formatNumber(mass)} g</strong>`;
            resultDiv.classList.add('show');
        }
    });
    
    // Calculation method 3: n from m and M
    const calcMolesBtn = document.getElementById('calcMolesBtn');
    calcMolesBtn.addEventListener('click', () => {
        const mass = parseFloat(document.getElementById('massInput2').value);
        const molarMass = parseFloat(document.getElementById('molarMassInput2').value);
        
        if (mass && molarMass && molarMass !== 0) {
            const moles = mass / molarMass;
            const resultDiv = document.getElementById('calcMolesResult');
            resultDiv.innerHTML = `n = ${formatNumber(mass)} g ÷ ${formatNumber(molarMass)} g/mol = <strong>${formatNumber(moles)} mol</strong>`;
            resultDiv.classList.add('show');
        }
    });
    
    // Solution toggles
    document.querySelectorAll('.PT-calculator1-solution-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const solution = button.nextElementSibling;
            solution.classList.toggle('show');
            button.textContent = solution.classList.contains('show') ? 
                (translations[currentLanguage]?.["hide-solution"] || "Hide Solution") : 
                (translations[currentLanguage]?.["show-solution"] || "Show Solution");
        });
    });
});