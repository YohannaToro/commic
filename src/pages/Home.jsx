import React, { Component } from 'react';
import axios from 'axios';
import Commic from "../components/commic-component/Commic"
import "./home.scss"
import { ReactComponent as Footer } from '../assets/footer1.svg'


class Home extends Component {
    constructor() {
        super();
        var random = Math.floor(Math.random() * (2000 - 0)) + +0;
        this.state = {
            data: {
            },
            id: random
        }
    }
    async componentDidMount() {

        await axios.get(`https://xkcd.com/${this.state.id}/info.0.json`)
            .then(res => {
                this.setState({ data: res.data });
            }).catch(error => {
                var data = {
                    title: "Commic not found",
                    alt: "try again!",
                    img: null
                }
                this.setState({ data: data });
                console.log(error.response)
            })
    }

    render() {
        return (
            <div className="homepage">
                <div className="container">
                    <Commic data={this.state.data} />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;