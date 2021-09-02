import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import "./Main.css"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        padding: 48
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    container: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh"
    },
    blue: {
        color: "#1F75E8",
        fontWeight: "700"
    },
    pt0: {
        paddingTop: "0px"
    },
    pb0: {
        paddingBottom: "0px"
    },
    button__container: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between",
        marginTop:"40px"
    }
}));

const Main = () => {
    const classes = useStyles();

    return (

        <div className={classes.container}>
            <div>
            <div type="button" class="login-with-google" >
                        Sign in with Google
             </div>
            <Card className={classes.root}>
                <CardHeader className={classes.pb0} title="Sign in" />
                <p className={classes.pt0}>to continue to <span className={classes.blue}> Stack Exchange </span></p>

                <CardContent style={{ textAlign: "left", padding: "0px" }}>
                    <Typography variant="body2" color="textSecondary" component="div" >
                        To continue, Google will share your name, email address,
                        language preference and profile picture with Stack Exchange.
                        Before using this app, you can review
                        Stack Exchange’s <span className={classes.blue}> privacy policy </span>
                        and <span className={classes.blue}>Terms of Service </span>.
                    </Typography>
                </CardContent>
                <div className={classes.button__container}>
                    <p style={{ color: "#1F75E8", fontWeight: "500" }}>Create account</p>
                    <Button style={{ background: "#1F75E8" }} variant="contained" color="primary">
                        Next
                    </Button>
                </div>
            </Card>
            </div>
        </div>
    );
}

export default Main;