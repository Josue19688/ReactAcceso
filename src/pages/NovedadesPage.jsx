import React, { useState, useRef, useEffect } from "react"
import ReactDOM from "react-dom"
import DataTable from 'react-data-table-component';

function NovedadesPage() {

  const [isShowing, setIsShowing] = useState(false)

  const wrapperRef = useRef(null)

  



  

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [wrapperRef])


  useEffect(() => {
    let html = document.querySelector("html")

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden"

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

        const modal = document.querySelector("#modal") // select the modal by it's id

        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0] // get first element to be focused inside modal

        const focusableContent = modal.querySelectorAll(focusableElements)

        const lastFocusableElement =
          focusableContent[focusableContent.length - 1] // get last element to be focused inside modal

        document.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            setIsShowing(false)
          }

          let isTabPressed = e.key === "Tab" || e.keyCode === 9

          if (!isTabPressed) {
            return
          }

          if (e.shiftKey) {
            // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus() // add focus for the last focusable element
              e.preventDefault()
            }
          } else {
            // if tab key is pressed
            if (document.activeElement === lastFocusableElement) {
              // if focused has reached to last focusable element then focus first focusable element after pressing tab
              firstFocusableElement.focus() // add focus for the first focusable element
              e.preventDefault()
            }
          }
        })

        firstFocusableElement.focus()
      } else {
        html.style.overflowY = "visible"
      }
    }
  }, [isShowing])


  const columns = [
    {
      name: "DELETE",
      button: true,
      cell: (row) => (
        
  
        
        <button onClick={(e) => handleButtonClick(e, row.id)}
        className="inline-flex h-8 items-center justify-center gap-2 self-center whitespace-nowrap rounded-full bg-red-500 px-4 text-xs font-medium tracking-wide text-white transition duration-300 hover:bg-red-500 focus:bg-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-500 disabled:bg-red-300 disabled:shadow-none">
          <span className="relative only:-mx-4">
           
           

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <title id="title-45">Eliminar</title>
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

          
          </span>
        </button>
     
  
  
         
        ),
      },
    {
    name: "EDITAR",
    button: true,
    cell: (row) => (
      

      
      <button onClick={(e) => handleButtonClick(e, row.id)}
      className="inline-flex h-8 items-center justify-center gap-2 self-center whitespace-nowrap rounded-full bg-blue-500 px-4 text-xs font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">
        <span className="relative only:-mx-4">
         
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <title id="title-45">Editar</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>

        
        </span>
      </button>
  
      ),
    },
    {
        name: 'NOMBRE',
        selector: row => row.title,
    },
    {
        name: 'PUESTO',
        selector: row => row.year,
    },
    {
      name: 'AGENTE',
      selector: row => row.title,
  },
  {
      name: 'DESCRIPCION',
      selector: row => row.year,
  },
];

