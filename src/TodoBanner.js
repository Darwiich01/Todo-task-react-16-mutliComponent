import React, { Component } from 'react';

export  class TodoBanner extends Component
{
    render =() => 

    <h4 className="bg-primary text-center text-white p-2">
            { this.props.name } Todo Task! 
            { this.props.tasks.filter(t=> !t.done ).length } Tasks To do 
    </h4>
}