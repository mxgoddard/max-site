import React, { FunctionComponent } from 'react';

type TypewriterProps = {
    text: string
}

export const Typewriter: FunctionComponent<TypewriterProps> = ({ text }) => <aside>
    {
        text.split('').map(function(b:string) {
            
        })
    }
    <h3>{ text }</h3>
</aside>

/*
    -- Typewriter Component --
    [s] for start
    [d] for delete
    [r] for resume

    e.g. \sHello, \dSomething\rWorld
    Will type out 'Hello, Something' [delete 'Something'] then resume with 'World' for 'Hello, World'
*/