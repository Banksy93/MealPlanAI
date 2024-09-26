import { FlatList, SafeAreaView, Text } from "react-native";

type Props = {
    items: string[];
}

const List = ({items}: Props) => {
    const renderItem = ({item}: {item: string}) => <Text>{item}</Text>

    return (
        <SafeAreaView>
            <FlatList
                data={items}
                keyExtractor={(x, i) => i.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default List;