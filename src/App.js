import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./Components/NavBar";
import SearchFeed from "./Components/SearchFeed";
import Feed from "./Components/Feed";
import ChannelDetail from "./Components/ChannelDetail";
import VideoDetail from "./Components/VideoDetail";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <NavBar />

      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/channel/:id" exact element={<ChannelDetail />} />
        <Route path="/video/:id" exact element={<VideoDetail />} />
        <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
