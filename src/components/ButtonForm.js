import React, {Component} from "react";
class ButtonForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:this.props.items
        };
    }
    render() {
        return(
                <input type={this.state.items.type} value={this.state.text} className={this.state.items.attributes.class}/>
        );
    }
}
export default ButtonForm;