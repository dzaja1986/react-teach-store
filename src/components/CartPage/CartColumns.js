import React from 'react';

export default function CartColumns() {
    return(
        <div className="container-fluid d-none d-lg-block my-5">
           <div className="row">
               {/*single column*/}
               <div className="col-lg-2">
               <p className="text-uppercase">product</p>
               </div>
               {/*end of single column*/}
              
                <div className="col-lg-2">
               <p className="text-uppercase">name od product</p>
               </div>
              
                <div className="col-lg-2">
               <p className="text-uppercase">price</p>
               </div>
              
                <div className="col-lg-2">
               <p className="text-uppercase">quantity</p>
               </div>
              
                <div className="col-lg-2">
               <p className="text-uppercase">remove</p>
               </div>
              
               <div className="col-lg-2">
               <p className="text-uppercase">total</p>
               </div>
              
           </div>
        </div>
    )
}