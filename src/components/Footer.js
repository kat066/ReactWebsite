import { SvgIcon, Typography, IconButton, withStyles,Popover } from "@material-ui/core";
import React from "react"
import "../App.css"
import ScrollButton from "../components/ScrollButton"
import QR from "../assets/images/QR.jpg"
import resume from "../assets/Kaiwen Tan Resume.pdf"
import { ReactComponent as WechatIcon } from "../assets/icons/wechatIcon2.svg"
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

const styles = {

    title: {
        color: '#ffe8d6',
        fontWeight: 'bold',
        letterSpacing: '0.2em',
        fontSize: '1.2rem',
    },
    Icon: {
        fontSize: '150%',
    }
    
}
@withStyles(styles)
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            open: false,
        }
    }

    handleClick(e) {
        this.setState({
            anchorEl: e.currentTarget,
            open: true
        });

    }
    handleClose() {
        this.setState({
            anchorEl: null,
            open: false
        });

    }
    render() {
        return (
            <div className="centerFlexCol" style={{ backgroundColor: "#6b705c", margin: 'auto', }}>
                <Typography style={{ color: '#ffe8d6', fontWeight: 'bold', letterSpacing: '0.2em', fontSize: '1.2rem', marginTop: '5%' }}>
                    Contact
                </Typography>
                <Typography variant='h6' color='primary' style={{ fontWeight: 'bold', marginLeft: '15%', marginRight: '15%' }}>
                    I'd Love To Connect With You.
                </Typography>
                <div className="centerFlexSpaceBetween" >
                    <div className="centerFlexCol">
                        <IconButton href=" mailto:kevint02221999@gmail.com"
                            target="_blank"
                        >
                            <EmailIcon />
                        </IconButton>
                        <Typography style={styles.title}>
                            Email Me At
                            <br/>
                        </Typography>
                        <a href=" mailto:kevint02221999@gmail.com" target="_blank" style={{ color: '#ffe8d6', fontSize: '1.2rem', textDecorationLine: 'none' }}>
                            kevint02221999@gmail.com
                         </a>
                    </div>

                    <div className="centerFlexCol">
                        <IconButton href="https://www.linkedin.com/in/kaiwen-tan-0a7bab154/"
                            target="_blank"
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <Typography style={styles.title}>
                            LinkedIn
                            <br />
                        </Typography>
                    </div>

                    <div className="centerFlexCol">
                        <IconButton aria-describedby="QR" variant="contained"
                            onClick={this.handleClick.bind(this)}
                            className={this.props.classes.Button}
                        >
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
                            <img src={QR} style={{ width: 'min(30vh,30vw)' }} alt="QR code for my wechat" />
                        </Popover>
                        <Typography style={{
                            color: '#ffe8d6', fontWeight: 'bold',
                            letterSpacing: '0.2em', fontSize: '1.2rem',
                            marginTop: '-5%'
                        }}>
                            Wechat
                        </Typography>
                    </div>
                    <div className="centerFlexCol">
                        <IconButton href={resume} target="_blank">
                            <DescriptionOutlinedIcon />
                        </IconButton>
                        <Typography className={this.props.classes.title}>
                            Resume
                            <br />
                        </Typography>
                    </div>
                    
                </div>
                <div className="centerFlex">
                    <ScrollButton href={this.props.hrefUp} transform="scaleY(-1)" color="#b7b7a4" />
                </div>
            </div>
            );
    }
}

export default Footer;