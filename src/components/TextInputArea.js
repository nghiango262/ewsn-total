import React from "react";
import { render } from "react-dom";
//import { TransitionMotion, spring } from "react-motion";
import "../../styles/components/_text_input_area.scss";

export default class TextInputArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: (props.locked && props.active) || false,
            value: props.value || "",
            error: props.error || "",
            label: props.label || "Label"
        };
    }

    changeValue(event) {
        const value = event.target.value;
        this.setState({ value, error: "" });
    }

    handleKeyPress(event) {
        if (event.which === 13) {
        this.setState({ value: this.props.predicted });
        }
    }

    render() {
        const { active, value, error, label } = this.state;
        const { predicted, locked } = this.props;
        const fieldClassName = `field ${(locked ? active : active || value) &&
        "active"} ${locked && !active && "locked"}`;

        console.log(`data input ${JSON.stringify(this.props)}`)
        console.log(`Statedata input ${JSON.stringify(this.state)}`)
        return (
            <div className={fieldClassName}>
                {active &&
                value &&
                predicted &&
                predicted.includes(value) && <p className="predicted">{predicted}</p>}
                <textarea
                    id={1}
                    type="text"
                    value={value}
                    placeholder={label}
                    onChange={this.changeValue.bind(this)}
                    onKeyPress={this.handleKeyPress.bind(this)}
                    onFocus={() => !locked && this.setState({ active: true })}
                    onBlur={() => !locked && this.setState({ active: false })}
                />
                <label htmlFor={1} className={error && "error"}>
                {error || label}
                </label>
            </div>
        );
    }
}

