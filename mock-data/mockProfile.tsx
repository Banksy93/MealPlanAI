import { ActivityLevel, Budget, DiertaryRequirements, FitnessGoal, Profile } from "@/types/profile";

let mockProfile: Profile = {
    userId: 1,
    basicInformation: {
        age: 31,
        height: 175,
        weight: 75,
        tdee: 2000,
        calorieGoal: 1800,
        activityLevel: ActivityLevel.Sedentry,
        fitnessGoal: FitnessGoal.LoseWeight
    },
    foodPreferences: {
        dislikes: [ "Rhubarb", "Celery", "Betroot" ],
        dietaryRequirements: [
            DiertaryRequirements.GlutenFree,
            DiertaryRequirements.Vegetarian
        ],
        budget: Budget.Medium,
    },
    planDetails: {
        dayCount: 3,
        startDate: new Date(2024, 9, 26)
    }
}

export function GetProfile(): Profile {
    return mockProfile;
}