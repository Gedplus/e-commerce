import React, { useState } from "react"
import { addContact} from "../../state/api";
import contact1 from "../../image/BB.png"
import { Link } from "react-router-dom"
const Contact = () => {
     
  const [Email , setEmail] = useState("")
   
    const [sujet , setsujet] = useState("")

    const [Message , setMessage] = useState("")
   
    const contact ={
email: Email,
      
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
                <Link to="/Reclamation">
                <img src={contact1} alt='' className="contactM"  style={{width:"900px", height:"600px", marginTop:"-120px"}}/>
           </Link>
           <Link to="/Reclamation">
                <img src={contact1} alt='' className="contactMo"  style={{width:"300px", height:"200px", marginTop:"-50px"}}/>
                </Link> 
            </div>
          
        </div>
     
      </section>
      
    </>
  )
}

export default Contact
