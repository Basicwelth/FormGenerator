import React, {Component} from "react";

class FillerForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:this.props.items
        };
    }

    render() {
        return(
            <div>
                {this.state.items.attributes.message}
            </div>
        );
    }
}
export default FillerForm;