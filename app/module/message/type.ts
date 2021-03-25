//https://mobile-service-v3.yummybazaar-qa.com/message-page/message

//request

//page_index,page_size

//.get

export interface State {
    messages: SearchCustomerMessageResponse$Message[]
    page_index: number
    total_page: number
    loadAll: boolean
}

export interface SearchCustomerMessageResponse$Message {
    action_url: string | null
    action_url_title: string | null
    id: string
    image_url: string | null
    read: boolean
    send_time: string
    text: string | null
    title: string | null
}

export interface SearchCustomerMessageResponse {
    messages: SearchCustomerMessageResponse$Message[]
    page_index: number
    total_page: number
}

export interface SearchCustomerMessageRequest {
    page_index: number
    page_size: number
}