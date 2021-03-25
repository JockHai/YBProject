import {ReplaceSessionRequest$OS} from './OtherModels'

export interface HomePageRequest {
    zip_code: string | null
}

export interface ReplaceSessionRequest {
	app_version: string
	cpu: string | null
	device_id: string
	firebase_messaging_token: string | null
	language: string | null
	mac_address: string | null
	manufacturer: string | null
	model_name: string | null
	os: ReplaceSessionRequest$OS
	os_version: string
	session_token: string | null
}