const handleButtonClick = (e, id) => {
  e.preventDefault();
  console.log("Row Id", id);
};

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
        agente: 'Beetlejuice',
        descripcion: '1988',
    },
    {
        id: 2,
        title: 'Beetlejuice',
        year: '1988',
        agente: 'Beetlejuice',
        descripcion: '1988',
    },
    {
      id: 3,
      title: 'Beetlejuice',
        year: '1988',
        agente: 'Beetlejuice',
        descripcion: '1988',
  },
  {
      id: 4,
      title: 'Beetlejuice',
        year: '1988',
        agente: 'Beetlejuice',
        descripcion: '1988',
  },
  {
    id: 5,
    title: 'Beetlejuice',
        year: '1988',
        agente: 'Beetlejuice',
        descripcion: '1988',
},
{
    id: 6,
    title: 'Beetlejuice',
    year: '1988',
    agente: 'Beetlejuice',
    descripcion: '1988',
},
{
  id: 7,
  title: 'Beetlejuice',
        year: '1988',
        agente: 'Beetlejuice',
        descripcion: '1988',
},
{
  id: 8,
  title: 'Beetlejuice',
        year: '1988',
        agente: 'Beetlejuice',
        descripcion: '1988',
},
{
  id: 9,
  title: 'Beetlejuice',
        year: '1988',
        agente: 'Beetlejuice',
        descripcion: '1988',
},
{
  id: 10,
  title: 'Beetlejuice',
  year: '1988',
  agente: 'Beetlejuice',
  descripcion: '1988',
},
{
  id: 11,
  title: 'Beetlejuice',
        year: '1988',
        agente: 'Beetlejuice',
        descripcion: '1988',
},
{
  id: 12,
  title: 'Beetlejuice',
  year: '1988',
  agente: 'Beetlejuice',
  descripcion: '1988',
},
{
  id: 9,
  title: 'Beetlejuice',
        year: '1988',
        agente: 'Beetlejuice',
        descripcion: '1988',
},
{
  id: 10,
  title: 'Beetlejuice',
  year: '1988',
  agente: 'Beetlejuice',
  descripcion: '1988',
},
{
  id: 11,
  title: 'Beetlejuice',
        year: '1988',
        agente: 'Beetlejuice',
        descripcion: '1988',
},
{
  id: 12,
  title: 'Beetlejuice',
  year: '1988',
  agente: 'Beetlejuice',
  descripcion: '1988',
},
]

    return (
      <section>
      <div className="container px-6 m-auto p-6">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">

            

            <div className="col-span-4 lg:col-span-12">
              <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                    <div className="p-6">
                    

                    <button
                      onClick={() => setIsShowing(true)}
                      className="inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full bg-blue-50 px-6 text-sm font-medium tracking-wide text-blue-500 transition duration-300 hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-200 focus:text-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-100 disabled:text-blue-400 disabled:shadow-none transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                    >
                      <span>Crear Novedad</span>
                    </button>

                    {isShowing && typeof document !== "undefined"
                    ? ReactDOM.createPortal(
                        <div
                          className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
                          aria-labelledby="header-4a content-4a"
                          aria-modal="true"
                          tabindex="-1"
                          role="dialog"
                        >
                          {/*    <!-- Modal --> */}
                          <div
                            ref={wrapperRef}
                            className="flex max-h-[90vh] w-1/3 flex-col gap-4 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                            id="modal"
                            role="document"
                          >
                            {/*        <!-- Modal header --> */}
                            <header id="header-4a" className="flex items-center">
                              <h3 className="flex-1 text-lg font-medium text-slate-700">
                                Registro Novedades
                              </h3>
                              <button
                                onClick={() => setIsShowing(false)}
                                className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-blue-500 transition duration-300 hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-200 focus:text-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-blue-300 disabled:shadow-none disabled:hover:bg-transparent"
                                aria-label="close dialog"
                              >
                                <span className="relative only:-mx-5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    role="graphics-symbol"
                                    aria-labelledby="title-79 desc-79"
                                  >
                                    <title id="title-79">Cerrar</title>
                                    
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                </span>
                              </button>
                            </header>
                            {/*        <!-- Modal body --> */}
                            <div id="content-4a" className="flex-1">
                              <div className="flex flex-col gap-4">
                                {/*                <!-- Input nombre --> */}
                                <div className="relative">
                                  <input
                                    id="id-b03"
                                    type="email"
                                    name="id-b03"
                                    placeholder="your name"
                                    className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                  />
                                  <label
                                    htmlFor="id-b03"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                  >
                                    Ingrese el nombre
                                  </label>
                                </div>
                                {/*                <!-- Input field --> */}
                                <div className="relative my-2">
                                  <input
                                    id="id-b13"
                                    type="text"
                                    name="id-b13"
                                    placeholder="your password"
                                    className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                  />
                                  <label
                                    htmlFor="id-b13"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                  >
                                    Your password
                                  </label>
                                  
                                </div>

                                <div className="relative my-2">
                                  <input
                                    id="id-b13"
                                    type="text"
                                    name="id-b13"
                                    placeholder="your password"
                                    className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                  />
                                  <label
                                    htmlFor="id-b13"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                  >
                                    Your password
                                  </label>
                                  
                                </div>

                                <div className="relative">
                                  <textarea
                                    id="id-01"
                                    type="text"
                                    name="id-01"
                                    placeholder="Write your message"
                                    rows="3"
                                    className="peer relative w-full rounded border border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                  ></textarea>
                                  <label
                                    for="id-01"
                                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                  >
                                    Write your message
                                  </label>
                                </div>
                                
                              </div>
                            </div>
                            {/*        <!-- Modal actions --> */}
                            <div className="flex justify-center gap-2">
                              <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">
                                <span>Guardar</span>
                              </button>
                            </div>
                          </div>
                        </div>,
                        document.body
                      )
                    : null}




                    <DataTable
                columns={columns}
                data={data}
                direction="auto"
                fixedHeaderScrollHeight="300px"
                pagination
                responsive
                subHeaderAlign="right"
                subHeaderWrap
       
            />
                    
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
    );
  }
  
  export default NovedadesPage;