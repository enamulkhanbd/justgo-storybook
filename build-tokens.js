import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Make sure the build directory exists
const buildDir = path.resolve(__dirname, 'build/css');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
  console.log(`Created directory: ${buildDir}`);
}

// Process the tokens and generate CSS manually
try {
  // First, build a complete token dictionary by loading all token files
  const tokenDictionary = {};
  
  // Find all token files
  const allTokenFiles = globSync('justgo-planet/justgo/tokens/**/*.json', { cwd: __dirname });
  console.log(`Found ${allTokenFiles.length} token files for dictionary`);
  
  // Load all tokens into the dictionary
  for (const file of allTokenFiles) {
    // Skip the $themes.json file
    if (file.endsWith('$themes.json')) {
      continue;
    }
    
    const filePath = path.resolve(__dirname, file);
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const tokens = JSON.parse(fileContent);
      
      // Add tokens to the dictionary
      function addToDictionary(tokens, path = []) {
        for (const key in tokens) {
          const token = tokens[key];
          if (token && typeof token === 'object') {
            if (token.value !== undefined) {
              // This is a token with a value
              const tokenPath = [...path, key].join('.');
              tokenDictionary[tokenPath] = token.value;
            } else {
              // This is a category, process its children
              addToDictionary(token, [...path, key]);
            }
          }
        }
      }
      
      addToDictionary(tokens);
    } catch (err) {
      console.error(`Error loading token file ${file}:`, err);
    }
  }
  
  console.log(`Built token dictionary with ${Object.keys(tokenDictionary).length} tokens`);
  
  // Function to resolve token references
  function resolveTokenValue(value, maxDepth = 10) {
    if (typeof value !== 'string' || !value.includes('{')) {
      return value;
    }
    
    // Avoid infinite recursion
    if (maxDepth <= 0) {
      console.warn(`Max resolution depth reached for value: ${value}`);
      return value;
    }
    
    // Replace all references in the format {token.path}
    return value.replace(/\{([^}]+)\}/g, (match, tokenPath) => {
      // Handle special case for brand tokens
      if (tokenPath.startsWith('brand-')) {
        return resolveTokenValue(`{colors.green.${tokenPath.substring(6)}}`, maxDepth - 1);
      }
      
      const resolvedValue = tokenDictionary[tokenPath];
      if (resolvedValue === undefined) {
        console.warn(`Could not resolve token reference: ${tokenPath}`);
        return match; // Keep the original reference if not found
      }
      
      // Recursively resolve nested references
      return resolveTokenValue(resolvedValue, maxDepth - 1);
    });
  }
  
  // Read the themes file
  const themesFilePath = path.resolve(__dirname, 'justgo-planet/justgo/tokens/$themes.json');
  const themesContent = fs.readFileSync(themesFilePath, 'utf8');
  const themes = JSON.parse(themesContent);
  
  console.log(`Found ${themes.length} themes`);
  
  // Process each theme
  for (const theme of themes) {
    const themeName = theme.name;
    const themeGroup = theme.group || 'Default';
    const selectedTokenSets = theme.selectedTokenSets || {};
    
    console.log(`Processing theme: ${themeName} (${themeGroup})`);
    
    // Skip if no token sets are selected
    if (Object.keys(selectedTokenSets).length === 0) {
      console.log(`No token sets selected for theme ${themeName}, skipping...`);
      continue;
    }
    
    // Generate CSS for this theme
    let css = '';
    let tokenCount = 0;
    
    // If it's a foundation theme, use :root
    // Otherwise, create a theme-specific class
    if (themeGroup === 'Foundations') {
      css = ':root {\n';
    } else {
      css = `.theme-${themeName.toLowerCase().replace(/\s+/g, '-')} {\n`;
    }
    
    // Process each selected token set
    for (const tokenSetPath in selectedTokenSets) {
      if (selectedTokenSets[tokenSetPath] === 'enabled') {
        const tokenFilePath = path.resolve(__dirname, `justgo-planet/justgo/tokens/${tokenSetPath}.json`);
        
        try {
          if (fs.existsSync(tokenFilePath)) {
            console.log(`Processing token set: ${tokenSetPath}`);
            const fileContent = fs.readFileSync(tokenFilePath, 'utf8');
            const tokens = JSON.parse(fileContent);
            
            // Process tokens recursively
            function processTokens(tokens, prefix = []) {
              for (const key in tokens) {
                const token = tokens[key];
                if (token && typeof token === 'object') {
                  if (token.value !== undefined) {
                    // This is a token with a value
                    const name = prefix.length > 0 ? [...prefix, key].join('-') : key;
                    const resolvedValue = resolveTokenValue(token.value);
                    css += `  --${name}: ${resolvedValue};\n`;
                    tokenCount++;
                  } else {
                    // This is a category, process its children
                    processTokens(token, [...prefix, key]);
                  }
                }
              }
            }
            
            processTokens(tokens);
          } else {
            console.warn(`Token set file not found: ${tokenFilePath}`);
          }
        } catch (err) {
          console.error(`Error processing token set ${tokenSetPath}:`, err);
        }
      }
    }
    
    css += '}';
    
    console.log(`Generated ${tokenCount} CSS variables for theme ${themeName}`);
    
    // Write the CSS file
    const outputFileName = themeGroup === 'Foundations' ? 'variables.css' : `theme-${themeName.toLowerCase().replace(/\s+/g, '-')}.css`;
    fs.writeFileSync(path.resolve(buildDir, outputFileName), css);
    
    console.log(`✅ Theme ${themeName} has been built to ${outputFileName}!`);
  }
  
  console.log('✅ All design tokens have been built!');
} catch (error) {
  console.error('Error building tokens:', error);
  process.exit(1);
}