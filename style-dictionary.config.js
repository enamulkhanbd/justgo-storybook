import { registerTransforms } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

// Register the Tokens Studio transforms
registerTransforms(StyleDictionary);

export default {
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