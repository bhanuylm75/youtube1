import './App.css';
import Head from './components/head';
//import Sidebar from './components/Sidebar';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import Store from './components/store/store';
import Cat from "./components/CategoriesVideoCon"
import Videocontainer from './components/Videocontainer';
import Body from './components/Body';
import Watch from './components/watch';
import Search from './components/Search';


function App() {
  
  return (
    <div>
      <Provider store={Store}>
      <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children: [
      {
        path: "/",
        element: <Videocontainer />,
      },
      {
        path: "watch",
        element: <Watch/>
      },
      {
        path: "catsection",
        element: <Cat/>
      },
      {
        path: "results",
        element: <Search/>
      },
    ]

  }
])

export default App;
