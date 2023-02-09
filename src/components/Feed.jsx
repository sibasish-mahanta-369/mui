import { Box} from "@mui/material";
import React from "react";
import Post from "./Post"

const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Post imgUrl="https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" userName="Ethan Chen"/>
            <Post imgUrl="https://images.unsplash.com/photo-1489913950164-7d78e51b250b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1151&q=80" userName="Noah Davis"/>
            <Post imgUrl="https://images.unsplash.com/photo-1513786704796-b35842f0dca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" userName="Sophia Garcia" />
            <Post imgUrl="https://images.unsplash.com/photo-1468112014733-deb9e1f8ddd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" userName="Lily Adams"/>
            <Post imgUrl="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80" userName="Liam Smith" />
        </Box>
    )
}

export default Feed