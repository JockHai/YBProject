#!/usr/bin/env xcrun --sdk macosx swift
import Foundation

public let jsonInfoUrlPath = "https://mobile-service-v3.yummybazaar-qa.com/_sys/api" //JSON-Url

public let folderBasePath = "/Users/admin/Desktop/react_native_project/YBProject/app/service/"
///Users/admin/Desktop
public let folderAPIPath = folderBasePath + "api/"

public let localJSONFilePath = folderBasePath + "script/yb-mobile.json"

public let localTypePath = folderBasePath + "type/api.ts"

public let NetworkServicePath = "../NetworkService"

public let APIPath = "../type/api"


class ErrorInfo : Codable {
    var error_code: String?
    var local_message: String?
}

class InterfaceInfo : Codable {
    var types: [InterfaceType]?
    var services: [ServicesInfo]?
}

class InterfaceType : Codable {
    var name: String?
    var type: String?
    var definition: String?
}

class ServicesInfo : Codable {
    var name: String?
    var operations : [operationsInfo]?
}

class operationsInfo : Codable {
    var name: String?
    var method: String?
    var path: String?
    var pathParams : [pathParamsInfo]?
    var responseType: String?
    var requestType: String?
}

class pathParamsInfo : Codable {
    var name : String?
    var type : String?
}

class YBpathParams:pathParamsInfo {
    var steam:String?
}

//创建一个方法，用来创建文本文件
func writeText(_ str:String,_ filepath:String) {
    if !FileManager.default.fileExists(atPath: filepath) {
        print("The file path doesn't exist! - \(filepath)")
        do {
            let fm = FileManager.default
            fm.createFile(atPath: filepath, contents: nil, attributes: nil)
            print("create file - \(filepath)")
        }
        catch let error as NSError {
            print("error")
        }
    }
    //创建一个字符串对象，表示文档目录下的一个文本文件
    do{
        //将文本文件写入到指定位置的文本文件，并且使用utf-8的编码方式
        try str.write(toFile: filepath, atomically: true, encoding: .utf8)
        print("Successfully write data to file. - \(filepath)\n")
    }catch{
        print("Failed to write data!\n")
    }
}

func readLocalData(_ filePath:String) -> String? {
    //读取本地的文件
    guard let result = try? String(contentsOfFile: filePath, encoding: String.Encoding.utf8) else {
        return nil
    }
    return result
}

//信号器 用于阻塞线程，避免数据未完成请求
var semaphore = DispatchSemaphore(value: 0)

func getInfo() {
    // 获取远程JSON信息
    if let url = URL(string: jsonInfoUrlPath) {
        //创建请求对象
        let request = URLRequest(url: url)
        let session = URLSession.shared
        let dataTask = session.dataTask(with: request,completionHandler: {(data, response, error) -> Void in
            if error != nil {
                print("Get JSONInfos Error : \(error.debugDescription)!\n")
                semaphore.signal()
                return
            }
            if data == nil || response == nil {
                print("Get Empty Info!\n")
                semaphore.signal()
                return
            }
            if let jsonString = String(data: data!, encoding: String.Encoding.utf8) {
                // print("Get remote JSON data successfully.\n")
                // if let localJsonString = readLocalData(localJSONFilePath),localJsonString == jsonString {
                //     print("Compare local files no changes!\n")
                //     semaphore.signal()
                //     return
                // }
                writeText(jsonString,localJSONFilePath)
                if let errorInfo = parseJSON(jsonString, ErrorInfo.self) {
                    if errorInfo.error_code == nil && errorInfo.local_message == nil {
                        print("Read to parseJSON. \n")
                        parseJ(jsonString)
                    }else{
                        print("Something was wrong!\n")
                        print(errorInfo.error_code ?? "- nil -")
                        print(errorInfo.local_message ?? "- nil -")
                        semaphore.signal()
                    }
                    return
                }else{
                    parseJ(jsonString)
                }
            }
        }) as URLSessionTask
        //使用resume方法启动任务
        print("Begin task.\n")
        dataTask.resume()
        _ = semaphore.wait(timeout: DispatchTime.distantFuture)
        print("End task.\n")
    }
}

