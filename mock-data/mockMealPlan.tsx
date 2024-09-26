import { Day, Plan, Summary } from "@/types/plan";

let days: Day[] = [
    {
        date: new Date(2024, 9, 25),
        meals: [
            {
                name: "Breakfast: Greek Yogurt Parfait with Berries",
                ingredients: [
                    "1 cup plain Greek yogurt (2% fat)",
                    "1/2 cup mixed berries (blueberries, strawberries, etc.)",
                    "1 tbsp chia seeds",
                    "1 tbsp honey",
                    "1/4 cup rolled oats"
                ],
                macros: { calories: 380, protein: 30, carbs: 45, fat: 10 },
                instructions: [
                    "In a bowl, layer the Greek yogurt.",
                    "Top with berries, chia seeds, honey, and oats.",
                    "Stir together or layer as a parfait."
                ]
            },
            {
                name: "Lunch: Grilled Chicken Salad with Quinoa",
                ingredients: [
                    "4 oz grilled chicken breast",
                    "1/2 cup cooked quinoa",
                    "2 cups mixed greens (spinach, arugula, etc.)",
                    "1/2 cucumber, sliced",
                    "1/2 avocado, sliced",
                    "1 tbsp olive oil",
                    "1 tbsp balsamic vinegar",
                    "Salt & pepper to taste"
                ],
                macros: { calories: 550, protein: 45, carbs: 40, fat: 22 },
                instructions: [
                    "Cook quinoa as per package instructions.",
                    "Grill the chicken breast until fully cooked.",
                    "Assemble greens, cucumber, and avocado in a bowl.",
                    "Add chicken and quinoa.",
                    "Drizzle with olive oil and balsamic vinegar, then season with salt and pepper."
                ]
            },
            {
                name: "Dinner: Turkey Stir-Fry with Brown Rice",
                ingredients: [
                    "5 oz ground turkey (93% lean)",
                    "1/2 cup cooked brown rice",
                    "1 cup broccoli florets",
                    "1/2 bell pepper, sliced",
                    "1 tbsp soy sauce (low sodium)",
                    "1 tsp sesame oil",
                    "1 clove garlic, minced"
                ],
                macros: { calories: 520, protein: 40, carbs: 50, fat: 16 },
                instructions: [
                    "In a pan, heat sesame oil and cook minced garlic until fragrant.",
                    "Add ground turkey and stir-fry until fully cooked.",
                    "Add broccoli and bell pepper, cooking until tender.",
                    "Stir in soy sauce and serve over cooked brown rice."
                ]
            },
            {
                name: "Snack: Cottage Cheese with Pineapple",
                ingredients: [
                    "1/2 cup low-fat cottage cheese",
                    "1/2 cup pineapple chunks (fresh or canned, in juice)"
                ],
                macros: { calories: 160, protein: 16, carbs: 20, fat: 2 },
                instructions: []
            }
        ]
    },
    {
        date: new Date(2024, 9, 26),
        meals: [
            {
                name: "Breakfast: Protein Smoothie",
                ingredients: [
                    "1 scoop whey protein powder (vanilla)",
                    "1/2 banana",
                    "1/2 cup unsweetened almond milk (or any preferred milk alternative)",
                    "1 tbsp chia seeds",
                    "1/4 cup oats",
                    "Ice cubes"
                ],
                macros: { calories: 350, protein: 30, carbs: 40, fat: 10 },
                instructions: [
                    "In a blender, combine all ingredients.",
                    "Blend until smooth.",
                    "Add more milk if needed for desired consistency."
                ]
            },
            {
                name: "Lunch: Tuna Salad Lettuce Wraps",
                ingredients: [
                    "1 can tuna in water, drained",
                    "1 tbsp mayonnaise (light)",
                    "1 tbsp Greek yogurt",
                    "1/4 cucumber, diced",
                    "1 tbsp capers",
                    "4-6 large lettuce leaves (for wrapping)",
                    "Salt and pepper to taste"
                ],
                macros: { calories: 400, protein: 45, carbs: 10, fat: 20 },
                instructions: [
                    "In a bowl, mix tuna, mayonnaise, yogurt, cucumber, and capers.",
                    "Season with salt and pepper.",
                    "Serve the tuna mixture in lettuce leaves, wrapping like tacos."
                ]
            },
            {
                name: "Dinner: Baked Salmon with Sweet Potato and Asparagus",
                ingredients: [
                    "4 oz salmon fillet",
                    "1 small sweet potato (150g), sliced",
                    "1 cup asparagus spears",
                    "1 tbsp olive oil",
                    "Salt, pepper, and paprika"
                ],
                macros: { calories: 530, protein: 38, carbs: 45, fat: 20 },
                instructions: [
                    "Preheat oven to 400°F (200°C).",
                    "Place salmon, sweet potato slices, and asparagus on a baking sheet.",
                    "Drizzle with olive oil, season with salt, pepper, and paprika.",
                    "Bake for 20-25 minutes until salmon is cooked through and vegetables are tender."
                ]
            },
            {
                name: "Snack: Hummus with Carrot Sticks",
                ingredients: [
                    "1/4 cup hummus",
                    "1 cup carrot sticks"
                ],
                macros: { calories: 120, protein: 5, carbs: 20, fat: 4 },
                instructions: []
            }
        ]
    },
    {
        date: new Date(2024, 9, 27),
        meals: [
            {
                name: "Breakfast: Oatmeal with Protein Powder and Berries",
                ingredients: [
                    "1/2 cup rolled oats",
                    "1 scoop vanilla protein powder",
                    "1/2 cup mixed berries",
                    "1 tsp cinnamon",
                    "1 cup unsweetened almond milk (or milk of choice)"
                ],
                macros: { calories: 380, protein: 32, carbs: 45, fat: 8 },
                instructions: [
                    "In a pot, cook oats with almond milk over medium heat until thickened.",
                    "Stir in protein powder and cinnamon.",
                    "Top with mixed berries."
                ]
            },
            {
                name: "Lunch: Shrimp and Avocado Salad",
                ingredients: [
                    "4 oz shrimp (cooked)",
                    "1/2 avocado, diced",
                    "2 cups mixed greens",
                    "1/2 cup cherry tomatoes, halved",
                    "1 tbsp olive oil",
                    "1 tbsp lemon juice",
                    "Salt and pepper"
                ],
                macros: { calories: 450, protein: 40, carbs: 20, fat: 25 },
                instructions: [
                    "Toss mixed greens, shrimp, avocado, and cherry tomatoes in a bowl.",
                    "Drizzle with olive oil and lemon juice.",
                    "Season with salt and pepper."
                ]
            },
            {
                name: "Dinner: Beef Stir-Fry with Vegetables",
                ingredients: [
                    "4 oz lean beef strips (sirloin or flank)",
                    "1 cup broccoli florets",
                    "1/2 bell pepper, sliced",
                    "1/2 onion, sliced",
                    "1 tbsp soy sauce (low sodium)",
                    "1 tsp sesame oil",
                    "1/2 cup cooked brown rice"
                ],
                macros: { calories: 520, protein: 40, carbs: 50, fat: 16 },
                instructions: [
                    "Heat sesame oil in a pan.",
                    "Stir-fry beef strips until browned, then remove and set aside.",
                    "Stir-fry vegetables in the same pan until tender.",
                    "Add beef back to the pan, stir in soy sauce, and serve over brown rice."
                ]
            },
            {
                name: "Snack: Greek Yogurt with Chia Seeds",
                ingredients: [
                    "1/2 cup plain Greek yogurt (2% fat)",
                    "1 tbsp chia seeds",
                    "1 tsp honey"
                ],
                macros: { calories: 120, protein: 10, carbs: 15, fat: 3 },
                instructions: []
            }
        ]
    }
];

let summary: Summary = {
    days: [
        { macros: { calories: 1830, protein: 131, carbs: 155, fat: 58 } },
        { macros: { calories: 1850, protein: 118, carbs: 115, fat: 80 } },
        { macros: { calories: 1850, protein: 122, carbs: 135, fat: 66 } },
    ]
};

let plan: Plan = {
    days,
    summary
};

export function GetMealPlan(): Plan {
    return plan;
}