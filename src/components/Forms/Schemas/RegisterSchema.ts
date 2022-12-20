import * as yup from 'yup'

const RegisterSchema=yup.object().shape({
    name:yup
    .string()
    .required('insira seu nome'),

    email: yup
    .string()
    .required('insira seu email')
    .email('insira um email válido'),

    password: yup
    .string()
    .required('Insira uma senha')
    .min(8,'insira uma senha com o minimo 8 caracteres')
    .max(16,'insira uma senha com o maximo 16 caracteres')
    .matches(/[A-Z]/,'insira uma letra maiuscula')
    .matches(/[a-z]/,'insira uma letra minuscula')
    .matches(/[0-9]/,'insira um númmero')
    .matches(/[!@#$%¨&*_-]/,'insira um caractere especial (!@#$%¨&*_-)'),

    confirmPass: yup
    .string()
    .required('insira novamente a senha')
    .oneOf([yup.ref("password"), null],'as senhas não conferem'),

})

export{RegisterSchema}