import { AboutProduct } from "./AboutProduct/AboutProduct";
import "./App.css";


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
export const App = () => {
  return (
   <><div className="container">
    <ShoppingList/>
   <Header />
   <Main/>
   <Proposal/>
   <AboutProduct/>
   <ProductSize/>
  <ChooseColor/>
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
