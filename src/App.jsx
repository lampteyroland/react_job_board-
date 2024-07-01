import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Homepage from "./pages/homepage.jsx";
import Mainlayout from "./layout/mainlayout.jsx";
import Jobspage from "./pages/jobspage.jsx";
import Notfoundpage from "./pages/notfoundpage.jsx";


const router = createBrowserRouter(

    createRoutesFromElements(
        <Route path='/' element={<Mainlayout/>}>
        <Route index element={<Homepage/> }  />
            <Route path='/jobs' element={<Jobspage/>} />
            <Route path='*' element={<Notfoundpage/>}/>

        </Route>

    )
)
const App = () => {
    return (
        <RouterProvider router={router}/>
    )
}
export default App
