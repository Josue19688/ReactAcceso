import React from 'react'
import { Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/loginPage';

export const PrivateRoutes = ({
    isAutenticated,
    component:Component,
    ...rest
}) => {
  return (
    <Routes>
        <Route {...rest} 
            component={(props)=>(
                (isAutenticated)
                    ? <Component {...props}/>
                    : <Component index  path="/" element={<LoginPage />} />
            )}
        />
     </Routes>
  )
}
