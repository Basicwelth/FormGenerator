import React, {Component} from "react";

class RadioForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:this.props.items
        };
    }
    render() {
        let renderRadio = function (item, index) {
            return(
                <input key={index} type={this.state.items.type} name={this.state.items.attributes.name} value={item.value} checked={item.checked} className={this.state.items.attributes.class}/>
            );
        };
        return(
            <label>
                {this.state.items.attributes.label}
                {this.state.items.map((item, index)=>renderRadio(item, index))}
            </label>
        );
    }
}
export default RadioForm;