import React, { useState } from "react"
import { addContact} from "../../state/api";
import contact1 from "../../image/BB-1.png"
import contact2 from "../../image/BB-2.png"
import contact3 from "../../image/BB3.png"
import contact4 from "../../image/BB4.png"
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
                <br/><br/>
                <div class="div">
       
                <img src={contact1} alt='' className="contactM"  style={{width:"400px", height:"400px", marginTop:"-90px"}}/>

           <Link to="/Reclamation">
                <img src={contact1} alt='' className="contactMo"  style={{width:"300px", height:"200px", marginTop:"-50px"}}/>
                </Link> </div>
                <div class="div">
                <img src={contact2} alt=''  style={{width:"300px", height:"100px", marginTop:"-20px" }}/>
                <img src={contact3} alt=''   style={{width:"300px", height:"100px", }}/>
                <Link to="/Reclamation">       <img src={contact4} alt=''  style={{width:"300px", height:"100px", }}/>  </Link>
            </div>
            </div>
            
          
        </div>
     
      </section>
      
    </>
  )
}

export default Contact
