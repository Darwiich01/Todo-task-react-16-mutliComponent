import React, {Component} from 'react';

export class visibilityControl extends Component
{
    render = () =>

    <div>
        <input className="form-check-input" 
               type= "checkbox"
               checked={ this.props.isChecked}
               onChange = { (e) => this.props.callback(e.target.checked) } />

        <label className="form-check-label">
                    Show { this.props.description }
        </label>

    </div>
}