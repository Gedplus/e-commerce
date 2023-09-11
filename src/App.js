
import './App.css';
import Header from './common/header/Header';
import { BrowserRouter as Router , Switch , Route  } from 'react-router-dom';
import Pages from './pages/Pages';
import Data from './component/flashDeals/Data';
import { useEffect, useState } from 'react';
import Cart from './common/cart/Cart';
import Sdata from './component/shop/Sdata';
import Footer from './common/footer/Footer';
import Login from './connexion/Login';
import Signup from './connexion/SignUp';
import Reclamation from './component/reclamation/Reclamation';
import Contact from './component/contact/Contact';
import Documents from './component/document/document';
import { useGetUserQuery } from './state/api';
import AddDocument from './component/addDocument/AddDocument';
import MesDocuments from './component/MesDocument/MesDocument';
import Reglement from './component/reglement/Reglement';
import Verification from './component/Verification/verification';
import ListeVideo from './component/videos/ListeVideos';
import ListePack from './component/pack/ListePack';
import DocumentsAcheter from './component/DocumentAcheter/DocumentAcheter';
import DetailDoc from './component/detailDocument/DetailDocument';
import DetailVideo from './component/detailVideo/DetailVideo';
import DetailPack from './component/detailPack/DetailPack';
import Apropo from './component/Apropo/Apropo';


function App() {
  const {productItems } = Data

  
  const [items, setItems] = useState([]);
  const {shopItems} = Sdata
  const data1 = window.localStorage.getItem("token");
  const userId = data1;
  const data2 = window.localStorage.getItem("item");
  console.log('data1',data2)
  


const { data } = useGetUserQuery(userId);


  const addToCart = (product) => {
   
    const productExit = items.find((item) => item._id === product._id)
console.log("productExit",productExit)

let productInLocalStorage = JSON.parse(localStorage.getItem("item"))
console.log("productInLocalStorage",productInLocalStorage)
// s'il y a un produit dans le local storage  //
// if there's product(s) in local Storage, pusht in json format //
if (productExit) {
  console.log("impossible")

}
else{
if(productInLocalStorage){
    productInLocalStorage.push(product)
    localStorage.setItem("item", JSON.stringify(productInLocalStorage))
    let productInLocalStorage1 = JSON.parse(localStorage.getItem("item"))
    console.log("productInLocalStorage",productInLocalStorage1)
    if (productInLocalStorage1) {
     setItems(productInLocalStorage1);
    }

}
// s'il n'y a pas un produit dans le local storage  //
// if there's not product in local Storage, create an array and push it //
else{
    productInLocalStorage = []
    productInLocalStorage.push(product)
    console.log(productInLocalStorage)
    localStorage.setItem("item", JSON.stringify(productInLocalStorage))
    let productInLocalStorage1 = JSON.parse(localStorage.getItem("item"))
    console.log("productInLocalStorage",productInLocalStorage1)
    if (productInLocalStorage1) {
     setItems(productInLocalStorage1);
    }
}}

 
   
    
   
  }



useEffect(() => {
  let productInLocalStorage = JSON.parse(localStorage.getItem("item"))
  console.log("productInLocalStorage",productInLocalStorage)
  if (productInLocalStorage) {
   setItems(productInLocalStorage);
  }
}, []);
  const decreaseQty = (product) => {
    
    var storedNames = JSON.parse(localStorage.getItem("item"));

    // here you need to make a loop to find the index of item to delete
    var indexToRemove = product;
    console.log("sahar",product)

    //remove item selected, second parameter is the number of items to delete 
    storedNames.splice(indexToRemove, 1);
    console.log("saharrrrrrrrrrrrrrrrrrrrrr",storedNames)
   // Put the object into storage
   
   localStorage.setItem('item', JSON.stringify(storedNames));
       let productInLocalStorage1 = JSON.parse(localStorage.getItem("item"))
    console.log("productInLocalStorage",productInLocalStorage1)
    if (productInLocalStorage1) {
     setItems(productInLocalStorage1);
    }


  }

  return (
  <><Router><Header CartItem ={items}  user={data || {}} />
  <Switch>
  <Route path='/login' exact>
  <Login productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
    </Route>
    <Route path='/signup' exact>
  <Signup productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
    </Route>
    <Route path='/' exact>
  <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
    </Route>
    <Route path='/cart' exact>
  <Cart CartItem={items} addToCart={addToCart}  decreaseQty={decreaseQty} user={data || {}}  />
    </Route>
    <Route path='/Reclamation' exact>
  <Reclamation CartItem={items} addToCart={addToCart}  decreaseQty={decreaseQty}/>
    </Route>
    <Route path='/contact' exact>
  <Contact CartItem={items} addToCart={addToCart}  decreaseQty={decreaseQty}/>
    </Route>
    <Route path='/documents' exact>
  <Documents productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
    </Route>
    <Route path='/AddDocument' exact>
  <AddDocument productItems={productItems} addToCart={addToCart} shopItems={shopItems} user={data || {}}  />
    </Route>
    <Route path='/MesDocuments' exact>
  <MesDocuments productItems={productItems} addToCart={addToCart} shopItems={shopItems} user={data || {}}  />
    </Route>
    <Route path='/Reglement' exact>
  <Reglement productItems={productItems} addToCart={addToCart} shopItems={shopItems} user={data || {}}  />
    </Route>
    <Route path='/verification' exact>
  <Verification productItems={productItems} addToCart={addToCart} shopItems={shopItems} user={data || {}}  />
    </Route>
    <Route path='/videos' exact>
  <ListeVideo productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
    </Route>
    <Route path='/packs' exact>
  <ListePack productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
    </Route>
    <Route path='/Achats' exact>
  <DocumentsAcheter productItems={productItems}    user={data || {}}/>
    </Route>

    <Route path='/detail/:id' exact>
  <DetailDoc productItems={productItems}    user={data || {}}/>
    </Route>
    
    <Route path='/detailVideo/:id' exact>
  <DetailVideo productItems={productItems}    user={data || {}}/>
    </Route>
    <Route path='/detailPack/:id' exact>
  <DetailPack productItems={productItems}    user={data || {}}/>
    </Route>
    <Route path='/Apropo' exact>
  <Apropo productItems={productItems}    user={data || {}}/>
    </Route>
  </Switch><Footer/>
    </Router></>
  );
}

export default App;
