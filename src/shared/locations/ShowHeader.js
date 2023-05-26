import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';


function ShowHeader() {
    const location = useLocation();
  
    return (
      <>
        {location.pathname === "/" ? <Header /> : ""}
      </>
    );
  }
  
  export default ShowHeader;