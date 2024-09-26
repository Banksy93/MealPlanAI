import { BasicInformation } from "@/types/profile";
import { SafeAreaView } from "react-native";
import { Text } from "react-native-paper";

type Props = {
    basicInformation?: BasicInformation
}

const BasicUserInformation = ({ basicInformation }: Props) => {
    return (
        <SafeAreaView>
            <Text>Age: {basicInformation?.age}</Text>
            <Text>Height: {basicInformation?.weight}kg</Text>
            <Text>Weight: {basicInformation?.height}cm</Text>
            <Text>TDEE: {basicInformation?.tdee}</Text>
            <Text>Calorie Goal: {basicInformation?.calorieGoal}</Text>
            <Text>Activity Level: {basicInformation?.activityLevel}</Text>
            <Text>Fitness Goal: {basicInformation?.fitnessGoal}</Text>
        </SafeAreaView>
    )
}

export default BasicUserInformation;