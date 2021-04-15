import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AppComponent } from "./main";
import { AccountComponent } from "./account";
import { Text, StyleSheet, Image, ImageSourcePropType, View, TextStyle } from "react-native"
import { NavigationContainer, NavigationContainerRef, Route, StackActions } from "@react-navigation/native";

import ResourcesUtils from "../resources/ResourcesUtils";
import { RouteParamsList } from "../type/routeParams";
import { LoadingMask } from "../widget/LoadingMask";
import { ProductComponent } from "./productdetail";
import { MessageListComponent } from "./message";
import Toast, { ToastType } from "../widget/Toast";
import { SignInComponent } from "./login";
// import { SlideFromRightIOS } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets";

const MainTabStack = createBottomTabNavigator();
const MainAllStack = createStackNavigator();

interface NavigationParams {
    [key: string]: any;
}

function getTabImageNode(sourceImg: ImageSourcePropType): React.ReactNode {
    return (
        <Image source={sourceImg} style={styles.tabImg} />
    )
}

function MainRouter() {
    return (
        <MainTabStack.Navigator initialRouteName="Home"
            tabBarOptions={{ showIcon: true, showLabel: true }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    if (route.name === ScreenNames.Home) {
                        return (
                            focused ? getTabImageNode(ResourcesUtils.icons.mainTabHome.selected) : getTabImageNode(ResourcesUtils.icons.mainTabHome.normal)
                        );
                    } else if (route.name === ScreenNames.Account) {
                        return (
                            focused ? getTabImageNode(ResourcesUtils.icons.mainTabAccount.selected) : getTabImageNode(ResourcesUtils.icons.mainTabAccount.normal)
                        );
                    }
                }, tabBarLabel: ({ focused }) => {
                    return (
                        focused ? <Text style={styles.tabTxtSel}>{route.name}</Text> : <Text style={styles.tabTxt}>{route.name}</Text>
                    )
                }
            })}
        >
            <MainTabStack.Screen name={ScreenNames.Home} component={AppComponent} />
            <MainTabStack.Screen name={ScreenNames.Account} component={AccountComponent} />
        </MainTabStack.Navigator>
    );
}

const InitialRouterContainer: React.ComponentType<any> = (routeName: string) => {
    return (
        <MainAllStack.Navigator
            initialRouteName={routeName}
            headerMode="none"
            screenOptions={{
                // ...SlideFromRightIOS,
                gestureEnabled: false,
                headerShown: false,
            }}
        >
            {/* <MainAllStack.Screen name="Welcome" component={AppComponent} options={{...ModalSlideFromBottomIOS, cardStyleInterpolator: forVerticalIOS, cardStyle: {backgroundColor: "transparent"}}} />
             */}
            <MainAllStack.Screen name={ScreenNames.HomeTabs} component={MainRouter} />
            <MainAllStack.Screen name={ScreenNames.ProductDetail} component={ProductComponent} />
            <MainAllStack.Screen name={ScreenNames.MessageList} component={MessageListComponent} />
            <MainAllStack.Screen name={ScreenNames.SignInAndCreate} component={SignInComponent} />
        </MainAllStack.Navigator>
    );
};

export enum ScreenNames {
    Welcome = "Welcome",
    HomeTabs = "HomeTabs",
    Home = "Home",
    Account = "Account",
    ProductDetail = "ProductDetail",
    MessageList = "MessageList",
    SignInAndCreate = "SignInAndCreate",
}

export interface ModalContainerProps {
    onDismiss?: () => void;
    ignoreGoBack?: boolean;
    onClose?: () => void;
}

export class Navigation {
    
    private static toast: Toast;   //提示框
    private static maskCurrentWaitNum: number = 0;   //提示框
    private static mask: LoadingMask;   //等待框
    private static rootNavigator: NavigationContainerRef | null; //全局根导航

    static message = (text: string, type?: ToastType, duration: number = 2000, innerTestID?: string, callback?: () => void, backgroundStyle?: any, textStyle?: TextStyle) => {
        if (Navigation.toast) {
            Navigation.toast.show({ text, type, duration, innerTestID, callback, backgroundStyle, textStyle });
        }
    };

    //页面切换 - 无需等待提示框
    static switchWithoutWaiting<RouteName extends keyof RouteParamsList>(name: RouteName, params?: RouteParamsList[RouteName]) {
        Navigation.rootNavigator?.navigate({ name: name as string, params });
    }

