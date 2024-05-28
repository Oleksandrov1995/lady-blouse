import "./Contacts.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from "react-router-dom";
export const Contacts = () => {
    return(
        <section id="contacts" className="contacts">
            <h2 className="contacts-title">Наші Контакти</h2>
            <h3>Зв'яжіться з нами щодо підбору розмірів, наявності, доставки та способів оплати
</h3>
<ul className="contacts-list">
              <li className="contacts-item">
                <a href="mailto:info@devstudio.com" 
                
                  >
                     <EmailIcon sx={{ fontSize: 20 }}/>
                     <span className="contacts-itemText">: ladyblouse@gmail.com</span>
                 </a>
              </li>
              <li className="contacts-item">
               
                <a href="tel:+380961111111" 
                  > <LocalPhoneIcon sx={{ fontSize: 15 }}/>
                  : +38 099 718 16 62</a
                >
              </li>
            </ul>

            <ul className="social-networks-list">
                <li className="social-networks-item">
                  <a href="https://www.instagram.com/_lady_blouse_" className="social-networks__icons"
                    ><InstagramIcon sx={{ fontSize: 50}}/></a>
                </li>
                <li className="social-networks-item">
                  <a href="https://api.whatsapp.com/send?phone=0997181662" className="social-networks__icons"
                    ><WhatsAppIcon sx={{ fontSize: 50}}/></a>
                </li>
                <li className="social-networks-item">
                  <a href="https://t.me/Kilochyk_Marharyta" className="social-networks__icons"
                    ><TelegramIcon sx={{ fontSize: 50}}/></a>
                </li>
              
              </ul>

              <Link className="agreement-link" to={`/agreement`} >
           Політика конфіденційності
            </Link>

        </section>
    )
}