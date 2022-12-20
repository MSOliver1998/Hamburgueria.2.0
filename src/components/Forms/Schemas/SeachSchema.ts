import * as yup from 'yup'

const SearchSchema=yup.object().shape({
    search:yup
    .string()
})

export{SearchSchema}