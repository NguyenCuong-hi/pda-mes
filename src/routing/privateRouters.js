import { Route, Routes } from "react-router-dom";
import MoveIn from "../movein/movein";

const PrivateRouter = () => {

    return (
        <Routes>
            <Route path ='move-in' element= { <MoveIn />} />
        </Routes>
    )
}

export default PrivateRouter;