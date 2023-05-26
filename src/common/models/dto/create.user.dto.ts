// interfaces are better to use for data objects than classes unless we require 
// encapsulation, inheritance and methods that define behviour

// This is really duct-taping!
export interface CreateUserDto {
    id: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    permissionLevel?: number;
}