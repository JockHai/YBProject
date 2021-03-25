import hmacSHA256 from "crypto-js/hmac-sha256";
import Base64 from "crypto-js/enc-base64";
import Utf8 from "crypto-js/enc-utf8";


export const createHmac = (message: string, key: string) => {
    return Base64.stringify(hmacSHA256(message, Base64.parse(key)));
};

export const utf8Encoder = (message:string) => {
    return Utf8.stringify(message)
}