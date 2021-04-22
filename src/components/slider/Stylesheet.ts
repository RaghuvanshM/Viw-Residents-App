import {StyleSheet} from "react-native";

export default class StyleSheetFactory {
    static getSheet(isHorizontal: boolean, size: number, backgroundColor: string, count: number) {
        return StyleSheet.create({
            container: {
                width: !isHorizontal ? size / count : size,
                height: isHorizontal ? size / count : size,
                backgroundColor,
                borderRadius: size / 2,
            }
        })
    }
}
