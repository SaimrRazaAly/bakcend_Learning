class ApiResponse {
    constructor(statusCode,data,message="Sucess"){ /* i think in the parameter sucess is missing */
        this.statusCode = statusCode
        this.data= data
        this.message = message
        this.success = statusCode < 400
    }
}