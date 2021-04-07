import React from "react";
import { ActivityIndicator, StyleSheet, View, ViewStyle,Text } from "react-native";
// import {CommonStyles, StyleUtil} from "app/util";
// import {Text} from "app/widget";
// import testID from "app/util/TestUtil";
import StyleUtil from "../util/StyleUtil";
interface Props {
    loading?: boolean;
    loadingText?: string;
    style?: ViewStyle;
    maskStyle?: ViewStyle;
    indicatorColor?: string;
}
interface State {
    isLoading: boolean;
    text: string;
}
export class LoadingMask extends React.Component<Props, State> {
    state: State = {
        isLoading: false,
        text: "",
    };

    showLoading = (text: string = "") =>
        this.setState({
            isLoading: true,
            text,
        });

    hideLoading = () => {
        if (this.state.isLoading) {
            this.setState({
                isLoading: false,
                text: "",
            });
        }
    };

    render() {
        const { text, isLoading } = this.state;
        const { loadingText, loading, style, maskStyle, indicatorColor = "white" } = this.props;
        if (!isLoading && !loading) {
            return null;
        }
        
        return (
            <View style={[styles.container, style]} pointerEvents="box-only">
                <View style={[styles.mask, maskStyle]}>
                    {/* {...testID("loading symbol")} */}
                    <ActivityIndicator size="large" color={indicatorColor} style={{top:StyleUtil.scale(2),left:StyleUtil.scale(2)}}/>
                    {loadingText && text ? <Text style={styles.text}>{loadingText || text}</Text> : null}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        opacity: 1,
    },
    mask: {
        // backgroundColor: CommonStyles.color.black80,
        backgroundColor:"rgba(35, 31, 32, 0.6)",
        borderRadius: StyleUtil.scale(5),
        padding: StyleUtil.scale(10),
        alignItems:"center"
    },
    text: {
        // ...CommonStyles.ctasPrimarySecondary,
        marginTop: StyleUtil.scale(10),
        textAlign: "center",
    },
});
