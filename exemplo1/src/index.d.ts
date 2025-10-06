import { z } from 'genkit';
export declare const recipeGeneratorFlow: import("genkit").Action<z.ZodObject<{
    ingredient: z.ZodString;
    dietaryRestrictions: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    ingredient: string;
    dietaryRestrictions?: string | undefined;
}, {
    ingredient: string;
    dietaryRestrictions?: string | undefined;
}>, z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    prepTime: z.ZodString;
    cookTime: z.ZodString;
    servings: z.ZodNumber;
    ingredients: z.ZodArray<z.ZodString, "many">;
    instructions: z.ZodArray<z.ZodString, "many">;
    tips: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    prepTime: string;
    cookTime: string;
    servings: number;
    ingredients: string[];
    instructions: string[];
    tips?: string[] | undefined;
}, {
    title: string;
    description: string;
    prepTime: string;
    cookTime: string;
    servings: number;
    ingredients: string[];
    instructions: string[];
    tips?: string[] | undefined;
}>, z.ZodTypeAny>;
//# sourceMappingURL=index.d.ts.map