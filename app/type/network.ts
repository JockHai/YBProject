import {APIException as BaseAPIException, NetworkConnectionException as BaseNetworkConnectionException} from "core-native";

export interface Pagination {
    pageSize: number;
    total: number;
    pageIndex: number;
    totalPage: number;
}

export class Pagination implements Pagination {
    constructor(pageIndex: number = 0, pageSize: number = 10) {
        this.total = 0;
        this.totalPage = 0;
        this.pageIndex = pageIndex;
        this.pageSize = pageSize;
    }

    get page_index() {
        return this.pageIndex;
    }

    set page_index(pageIndex: number) {
        this.pageIndex = pageIndex;
    }

    get page_size() {
        return this.pageSize;
    }

    set page_size(limit: number) {
        this.pageSize = limit;
    }

    get total_page() {
        return this.totalPage;
    }

    set total_page(totalPage: number) {
        this.totalPage = totalPage;
    }
}

export class APIException extends BaseAPIException {
    action: string;
    elapsedTime: number;
    constructor(action: string, elapsedTime: number, message: string, statusCode: number, requestURL: string, responseData: any, errorId: string | null, errorCode: string | null) {
        super(message, statusCode, requestURL, responseData, errorId, errorCode);
        this.action = action;
        this.elapsedTime = elapsedTime;
    }
}

export class NetworkConnectionException extends BaseNetworkConnectionException {
    action: string;
    elapsedTime: number;
    constructor(action: string, elapsedTime: number, message: string, requestURL: string, errorObject: any) {
        super(message, requestURL, errorObject ? JSON.stringify(errorObject) : "");
        this.action = action;
        this.elapsedTime = elapsedTime;
    }
}
