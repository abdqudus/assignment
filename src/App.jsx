import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Routes/Home"
import Child from "./Routes/Location"
import MainPage from "./Routes/MainPage"
import UserReviews from "./Routes/UserReviews"
import { userReviews } from "./data"
import ReviewLocation from "./Routes/ReviewLocation"
import Location from "./Routes/Location"
const App = () => {
  if (!localStorage.getItem('user-reviews')) {
    localStorage.setItem('user-reviews', JSON.stringify(userReviews))
  }
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/" element={<MainPage />} >
          <Route index element={<Home />} />
          <Route path="location/:place"  >
            <Route index element={<Location />} />
            <Route path="review" element={<ReviewLocation />} />

          </Route>
          <Route path="/reviews" element={<UserReviews />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
