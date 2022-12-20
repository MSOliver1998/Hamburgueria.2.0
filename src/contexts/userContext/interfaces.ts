export interface iUserContextProps{
    children: React.ReactNode;
}

export interface iUser {
    email: string
    name: string
    confirmPass: string
    id: number
}

export interface iUserContexts{
    user:string;
    submit:(dataUser:iRegisterFormData)=>void;
    Login:(dataUser:iLoginFormData)=>void;
    waiting:boolean;
    logout:()=>void;
}

export interface iRegisterFormData {
    name: string;
    email: string;
    password: string;
    confirmPass: string;
}

export interface iLoginFormData{
    email:string,
    password:string,
}

export interface iResponseDataLogin {
    accessToken: string
    user: iUser
}
  
export interface iResponseLogin{
    data:iResponseDataLogin
}
