const SHOP_DATA = [
    {
      id: 1,
      title: 'Stones',
      routeName: 'stones',
      items: [
        {
          id: 1,
          name: 'Emerald',
          imageUrl: 'https://ak6.picdn.net/shutterstock/videos/30778396/thumb/7.jpg',
          price: 25
        },
        {
          id: 2,
          name: 'Ruby',
          imageUrl: 'https://www.gemsociety.org/wp-content/uploads/2013/09/Oval-Ruby-gem-identification.png',
          price: 18
        },
        {
          id: 3,
          name: 'Sapphire',
          imageUrl: 'https://ak.picdn.net/shutterstock/videos/14075081/thumb/1.jpg',
          price: 35
        },
        {
          id: 4,
          name: 'Peridot',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51a6xMTWsGL._AC_SY450_.jpg',
          price: 25
        },
        {
          id: 5,
          name: 'Red Diamond',
          imageUrl: 'data:image/jpeg;base64,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',
          price: 18
        },
        {
          id: 6,
          name: 'Topaz',
          imageUrl: 'https://www.almanac.com/sites/default/files/image_nodes/topaz_tinaimages_shutterstock.jpg',
          price: 14
        },
        {
          id: 7,
          name: 'Blood Emerald',
          imageUrl: 'data:image/jpeg;base64,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',
          price: 18
        },
        {
          id: 8,
          name: 'Black Diamond',
          imageUrl: 'https://www.astteria.com/blog/wp-content/uploads/2019/02/black-diamonds.jpg',
          price: 14
        },
        {
          id: 9,
          name: 'Obsidian',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Lipari-Obsidienne_%285%29.jpg',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Rings',
      routeName: 'rings',
      items: [
        {
          id: 10,
          name: 'Ring Of Sauron',
          imageUrl: 'https://miro.medium.com/max/1192/1*-87C6ITZXkYbEfWDneI5sA.jpeg',
          price: 220
        },
        {
          id: 11,
          name: "GL's Ring",
          imageUrl: 'https://static3.cbrimages.com/wordpress/wp-content/uploads/2017/06/cracked-green-lantern-ring-2.jpg',
          price: 280
        },
        {
          id: 12,
          name: 'DragonCrest Ring',
          imageUrl: 'https://i.pinimg.com/originals/aa/8e/77/aa8e7792d6573a352a54d59d8b4f29dd.jpg',
          price: 110
        },
        {
          id: 13,
          name: 'Ring of HF',
          imageUrl: 'https://www.torchtorch.jp/wp-content/uploads//2019/06/darksouls-ring-of-favor-01.jpg',
          price: 160
        },
        {
          id: 14,
          name: "Havel's Ring",
          imageUrl: 'http://torchtorch.jp/wp-content/uploads/2019/06/darksouls-havel-03.jpg',
          price: 160
        },
        {
          id: 15,
          name: 'SilverCat Ring',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31Jn9vZg1yL._AC_.jpg',
          price: 160
        },
        {
          id: 16,
          name: 'Chloranthy Ring',
          imageUrl: 'https://cloudfront.first4figures.com/media/wysiwyg/Dark_Souls/TORCH_TORCH_RINGS/Chloranthy_Ring/TorchTorch_Chloranthy_Ring_1_1000x1000px.jpg',
          price: 190
        },
        {
          id: 17,
          name: 'Super Epic Sports Ball Ring',
          imageUrl: 'https://static.www.nfl.com/image/private/t_new_photo_album/league/ybgpsbd737cjwv0mmwp7.jpg',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Artifacts',
      routeName: 'artifacts',
      items: [
        {
          id: 18,
          name: 'Witchbane Orb',
          imageUrl: 'https://66.media.tumblr.com/5edf5b59b2c6a47921d9336fc31030fc/tumblr_mt8tg5H5aB1s8d9d5o1_640.jpg',
          price: 125
        },
        {
          id: 19,
          name: 'Stallion Construct',
          imageUrl: 'https://i.pinimg.com/originals/67/23/bb/6723bbb3be0828ff5b1dc36bfef90c33.jpg',
          price: 90
        },
        {
          id: 20,
          name: 'Sands Of Time',
          imageUrl: 'https://i.pinimg.com/originals/cd/bd/27/cdbd272a090931c88b8a26b863c75701.png',
          price: 90
        },
        {
          id: 21,
          name: 'Shackles Of The Divine',
          imageUrl: 'https://i.pinimg.com/originals/a5/db/2e/a5db2e1401ae39176b53cdcca6238f1a.jpg',
          price: 165
        },
        {
          id: 22,
          name: 'Egg Of Hephaestus',
          imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2b13d6f-0ee1-46aa-bfa4-2c577de5a370/dcggkkf-44139821-38db-4a3c-bcef-0553b9392343.jpg/v1/fill/w_1279,h_940,q_75,strp/mtg__transmute_artifact_by_jason_felix_by_jason_felix_dcggkkf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTQwIiwicGF0aCI6IlwvZlwvYjJiMTNkNmYtMGVlMS00NmFhLWJmYTQtMmM1NzdkZTVhMzcwXC9kY2dna2tmLTQ0MTM5ODIxLTM4ZGItNGEzYy1iY2VmLTA1NTNiOTM5MjM0My5qcGciLCJ3aWR0aCI6Ijw9MTI3OSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.j664oTUtYrMYk-vaybtVmgf9Kjek0ugC1SuktVwIoyA',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Armor',
      routeName: 'armor',
      items: [
        {
          id: 23,
          name: 'Icarus',
          imageUrl: 'https://wallup.net/wp-content/uploads/2017/11/17/198873-wings-armor.jpg',
          price: 25
        },
        {
          id: 24,
          name: 'Lich Slayer',
          imageUrl: 'https://wallup.net/wp-content/uploads/2017/03/29/487435-knight-armor-dark_background-fantasy_art.jpg',
          price: 20
        },
        {
          id: 25,
          name: 'Nazgul Slayer',
          imageUrl: 'https://i.pinimg.com/originals/7d/a6/26/7da62652ab383e14c8036ee6575a3339.jpg',
          price: 80
        },
        {
          id: 26,
          name: 'Uruk-hai Std',
          imageUrl: 'https://i.pinimg.com/736x/b0/92/78/b09278ddc940049fa4f8e59f73eec51d.jpg',
          price: 80
        },
        {
          id: 27,
          name: 'Vanguard Set',
          imageUrl: 'https://1.bp.blogspot.com/-AVdohR3sK5I/Xu4ibA0ZEXI/AAAAAAAAaAM/6DragbTDLBcPRKYv_M8IADQ5wJ-Qo6daQCLcBGAsYHQ/w914-h514-p-k-no-nu/knight-warrior-fantasy-uhdpaper.com-4K-4.3085-wp.thumbnail.jpg',
          price: 45
        },
        {
          id: 28,
          name: 'Marauder Set',
          imageUrl: 'https://cdnb.artstation.com/p/assets/images/images/004/090/031/large/david-macleod-ruan-jia-study-sm.jpg?1480268002',
          price: 135
        },
        {
          id: 29,
          name: 'Faraam Knight Armor',
          imageUrl: 'https://i.pinimg.com/originals/35/74/5e/35745eedceea181b99e4c64e867280a2.jpg',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Liquids',
      routeName: 'liquids',
      items: [
        {
          id: 30,
          name: 'Estus Flask',
          imageUrl: 'https://i.pinimg.com/originals/b0/5f/45/b05f454aa8d651baa019366455cae985.png',
          price: 325
        },
        {
          id: 31,
          name: 'Potion Of Restoration',
          imageUrl: 'https://i.pinimg.com/736x/4d/44/b9/4d44b9e3d7fb03b7dbe61f7eac587c9b.jpg',
          price: 20
        },
        {
          id: 32,
          name: 'Potion Of Agony',
          imageUrl: 'https://cdn.wallpapersafari.com/17/72/Ggim0E.jpg',
          price: 25
        },
        {
          id: 33,
          name: 'Potion Of Clarity',
          imageUrl: 'https://i.pinimg.com/736x/1a/02/95/1a02951050e55f08bdba97a39fcdd60e.jpg',
          price: 25
        },
        {
          id: 34,
          name: 'Potion Of Alacrity',
          imageUrl: 'https://c4.wallpaperflare.com/wallpaper/388/26/418/liquid-potions-ice-vera-velichko-wallpaper-preview.jpg',
          price: 40
        },
        {
          id: 35,
          name: 'Acidic Brew',
          imageUrl: 'https://i.pinimg.com/originals/4b/3c/1b/4b3c1b2b5e835b2f00a919f42ece8b36.jpg',
          price: 25
        }
      ]
    }
  ];

  export default SHOP_DATA;