import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

//https://unsplash.com/photos/QxjEi8Fs9Hg
class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [{
                title: 'stones',
                imageUrl: 'https://unsplash.com/photos/QxjEi8Fs9Hg',
                id: 1,
                linkUrl: 'shop/stones'
              },
              {
                title: 'rings',
                imageUrl: 'https://unsplash.com/photos/qVI9kACTvVY',
                id: 2,
                linkUrl: 'shop/rings'
              },
              {
                title: 'artifacts',
                imageUrl: 'https://unsplash.com/photos/4_ZvmLAeIZk',
                id: 3,
                linkUrl: 'shop/artifacts'
              },
              {
                title: 'armor',
                imageUrl: 'https://unsplash.com/photos/JOzv_pAkcMk',
                size: 'large',
                id: 4,
                linkUrl: 'shop/models'
              },
              {
                title: 'liquids',
                imageUrl: 'https://unsplash.com/photos/oduOp0RlPf8',
                size: 'large',
                id: 5,
                linkUrl: 'shop/liquids'
              }]
        };
    }

    render(){
        return(
            <div className="directory-menu">
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem size={size} key={id} title={title} imageUrl={imageUrl}/>
                ))}
            </div>
        )
    }
}

export default Directory;