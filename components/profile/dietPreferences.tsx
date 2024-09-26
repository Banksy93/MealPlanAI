import { DietPreferences } from "@/types/profile";
import { SafeAreaView, Text, View } from "react-native";
import List from "../shared/list";

type Props = {
    dietPreferences?: DietPreferences;
}

const PlanPreferences = ({ dietPreferences }: Props) => {
    return (
        <SafeAreaView>
            <Text>Budget: {dietPreferences?.budget}</Text>
            { dietPreferences?.allergies &&
              dietPreferences.allergies?.length > 0 ?
              <View>
                <Text>Allergies</Text>
                <List items={dietPreferences.allergies}></List>
              </View>
            : null }
            { dietPreferences?.dislikes &&
              dietPreferences.dislikes?.length > 0 ?
                <View>
                    <Text>Dislikes</Text>
                    <List items={dietPreferences.dislikes}></List>
                </View>
            : null }
            { dietPreferences?.dietaryRequirements &&
              dietPreferences.dietaryRequirements?.length > 0 ?
                <View>
                    <Text>Dietary Requirements</Text>
                    <List items={dietPreferences.dietaryRequirements}></List>
                </View>
            : null }
        </SafeAreaView>
    );
};

export default PlanPreferences;