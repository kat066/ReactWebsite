import React from "react"
import "../App.css";
import { Box, Grid, Typography, CardMedia, withStyles } from '@material-ui/core'
import cover from "../assets/images/cover.jpg"

const styles = {
    overlay: {
        position: 'absolute',
        marginLeft: '40vw',
        
    },
    container: {
        position: 'relative',
        whiteSpace: 'nowrap',
    },
   image: {
        height: 'auto',
        width: '50vw',
    },
    font: {
        
        fontWeight: 'bolder',
        fontSize: '8vw',
        '&:hover': {
            color: '#8db1ab',
        },
    }
};


function MainPage (props) {
    return (
        <Box>
            <Grid container >
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={3} style={styles.container}>
                    <Box style={styles.overlay}>
                        <Typography variant="h1" className={props.classes.font}>Kai Tan</Typography>
                        <Typography variant="h1" className={props.classes.font}>谭凯文</Typography>
                    </Box>

                    <CardMedia src={cover} component="img" title="cover" style={styles.image} />
                </Grid>
                <Grid item xs={6} >
                    <div>

                    </div>
                </Grid>

            </Grid>
        </Box>

    );
}

export default withStyles(styles)(MainPage);