func parseJ(_ jsonString:String){
    var classInfos = "import Alamofire\nimport UIKit\nimport Foundation\n\n"
    var businessInfos = "import Alamofire\nimport Foundation\n\n"
    var apiInfos = "/// YummyBazaar Interface Models\n\n"
    
    if let interfaceInfo = parseJSON(jsonString, InterfaceInfo.self) {
        let dics = getParametersDic(interfaceInfo)
        apiInfos += "\n/// Response Models Infos\n\n" + dics.responseModels
        apiInfos += "\n\n/// Request Models Infos\n\n" + dics.resquestModels
        apiInfos += "\n\n/// Others Models Infos\n\n" + dics.otherModels
        if let services = interfaceInfo.services {
            setWebServiceInfos(services)
        }
        writeText(apiInfos,localTypePath)
        print("Decode successfully!\n")
    }else{
        print("Decode error!\n")
    }
    semaphore.signal()
}

/// - Parameter interfaceInfo: API-TypeInfos
func getParametersDic(_ interfaceInfo:InterfaceInfo) -> (resquestModels:String,responseModels:String,otherModels:String) {
    var otherModels:String = ""
    var resquestModels:String = ""
    var responseModels:String = ""
    if let tps = interfaceInfo.types,let ser = interfaceInfo.services {
        var types = tps
        types.sort {
            ($0.name ?? "") < ($1.name ?? "")
        }
        types.sort {
            ($0.type ?? "") < ($1.type ?? "")
        }
        var services = ser
        services.sort {
            ($0.name ?? "") < ($1.name ?? "")
        }
        for type in types {
            var typeNum = 0
            for serviceInfo in services {
                if let operationsAll = serviceInfo.operations {
                    for info in operationsAll {
                        if !(info.requestType == nil || info.requestType! == "null" || info.requestType! == "" || info.requestType! == "void") {
                            if (type.name ?? "") == info.requestType {
                                typeNum = 1
                                break
                            }
                        }
                        if !(info.responseType == nil || info.responseType! == "null" || info.responseType! == "" || info.responseType! == "void") {
                            if (type.name ?? "") == info.responseType {
                                typeNum = 2
                                break
                            }
                        }
                    }
                }
            }
            if typeNum == 1 {
                resquestModels += getTypeInfo(type) + "\n"
            }else if typeNum == 2 {
                responseModels += getTypeInfo(type) + "\n"
            }else{
                otherModels += getTypeInfo(type) + "\n"
            }
        }
    }
    return (resquestModels,responseModels,otherModels)
}

