import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="header-wrapper">
                    <Grid container>
                        <Grid item xs={12} style={{ marginTop: 5, marginRight: 5 }}>
                            <div className="header-top-menuContainer">
                                <Button variant="text" size="small" className="header-top-buttons" style={{ textTransform: 'none', color: '#f5f5f5' }}> Home </Button>
                                <Button variant="text" size="small" className="header-top-buttons" style={{ textTransform: 'none', color: '#f5f5f5' }}> Forum </Button>
                                <Button variant="text" size="small" className="header-top-buttons" style={{ textTransform: 'none', color: '#f5f5f5' }}> Chat </Button>
                                <Button variant="text" size="small" className="header-top-buttons" style={{ textTransform: 'none', color: '#f5f5f5' }}> About </Button>
                                <Button variant="text" size="small" className="header-top-buttons" style={{ textTransform: 'none', color: '#f5f5f5' }}> FAQ </Button>
                                <Button variant="text" size="small" className="header-top-buttons" style={{ textTransform: 'none', color: '#f5f5f5' }}> Contact Us </Button>
                            </div>
                        </Grid>

                        <Grid item xs={12} style={{ marginTop: 135 }}>
                            <div className="header-bottom-menuContainer">
                                <Button variant="text" className="header-bottom-buttons" style={{ textTransform: 'none', color: '#505050' }} onClick={() => { this.setState({ topicSelected: "abortion", loading: true }) }}> Abortion </Button>
                                <Button variant="text" className="header-bottom-buttons" style={{ textTransform: 'none', color: '#505050' }} onClick={() => { this.setState({ topicSelected: "immigration", loading: true }) }}> Immigration </Button>
                                <Button variant="text" className="header-bottom-buttons" style={{ textTransform: 'none', color: '#505050' }} onClick={() => { this.setState({ topicSelected: "lgbt", loading: true }) }}> LGBTQA </Button>
                                <Button variant="text" className="header-bottom-buttons" style={{ textTransform: 'none', color: '#505050' }} onClick={() => { this.setState({ topicSelected: "marijuana", loading: true }) }}> Marijuana </Button>
                                <Button variant="text" className="header-bottom-buttons" style={{ textTransform: 'none', color: '#505050' }} onClick={() => { this.setState({ topicSelected: "gun", loading: true }) }}> Gun Policy </Button>
                                <Button variant="text" className="header-bottom-buttons" style={{ textTransform: 'none', color: '#505050' }}> Other </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;