import { Avatar, IconButton, MenuItem, Menu } from "@material-ui/core";
import { Add, Apps, Menu as MenuIcon } from "@material-ui/icons";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../firebase";
import "./Navbar.css";

import { useRecoilState } from "recoil";
import { createDialogAtom, joinDialogAtom } from "../utils/atoms";
import CreateClass from "./CreateClass";
import JoinClass from "./JoinClass";

import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";


function Navbar() {
    const [user, loading, error] = useAuthState(auth);
    const [anchorEl, setAnchorEl] = useState(null);
    const [createOpened, setCreateOpened] = useRecoilState(createDialogAtom);
    const [joinOpened, setJoinOpened] = useRecoilState(joinDialogAtom);

    const navigate = useNavigate(); 

    const goToHome = () => {
        navigate("/");
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <CreateClass />
            <JoinClass />
            <nav className="navbar">
                <div className="navbar__left">
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <img
                        src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
                        alt="Google Logo"
                        className="navbar__logo"
                    />{" "}
                    <span onClick={goToHome}>Sala de aula</span>
                </div>
                <div className="navbar__right">
                    <IconButton
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <Add />
                    </IconButton>
                    <IconButton>
                        <Apps />
                    </IconButton>
                    <Tooltip title={`Clique para sair ${user?.displayName}`}>
                        <IconButton onClick={logout}>
                            <Avatar src={user?.photoURL} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => {
                            setCreateOpened(true);
                            handleClose();
                        }}>
                            Create Class
                        </MenuItem>
                        <MenuItem onClick={() => {
                            setJoinOpened(true);
                            handleClose();
                        }}>
                            Join Class
                        </MenuItem>
                    </Menu>
                </div>
            </nav>
        </>
    );
}
export default Navbar;