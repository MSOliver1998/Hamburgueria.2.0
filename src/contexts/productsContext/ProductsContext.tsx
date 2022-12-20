import { createContext, SetStateAction, useContext, useEffect, useState } from "react";
import { Api } from "../../api/Api";
import { UserContext} from "../userContext/UserContext";

interface iProductsContextProps {
  children: React.ReactNode;
}

interface iProductProvider {
  productsList:iProduct[];
  filtro:string;
  sendSearch:(event:any)=>void;
}

export interface iProduct{
  'id': number,
  'name': string,
  'category': string,
  'price': number,
  'img': string,
  'quantidade':number,
}

interface iSearch{
  'search':string
}

const ProductsContext = createContext({} as iProductProvider);

function ProductsProvider({ children }: iProductsContextProps) {
  const [productsList, setProductList] = useState([] as iProduct[]);
  const [filtro,setFiltro]=useState('')
  const {user}=useContext(UserContext)

  useEffect(()=>{
    async function getProducts(){
      try{
        const response= await Api.get('/products',{
          headers:{
            authorization: `Bearer ${user}`
          }
        })
        setProductList(response.data)
      }catch(error){
        localStorage.removeItem('UserToken')
      }
    }
    user && getProducts()
  },[user])
    
  function sendSearch(SearchData:iSearch){
      setFiltro(SearchData.search)
  }

  return (
    <ProductsContext.Provider value={{productsList,filtro,sendSearch}}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsProvider, ProductsContext };
