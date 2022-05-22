import React from "react";

import './ButtonTheme.css'


export default class ButtonTheme extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value:'Dark'}
        this.changeTheme = this.changeTheme.bind(this)
    }

    changeTheme() {
        this.setState({value: (this.state.value==='Dark') ? 'Light': 'Dark'})
        var r = document.querySelector('.theme');

        if (this.state.value==="Dark"){
            r.style.setProperty('--theme', 'rgba(34, 25, 25, 0.692)')
            r.style.setProperty('--theme-text', 'white')

        } else{
            r.style.setProperty('--theme', 'rgba(236, 236, 236, 0.992)')
            r.style.setProperty('--theme-text', 'rgb(46, 46, 46)')
        }
    }

    render () {

        return (
            <div className="theme">
                <button onClick={this.changeTheme}>{this.state.value}</button>
            </div>
        )
    }
}