import React from 'react';

interface IProps {
    text: string
}

interface IState {
    currentText: string,
    count: number,
    buffer: string,
    realLength: number,
    stack: string[]
}

export default class Typewriter extends React.Component<IProps>
{
    private _interval : any;
    private _typeDelay : number = 90;
    private _delete : boolean = false;
    private _b : boolean = false;

    state : IState = {
        currentText: '',
        count: 0,
        buffer: '',
        realLength: -1,
        stack: []
    }

    render(): React.ReactNode {
        return (
            <div style={{marginTop: "50px"}}>
                { this.state.currentText }
            </div>
        )
    }

    componentDidMount() {
        this._interval = setInterval(() => {
            this.updateText();
        }, this._typeDelay);
    }

    componentDidUpdate() {
        let { count, realLength } = this.state;
        let { text } = this.props;

        let length = realLength;
        if (length === -1) {
            length = this.getRealLength(text, realLength);
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
        console.log(newChar);

        if (newChar === '[') {
            // Read the whole operator in one go, and increase the count by 2 (or 3?)
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
                if (!this._b) {
                    console.log('---------------------------------------------');
                    this._delete = false;
                    // count needs to increase to where [r] is
                    count = text.indexOf('[r]') + 2;
                    skip = true;
                }
            }
        }

        if (skip) {
            this.setState({ count: count+1 });

            return;
        }

        if (!this._delete) 
        {
            stack.push(newChar);
            count += 1;
        }
        else 
        {
            stack.pop();
            count -= 1;
        }

        // !this._delete ? stack.push(newChar) : stack.pop();

        let a = stack.join('');

        this.setState({ currentText: a, count: count })


        return;

        // If newChar is '[' - add to buffer
        // If newChar is a normal letter but '[' is present in buffer - add to buffer
        // If newChar is ']' - follow unique process and clear buffer
    }

    getRealLength(text: string, realLength: number) : number {
        // Real length calculates the count including the characters that are deleted
        // This method makes the assumption that there is only 1 set of [d] and [r] at the moment
        // TODO - try catch to return a 0 that will either not print the text or just display the text normally

        const startIndex = text.indexOf(']');
        const endIndex = text.lastIndexOf('[');

        let newRealLength = text.length + (endIndex - startIndex);
        this.setState({ realLength: newRealLength });
        return newRealLength;
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