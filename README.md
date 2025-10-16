# Physics Hub - Interactive Periodic Table & Chemistry Calculators

A comprehensive web application featuring an interactive periodic table and various chemistry calculators, available in multiple languages (English, French, Arabic).

## Features

- **Interactive Periodic Table**: Visualize all 118 elements with detailed information
- **Molar Mass Calculator**: Calculate molecular weights of chemical compounds
- **Multi-language Support**: Available in English, Français, and العربية
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
physics-hub/
├── index.html                 # Main periodic table page
├── calculators.html           # Calculators overview page
├── calculator1.html          # Molar mass calculator
├── netlify.toml
├── _redirects
├── _headers
├── styles/
│   ├── main.css              # Global styles
│   ├── dashboard.css         # Periodic table styles
│   ├── calculators.css       # Calculators grid styles
│   └── calculator1.css       # Molar mass calculator styles
├── scripts/
│   ├── main.js               # Core functionality
│   ├── translations.js       # Multi-language support
│   ├── components.js         # Header/footer components
│   ├── dashboard.js          # Periodic table functionality
│   ├── calculators.js        # Calculators page logic
│   └── calculator1.js        # Molar mass calculator logic
└── netlify/
│   └── functions/
│       └── hello.js
└── assets/
    └── images/
        └── logos/
            └── logo1-640×640.jpg  # Site logo
            └── logo2-640×640.jpg
```

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Responsive Design)
- Vanilla JavaScript
- Multi-language Support System

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of chemistry concepts

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nadhem000/physics-hub.git
```

2. Navigate to the project directory:
```bash
cd physics-hub
```

3. Open `index.html` in your web browser or use a local server.

### Local Development

For the best development experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Usage

### Periodic Table
- Click on any element to view detailed information
- Use category filters to highlight specific element groups
- Available in multiple languages

### Molar Mass Calculator
- Enter chemical formulas (e.g., H2O, Ca(OH)2, C6H12O6)
- Supports hydrates (e.g., CuSO4·5H2O)
- View element-by-element breakdown
- Interactive practice exercises

## Supported Chemical Formula Formats

- Simple formulas: `H2O`, `NaCl`, `CO2`
- Parentheses: `Ca(OH)2`, `Al2(SO4)3`
- Hydrates: `CuSO4·5H2O`
- Complex organic molecules: `C6H12O6`, `CH3COOH`

## Language Support

- **English**: Complete translation
- **Français**: Complete French translation
- **العربية**: Complete Arabic translation

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**Mejri Ziad**
- GitHub: [@nadhem000](https://github.com/nadhem000)

## Acknowledgments

- Periodic table data sourced from public domain resources
- Atomic masses based on IUPAC standard atomic weights
- Inspired by educational chemistry tools and resources

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
## Troubleshooting

### Common Issues:

1. **Page not loading properly**
   - Check browser console for errors
   - Verify all file paths are correct
   - Ensure `index.html` is in the root directory

2. **Images not displaying**
   - Check image file paths
   - Verify image files are uploaded
   - Ensure file names match exactly (case-sensitive)

3. **JavaScript not working**
   - Check browser console for errors
   - Verify all script files are loaded
   - Check for mixed content warnings (HTTP/HTTPS)

4. **GitHub Pages build failure**
   - Check repository settings
   - Ensure all required files are present
   - Verify no unsupported file types

### Support

If you encounter issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Open an issue in the repository
3. Check the browser console for specific error messages