import React, {Component} from "react";
class CheckboxForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:this.props.items
        };
    }
    render() {
        return(
            <label>
                {this.state.items.attributes.label}
                <input onChange={this.updateText} type={this.state.items.type} name={this.state.items.attributes.name} placeholder={this.state.items.attributes.placeholder} required={this.state.items.attributes.required} checked={this.state.checked} disabled={this.state.items.attributes.disabled} className={this.state.items.attributes.class}/>
            </label>
        );
    }
}
export default CheckboxForm;