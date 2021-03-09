import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

//https://unsplash.com/photos/QxjEi8Fs9Hg
class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [{
                title: 'Stones',
                imageUrl: 'https://i.pinimg.com/originals/7a/e6/9b/7ae69b1be31ea40a0f28d1f0411a04ae.jpg',
                id: 1,
                linkUrl: 'shop/stones'
              },
              {
                title: 'Rings',
                imageUrl: 'https://c4.wallpaperflare.com/wallpaper/159/647/823/sauron-the-one-ring-wallpaper-preview.jpg',
                id: 2,
                linkUrl: 'shop/rings'
              },
              {
                title: 'Artifacts',
                imageUrl: 'https://wallpapercave.com/wp/wp2814607.jpg',
                id: 3,
                linkUrl: 'shop/artifacts'
              },
              {
                title: 'Armor',
                imageUrl: 'https://wallpaperaccess.com/full/325342.jpg',
                size: 'large',
                id: 4,
                linkUrl: 'shop/models'
              },
              {
                title: 'Liquids',
                imageUrl: 'https://c4.wallpaperflare.com/wallpaper/739/846/567/vera-velichko-potions-liquid-fire-wallpaper-preview.jpg',
                size: 'large',
                id: 5,
                linkUrl: 'shop/liquids'
              }]
        };
    }

    render(){
        return(
            <div className="directory-menu">
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )
    }
}

export default Directory;