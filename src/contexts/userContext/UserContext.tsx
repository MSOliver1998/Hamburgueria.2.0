import { createContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Api } from "../../api/Api";
import { iUserContexts, iUserContextProps, iRegisterFormData, iLoginFormData, iResponseLogin } from './interfaces';



const UserContext=createContext({} as iUserContexts)

function UserProvider({children}:iUserContextProps){
    
    const navigate=useNavigate()
    const [waiting,setWaiting]=useState(true)
    const [user,setUser]=useState('')
    const token=localStorage.getItem('UserToken') || ''

    useEffect(()=>{
        async function userExist(){
            const tokenJson=JSON.parse(token)
            setWaiting(true)
            try{
                const response= await Api.get('/products',{
                    headers:{
                      authorization: `Bearer ${tokenJson}`
                    }
                  })
                  setUser(JSON.parse(token))
            }
            catch(error){
                setUser('')
                navigate('/')
            }
            finally{
                setWaiting(false)
            }
        }
        token ? userExist() : setWaiting(false)
    },[token])

    async function submit(dataUser: iRegisterFormData) {
        setWaiting(true)
        try{
            const response= await Api.post("/users", dataUser)
            toast.success('usuário cadastrado com sucesso')
            navigate('/')
        }
        catch(error){
            toast.error('não foi possivel cadastrar o usuário')
        }finally{
            setWaiting(false)
        }
    }

    async function Login(dataUser:iLoginFormData){
        setWaiting(true)
        try{
            const {data}:iResponseLogin= await Api.post('/login',dataUser)
            setUser(data.accessToken)
            localStorage.setItem('UserToken',JSON.stringify(data.accessToken))
            toast.success('Login feito com sucesso!')
            navigate('/home')
        }
        catch(error){
            toast.error('Erro ao Logar usuário ou senha inválidos')
        } finally{
            setWaiting(false)
        }
    }
    
    function logout(){
        localStorage.removeItem('UserToken')
        toast.success('Obrigado por usar a aplicação')
        navigate('/')
    }
    
    return(
        <UserContext.Provider value={{user,submit,Login,waiting,logout}}>
            {children}
        </UserContext.Provider>
    )
}

export{UserContext,UserProvider}