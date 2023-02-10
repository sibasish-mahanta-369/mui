import { Add } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";
import React from "react";

const AddPost = () => {
    return (
        <>
            <Tooltip title="Delete" sx={{position:"fixed",bottom:20, left:{sm:"1rem"},right:{xs:"1rem"}}}>
            <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Tooltip>
        </>
    )
}

export default AddPost