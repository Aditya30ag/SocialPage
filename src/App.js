import './App.css';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import LandingPage from './components/LandingPage';
import JobCategoriesSection from './components/JobCategorySection';
import LocalStatsSection from './components/LocalStatsSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import QuickApplyProcess from './components/QuickApplyProcess';


function App() {

  
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><LandingPage/></>
    },{
      path:"/Jobs",
      element:<><JobCategoriesSection/></>
    },{
      path:"/LocalStats",
      element:<><LocalStatsSection/></>
    },{
      path:"/SuccessStories",
      element:<><SuccessStoriesSection/></>
    }
    ,{
      path:"/QuickApply",
      element:<><QuickApplyProcess/></>
    }
    ,{
      path:"/Settings",
      element:<></>
    }
  ])
 
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;