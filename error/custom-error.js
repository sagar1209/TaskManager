


class customeAPIError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode;
    }
}

const createCustomError = (msg,statuseCode)=>{
    return new customeAPIError(msg,statuseCode);
}

module.exports =  {
    createCustomError,customeAPIError 
}