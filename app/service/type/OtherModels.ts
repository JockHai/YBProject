export interface Brand {
	action_url: string | null
	image_url: string | null
	name: string | null
}

export interface Banner {
	action_url: string | null
	descr: string | null
	image_url: string | null
	title: string | null
}

export interface TopNav {
	action_url: string | null
	image_url: string | null
	name: string | null
}

export interface OrderView {
	delivery_date: string | null
	estimated_delivery_date: string | null
	order_id: string
	order_number: string
	order_status: OrderView$OrderStatusView
}

export enum OrderView$OrderStatusView {
	CANCELLED = "CANCELLED",
	DELIVERED = "DELIVERED",
	PARTIAL_REFUND = "PARTIAL_REFUNDED",
	PROCESSING = "PROCESSING",
	REFUND = "REFUNDED",
	SHIPPED = "SHIPPED"
}

export enum ReplaceSessionRequest$OS {
	ANDROID = "ANDROID",
	IOS = "IOS"
}