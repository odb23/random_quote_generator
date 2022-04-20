import React from "react";
import './App.css';
import axios from "axios";

class App extends React.Component {
    state = {
        advice: "",
    }

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice });
            })
            .catch((err) => {
                console.log(err)
            });
    }

    render() {
        const { advice } = this.state;
        return (
            <div className="App">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                </div>
            </div>
        );
    }
}

export default App;