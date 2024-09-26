import BasicUserInformation from "@/components/profile/basicInformation";
import PlanPreferences from "@/components/profile/dietPreferences";
import { GetProfile } from "@/mock-data/mockProfile";
import { Profile } from "@/types/profile";
import { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";

export default function UserProfile() {
    const [profile, setProfile] = useState<Profile>();

    useEffect(() => {
        async function getProfile() {
            var profile = GetProfile();
            setProfile(profile);
        }

        getProfile();
    }, []);

    return (
        <SafeAreaView>
            <BasicUserInformation basicInformation={profile?.basicInformation} />
            <PlanPreferences dietPreferences={profile?.foodPreferences} />
        </SafeAreaView>
    )
}