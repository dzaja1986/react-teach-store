import React from 'react'
import Title from '../Title';

export default function Contact() {
    return(
     <section className="py-5">
         <div className="row">
             <div className="col-10 mx-auto col.md-6 my-3">
                 <Title title="contact us"></Title>
                 <from  className="mt-5" action="https://formspree.io/dzaja1986@gmail.com" method="POST">
                     {/*first*/}
                     <div className="form-group">
                         <input type="text" name="firstName" className="form-control"
                         placeholder="milan miloradovic" />
                     </div>
                      {/*email*/}
                     <div className="form-group">
                         <input type="email" name="email" className="form-control"
                         placeholder="dzaja1986@gmail.com" />
                     </div>
                      {/*subject*/}
                      <div className="form-group">
                         <input type="text" name="subject" className="form-control"
                         placeholder="important!!!!" />
                     </div>
                      {/*message*/}
                      <div className="form">
                          <textarea name="message" rows="10" className="form-control"
                          placeholder="hello there boddy"></textarea>
                      </div>
                      {/*submit*/}
                      <div className="form-group mt-3">
                          <input type="submit" value="Send" className="form-control bg-primary text-white" />
                      </div>
                 </from>
             </div>
         </div>
     </section>
    )
}