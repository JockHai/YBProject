import { Device } from "../util/Device";

export interface Config {
    mapboxKey: string;
    mapStyleUrl: string;
    apiHost: string;
    iOSAPIClientId: string;
    iOSAPISecretKey: string;
    androidAPIClientId: string;
    androidAPISecretKey: string;
    instabugToken: string;
    logServerURL: string;
    merchantIdentifier: string;
    stripeDefaultPublishableKey: string;
    boUrl: string;
    supportEmail: string;
    supportPhone: string;
    env: "QA" | "PROD";
    timeout: number;
    locationLimitation?: string[];
    showEstimate: boolean;
    isBetaOrProduct: boolean;
    isContactLess: boolean;
    isOpenPayment: boolean;
    greenDeliveryMaxTime: number;
    yellowDeliveryMaxTime: number;
    isSupportReservation: boolean;
    isSupportGooglePay: boolean;
    googlePayEnv: "TEST" | "PROD";
}

export const appConfig = {
    apiHost: "mobile-service-v3.yummybazaar-qa.com",
    iOSAPIClientId: "3f7fd58cc7c342e786d4d75eed377aeb",
    iOSAPISecretKey: "AvLZNOVvwv1T9jcXhzkYBg==",
    androidAPIClientId: "47ae34988dc842da9bfc7a40b74a9a00",
    androidAPISecretKey: "Fa/Fei7mtrDM10I2/dlY6Q==",
    env: Device.applicationName().search("Qa") > -1 ? "QA" : "PROD",
    timeout: 30,
} as Config

