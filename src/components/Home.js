import React from "react"
import "../App.css";
import { Typography, CardMedia, withStyles} from '@material-ui/core'
import cover from "../assets/images/cover.jpg"
import ScrollButton from "./ScrollButton"
const styles = {
    overlay: {
        position: 'absolute',
        marginTop: '10vh',
        marginLeft: '40%',
        zIndex: '10'
    },
    container: {
        whiteSpace: 'nowrap',
        height: '100vh',
        maxHeight: '70vw',
    },
    image: {
        position: 'absolute',
        marginTop: '10vh',
        marginLeft: '20%',
        height: 'auto',
        width: '35vw',
        maxHeight: '80vh',
    },
    font: {
        fontWeight: 'bolder',
        fontSize: '10vw',
        '&:hover': {
            color: '#8db1ab',
        },
    },
    spacer: {
        height: '90%',
    }
};

@withStyles(styles)
class Home extends React.Component {
    render() {
        return (
            <div className={this.props.classes.container}>
                <div className={this.props.classes.overlay}>
                    <Typography variant="h1" className={this.props.classes.font}>Kai Tan</Typography>
                    <Typography variant="h1" className={this.props.classes.font}>谭凯文</Typography>
                </div>
                <CardMedia src={cover} component="img" title="cover" className={this.props.classes.image} />
                <div className={this.props.classes.spacer} />
                <div className={"centerFlex"}>
                    <ScrollButton href={this.props.href} />
                </div>
                
                    
            </div>



        );
    }

}

export default Home;