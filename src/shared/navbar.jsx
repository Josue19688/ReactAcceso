import React, { useState } from "react"
import { Outlet,Link } from "react-router-dom";
function NavbarPage() {
    const [isToggleOpen, setIsToggleOpen] = useState(false)

    return (
        <>
        {/*<!-- Component: Navbar with CTA --> */}
        <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
          <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
            <nav
              aria-label="main navigation"
              className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
              role="navigation"
            >
              {/*      <!-- Brand logo --> */}
              <a
                id="WindUI"
                aria-label="WindUI logo"
                aria-current="page"
                className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
               
              >
               <img  className="object-cover w-16 h-16 rounded-full" 
               src="data:image/jpeg;base64,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"  
               />
                Seguridad
              </a>


              {/*      <!-- Mobile trigger --> */}
              <button
                className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
                onClick={() => setIsToggleOpen(!isToggleOpen)}
                aria-expanded={isToggleOpen ? "true" : "false"}
                aria-label="Toggle navigation"
              >
                <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                </div>
              </button>
              {/*      <!-- Navigation links --> */}
              <ul
                role="menubar"
                aria-label="Select page"
                className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                  isToggleOpen
                    ? "visible opacity-100 backdrop-blur-sm"
                    : "invisible opacity-0"
                }`}
              >
                <li role="none" className="flex items-stretch">
                 
                    <Link 
                         role="menuitem"
                         aria-haspopup="false"
                         tabIndex="0"
                         className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8"
                        
                    to="/novedades">Novedades</Link>
                 
                </li>
                <li role="none" className="flex items-stretch">
                  
                     <Link 
                      role="menuitem"
                      aria-current="page"
                      aria-haspopup="false"
                      tabIndex="0"
                      className="flex items-center gap-2 py-4 text-blue-500 transition-colors duration-300 hover:text-blue-600 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8"
                     
                     to="/home">Home</Link>
                 
                </li>
                <li role="none" className="flex items-stretch">
                  
                     <Link 
                      role="menuitem"
                      aria-current="page"
                      aria-haspopup="false"
                      tabIndex="0"
                      className="flex items-center gap-2 py-4 text-blue-500 transition-colors duration-300 hover:text-blue-600 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8"
                     
                     to="/archivo">Archivo</Link>
                 
                </li>
                <li role="none" className="flex items-stretch">
                  
                     <Link 
                      role="menuitem"
                      aria-current="page"
                      aria-haspopup="false"
                      tabIndex="0"
                      className="flex items-center gap-2 py-4 text-blue-500 transition-colors duration-300 hover:text-blue-600 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8"
                     
                     to="/proveedores">Proveedores</Link>
                 
                </li>
               
              </ul>
              
            </nav>
          </div>
        </header>
        <Outlet />
        {/*<!-- End Navbar with CTA --> */}
      </>
    );
  }
  
export default NavbarPage;