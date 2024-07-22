import ChessBoard from "../Components/Models/ChessBoard";
import ChessboardGrid from "./Grids/ChessboardGrid";
import MonitorGrid from "./Grids/MonitorGrid";
import OpinionStatGrid from "./Grids/OpinionStatGrid";
import ThirdPage from "./Grids/ThirdPage";

const ThirdSection = () => {


  return (
  <>

<MonitorGrid/>
<ThirdPage/>
  <ChessboardGrid/>
  <OpinionStatGrid/>
    </>
  );
};

export default ThirdSection;
