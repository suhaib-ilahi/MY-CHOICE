export class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational : boolean;
    public readonly details?: any;

    constructor(message:string, statusCode:number, isOperational = true, details?:any){
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.details = details;
        Error.captureStackTrace(this);
    }
}


// NOt found Error

export class NOtFoundError extends AppError {
    constructor(message = "Resources not found"){
        super(message,404);
    }
}

//validation Error (use for zod/react-hook-form validation error)

export class ValidationError extends AppError {
    constructor(message = "Invalid request data", details?:any){
        super(message, 400, true, details);
    }
}

// Auth error 
export class AuthError extends AppError {
    constructor(message = "Unauthorized"){
        super(message, 401);
    }
}

// Forbidden Error (For permission bounds)

export class ForbiddenError extends AppError {
    constructor(message = "Forbidden Access"){
        super(message, 403);
    }
}

//Database Error
export class DatabaseError extends AppError {
    constructor(message = "Database Error", details?:any){
        super(message, 500, true, details);
    }
}

//RateLimit Error
export class RateLimitError extends AppError {
    constructor(message = "Too many requests, please try again later", details?:any){
        super(message, 429, true, details);
    }
}