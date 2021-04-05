import React from 'react';

interface IProps {
    text: string
}

interface IState {
    currentText: string,
    count: number,
    realLength: number,
    stack: string[]
}

export default class Typewriter extends React.Component<IProps>
{
    private _interval : any;
    private _typeDelay : number = 90;
    private _delete : boolean = false;

    // currentText: '|' to remove page movement on load - should find a better way to do this
    state : IState = {
        currentText: '|',
        count: 0,
        realLength: -1,
        stack: []
    }

    render(): React.ReactNode {
        return (
            <div>
                { this.state.currentText }
            </div>
        )
    }

    componentDidMount() {
        this._interval = setInterval(() => { this.updateText(); }, this._typeDelay);
    }

    componentDidUpdate() {
        let { count, realLength } = this.state;
        let { text } = this.props;

        let length = realLength;
        
        if (length === -1) {
            length = text.length;
            this.setState({ realLength: length });
        }
        
        if (count >= length) {
            clearInterval(this._interval);
        }
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }

    updateText() {
        let { count, stack } = this.state;
        let { text } = this.props;

        let skip = false;
        let newChar = text[count];

        if (newChar === '[') {
            let operator = `[${text[count+1]}]`

            if (operator === '[d]') {
                count += 2;
                skip = true;
            }

            if (operator === '[r]') {
                this._delete = true;
            }
        }

        if (newChar === ']') {
            let operator = `[${text[count-1]}]`

            if(operator === '[d]') 
            {
                this._delete = false;
                count = text.indexOf('[r]') + 2;
                skip = true;
            }
        }

        if (skip) {
            this.setState({ count: count+1 });
            return;
        }

        if (!this._delete) {
            stack.push(newChar);
            count += 1;
        } else {
            stack.pop();
            count -= 1;
        }

        this.setState({ currentText: stack.join(''), count: count })
        return;
    }
}

/*
    -- Typewriter Component --
    [d] for delete
    [r] for resume

    e.g. Hello, [d]Something[r]World
    Will type out 'Hello, Something' [delete 'Something'] then resume with 'World' for 'Hello, World'

    [!] Cannot currently handle multiple [d] & [r] sets
*/