class ApiResponse{
    constuctor(statusCode, data, message="Success"){
        this.StatusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode < 400 

    }
}