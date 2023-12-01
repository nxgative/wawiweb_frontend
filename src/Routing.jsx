import { BrowserRouter, Routes, Route } from "react-router-dom"
import Welcome from "./pages/Welcome"
import Instructions from "./navbar/Instructions"
import MainPage from "./pages/MainPage"
import PersonalCalendar from "./calendar/PersonalCalendar"
import Navbar from "./components/Navbar"
import InProgress from "./pages/InProgress"
import Profile from "./navbar/Profile"
import Feedback from "./navbar/Feedback"
import Contact from "./navbar/Contact"
import MisCalendarios from "./calendar/MisCalendarios"
import GroupCalendar from "./calendar/GroupCalendar"
import CreateGroup from "./calendar/CreateGroup"
import CreatePersonal from "./calendar/CreatePersonal"
import Footer from "./components/Footer"


function Routing() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Welcome />} />
          <Route path={"/Contact"} element={<Contact />} />
          <Route path={"/CreateGroup"} element={<CreateGroup />} />
          <Route path={"/CreatePersonal"} element={<CreatePersonal />} />
          <Route path={"/Feedback"} element={<Feedback />} />
          <Route path={"/GroupCalendar"} element={<GroupCalendar />} />
          <Route path={"/Instructions"} element={<Instructions />} />
          <Route path={"/InProgress"} element={<InProgress />} />
          <Route path={"/MainPage"} element={<MainPage />} />
          <Route path={"/MisCalendarios"} element={<MisCalendarios />} />
          <Route path={"/PersonalCalendar"} element={<PersonalCalendar />} />
          <Route path={"/Profile"} element={<Profile />} />


        </Routes>
      </BrowserRouter>
      <div className="page-content">
        {/* <Footer /> */}
      </div>

    </>
  )
}
export default Routing