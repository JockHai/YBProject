
import * as React from 'react';
import 'react-native-gesture-handler';
import { View, Image, StyleSheet, Text, Alert, ViewStyle } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { OrderView } from 'YBProject/app/service/type/api';
import CommonStyles from 'YBProject/app/config/CommonStyles';
import StyleUtil from 'YBProject/app/util/StyleUtil';
import ResourcesUtils from 'YBProject/app/resources/ResourcesUtils';

export interface NodeInfo {
    title: string,
    index: number,
    current: number,
    allCount: number,
}

interface Props extends ViewStyle {
    info: NodeInfo,
}

enum Direction {
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

export class OrderStateNode extends React.PureComponent<Props> {
    render() {
        const { info, ...props } = this.props
        return (
            <View style={[props, { flexDirection: "column", alignItems: "stretch" }]} >
                <View style={styles.viewStatue}>
                    {this.renderLine(Direction.LEFT)}
                    {this.renderStatueView()}
                    {this.renderLine(Direction.RIGHT)}
                </View >
                {this.renderTitle()}
            </View>
        )
    }

    renderTitle() {
        const { info: { index,
            current, title, allCount } } = this.props
        if (index === 0) {
            if (index < (current+1) && index !== current ) {
                return (
                    <Text style={styles.textStatueNormalLeft}>{title}</Text>
                )
            }
        }else if (index === (allCount - 1)) {
            if (current === index) {
                return (
                    <Text style={styles.textStatueCheckRight}>{title}</Text>
                )
            } else {
                return (
                    <Text style={styles.textStatueNormalRight}>{title}</Text>
                )
            }
        }
        if (index === current) {
            //当前节点
            return (
                <Text style={styles.textStatueCheck}>{title}</Text>
            )
        }
        return (
            <Text style={styles.textStatueNormal}>{title}</Text>
        )
    }

    renderStatueView() {
        const { info: { index,
            current } } = this.props
        if (index === current) {
            //当前节点
            return (
                <Image style={styles.imgStatueCurrent} source={ResourcesUtils.icons.orderStateCheck} />
            )
        } else if (index < current) {
            //历史信息
            return (<View style={styles.imgStatueOld} />)
        }
        //未来节点
        return (<View style={styles.imgStatueFuture} />)
    }

    renderLine(direction: Direction) {
        const { info: { index,
            current, allCount } } = this.props
        if ((index === 0 && direction === Direction.LEFT) || (index === (allCount - 1) && direction === Direction.RIGHT)) {
            return (
                <View style={styles.linesEdge}></View>
            )
        } else if (index === current) {
            //当前节点
            if (direction === Direction.LEFT) {
                return (
                    <View style={styles.lineCheck}></View>
                )
            }
            return (
                <View style={styles.line}></View>
            )
        } else if (index < current) {
            //历史信息
            return (<View style={styles.lineCheck}></View>)
        }
        //未来节点
        return (
            <View style={styles.line}></View>
        )
    }
}

const styles = StyleSheet.create({
    viewStatue: {
        marginTop: StyleUtil.scale(6),
        flexDirection: "row",
        alignItems: "center",
        height: StyleUtil.scale(36),
    },
    linesEdge: {
        width: StyleUtil.scale(34.5),
        height: 2,
        backgroundColor: "#ffffff"
    },
    lineCheck: {
        flex: 1,
        marginLeft:-1,
        marginRight:-1,
        height: StyleUtil.scale(2),
        backgroundColor: "#89A74D"
    },
    line: {
        flex: 1,
        marginLeft:-1,
        marginRight:-1,
        height: StyleUtil.scale(2),
        backgroundColor: "#D8D8D8"
    },
    lineHidden: {
        flex: 1,
        height: StyleUtil.scale(1),
        backgroundColor: "#ffffff",
        opacity: 0
    },
    imgStatueFuture: {
        width: StyleUtil.scale(10),
        height: StyleUtil.scale(10),
        borderRadius: StyleUtil.scale(15),
        backgroundColor: "#D8D8D8"
    },
    imgStatueOld: {
        width: StyleUtil.scale(10),
        height: StyleUtil.scale(10),
        borderRadius: StyleUtil.scale(5),
        backgroundColor: "#89A74D"
    },
    imgStatueCurrent: {
        width: StyleUtil.scale(22),
        height: StyleUtil.scale(22),
        resizeMode: "cover"
    },
    textStatueCheck: {
        fontSize: StyleUtil.scale(10),
        color: "#000000",
        lineHeight: StyleUtil.scale(12),
        textAlign: "center"
    },
    textStatueNormal: {
        fontSize: StyleUtil.scale(10),
        color: "#838482",
        lineHeight: StyleUtil.scale(12),
        textAlign: "center"
    },
    textStatueNormalLeft: {
        fontSize: StyleUtil.scale(10),
        color: "#838482",
        lineHeight: StyleUtil.scale(12),
        paddingLeft: StyleUtil.scale(30.5)
    },
    textStatueCheckRight: {
        fontSize: StyleUtil.scale(10),
        color: "#000000",
        lineHeight: StyleUtil.scale(12),
        paddingRight: StyleUtil.scale(30.5),
        textAlign:"right"
    },
    textStatueNormalRight: {
        fontSize: StyleUtil.scale(10),
        color: "#838482",
        lineHeight: StyleUtil.scale(12),
        paddingRight: StyleUtil.scale(30.5),
        textAlign:"right"
    }
})