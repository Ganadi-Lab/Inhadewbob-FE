import { StyleSheet, View } from "react-native";
import React from "react";
import MealItem from "./MealItem";


export default function MealList({ dailyMealList }) {
    return (
        <View>
            {dailyMealList && dailyMealList.map((item) => {
                return (
                    <MealItem key={item.id} item={item} />
                );
            })}
        </View>
    );
}