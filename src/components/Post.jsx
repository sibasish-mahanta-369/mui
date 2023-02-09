import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import {Share, Favorite, MoreVert, FavoriteBorder} from "@mui/icons-material"
import React from "react";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Post = (props) =>{
    const {imgUrl, userName} = props
    return (
        <Card sx={{marginBottom:2}}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe">
                        DP
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                    }
                    title={userName}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    image={imgUrl}
                    alt="Post image"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi dolores debitis facere consequuntur architecto laborum odit possimus quia molestiae eius.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
                    </IconButton>
                    <IconButton aria-label="share">
                    <Share />
                    </IconButton>
                </CardActions>
            </Card>
    )
}

export default Post
