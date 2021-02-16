import React, {Component} from "react";

class TextForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:this.props.items,
            value:''
        };
        this.validationRules = this.validationRules.bind(this);
        this.updateText = this.updateText.bind(this);
    }

    validationRules(type){
        if(type==='email'){

            let re = new RegExp("^[\\w-\\.]+@[\\w-]+\\.[a-z]{2,4}$", "i");
            return re.test(this.state.value);
        }
        if(type==='tel'){
            let re = new RegExp("^\\d[\\d\\(\\)\\ -]{4,14}\\d$");
            return re.test(this.state.value);
        }
        if(type==='text'){
            return this.state.value !== '';
        }
    }

    updateText(event){
        this.setState({value: event.target.value});
        this.validationRules(this.state.items.attributes.validationRules[0].type);
    }


    render() {
        return(
                <label>
                    {this.state.items.attributes.label}
                    <input onChange={this.updateText} type={this.state.items.type} name={this.state.items.attributes.name} placeholder={this.state.items.attributes.placeholder} required={this.state.items.attributes.required} value={this.state.value} disabled={this.state.items.attributes.disabled} className={this.state.items.attributes.class}/>
                </label>
            );
    }
}
export default TextForm;