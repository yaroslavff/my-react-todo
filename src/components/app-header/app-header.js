import React, {Component} from "react";

export default class AppHeader extends Component{
    constructor(props) {
        super(props);
    }

    render() {

        const {all, important, completed} = this.props;
    
        return (
            <div className="app-header">
                <h1>Ваши задачи:</h1>
                <h3>{all} записей, из них: {important} важных, {completed} выполненных.</h3>
            </div>
        );
    }
};