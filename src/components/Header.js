import React from 'react'
import { moneyFormat } from '../helpers'


function Header({total, money}) {
    return (
        <>

          
              {total > 0 && money - total !== 0 && ( //total 0 dan büyükse ve money-total eşit değilse 0 a
                  <div className= "header">Harcayacak <span>$ {moneyFormat(money-total)}</span> paranız kaldı!</div>
              )}
              {total === 0 && (
                  <div className= "header">Harcamak için <span>$ {moneyFormat(money)}</span>  paranız var!</div>
              )}
              {money - total === 0 && (
                  <div className= "header">Paran bitti!</div>
              )}
              
        <style jsx>{`
        
             .header{
                 background: linear-gradient(to bottom, green, greenyellow);
                 height: 60px;
                 display: flex;
                 align-items: center;
                 justify-content: center;
                 font-size: 24px;
                 color: #fff;
                 letter-spacing: 2px
                 font-weight: bold;
                 position: sticky;
                 top: 0;
             }

        `}
        </style>

        </>
    )
}

export default Header
