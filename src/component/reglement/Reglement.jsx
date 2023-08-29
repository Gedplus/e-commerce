import React, { useState } from "react"
import { addReclamation } from "../../state/api";


const Reglement = () => {
  
 

  return (
    <>
      <section class="container2 forms">
        <div class="form1 login">
           
            <div class="form-content">
                <header class="h">Règlement général</header>
                <br/>
                <p> <p style={{fontWeight:"600"}}>Article premier : Informations</p>
Toutes vos informations confidentielles sont protégées
Les comptes avec des noms factices peuvent être supprimés
Vos documents et informations seront affichés selon les conditions que vous avez fixées
Vous pouvez supprimer ou modifier votre compte à tout moment
La modification d’un document sera soumise à l'approbation de notre équipe afin de maintenir la fiabilité et l'intégrité de votre document (Cette condition ne s'applique pas aux comptes professionnels vérifiés) 
La suppression ou la modification ne porte pas atteinte aux documents achetés sous le mode lecture ou téléchargement.<br/><br/>
<p style={{fontWeight:"600"}}>Article 2 : Paiement</p>
 Le paiement sera effectué après que le montant de 50 TND ait été crédité sur votre compte
Ce montant ne comprend pas les alimentations de votre compte, il ne comprend que les achats effectués avec votre document
Vous ne pouvez pas effectuer des achats avec les montants crédités par les achats de votre document. Ces montants ne peuvent être utilisés que pour des transferts par virement
Le paiement ne sera effectué qu'après vérification de votre identité et confirmation que vous êtes l'auteur de ce document
Le paiement s'effectuera par virement bancaire ou postal.<br/><br/>
<p style={{fontWeight:"600"}}>Article 3 : Garanties et protection </p>
Tout achat en mode téléchargement de votre document sera en format PDF pour garantir la protection des données que vous avez fixées
Si nous constatons la non-conformité de votre document, nous vous informerons par e-mail afin de vérifier les irrégularités
Toute preuve d'auteur de propriété d'un document via l'espace de réclamation entraînera la suppression du compte et le transfert des montants d'achats affectés.
<br/><br/><p style={{fontWeight:"600"}}>Article 4 : Réclamation</p>
En cas de constatation d'irrégularités, vous pouvez faire une réclamation via notre espace de réclamation sur la plateforme ou nous contacter par : 
<br/>Tél : <br/>
E-mail :
</p>
            
            </div>
            
            
        </div>
     
      </section>
      
    </>
  )
}

export default Reglement
