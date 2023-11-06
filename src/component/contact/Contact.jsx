import React, { useState } from "react"
import { addContact} from "../../state/api";


const Contact = () => {
   
    const [sujet , setsujet] = useState("")

    const [Message , setMessage] = useState("")
   
    const contact ={

      
        subject: sujet,
      
          message: Message,
      
      };
    const handleFormSubmit = async(values) => {

        await addContact(contact);
        window.location.reload();
      
      };
    
 

  return (
    <>
      <section class="container1 forms">
        <div class="form1 login">
           
            <div class="form-content">
                <header class="h">Contactez-nous</header>
                <br/>
            
                <div class="div contactM"> 
                <div className="contact f_flex">
                <img src="./images/tel.png" alt=''  style={{width:"50px", height:"50px", marginTop:"-5px"}}/><h1>+216 25 55 77 80</h1><br/>
             
                </div>
                <br/>
                <div className="contact1 f_flex">
     
                <img src="./images/email.png" alt=''  style={{width:"50px", height:"50px", marginTop:"-15px"}}/><h3>bibintunisie@gmail.com</h3>
                </div>
            </div>
            </div>
            <div class="div">
            <div class="form-content">
             
            <div  class="form2" >
              
         
            <p>Vous pouvez nous envoyer un message</p>
              
            
                    <div class="field input-field">
                        <input type="text" placeholder="sujet" class="input"  onChange={(event) => {setsujet(event.target.value)}}/>
                    </div>
                  
                    <div class="field1 input-field">
                        <textarea type="text" placeholder="Message" class="input" onChange={(event) => {setMessage(event.target.value)}} />
                    </div>
                
                    <div class="field button-field">
                        <button type="submit"  onClick={handleFormSubmit}>Envoyer</button>
                    </div>
                  
                    
               </div>
                
            </div>
            </div>
        </div>
     
      </section>
      
    </>
  )
}

export default Contact
