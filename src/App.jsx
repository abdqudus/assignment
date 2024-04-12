import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Child from "./components/Child"
import MainPage from "./components/MainPage"
import UserReviews from "./components/UserReviews"
import { userReviews } from "./data"
import ReviewLocation from "./components/ReviewLocation"
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
            <Route index element={<Child />} />
            <Route path="review" element={<ReviewLocation />} />

          </Route>
          <Route path="/reviews" element={<UserReviews />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
