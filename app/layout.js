'use client'
import { StoreProvider } from "./components/cartReducers";
import './global.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import Script from 'next/script'


export default function rootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <Navbar />
                <StoreProvider>
                    {children}
                </StoreProvider>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-1FWRTBB5SK" />
                <Script id="google-analytics">
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-1FWRTBB5SK');
        `}
                </Script>


                <div id="fb-root" className="z-50"></div>


                <div id="fb-customer-chat" className="fb-customerchat z-50" >
                </div>
                <Script
                    id="messenger-tag"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `{  var chatbox = document.getElementById('fb-customer-chat');
                        chatbox.setAttribute("page_id", "106881084827563");
                        chatbox.setAttribute("attribution", "biz_inbox");}`,
                    }}
                ></Script>
                <Script
                    id="messenger-sdk"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `{ window.fbAsyncInit = function() {
                            FB.init({
                              xfbml            : true,
                              version          : 'v18.0'
                            });
                          };
                    
                          (function(d, s, id) {
                            var js, fjs = d.getElementsByTagName(s)[0];
                            if (d.getElementById(id)) return;
                            js = d.createElement(s); js.id = id;
                            js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
                            fjs.parentNode.insertBefore(js, fjs);
                          }(document, 'script', 'facebook-jssdk'));}`,
                    }}
                ></Script>
                <Footer />
            </body>
        </html>
    )
}