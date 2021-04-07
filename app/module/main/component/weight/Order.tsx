import * as React from 'react';
import 'react-native-gesture-handler';
import { View, StyleSheet, Text, } from 'react-native';
import { OrderView, OrderView$OrderStatusView } from 'YBProject/app/service/type/api';
import StyleUtil from 'YBProject/app/util/StyleUtil';
import CommonStyles from 'YBProject/app/config/CommonStyles';
import { OrderStateNode, NodeInfo } from './OrderStateNode';
// import OrderStateNode from './OrderStateNode';

interface Props {
    order: OrderView | null
}

export default class Order extends React.PureComponent<Props> {

    render() {
        let { order } = this.props
        if (order === null) {
            return null
        }
        let currentIndex = 0
        let etaInfo = ""
        let nodeInfos: NodeInfo[] = []
        switch (order!.order_status) {
            case OrderView$OrderStatusView.PROCESSING:
                nodeInfos = [{title:"Placed",index:0,current:1,allCount:4},
                {title:"Processing",index:1,current:1,allCount:4},
                {title:"Shipped",index:2,current:1,allCount:4},
                {title:"",index:3,current:1,allCount:4}]
                if (order.estimated_delivery_date !== null) {
                    nodeInfos[3].title = "ETA " + order.estimated_delivery_date
                }
                break
            case OrderView$OrderStatusView.SHIPPED:
                nodeInfos = [{title:"Placed",index:0,current:2,allCount:4},
                {title:"Processing",index:1,current:2,allCount:4},
                {title:"Shipped",index:2,current:2,allCount:4},
                {title:"",index:3,current:2,allCount:4}]
                if (order.estimated_delivery_date !== null) {
                    nodeInfos[3].title = "ETA " + order.estimated_delivery_date
                }
                break
            case OrderView$OrderStatusView.DELIVERED:
                nodeInfos = [{title:"Placed",index:0,current:3,allCount:4},
                {title:"Processing",index:1,current:3,allCount:4},
                {title:"Shipped",index:2,current:3,allCount:4},
                {title:"Delivered",index:3,current:3,allCount:4}]
                break
            case OrderView$OrderStatusView.REFUND:
                nodeInfos = [{title:"Placed",index:0,current:2,allCount:3},
                {title:"Processing",index:1,current:2,allCount:3},
                {title:"Refunded",index:2,current:2,allCount:3}]
                break
            case OrderView$OrderStatusView.PARTIAL_REFUND:
                nodeInfos = [{title:"Placed",index:0,current:2,allCount:3},
                {title:"Processing",index:1,current:2,allCount:3},
                {title:"Partial Refunded",index:2,current:2,allCount:3}]
                break
            case OrderView$OrderStatusView.CANCELLED:
                nodeInfos = [{title:"Placed",index:0,current:1,allCount:2},
                {title:"Cancelled",index:1,current:1,allCount:2}]
                break
        }
        let elements :Element[] = []
        nodeInfos.forEach((item)=>{
            elements.push(
                <OrderStateNode flex={1} info={item} />
            )
        })
        return (
            <View style={{ height: StyleUtil.scale(147), width: CommonStyles.width, backgroundColor: "#ffffff" }} >
                <View style={styles.container} >
                    <View style={styles.viewTop}>
                        <Text style={styles.textStatue}>Status: Processing</Text>
                        <Text style={styles.textAllOrdes}>All Orders</Text>
                    </View >
                    <Text style={styles.textNum}>Order Number: #27100212</Text>
                    <View style={styles.viewBottom}>
                        {elements}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch"
    },
    viewTop: {
        marginLeft: 12,
        marginRight: 12,
        flexDirection: "row",
        alignItems: "center",
        height: 50,
    },
    textStatue: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        flex: 1
    },
    textAllOrdes: {
        fontSize: 16,
        color: "#000",
        textDecorationLine: "underline"
    },
    textNum: {
        fontSize: 13,
        color: "#000",
        marginLeft: 14,
        lineHeight: 15
    },
    viewBottom: {
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch"
    },
    orderStatueView: {
        flex: 1
    }

})

