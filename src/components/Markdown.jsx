import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown'
import '../app.css';

class Markdown extends React.Component {
    constructor() {
        this.state = {
            md: "# This is a header\n\nAnd this is a paragraph",
        };
    }

    componentDidMount() {
        console.log('Entry point.');

        this.setState(md);
    }

    render()
        return (
            
        );
}

// Pull in from README.md
const testInput = '# This is a header\n\nAnd this is a paragraph'

React.render(<Markdown source={this.state.md} />, document.body)

export default Markdown;