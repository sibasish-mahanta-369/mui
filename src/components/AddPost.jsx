import { Add } from "@mui/icons-material";
import { Fab, Modal, styled, Tooltip } from "@mui/material";
import React, { useState } from "react";
import PostBox from "./PostBox";

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})


const AddPost = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip title="Post" sx={{ position: "fixed", bottom: 20, left: { sm: "1rem" }, right: { xs: "1rem" } }}
                onClick={e=>setOpen(true)}>
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <PostBox />
            </StyledModal>
        </>
    )
}

export default AddPost