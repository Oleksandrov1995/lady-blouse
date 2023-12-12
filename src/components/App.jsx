import { AboutProduct } from "./AboutProduct/AboutProduct";
import "./App.css";
import { useState } from "react";

import { ChooseColor } from "./ChooseColor/ChooseColor";
import { Contacts } from "./Contacts/Contacts";
import { Feadback } from "./Feadback/Feadback";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { OurBenefits } from "./OurBenefits/OurBenefits";
import { ProductSize } from "./ProductSize/ProductSize";
import { Proposal } from "./Proposal/Proposal";
import { Questions } from "./Questions/Questions";
import { Reviews } from "./Reviews/Reviews";
import { ShoppingList } from "./ShoppingList/ShoppingList";
import { ShoppingListButton } from "./ShoppingListButton/ShoppingListButton";

export const App = () => {

  const[modalOpen, setModalOpen] = useState(false);
   const handleModalOpen =()=>{setModalOpen(true)};
   const handleModalClose=()=>{setModalOpen(false)}
 
  return (
   <><div className="container">
    <ShoppingList modalOpen={modalOpen} modalClose={handleModalClose} />
    <ShoppingListButton modalOpen={handleModalOpen}/>
   <Header  />
   <Main/>
   <Proposal/>
   <AboutProduct/>
   <ProductSize/>
  <ChooseColor id="chooseColor" modalOpen={handleModalOpen}/>
   <Reviews/>
    <OurBenefits/>
   <Questions/>
   <Feadback/>
   <Contacts/>
   <Footer/>
   </div>
   </>
  );
};
