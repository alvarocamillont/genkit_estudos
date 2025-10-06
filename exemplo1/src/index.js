"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeGeneratorFlow = void 0;
const google_genai_1 = require("@genkit-ai/google-genai");
const genkit_1 = require("genkit");
// Initialize Genkit with the Google AI plugin
const ai = (0, genkit_1.genkit)({
    plugins: [(0, google_genai_1.googleAI)()],
    model: google_genai_1.googleAI.model('gemini-2.5-flash', {
        temperature: 0.8,
    }),
});
// Define input schema
const RecipeInputSchema = genkit_1.z.object({
    ingredient: genkit_1.z.string().describe('Main ingredient or cuisine type'),
    dietaryRestrictions: genkit_1.z.string().optional().describe('Any dietary restrictions'),
});
// Define output schema
const RecipeSchema = genkit_1.z.object({
    title: genkit_1.z.string(),
    description: genkit_1.z.string(),
    prepTime: genkit_1.z.string(),
    cookTime: genkit_1.z.string(),
    servings: genkit_1.z.number(),
    ingredients: genkit_1.z.array(genkit_1.z.string()),
    instructions: genkit_1.z.array(genkit_1.z.string()),
    tips: genkit_1.z.array(genkit_1.z.string()).optional(),
});
// Define a recipe generator flow
exports.recipeGeneratorFlow = ai.defineFlow({
    name: 'recipeGeneratorFlow',
    inputSchema: RecipeInputSchema,
    outputSchema: RecipeSchema,
}, async (input) => {
    // Create a prompt based on the input
    const prompt = `Create a recipe with the following requirements:
      Main ingredient: ${input.ingredient}
      Dietary restrictions: ${input.dietaryRestrictions || 'none'}`;
    // Generate structured recipe data using the same schema
    const { output } = await ai.generate({
        prompt,
        output: { schema: RecipeSchema },
    });
    if (!output)
        throw new Error('Failed to generate recipe');
    return output;
});
// Run the flow
async function main() {
    const recipe = await (0, exports.recipeGeneratorFlow)({
        ingredient: 'avocado',
        dietaryRestrictions: 'vegetarian',
    });
    console.log(recipe);
}
main().catch(console.error);
//# sourceMappingURL=index.js.map