    static modalV2<P extends ModalContainerProps>(ComponentType: React.ComponentType<P>, props?: Omit<P, "onDismiss">, params?: NavigationParams) {
        Navigation.push("Modal", { ...params, ComponentType, props });
    }

    ///跳转到堆栈中最顶层的页面
    static popToTop() {
        Navigation.rootNavigator?.dispatch(StackActions.popToTop());
    }

    ///推一个新的路由到堆栈
    static push(name: string, params?: NavigationParams) {
        Navigation.rootNavigator?.dispatch(StackActions.push(name, params));
    }

    ///返回堆栈中的上一个页面
    static goBack = (n = 1) => {
        if (Navigation.currentRoute?.name === "Modal") {
            Navigation.rootNavigator?.goBack();
        } else {
            const routeLength = Navigation.routes.length;
            if (routeLength <= 1) {
                return;
            }
            if (["IntermediatePage", "OrderProcessing"].includes(Navigation.routes[routeLength - 1 - n]?.name) || routeLength <= n) {
                console.error("Navigation pop too more");
                return;
            }
            Navigation.rootNavigator?.goBack();
            return;
        }
    };

    static get routes(): any[] {
        const rootNavigator = Navigation.rootNavigator;
        return rootNavigator?.getRootState()?.routes ?? [];
    }

    static get navigation(): NavigationContainerRef | null {
        return Navigation.rootNavigator;
    }

    static get currentRoute(): Route<string> | undefined {
        return Navigation.rootNavigator?.getCurrentRoute();
    }
    
    static get prevRoute(): Route<string> | undefined {
        return Navigation.routes[Navigation.routes.length - 2];
    }

    ///根页面
    static RootRouter: React.FunctionComponent<any> = () => {
        //Hock 让函数具备class的state功能
        const [currentRoute, setRouteName] = useState<string | null>(null);
        return (
            // {...testID(currentRoute ? "Root-Router-" + currentRoute : "")} 自动化测试
            // export default function testID(id: string) {
            //     return Platform.OS === "android" ? {accessible: true, accessibilityLabel: id} : {testID: id};
            // }
            <View style={{ flex: 1 }} {...{ testID: "" }}>
                <NavigationContainer
                    ref={(_: NavigationContainerRef) => {
                        Navigation.rootNavigator = _;
                    }}
                    onReady={() => {
                        // Navigation.hasReady = true;
                        // DeviceEventEmitter.emit("NAVIGATIONHASREADY");
                        // if (Navigation.currentRoute) {
                        //     setRouteName(Navigation.currentRoute.name);
                        // }
                        console.log("ready")
                    }}
                    onStateChange={state => {
                        const current = state?.routes[state.index];
                        if (current?.name === "Modal" || current?.name === "ModalV2") {
                            setRouteName((current?.params as any)?.props?.pageTestID || (current?.params as any)?.pageTestID || "UNKNOWN HOPUP");
                            return;
                        }
                        setRouteName(current?.name || "");
                    }}
                >
                    <InitialRouterContainer routeName={ScreenNames.HomeTabs} />
                </NavigationContainer>
                <LoadingMask ref={(_: LoadingMask) => (Navigation.mask = _)} />
                <Toast
                    ref={ref => {
                        if (ref) {
                            Navigation.toast = ref;
                        }
                    }}
                />
                {/* <BeetToast
                    ref={ref => {
                        if (ref) {
                            Navigation.beetToast = ref;
                        }
                    }}
                /> */}
            </View>
        );
    };

    static showLoading = () => {
        Navigation.maskCurrentWaitNum += 1
        if (Navigation.maskCurrentWaitNum > 1) { return }
        if (Navigation.mask) {
            Navigation.mask.showLoading();
        }
    };

    static showLoadingImmediately = () => {
        if (Navigation.mask) {
            Navigation.maskCurrentWaitNum += 1
        }
    };

    static hideLoading = () => {
        Navigation.maskCurrentWaitNum -= 1
        if (Navigation.maskCurrentWaitNum > 0) { return }
        if (Navigation.mask) {
            Navigation.mask.hideLoading();
        }
    };
}

const styles = StyleSheet.create({
    tabImg: {
        height: 30,
        width: 30,
        resizeMode: "contain",
        marginTop: 8
    },
    tabTxt: {
        color: "#ababab",
        fontSize: 12,
        marginTop: 8,
        textAlign: "center"
    },
    tabTxtSel: {
        color: "#000000",
        fontSize: 12,
        marginTop: 8,
        textAlign: "center"
    }
});