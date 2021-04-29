import React from "react"
import "../App.css";
import { Typography, CardMedia, withStyles, IconButton, SvgIcon,Popover} from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import cover from "../assets/images/cover.jpg"
import QR from "../assets/images/QR.jpg"
import ScrollButton from "./ScrollButton"
import { ReactComponent as WechatIcon } from "../assets/icons/wechatIcon.svg"

const styles = {
    overlay: {
        position: 'absolute',
        marginTop: 'min(55vh,50vw)',
        marginLeft: '60%',
        zIndex: '10'
    },
    container: {
        whiteSpace: 'nowrap',
        background: '#141414',
    },
    image: {
        position: 'absolute',
        marginTop: '10vh',
        marginLeft: '10vw',
        height: 'auto',
        width: '70vw',
        maxHeight: '80vh',
    },
    font: {
        fontWeight: 'bolder',
        fontSize: 'min(20vh,10vw)',
        color: '#6a605c',
        '&:hover': {
            color: '#9B9987',
        },
    },
    spacer: {
        height: '90vh',
    },
    Icon: {
        color: "#6a605c",
        fontSize: 'min(5vh,5vw)',
        
    },

};

@withStyles(styles)
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            open: false,
        }
    }

    handleClick(e) {
        this.setState({
            anchorEl : e.currentTarget,
            open : true});
        
    }
    handleClose() {
        this.setState({
            anchorEl: null,
            open: false
        });

    }

    render() {
        return (
            <div className={this.props.classes.container}>
                <div className={this.props.classes.overlay}>
                    <Typography variant="h1" className={this.props.classes.font}>Kai Tan</Typography>
                    <Typography variant="h1" className={this.props.classes.font}>谭凯文</Typography>
                </div>
                <CardMedia src={cover} component="img" title="cover" className={this.props.classes.image} />
                
                <div style={styles.spacer} /> 
                <div className={"centerFlexCol"} style={{ margin: '0' }}>
                    <div style={styles.IconList}>
                        <IconButton href="https://www.instagram.com/mrtamtamtam/?hl=en" target="_blank" style={styles.Button}>
                            <InstagramIcon style={styles.Icon} />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/in/kaiwen-tan-0a7bab154" target="_blank" style={styles.Button}>
                            <LinkedInIcon style={styles.Icon} />
                        </IconButton>
                        <IconButton aria-describedby="QR" variant="contained" onClick={this.handleClick.bind(this)} className={this.props.classes.Button}>
                            <SvgIcon component={WechatIcon} style={styles.Icon} viewBox="-51.45 -69.25 445.9 415.5" />
                        </IconButton>
                        <Popover
                            id="QR"
                            anchorEl={this.state.anchorEl}
                            open={this.state.open}
                            onClose={this.handleClose.bind(this)}
                            anchorOrigin={{
                                vertical: 'center',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <img src={QR} style={{ width: 'min(30vh,30vw)' }} alt="QR code for my wechat"/>
                        </Popover>
                        <IconButton href=" mailto:kevint02221999@gmail.com" target="_blank" className={this.props.classes.Button}>
                            <EmailIcon style={styles.Icon}/>
                        </IconButton>
                    </div>
                    <ScrollButton href={this.props.href} color="#6a605c"/>
                </div>
                
                    
            </div>



        );
    }

}

export default Home;