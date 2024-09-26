type Profile = {
    userId: number;
    basicInformation: BasicInformation;
    foodPreferences: DietPreferences;
    planDetails: PlanDetails;
}

type BasicInformation = {
    age: number;
    height: number;
    weight: number;
    tdee?: number;
    calorieGoal?: number;
    activityLevel: string;
    fitnessGoal: string;
}

type DietPreferences = {
    allergies?: string[];
    dietaryRequirements?: string[];
    dislikes?: string[];
    budget: Budget;
}

type PlanDetails = {
    dayCount: number; // Min 1 - Max 7
    startDate: Date
}

export type {
    BasicInformation,
    DietPreferences,
    PlanDetails,
    Profile
};

export enum ActivityLevel {
    Sedentry = "Sedentry (office job)",
    LightExercise = "Light Excercise (1-2 days per week)",
    Moderate = "Moderate (3-5 days per week)",
    Heavy = "Heavy (6-7 days per week)",
    Athlete = "Athlete (2x per day)"
}

export enum Budget {
    Low = 1,
    Medium = 2,
    High = 3
};

export enum FitnessGoal {
    BuildMuscle = "Build muscle",
    LoseWeight = "Lose weight",
    MaintainWeight = "Maintain weight"
};

// Maybe add more in the future
export enum DiertaryRequirements {
    DairyFree = "Dairy free",
    Diabetes = "Diabetes",
    GlutenFree = "Gluten free",
    Keto = "Keto",
    LactoseIntolerant = "Lactose intolerance",
    LowCarb = "Low carb",
    Vegan = "Vegan",
    Vegetarian = "Vegetarian"
};