import React, { Component } from "react";
import { StyleSheet, Animated, View, TextStyle, ViewStyle, Text } from "react-native";
// import { StyleSheet, View, Animated, Text, ViewStyle, TextStyle, Image } from "react-native";
// import {CommonStyles, StyleUtil, Resources} from "app/util";
// import testID from "app/util/TestUtil";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import CommonStyles from "../config/CommonStyles";
import StyleUtil from "../util/StyleUtil";

export const DURATION = {
    LENGTH_SHORT: 2000,
    FOREVER: 0,
};

export enum ToastType {
    ERROR = "ERROR",
    NORMAL = "NORMAL",
    SUCCESS = "SUCCESS",
    SLIDE = "SLIDE",
}
export interface ShowToastOptions {
    text: string;
    type?: ToastType;
    duration?: number;
    textStyle?: TextStyle;
    backgroundStyle?: ViewStyle;
    innerTestID?: string;
    callback?: () => void;
}
interface Props {
    fadeInDuration: number;
    fadeOutDuration: number;
    opacity: number;
    defaultCloseDelay?: number;
}

interface State {
    isShow: boolean;
    text: string;
    opacityValue: Animated.Value;
    type: ToastType;
    textStyle?: TextStyle;
    backgroundStyle?: ViewStyle;
    innerTestID?: string;
}

export default class Toast extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isShow: false,
            text: "",
            opacityValue: new Animated.Value(props.opacity),
            type: ToastType.NORMAL,
        };
    }

    isShow: boolean = false;
    duration: number = DURATION.LENGTH_SHORT;
    callback?: () => void;
    animation?: Animated.CompositeAnimation;
    timer?: NodeJS.Timeout;

    static defaultProps = {
        position: "bottom",
        fadeInDuration: 300,
        fadeOutDuration: 300,
        opacity: 1,
    };

    show = ({ text, type = ToastType.NORMAL, duration, textStyle, backgroundStyle, callback, innerTestID }: ShowToastOptions) => {
        this.duration = typeof duration === "number" ? duration : DURATION.LENGTH_SHORT;
        this.callback = callback;
        this.setState({
            isShow: true,
            text,
            type,
            textStyle,
            backgroundStyle,
            innerTestID,
        });

        this.animation = Animated.timing(this.state.opacityValue, {
            toValue: this.props.opacity,
            duration: this.props.fadeInDuration,
            useNativeDriver: false,
        });
        this.animation.start(() => {
            this.isShow = true;
            if (duration !== DURATION.FOREVER) {
                this.close();
            }
        });
    };

    close(duration?: number) {
        let delay = typeof duration === "undefined" ? this.duration : duration;

        if (delay === DURATION.FOREVER) {
            delay = this.props.defaultCloseDelay || 250;
        }

        if (!this.isShow && !this.state.isShow) {
            return;
        }
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            this.animation = Animated.timing(this.state.opacityValue, {
                toValue: 0.0,
                duration: this.props.fadeOutDuration,
                useNativeDriver: false,
            });
            this.animation.start(() => {
                this.setState({
                    isShow: false,
                });
                this.isShow = false;
                if (typeof this.callback === "function") {
                    this.callback();
                }
            });
        }, delay);
    }

    componentWillUnmount() {
        if (this.animation) {
            this.animation.stop();
        }
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    render() {
        const { type, textStyle, backgroundStyle, innerTestID } = this.state;
        const isError = type === ToastType.ERROR;
        const isSuccess = type === ToastType.SUCCESS;
        const isSlide = type === ToastType.ERROR || type === ToastType.SUCCESS || type === ToastType.SLIDE;
        const positionY = isSlide ? CommonStyles.headerHeight + (this.context?.top ?? 0) - StyleUtil.scale(9) : CommonStyles.height / 2;
        // const {exclamation, check} = Resources.icons;
        const element = (
            <Animated.View
                pointerEvents="none"
                style={[
                    styles.container,
                    styles.content,
                    {
                        opacity: this.state.opacityValue,
                        justifyContent: "center",
                    },
                    isSlide
                        ? {
                            width: CommonStyles.width - StyleUtil.scale(36),
                            top: Animated.multiply(this.state.opacityValue, positionY),
                            left: StyleUtil.scale(18),
                            right: StyleUtil.scale(18),
                            // width: CommonStyles.width - StyleUtil.scale(36),
                        }
                        : {
                            position: "relative",
                        },
                    isError && {
                        backgroundColor: CommonStyles.color.redAccent,
                    },
                    isSuccess && {
                        position: "relative",
                        width: "auto",
                        left: "auto",
                        right: "auto",
                        backgroundColor: CommonStyles.color.greenAccent,
                        paddingHorizontal: StyleUtil.scale(14),
                    },
                    !isSuccess && backgroundStyle,
                ]}
            >
                {/* {isError && <Image style={styles.iconStyle} resizeMode="contain" source={exclamation.warning} />}
                {isSuccess && <Image style={styles.iconStyle} resizeMode="contain" source={check.success} />} */}
                {React.isValidElement(this.state.text) ? (
                    this.state.text
                ) : (
                    <Text >
                        <Text style={[styles.text, textStyle]} textBreakStrategy={"simple"}>
                            {this.state.text}
                        </Text>
                    </Text>
                )}
            </Animated.View>
        );
        if (!this.state.isShow) {
            return null;
        }
        if (isSuccess) {
            return <View style={[styles.container, backgroundStyle, { justifyContent: "flex-start" }]}>{element}</View>;
        }
        if (isSlide) {
            return element;
        }
        return <View style={[styles.container, { height: "100%" }]}>{element}</View>;
    }
}

Toast.contextType = SafeAreaInsetsContext;
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        elevation: 999,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10000,
    },
    content: {
        marginHorizontal: CommonStyles.padding,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: 5,
        padding: StyleUtil.scale(17),
    },
    text: {
        ...CommonStyles.body2,
        color: CommonStyles.color.brightWhite,
        textAlign: "center",
    },
    iconStyle: {
        width: StyleUtil.scale(16),
        height: StyleUtil.scale(16),
        marginRight: StyleUtil.scale(7),
    },
});
