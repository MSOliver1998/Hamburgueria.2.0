import {createGlobalStyle} from 'styled-components'

const GlobalStyle=createGlobalStyle`

    *{
        margin:0px;
        box-sizing: border-box;
        padding: 0px;
    }
    
    :root{
        --color-brand-1 : #27ae60;
        --color-brand-2 : #93d7af;
        --color-brand-3 : #eb5757;
        --color-grey-1 : #333333;
        --color-grey-2 : #828282;
        --color-grey-3 : #e0e0e0;
        --color-grey-4 : #f5f5f5;
        --color-alert : #ffdd00;
        --color-erro : #ff0000;
        --color-sucess : #027500;
        --color-information : #155bcb;
        --size-1:26px;
        --size-2:22px;
        --size-3:18px;
        --size-4:16px;
        --size-5:14px;
        --size-6:12px;
    }
    
    :root .darkMode{
        --color-grey-1 : #f5f5f5;
        --color-grey-2 : #e0e0e0;
        --color-grey-3 : #828282;
        --color-grey-4 : #333333;
    }

    body{
        font-family: 'Inter', sans-serif;
    }

.material-symbols-outlined{
    cursor: pointer;
    
    &:hover{
        color: var(--color-brand-1);
    }
}


`

export {GlobalStyle}