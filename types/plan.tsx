type Plan = {
    days: Day[];
    summary: Summary;
}

type Day = {
    date?: Date; // Populate from start date in the form
    meals: Meal[];
}

type Meal = {
    name: string;
    ingredients: string[];
    macros: Macros;
    instructions?: string[];
}

type Macros = {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
}

type Summary = {
    days: DaySummary[];
}

type DaySummary = {
    macros: Macros;
}

export type {
    Plan,
    Day,
    Meal,
    Macros,
    Summary,
    DaySummary
};