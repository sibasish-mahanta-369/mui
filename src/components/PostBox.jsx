import { Box, Button, ButtonGroup, Stack, TextField, Typography } from "@mui/material";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
import React from "react";

const PostBox = () => {
    return (
        <Box height={200} width={380} p={3} m={1} borderRadius={5} bgcolor="white">
            <Typography variant="h6" color="grey" textAlign="center">Create post</Typography>
            <TextField
                id="standard-multiline-static"
                multiline
                rows={4}
                placeholder="What's on your mind..."
                variant="standard"
                sx={{ width: "100%" }}
            />
            <Stack direction="row" gap={1} m={1}>
                <InsertEmoticonIcon />
                <AddPhotoAlternateIcon />
                <VideoCallIcon />
                <PersonAddIcon />
            </Stack>
            <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                <Button>Post</Button>
                <Button sx={{width:"25%"}}><DateRangeIcon /></Button>
            </ButtonGroup>
        </Box>
    )
}

export default PostBox