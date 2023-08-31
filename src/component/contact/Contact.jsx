import React, { useState } from "react"
import { addContact} from "../../state/api";


const Contact = () => {
   
    const [sujet , setsujet] = useState("")
    const [email , setEmail] = useState("")
    const [Message , setMessage] = useState("")
   
    const contact ={
        email: email,
      
        subject: sujet,
      
          message: Message,
      
      };
    const handleFormSubmit = async(values) => {

        await addContact(contact);
      
      };
    
 

  return (
    <>
      <section class="container2 forms">
        <div class="form1 login">
           
            <div class="form-content">
                <header class="h">Contacter nous</header>
                <br/>
            
                <div class="div"> 
                <img src="./images/reclamation.png" alt=''  style={{width:"400px", height:"400px", marginTop:"70px"}}/>
                
            </div>
            </div>
            <div class="div">
            <div class="form-content">
             
            <form  class="form2" onSubmit={handleFormSubmit}>
              
            
                    <div class="field input-field">
                        <input type="email" placeholder="Email" class="input" onChange={(event) => {setEmail(event.target.value)}} />
                    </div>
                    <div class="field input-field">
                        <input type="text" placeholder="sujet" class="input"  onChange={(event) => {setsujet(event.target.value)}}/>
                    </div>
                  
                    <div class="field1 input-field">
                        <textarea type="text" placeholder="Message" class="input" onChange={(event) => {setMessage(event.target.value)}} />
                    </div>
                
                    <div class="field button-field">
                        <button type="submit" >Envoyer</button>
                    </div>
                  
                    
               </form>
                
            </div>
            </div>
        </div>
     
      </section>
      
    </>
  )
}

export default Contact
