import React, {Component} from "react";

export default class Cell extends Component {
    state = {
            data: Array
    }
    handleTextChange(event) {
        console.log("нажал! :)")
    }
    componentDidMount() {
        fetch("http://localhost:8000/api/v1/cells/")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    data: data
                })
            });
        }

    render() {
        const { data } = this.state;
        const items = Object.keys(data).map((item, i)=>(
            <input type="text"
                   value={data[item].value}
                   onChange={this.handleTextChange}
                   key={data[item].value} />
        ))
        console.log(data)
        return <div>{items}</div>;

    }
}
