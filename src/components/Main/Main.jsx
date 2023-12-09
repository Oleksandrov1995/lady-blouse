import "./Main.css"
import React from 'react';
export const Main = ()=>{
    return(
        <section className="main-container">
            <div className="main-titles">
<h1 className="main-title">БАЗОВІ ЖИЛЕТИ З БАВОВНИ ТА АКРИЛУ В НАЙСТИЛЬНІШИХ ТА ПРАКТИЧНИХ КОЛЬОРАХ</h1>
<h4 className="title">НА СОРОЧКУ, БЛУЗУ, ФУТБОЛКУ АБО ГОЛЬФ</h4>
<ul className="main-benefits">
<li><h3>Відправка в день замовлення </h3></li>
<li><h3>Оплата при отриманні</h3></li>
<li><h3>Власне виробництво та контроль якості</h3></li>
</ul>

</div>
<img src={require('../../Images/logo2.png')} alt="Logo" className="main-logo" />
        </section>
    )
}