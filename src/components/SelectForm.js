import React, {Component} from "react";

class SelectForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:this.props.items
        };
    }
    render() {
        let selectRender = function (item, index) {
            return (<option key={index} value={item.value} selected={item.selected}>{item.text}</option>);
        };
        return(
            <label>
                {this.state.items.attributes.label}
                <select name={this.state.items.attributes.name} disabled={this.state.items.attributes.disabled} className={this.state.items.attributes.class}>
                    {this.state.items.attributes.options.map((item, index)=>selectRender(item, index))}
                </select>
            </label>
        );
    }
}
export default SelectForm;