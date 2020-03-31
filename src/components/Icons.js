
import React, { useState } from "react";
import { Text, Image, View } from "react-native";
import colors from "../config/colors";

const iconMap = {
    home: require('../assets/images/tabBar/home.png'),
    profile: require('../assets/images/tabBar/profile.png'),
    history: require('../assets/images/tabBar/history.png'),
    plus: require('../assets/images/tabBar/lustre.png')
};

const Icon = ({ name, color, style, ...props }) => {
    const icon = iconMap[name];
    return <Image source={icon} style={{ tintColor: color }} />;
};

export default Icon;