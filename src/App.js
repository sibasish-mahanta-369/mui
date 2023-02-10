import { Box, Stack } from "@mui/system";
import Feed  from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import AddPost from "./components/AddPost";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction='row'  sx={{padding:{sx:"0",md:"1rem"}}}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <AddPost />
    </Box>
  );
}

export default App;
