import * as yup from 'yup'


const LoginSchema=yup.object().shape({
    email: yup
    .string()
    .required('insira seu email')
    .email('insira um email válido'),

    password: yup
    .string()
    .required('Insira sua senha')
})

export{LoginSchema}