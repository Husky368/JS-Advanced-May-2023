function solve(obj) {
    let methods = ["GET", "POST", "DELETE", "CONNECT"];
    let versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let uriRegex = /^[a-zA-Z.0-9]+$/gm;
    let messageRegex = /[<>&'"\\]/gm;

    if(!obj.hasOwnProperty("method") ||!methods.includes(obj.method)){
        throw new Error("Invalid request header: Invalid Method");
    }
    if(!obj.hasOwnProperty("uri") || !uriRegex.test(obj.uri) || obj.uri === ""){
        throw new Error("Invalid request header: Invalid URI");
    }
    if(!obj.hasOwnProperty("version") ||!versions.includes(obj.version)){
        throw new Error("Invalid request header: Invalid Version");
    }
    if(!obj.hasOwnProperty("message") || messageRegex.test(obj.message)){
        throw new Error("Invalid request header: Invalid Message");
    }
    return obj
}
