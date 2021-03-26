//https://mobile-service-v3.yummybazaar-qa.com/message-page/message

import { SearchCustomerMessageResponse$Message } from "YBProject/app/service/type/api";

//request

//page_index,page_size

//.get

export interface State {
    messages: SearchCustomerMessageResponse$Message[]
    page_index: number
    total_page: number
    loadAll: boolean
}
