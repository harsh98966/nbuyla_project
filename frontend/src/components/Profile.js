// import { Avatar, Container, Divider, Grid, List, ListItem, ListItemAvatar, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import { Button, Collapse, Paper } from "@mui/material";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ScheduleIcon from "@mui/icons-material/Schedule";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";

const Profile = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [working_hrs, setWorking_hrs] = useState("");

    const [changes, setChanges] = useState(false);

    useEffect(() => {
        setUsername("harsh");
        setEmail("19Harsh@nbyula.com");
        setWorking_hrs("4pm - 5pm");
    }, []);

    // useEffect(() =>{
    //     setChanges(true);
    // }, [username, email, working_hrs])

    return (
        <Box className="alignCenter" sx={{}}>
            <Stack
                spacing={1}
                sx={{
                    width: "100%",
                    maxWidth: 460,
                }}
                className="alignCenter"
            >
                <Paper
                    elevation={3}
                    sx={{
                        width: "100%",
                        // maxWidth: 360,
                        // border: "1px solid black",
                        bgcolor: "background.paper",
                        padding: "0.4rem",
                        paddingRight: "1.5rem",
                    }}
                >
                    <List>
                        <ListItem
                            secondaryAction={
                                <IconButton edge="end">
                                    <EditIcon />
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Name" secondary={username} />
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem
                            secondaryAction={
                                <IconButton edge="end">
                                    <EditIcon />
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <AlternateEmailIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Email" secondary={email} />
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem
                            secondaryAction={
                                <IconButton edge="end">
                                    <EditIcon />
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <VisibilityIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Password"
                                secondary={"*-*-*-*-*-*"}
                            />
                        </ListItem>
                        {/* <Divider variant="inset" component="li" /> */}
                    </List>
                </Paper>

                <Paper
                    elevation={3}
                    sx={{
                        width: "100%",
                        // maxWidth: 360,
                        // border: "1px solid black",
                        bgcolor: "background.paper",
                        padding: "0.4rem",
                        paddingRight: "1.5rem",
                    }}
                >
                    <List>
                        <ListItem
                            secondaryAction={
                                <IconButton edge="end" onClick={() => setChanges(true)}>
                                    <EditIcon />
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <ScheduleIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Working Timings"
                                secondary={working_hrs}
                            />
                        </ListItem>
                    </List>
                </Paper>
                <Collapse in={changes} timeout="auto" unmountOnExit>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        // sx={{ mt: "30", mb: 2}}
                    >
                        Save Changes
                    </Button>
                </Collapse>
            </Stack>
        </Box>
    );
};

export default Profile;
