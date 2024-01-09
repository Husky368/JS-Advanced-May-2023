class Request{
    method;
    uri;
    version;
    message;
    response;
    fulfilled;
    constructor(_method,_uri,_version,_message){
        this.method = _method;
        this.uri = _uri;
        this.version = _version;
        this.message = _message;
        this.response = undefined;
        this.fulfilled = false
    }
}

let myData = new Request('GET',
'http://google.com', 'HTTP/1.1', '')
console.log(myData);

// Request {
//     method: 'GET',
//     uri: 'http://google.com',
//     version: 'HTTP/1.1',
//     message: '',
//     response: undefined,
//     fulfilled: false
//    }
   
