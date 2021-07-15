import React from "react";
import {AppBar, Button, Grid, Tab, Tabs, Toolbar} from "@material-ui/core";

function NavBar(){

    return(
        <AppBar position="static">
            <Toolbar>
                <Grid >
                    <Tabs>
                        <Tab label="Accueil" />
                        <Tab label="Discussion"/>
                        <Tab label="Mon compte"/>

                    </Tabs>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;