/// - Parameter services: API-WebService
func setWebServiceInfos(_ ser:[ServicesInfo]) {
    var services = ser
    services.sort {
        ($0.name ?? "") < ($1.name ?? "")
    }
    services.forEach {
        if let infoOP = $0.operations,let servicesName = $0.name {
            var wirteContent = "export class \(servicesName) {\n\n"
            var importInfos = "import {\n"
            infoOP.forEach {
                if let responseType = $0.responseType,responseType != "void" && !importInfos.contains(responseType) {
                    importInfos += "\t" + responseType + ",\n"
                }
                if let requestType = $0.requestType,requestType != "void" && !importInfos.contains(requestType) {
                    importInfos += "\t" + requestType + ",\n"
                }
                if let method = $0.method,let name = $0.name,let path = $0.path {
                    wirteContent += "\tstatic \(name)("
                    var pathPars = ""
                    var requestPars = ""
                    var requestInfo = "null"
                    if let pathParams = $0.pathParams {
                        pathParams.forEach {
                            if let pName = $0.name,let pType = $0.type {
                                pathPars += (pName + ": " + pType + ",")
                                requestPars += " \(pName),"
                            }
                        }
                        if let char = pathPars.last,char == "," {
                            pathPars = (pathPars as NSString).substring(to: pathPars.count-1)//.substring(0,pathPars.count-1)
                        }
                        if let char = requestPars.last,char == "," {
                            requestPars = (requestPars as NSString).substring(to: requestPars.count-1) + " "//.substring(0,pathPars.count-1)
                        }
                    }
                    if let requestType = $0.requestType,requestType != "void" {
                        if pathPars.count > 0 {
                            pathPars += ","
                        }
                        requestInfo = "request"
                        pathPars += ("request: "+requestType)
                    }
                    if let responseType = $0.responseType {
                        wirteContent += pathPars + "): Promise<\(responseType)> {\n"
                    }else{
                        wirteContent += pathPars + "): Promise<void> {\n"
                    }
                    wirteContent += "\t\treturn NetworkService.ajax(\"\(method.uppercased())\", \"\(path)\", {\(requestPars)}, \(requestInfo));\n\t}\n\n"
                }
            }
            wirteContent += "}"
            importInfos += "} from \"" + APIPath + "\";\n" 
            importInfos += "import { NetworkService } from \"" + NetworkServicePath + "\""
            wirteContent = importInfos + "\n\n" + wirteContent
            writeText(wirteContent,folderAPIPath+servicesName+".ts")
        }
    }
}

/// 获取类所有信息
/// - Parameter info: API - InterfaceType 信息
func getTypeInfo(_ info:InterfaceType) -> String {
    guard let typeName = info.name else {
        return ""
    }
    guard let type = info.type else {
        return ""
    }
    if type == "enum" {
        guard let definition = info.definition else {
            return ""
        }
        var typeInfo = "export enum \(typeName) {\n"
        let definitionNew = (definition as NSString).replacingOccurrences(of: "{", with: "").replacingOccurrences(of: "}", with: "").trimmingCharacters(in: CharacterSet.whitespaces)
        var listInfos = definitionNew.components(separatedBy: ",").map { (value) -> String in
            return value.trimmingCharacters(in: CharacterSet.whitespaces)
        }
        listInfos.sort()
        listInfos.forEach {
            if $0 != "" {
                typeInfo += "\t" + $0 + ",\n"
            }
        }
        typeInfo += "}\n"
        return typeInfo
    }else if type == "interface" {
        guard let definition = info.definition else {
            return ""
        }
        var typeInfo = "export interface \(typeName) {\n"
        let definitionNew = (definition as NSString).replacingOccurrences(of: "{", with: "").replacingOccurrences(of: "}", with: "").trimmingCharacters(in: CharacterSet.whitespaces)
        var listInfos = definitionNew.components(separatedBy: ";").map { (value) -> String in
            return value.trimmingCharacters(in: CharacterSet.whitespaces)
        }
        listInfos.sort()
        listInfos.forEach {
            if $0 != "" {
                typeInfo += "\t" + $0 + ";\n"
            }
        }
        typeInfo += "}\n"
        // typeInfo += (info.definition ?? "").replacingOccurrences(of: "{", with: "{\n\t").replacingOccurrences(of: ";", with: ";\n\t")
        return typeInfo
    }
    return ""
}
// public func encoderJSON<T:Codable>(_ info:T) -> String? {
//     // 实例化JSONEncoder
//     let encoder = JSONEncoder()
//     // 编码pear
//     guard let data = try? encoder.encode(info) else { return nil }
//     guard let result = String(data: data, encoding: .utf8) else { return nil }
//     return result
// }
public func parseJSON<T:Codable>(_ jsonString:String,_ type:T.Type) -> T? {
    guard let jsonData = jsonString.data(using: String.Encoding.utf8) else {
        return nil
    }
    let decoder = JSONDecoder()
    guard let info = try? decoder.decode(type, from: jsonData) else {
        return nil
    }
    return info
}

getInfo()
