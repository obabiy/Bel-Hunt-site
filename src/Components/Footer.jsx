import React, { useState, useEffect } from 'react'

import './Footer-style.css'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import { FormattedMessage, useIntl } from 'react-intl'

function Footer(){  
    const [pages, setPages] = useState([]);

    const locale = useIntl().locale

    useEffect(() => {
    db.collection("articles").onSnapshot((snapshot) => {
      setPages(
        snapshot.docs.map((doc) => ({
          titleRU: doc.data().titleRU,
          titleEN: doc.data().titleEN,
          titleDE: doc.data().titleDE,
          titleFR: doc.data().titleFR,
          titleESP: doc.data().titleESP,
          titleITL: doc.data().titleITL,
          slug: doc.data().slug,
        }))
      );
    });
  }, []);
    
    return(
        <div id = "footerContainer">
            
            <img id = "footerTransition" src = 'https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2Ffooter-transition.png?alt=media&token=3d32d695-1b7f-447b-a6a2-cf9cf9c61334' no-repeat/>
            <div id = "footer">
                <div className="footerPart" id = "footerPartHunt">
                    <h4>
                        <FormattedMessage id = 'footer_text_hunting' />
                    </h4>
                    <div className="certainAnimalFooterMenu">

                        {
                            pages.map((page) => (
                            <Link to = {`/${page.slug}`}><li className = 'footerMenuHunting'>{eval(`page.title${locale}`)}</li></Link>
                            ))
                        }

                        {/* <li className = "footerMenuHunting"><Link to="/elkHunting"> на лося</Link></li>
                        <li className = "footerMenuHunting"><Link to="/bisonHunting">на зубра</Link></li>
                        <li className = "footerMenuHunting"><Link to="/boarHunting">на кабана</Link></li>
                        <li className = "footerMenuHunting"><Link to="/roeDeerHunting">на косулю</Link></li>
                        <li className = "footerMenuHunting"><Link to="/deerHunting">на оленя</Link></li>
                        <li className = "footerMenuHunting"><Link to="/wolfHunting">на волка</Link></li>
                        <li className = "footerMenuHunting"><Link to="/capercaillieHunting">на глухаря</Link></li>
                        <li className = "footerMenuHunting"><Link to="/woodcockHunting">на вальдшнепа</Link></li>
                        <li className = "footerMenuHunting"><Link to="/partridgeHunting">на куропатку</Link></li>
                        <li className = "footerMenuHunting"><Link to="/snipeHunting">на бекаса</Link></li>
                        <li className = "footerMenuHunting"><Link to="/duckHunting">на утку</Link></li> */}
                    </div>
                </div>

                <div className="footerPart">
                        <h4>
                            <FormattedMessage id = 'footer_text_mainMenu'/>
                        </h4>
                        <div className="certainAnimalFooterMenu">
                            <li className = "footerMenuMain"><Link to = "/prices"><FormattedMessage id = 'footer_button_prices'/></Link></li>
                            <li className = "footerMenuMain"><FormattedMessage id = 'footer_button_galleryTrophy'/></li>
                            <li className = "footerMenuMain"><FormattedMessage id = 'footer_button_galleryHouses'/></li>
                        </div>
                </div>
                
                <div className="footerPart" id = "footerContacts">
                    <h4><FormattedMessage id = 'footer_text_contacts'/></h4>
                    <div className="certainAnimalFooterMenu">
                        <span>+37 (529) 640 47 77</span>
                        <div id="iconsFooter">
                            <img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FInstagram.svg?alt=media&token=121c40c6-2dd2-4524-8b8f-da3f1c1f030d"/>
                            <img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FFacebook.svg?alt=media&token=524837ad-ad5f-4069-88dc-bdbd07473874"/>
                            <img src="https://firebasestorage.googleapis.com/v0/b/belhunt-bc08e.appspot.com/o/vectors%2FVK.svg?alt=media&token=f00a1e52-dd22-429c-9242-181636230be5"/>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    );
}

export default Footer;