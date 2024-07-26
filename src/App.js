import Assesments from "./Assesments";
import Attendance from "./Attendance";
import Classes from "./classes";
import Placements from "./placements";
function App(){
return(
  <>
  <h1>
    Kodnest App
    <Classes/>
    <Attendance/>
    <Placements/>
    <Assesments/>
    </h1>
  </>
  
);
}
export default App;
