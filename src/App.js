import React, {Component} from "react";
import TextForm from "./components/TextForm";
import FillerForm from "./components/FillerForm";
import CheckboxForm from "./components/CheckboxForm";
import ButtonForm from "./components/ButtonForm";
import SelectForm from "./components/SelectForm";
import RadioForm from "./components/RadioForm";
import './App.css';
let xhr;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: '',
            items:[]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "/request.json", true);
        xhr.send();
        xhr.addEventListener("load", this.processRequest, false);
    }

    processRequest() {
        let resp = JSON.parse(xhr.response);
        this.setState({
            obj: resp.form,
            items:resp.form.items
        });
    }

    handleSubmit(event) {
        alert(this.state.obj.postmessage);
        event.preventDefault();
    }

    render() {
        let formRender = function(item, index){
            if (item.type === "filler"){
                return (<FillerForm key={index} items={item}/>)
            }
            if (item.type === "text"||"textarea") {
                return (<TextForm key={index} items={item}/>);
            }
            if (item.type === "checkbox") {
                return (<CheckboxForm key={index} items={item}/>);
            }
            if (item.type === "button") {
                return (<ButtonForm key={index} items={item}/>);
            }
            if (item.type === "select") {
                return (<SelectForm key={index} items={item}/>);
            }
            if (item.type === "radio") {
                return (<RadioForm key={index} items={item}/>);
            }
        };
        return (
            <div>
                <h1>Генератор форм</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>{this.state.obj.name}</div>
                    {this.state.items.map((item, index)=>formRender(item, index))}
            </form>
            </div>
        );

    }

}
export default App;