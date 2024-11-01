
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import PropTypes from "prop-types";
import { IconButton, useMediaQuery } from "@mui/material";
import { Close } from "@mui/icons-material";
export default function MyModal({
    children,
    show,
    unShow,
    width,
    height,
    // overflowY,
    // padding,
    maxHeight,
    // NoBackDropClose,
    maxWidth,
}) {
    const isMobile = useMediaQuery("(max-width:870px)");
    // const style = {
    //   position: "absolute",
    //   top: "50%",
    //   left: "50%",
    //   transform: "translate(-50%, -50%)",
    //   width: width ? width : 600,
    //   height: height ? height : 600,
    //   overflowY: overflowY ? "scroll" : "",
    //   // bgcolor: darkMode ? white.main : dark.main,
    //   border: "0px solid #000",
    //   boxShadow: 24,
    //   borderRadius: 8,
    //   p: padding ? padding : 4,
    //   scrollBehavior: "smooth",
    //   "&::-webkit-scrollbar": {
    //     width: "0.4em",
    //     display: "none",
    //   },
    // };
    return (
        <div>
            <Modal
                open={show}
                onClose={unShow}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        backgroundColor: "white",
                        position: "absolute",
                        top: "60%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: isMobile ? "98%" : width ? width : "auto",
                        maxWidth: isMobile ? "98%" : maxWidth ? maxWidth : "90%",
                        height: height ? height : "100%",
                        borderRadius: 2.5,
                        maxHeight: maxHeight ? maxHeight : "98%",
                        boxShadow: 24,
                        p: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // overflowY: "scroll",
                        // scrollBehavior: "smooth",
                        // "&::-webkit-scrollbar": {
                        //   display: "none",
                        // },
                    }}
                >
                    <IconButton
                        onClick={() => {
                            unShow(false);
                        }}
                        sx={{
                            // color: error.main,
                            position: "absolute",
                            top: 10.5,
                            right: 10.5,
                            border: "2px solid transparent",
                            background:
                                "linear-gradient(#fff,#fff) padding-box, linear-gradient(to top, #115C8E, #F4829D) border-box",
                            height: "2rem",
                            width: "2rem",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 999,
                        }}
                    >
                        {" "}
                        <Close
                            style={{
                                backgroundImage: "linear-gradient(to top, #115C8E, #F4829D)",
                                backgroundSize: "100%",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                MozBackgroundClip: "text",
                                MozTextFillColor: "transparent",
                            }}
                        />{" "}
                    </IconButton>
                    <Box
                        sx={{
                            backgroundColor: "transparent",
                            // border: 3,
                            // borderColor: 'green',
                            width: "100%",
                            height: "100%",
                            overflowY: "auto",

                            scrollBehavior: "smooth",
                        }}
                    >
                        {children}
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}