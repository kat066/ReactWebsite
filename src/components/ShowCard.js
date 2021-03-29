import React from "react";
import { Typography, Card, CardMedia, withStyles, Button,CardActions, CardActionArea, CardContent } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
const styles = {
    card: {
        width: '300px',
        height: '300px',
        borderRadius: "2%",
    },
    popUp: {
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '999',
        width: '100vw',
        height: '100vh',
        background: "rgba(0, 0, 0, 0.7)",
        display: 'flex',
        justifyContent: 'center',

    },
    cardInfo: {
        width: '600px',
        height: '700px',
        alignSelf: 'center',
    },
    action: {
/*        "&:hover": {
            background: "#000000",
            opacity: 0.1,
        }*/
    },
    img: {
        width: '300px',
        height: '300px',

    },
    imgInfo: {
        width: '600px',
        height: '400px',
        objectPosition : '50% top',

    },
    content: {
        background: "rgba(0, 0, 0, 0.7)",
        position: 'absolute',
        marginTop: '0px',
        marginLeft: '0px',
        width: '300px',
        height: '300px',
        zIndex: '2',
    },
    hidden: {
        visibility: 'hidden',
    },
    visible: {
        visibility: 'visible',
    },
    fontTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    font: {
        fontSize: '15px',
        fontWeight: 'lighter',
        marginTop: '5px',
    },
    center: {
        position: 'absolute',
        top: "45%",
        left: "41%",

    },
    button: {
        color: 'white',
        fontWeight: 'bolder',
        fontSize: '15px',
    }


}

@withStyles(styles)
class ShowCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            clicked:false,
        }
    }
    handleMouseOver() {
        this.setState({
            hover: true,
        });
    }
    handleMouseLeave() {
        this.setState({
            hover: false,
        });
    }
    handleOnClick() {
        this.setState({
            clicked: true,
        });
    }
    handleOnClickPopUp(e) {
        console.log(e);
        let target = document.getElementById("PopUpCard");
        let leftBoundary = target.offsetLeft;
        let topBoundary = target.offsetTop;
        let rightBoundary = leftBoundary + target.offsetWidth;
        let bottomBoundary = target.offsetTop + target.offsetHeight;
        let xPosition = e.clientX;
        let yPosition = e.clientY;
        if (xPosition < leftBoundary || xPosition > rightBoundary || yPosition < topBoundary || yPosition > bottomBoundary) {
            this.setState({
                clicked: false,
            });
        }
    }
    handleOnClose() {
        this.setState({
            clicked: false,
        });
    }
    render() {
        return (
            <div>
                <div style={styles.popUp}
                    className={this.state.clicked ? this.props.classes.visible : this.props.classes.hidden}
                    onClick={this.handleOnClickPopUp.bind(this)}>
                    <Card id="PopUpCard" style={styles.cardInfo}>
                        <CardMedia src={this.props.src} component="img" title="TritonGroup" style={styles.imgInfo} alt="App image"/>
                        <CardContent style={{ height: '220px', background:"#e9ecef"}}>
                            <Typography color="secondary" style={styles.fontTitle}>{this.props.title}</Typography>
                            <Typography color="secondary" style={styles.font}>
                                {this.props.children}
                            </Typography>
                        </CardContent>
                        <CardActions style={{ background: '#212529', height: '80px'}}>
                            <Button style={styles.button} href={this.props.href} target="_blank">
                                DETAILS
                            </Button>
                            <Button style={styles.button} onClick={this.handleOnClose.bind(this)}>
                                CLOSE
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                
                <Card style={styles.card}
                    onMouseOver={this.handleMouseOver.bind(this)}
                    onMouseLeave={this.handleMouseLeave.bind(this)}
                    onClick={this.handleOnClick.bind(this)}>
                    <CardContent className={this.state.hover ? this.props.classes.visible : this.props.classes.hidden} style={styles.content} >
                        <MoreHorizIcon color="primary" style={styles.center} />
                        <Typography color="primary" style={styles.fontTitle}>{this.props.title}</Typography>
                        <Typography color="primary" style={styles.font}>{this.props.type}</Typography>

                    </CardContent>
                    <CardActionArea classes={{ root: this.props.classes.action }}>
                        <CardMedia src={this.props.src} component="img" title="TritonGroup" style={styles.img} alt="App image"/>
                    </CardActionArea>
                </Card>
            </div>

        );
    }
}
ShowCard.defaultProps = {
    href: "http://www.google.com",
    type: "Web Development",
    title: "app title",
    src: "",
}
export default ShowCard;