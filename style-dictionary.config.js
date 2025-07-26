const { registerTransforms } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary');

// Register the Tokens Studio transforms
registerTransforms(StyleDictionary);

module.exports = {
    // The source path should point to the JSON files in your submodule
    source: ['tokens/**/*.json'], // Adjust this path to match your submodule's structure

    platforms: {
        css: {
            transformGroup: 'tokens-studio',
            buildPath: 'build/css/',
            files: [
                {
                    destination: 'variables.css',
                    format: 'css/variables',
                },
            ],
        },
    },
};