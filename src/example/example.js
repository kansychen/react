import React from 'react';
import ShowArea from './showarea';
import Buttons from './Button';
import {Color} from './color'
function Example(){
    return (
        <div>
            <Color>
                    <ShowArea/>
                    <Buttons/>
            </Color>
        </div>
    )
}
export default Example