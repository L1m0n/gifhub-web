import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const presenter = ({offset, query, navigate}) => {
    return (
        <div>
            <FloatingActionButton disabled={(offset <= 0) ? true : false} secondary={true} onTouchTap={() => {navigate(offset-25, 'gifs', query)}} >
                <NavigationChevronLeft />
            </FloatingActionButton>
            <FloatingActionButton secondary={true} onTouchTap={() => {navigate(offset+25, 'gifs', query)}} >
                <NavigationChevronRight />
            </FloatingActionButton>
        </div>
    )
};

export default presenter;