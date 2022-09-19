// import { Avatar, Container, Divider, Grid, List, ListItem, ListItemAvatar, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import {
    Button,
    Collapse,
    Container,
    Dialog,
    DialogTitle,
    Grid,
    Paper,
    TextField,
} from "@mui/material";

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

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const [changes, setChanges] = useState(false);

    const [open, setOpen] = useState(false);

    const [dialogTitle, setDialogTitle] = useState("");

    useEffect(() => {
        setUsername("harsh");
        setEmail("19Harsh@nbyula.com");
        // setWorking_hrs("4pm - 5pm");
        setStartTime("14:22");
        setEndTime("15:22");
    }, []);

    // useEffect(() =>{
    //     setChanges(true);
    // }, [username, email, working_hrs])

    return (
        <>
            <Box className="alignCenter" sx={{ mt: 1 }}>
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
                                    <IconButton
                                        edge="end"
                                        onClick={() => setChanges(true)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <AccountCircleIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Name"
                                    secondary={username}
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />

                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <AlternateEmailIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Email"
                                    secondary={email}
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />

                            <ListItem
                                secondaryAction={
                                    <IconButton
                                        edge="end"
                                        onClick={() => setChanges(true)}
                                    >
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
                                    <IconButton
                                        edge="end"
                                        onClick={() => {
                                            setChanges(true);
                                            setOpen(true);
                                            setDialogTitle(
                                                "Edit Working Hours"
                                            );
                                        }}
                                    >
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
                                    secondary={`${startTime} - ${endTime}`}
                                />
                            </ListItem>
                        </List>
                    </Paper>

                    {/* <Collapse in={changes} timeout="auto" unmountOnExit>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            // sx={{ mt: "30", mb: 2}}
                        >
                            Save Changes
                        </Button>
                    </Collapse> */}
                </Stack>
            </Box>
            <Dialog
                
                open={open}
            >
                <DialogTitle>{dialogTitle}</DialogTitle>
                <Grid
                    container
                    spacing={3}
                    sx={{
                        width: "25rem",
                        p: 4,
                    }}
                >
                    <Grid item md={12}>
                        <TextField
                            required
                            fullWidth
                            id="startTime"
                            label="Enter Start Time"
                            name="startTime"
                            type="time"
                            value={startTime}
                            onChange={(e) => {
                                let hrs = e.target.value.split(":")[0];
                                let min = e.target.value.split(":")[1];

                                let hrs2 = endTime.split(":")[0];
                                let min2 = endTime.split(":")[1];
                                if (hrs < hrs2) setStartTime(e.target.value);
                                else if (hrs == hrs2 && min < min2)
                                    setStartTime(e.target.value);
                            }}
                        />
                    </Grid>

                    <Grid item md={12}>
                        <TextField
                            required
                            fullWidth
                            id="endTime"
                            label="Enter End Time"
                            name="endTime"
                            type="time"
                            value={endTime}
                            onChange={(e) => {
                                let hrs = e.target.value.split(":")[0];
                                let min = e.target.value.split(":")[1];

                                let hrs2 = startTime.split(":")[0];
                                let min2 = startTime.split(":")[1];
                                if (hrs > hrs2) setStartTime(e.target.value);
                                else if (hrs == hrs2 && min > min2)
                                    setEndTime(e.target.value);
                            }}
                        />
                    </Grid>

                    <Grid item md={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"

                            onClick={(e) => {
                                
                            }}
                            // sx={{ mt: 3, mb: 2, mr: 10, ml: 10 }}
                        >
                            Save Changes
                        </Button>
                    </Grid>
                </Grid>
            </Dialog>
        </>
    );
};

export default Profile;
