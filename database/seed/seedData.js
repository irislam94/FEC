const { connection, Product, Color, Photo, Fabric, Feature } = require('../model.js');

const productSeedData = [
  {
    name: 'Wunder Under High-Rise Tight',
    nameline2: 'Full-On Luxtreme 28"',
    category: 'Bottoms',
    type: 'Pants',
    price: '$98.00',
    description: 'These versatile high-rise tights were designed to fit like a second skin—perfect for yoga or the gym. Made with Full-On® Luxtreme fabric that offers great support and coverage with a cool, smooth feel.',
    fabric_name: 'Full-On® Luxtreme',
    fabric_description: 'Four-way stretch Full-On® Luxtreme fabric is sweat-wicking and offers great support and coverage with a cool, smooth feel'
  },
  {
    name: 'Wunder Lounge Pant',
    nameline2: '28"',
    category: 'Bottoms',
    type: 'Pants',
    price: '$98.00',
    description: 'The no-fuss versatility of your favourite Wunder Under, with a looser fit and warm cottony-soft fabric to give you the comfort you crave on the coldest days.',
    fabric_name: 'Cotton Fleece',
    fabric_description: 'Naturally breathable Cotton Fleece fabric feels thick, soft and cozy long after you\'ve cooled down'
  },
  {
    name: 'In Movement 7/8 Tight',
    nameline2: 'Everlux 25"',
    category: 'Bottoms',
    type: 'Pants',
    price: '$98.00',
    description: 'Meet your new studio workout companion: a sleek tight that fits like a second skin. Stretchy Everlux™ fabric dries quickly and wicks sweat in a flash, so you can go straight from pilates to spin.',
    fabric_name: 'Everlux™',
    fabric_description: 'Four-way stretch Everlux™ fabric feels cool to the touch, wicks sweat, and dries so fast it’s like magic'
  },
  {
    name: 'Fast & Free 7/8 Tight II',
    nameline2: 'Nulux 25"',
    category: 'Bottoms',
    type: 'Pants',
    price: '$128.00',
    description: 'Feel fast and free in these barely-there, sweat-wicking run tights. An interior waist drawcord ensures the perfect fit, while reflective details keep you visible in low light. Designed with our Naked Sensation quick-drying Nulux™ fabric, they’ll have you hitting the pavement while floating on clouds. Stash you gels and a key in the waistband pocket.',
    fabric_name: 'Nulux™',
    fabric_description: 'Nulux™ fabric is quick-drying, sweat-wicking, and offers lightweight coverage'
  },
  {
    name: 'Tight Stuff Tight II',
    nameline2: 'Online Only 25"',
    category: 'Bottoms',
    type: 'Pants',
    price: '$148.00',
    description: 'We engineered these training tights with moderate compression to help stabilize your muscles—and included lots of storage options. Made with Full-On® Luxtreme fabric that offers great support and coverage with a smooth feel and is sweat-wicking and four-way stretch.',
    fabric_name: 'Full-On® Luxtreme',
    fabric_description: 'Four-way stretch Full-On® Luxtreme fabric is sweat-wicking and offers great support and coverage with a cool, smooth feel'
  },
  {
    name: 'Speed Up Tight',
    nameline2: 'Full-On Luxtreme 28"',
    category: 'Bottoms',
    type: 'Pants',
    price: '$108.00',
    description: 'Focus on your gait, not your gear, in these lightweight, sweat-wicking run tights that are fully loaded with built-in storage and reflectivity. We made these tights using our high-coverage and supportive Full-on® Luxtreme fabric that\'s sweat-wicking and four-way stretch with a cool, smooth feel. The waistband is not only lightweight and won\'t dig in, it has slip-in gel pockets in the front, a zippered pocket in the back, and a continuous interior drawcord.',
    fabric_name: 'Full-On® Luxtreme',
    fabric_description: 'Four-way stretch Full-On® Luxtreme fabric is sweat-wicking and offers great support and coverage with a cool, smooth feel'
  },
  {
    name: 'Pace Rival Crop',
    nameline2: '22"',
    category: 'Bottoms',
    type: 'Crops',
    price: '$88.00',
    description: 'These versatile run crops, with built-in ventilation, have you covered from long runs to hill training. With our signature 3 pocket waistband, you can bring all your essentials with you.',
    fabric_name: 'Full-On® Luxtreme',
    fabric_description: 'Four-way stretch Full-On® Luxtreme fabric is sweat-wicking and offers great support and coverage with a cool, smooth feel'
  },
  {
    name: 'Align Jogger Crop',
    nameline2: '23"',
    category: 'Bottoms',
    type: 'Crops',
    price: '$88.00',
    description: 'Designed with our unbelievably soft Nulu™ fabric and a relaxed fit at the leg, this jogger gives you the perfect no-distractions feeling.',
    fabric_name: 'Nulu™',
    fabric_description: 'Lightweight, buttery-soft Nulu™ fabric wicks sweat and is four-way stretch'
  },
  {
    name: 'In Movement Crop',
    nameline2: 'Everlux 19" Online Only',
    category: 'Bottoms',
    type: 'Crops',
    price: '$88.00',
    description: 'Meet your new studio workout companion: a sleek crop that fits like a second skin. Everlux™ fabric is four-way stretch, sweat-wicking, feels cool to the touch, and dries so fast it’s like magic.',
    fabric_name: 'Everlux™',
    fabric_description: 'Four-way stretch Everlux™ fabric feels cool to the touch, wicks sweat, and dries so fast it’s like magic'
  },
  {
    name: 'All The Right Places Crop II',
    nameline2: '23"',
    category: 'Bottoms',
    type: 'Crops',
    price: '$118.00',
    description: 'These high-rise, all-sport crops use zoned compression to keep you supported in all the right places.',
    fabric_name: 'Full-On® Luxtreme',
    fabric_description: 'Four-way stretch Full-On® Luxtreme fabric is sweat-wicking and offers great support and coverage with a cool, smooth feel'
  },
  {
    name: 'Align Short',
    nameline2: '4"',
    category: 'Bottoms',
    type: 'Shorts',
    price: '$48.00',
    description: 'These lightweight, high-rise shorts minimize distractions and maximize comfort as you flow through your yoga practice.',
    fabric_name: 'Nulux™',
    fabric_description: 'Nulux™ fabric is quick-drying, sweat-wicking, and offers lightweight coverage'

  },
  {
    name: 'Run Times Short II',
    nameline2: '4"',
    category: 'Bottoms',
    type: 'Shorts',
    price: '$58.00',
    description: 'Looking for a longer run short? We updated the waistband on this classic design, but kept the 4" inseam.',
    fabric_name: 'Swift Ultra Light',
    fabric_description: 'Four-way stretch Swift Ultra Light fabric is an airy, lightweight fabric woven to wick sweat and provide airflow—seriously, it’s like being in the buff'

  },
  {
    name: 'Hotty Hot Short',
    nameline2: '2.5"',
    category: 'Bottoms',
    type: 'Shorts',
    price: '$58.00',
    description: 'Sweat to your heart\'s content in these lightweight cross-sport shorts that are lined for coverage. They have a secret stash pocket in the liner and a discreet zippered pocket on the back waistband for keys, cards, gels, or cash.',
    fabric_name: 'Swift Ultra',
    fabric_description: 'Woven for strength and no-bulk performance—Swift Ultra fabric is sweat-wicking, four-way stretch and quick drying'

  }
];

const colorSeedData = [
  {
    name: 'Misty Merlot',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product1_swatch_color1.jpeg',
    productId: 1
  },
  {
    name: 'Frosted Rose Multi',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product1_swatch_color2.jpeg',
    productId: 1
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product1_swatch_color3.jpeg',
    productId: 1
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product1_swatch_color4.jpeg',
    productId: 1
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product1_swatch_color5.jpeg',
    productId: 1
  },
  {
    name: 'Heathered Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product1_swatch_color6.jpeg',
    productId: 1
  },
  {
    name: 'Dark Adobe',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product2_swatch_color1.jpeg',
    productId: 2
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product2_swatch_color2.jpeg',
    productId: 2
  },
  {
    name: 'Heathered Core Medium Grey',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product2_swatch_color3.jpeg',
    productId: 2
  },
  {
    name: 'Dark Shadow',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product3_swatch_color1.jpeg',
    productId: 3
  },
  {
    name: 'Paisley Glaze Multi',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product3_swatch_color2.jpeg',
    productId: 3
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product3_swatch_color3.jpeg',
    productId: 3
  },
  {
    name: 'Nocturnal Teal',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product3_swatch_color4.jpeg',
    productId: 3
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product3_swatch_color5.jpeg',
    productId: 3
  },
  {
    name: 'Dark Adobe',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product3_swatch_color6.jpeg',
    productId: 3
  },
  {
    name: 'Violet Red',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product4_swatch_color1.jpeg',
    productId: 4
  },
  {
    name: 'Meisai White Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product4_swatch_color2.jpeg',
    productId: 4
  },
  {
    name: 'Melanite',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product4_swatch_color3.jpeg',
    productId: 4
  },
  {
    name: 'Green Smoke',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product4_swatch_color4.jpeg',
    productId: 4
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product4_swatch_color5.jpeg',
    productId: 4
  },
  {
    name: 'Dark Carbon',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product4_swatch_color6.jpeg',
    productId: 4
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product4_swatch_color7.jpeg',
    productId: 4
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product4_swatch_color8.jpeg',
    productId: 4
  },
  {
    name: 'Titanium',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product5_swatch_color1.jpeg',
    productId: 5
  },
  {
    name: 'Dark Adobe',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product5_swatch_color2.jpeg',
    productId: 5
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product5_swatch_color3.jpeg',
    productId: 5
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product5_swatch_color4.jpeg',
    productId: 5
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product6_swatch_color1.jpeg',
    productId: 6
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product6_swatch_color2.jpeg',
    productId: 6
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product6_swatch_color3.jpeg',
    productId: 6
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product7_swatch_color1.jpeg',
    productId: 7
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product7_swatch_color2.jpeg',
    productId: 7
  },
  {
    name: 'Dark Adobe',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product7_swatch_color3.jpeg',
    productId: 7
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product7_swatch_color4.jpeg',
    productId: 7
  },
  {
    name: 'Heathered Black/Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product7_swatch_color5.jpeg',
    productId: 7
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product8_swatch_color1.jpeg',
    productId: 8
  },
  {
    name: 'Moonphase',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product8_swatch_color2.jpeg',
    productId: 8
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product8_swatch_color3.jpeg',
    productId: 8
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product8_swatch_color4.jpeg',
    productId: 8
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product9_swatch_color1.jpeg',
    productId: 9
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product9_swatch_color2.jpeg',
    productId: 9
  },
  {
    name: 'Violet Red',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color1.jpeg',
    productId: 10
  },
  {
    name: 'Spanish Rose',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color2.jpeg',
    productId: 10
  },
  {
    name: 'Titanium',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color3.jpeg',
    productId: 10
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color4.jpeg',
    productId: 10
  },
  {
    name: 'White',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color5.jpeg',
    productId: 10
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color6.jpeg',
    productId: 10
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color7.jpeg',
    productId: 10
  },
  {
    name: 'Sage',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color8.jpeg',
    productId: 10
  },
  {
    name: 'Dark Adobe',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color9.jpeg',
    productId: 10
  },
  {
    name: 'Lacescape Spanish Rose Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product11_swatch_color1.jpeg',
    productId: 11
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product11_swatch_color2.jpeg',
    productId: 11
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product11_swatch_color3.jpeg',
    productId: 11
  },
  {
    name: 'Dark Adobe',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product11_swatch_color4.jpeg',
    productId: 11
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product11_swatch_color5.jpeg',
    productId: 11
  },
  {
    name: 'Luminesce Splatter Ice Grey Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product11_swatch_color6.jpeg',
    productId: 11
  },
  {
    name: 'Dark Adobe',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product12_swatch_color1.jpeg',
    productId: 12
  },
  {
    name: 'Luminosity Foil Print Black Silver/Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product12_swatch_color2.jpeg',
    productId: 12
  },
  {
    name: 'Green Smoke',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product12_swatch_color3.jpeg',
    productId: 12
  },
  {
    name: 'Heather Lux Multi Black/Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product12_swatch_color4.jpeg',
    productId: 12
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product12_swatch_color5.jpeg',
    productId: 12
  },
  {
    name: 'White',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product12_swatch_color6.jpeg',
    productId: 12
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product12_swatch_color7.jpeg',
    productId: 12
  },
  {
    name: 'Midnight Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product13_swatch_color1.jpeg',
    productId: 13
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product13_swatch_color2.jpeg',
    productId: 13
  },
  {
    name: 'White',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product13_swatch_color3.jpeg',
    productId: 13
  }
];

const photoSeedData = [
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color1_photo1.jpeg',
    colorId: 1
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color1_photo2.jpeg',
    colorId: 1
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color1_photo3.jpeg',
    colorId: 1
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color1_photo4.jpeg',
    colorId: 1
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color1_photo5.jpeg',
    colorId: 1
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color2_photo1.jpeg',
    colorId: 2
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color2_photo2.jpeg',
    colorId: 2
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color2_photo3.jpeg',
    colorId: 2
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color2_photo4.jpeg',
    colorId: 2
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color2_photo5.jpeg',
    colorId: 2
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color2_photo6.jpeg',
    colorId: 2
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color3_photo1.jpeg',
    colorId: 3
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color3_photo2.jpeg',
    colorId: 3
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color3_photo3.jpeg',
    colorId: 3
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color3_photo4.jpeg',
    colorId: 3
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color3_photo5.jpeg',
    colorId: 3
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color3_photo6.jpeg',
    colorId: 3
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color4_photo1.jpeg',
    colorId: 4
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color4_photo2.jpeg',
    colorId: 4
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color4_photo3.jpeg',
    colorId: 4
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color4_photo4.jpeg',
    colorId: 4
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color4_photo5.jpeg',
    colorId: 4
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color4_photo6.jpeg',
    colorId: 4
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color5_photo1.jpeg',
    colorId: 5
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color5_photo2.jpeg',
    colorId: 5
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color5_photo3.jpeg',
    colorId: 5
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color5_photo4.jpeg',
    colorId: 5
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color5_photo5.jpeg',
    colorId: 5
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color5_photo6.jpeg',
    colorId: 5
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color6_photo1.jpeg',
    colorId: 6
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color6_photo2.jpeg',
    colorId: 6
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color6_photo3.jpeg',
    colorId: 6
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color6_photo4.jpeg',
    colorId: 6
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color6_photo5.jpeg',
    colorId: 6
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color1_photo1.jpeg',
    colorId: 7
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color1_photo2.jpeg',
    colorId: 7
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color1_photo3.jpeg',
    colorId: 7
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color1_photo4.jpeg',
    colorId: 7
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color1_photo5.jpeg',
    colorId: 7
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color1_photo6.jpeg',
    colorId: 7
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color2_photo1.jpeg',
    colorId: 8
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color2_photo2.jpeg',
    colorId: 8
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color2_photo3.jpeg',
    colorId: 8
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color2_photo4.jpeg',
    colorId: 8
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color2_photo5.jpeg',
    colorId: 8
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color2_photo6.jpeg',
    colorId: 8
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color3_photo1.jpeg',
    colorId: 9
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color3_photo2.jpeg',
    colorId: 9
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color3_photo3.jpeg',
    colorId: 9
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color3_photo4.jpeg',
    colorId: 9
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color3_photo5.jpeg',
    colorId: 9
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color1_photo1.jpeg',
    colorId: 10
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color1_photo2.jpeg',
    colorId: 10
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color1_photo3.jpeg',
    colorId: 10
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color1_photo4.jpeg',
    colorId: 10
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color2_photo1.jpeg',
    colorId: 11
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color2_photo2.jpeg',
    colorId: 11
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color2_photo3.jpeg',
    colorId: 11
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color2_photo4.jpeg',
    colorId: 11
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color2_photo5.jpeg',
    colorId: 11
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color2_photo6.jpeg',
    colorId: 11
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color3_photo1.jpeg',
    colorId: 12
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color3_photo2.jpeg',
    colorId: 12
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color3_photo3.jpeg',
    colorId: 12
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color3_photo4.jpeg',
    colorId: 12
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color3_photo5.jpeg',
    colorId: 12
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color3_photo6.jpeg',
    colorId: 12
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color4_photo1.jpeg',
    colorId: 13
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color4_photo2.jpeg',
    colorId: 13
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color4_photo3.jpeg',
    colorId: 13
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color4_photo4.jpeg',
    colorId: 13
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color4_photo5.jpeg',
    colorId: 13
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color5_photo1.jpeg',
    colorId: 14
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color5_photo2.jpeg',
    colorId: 14
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color5_photo3.jpeg',
    colorId: 14
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color5_photo4.jpeg',
    colorId: 14
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color5_photo5.jpeg',
    colorId: 14
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color6_photo1.jpeg',
    colorId: 15
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color6_photo2.jpeg',
    colorId: 15
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color6_photo3.jpeg',
    colorId: 15
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color6_photo4.jpeg',
    colorId: 15
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color6_photo5.jpeg',
    colorId: 15
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color6_photo6.jpeg',
    colorId: 15
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color1_photo1.jpeg',
    colorId: 16
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color1_photo2.jpeg',
    colorId: 16
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color1_photo3.jpeg',
    colorId: 16
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color1_photo4.jpeg',
    colorId: 16
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color1_photo5.jpeg',
    colorId: 16
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color1_photo6.jpeg',
    colorId: 16
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color1_photo7.jpeg',
    colorId: 16
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color2_photo1.jpeg',
    colorId: 17
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color2_photo2.jpeg',
    colorId: 17
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color2_photo3.jpeg',
    colorId: 17
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color2_photo4.jpeg',
    colorId: 17
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color2_photo5.jpeg',
    colorId: 17
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color2_photo6.jpeg',
    colorId: 17
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color3_photo1.jpeg',
    colorId: 18
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color3_photo2.jpeg',
    colorId: 18
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color3_photo3.jpeg',
    colorId: 18
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color3_photo4.jpeg',
    colorId: 18
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color3_photo5.jpeg',
    colorId: 18
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color3_photo6.jpeg',
    colorId: 18
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color3_photo7.jpeg',
    colorId: 18
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color4_photo1.jpeg',
    colorId: 19
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color4_photo2.jpeg',
    colorId: 19
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color4_photo3.jpeg',
    colorId: 19
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color4_photo4.jpeg',
    colorId: 19
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color4_photo5.jpeg',
    colorId: 19
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color4_photo6.jpeg',
    colorId: 19
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color4_photo7.jpeg',
    colorId: 19
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color5_photo1.jpeg',
    colorId: 20
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color5_photo2.jpeg',
    colorId: 20
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color5_photo3.jpeg',
    colorId: 20
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color5_photo4.jpeg',
    colorId: 20
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color5_photo5.jpeg',
    colorId: 20
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color5_photo6.jpeg',
    colorId: 20
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color5_photo7.jpeg',
    colorId: 20
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color5_photo8.jpeg',
    colorId: 20
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color6_photo1.jpeg',
    colorId: 21
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color6_photo2.jpeg',
    colorId: 21
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color6_photo3.jpeg',
    colorId: 21
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color6_photo4.jpeg',
    colorId: 21
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color6_photo5.jpeg',
    colorId: 21
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color6_photo6.jpeg',
    colorId: 21
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color6_photo7.jpeg',
    colorId: 21
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo1.jpeg',
    colorId: 22
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo2.jpeg',
    colorId: 22
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo3.jpeg',
    colorId: 22
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo4.jpeg',
    colorId: 22
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo5.jpeg',
    colorId: 22
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo6.jpeg',
    colorId: 22
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo7.jpeg',
    colorId: 22
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo8.jpeg',
    colorId: 22
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo1.jpeg',
    colorId: 23
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo2.jpeg',
    colorId: 23
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo3.jpeg',
    colorId: 23
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo4.jpeg',
    colorId: 23
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo5.jpeg',
    colorId: 23
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo6.jpeg',
    colorId: 23
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo7.jpeg',
    colorId: 23
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color1_photo1.jpeg',
    colorId: 24
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color1_photo2.jpeg',
    colorId: 24
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color1_photo3.jpeg',
    colorId: 24
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color1_photo4.jpeg',
    colorId: 24
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color1_photo5.jpeg',
    colorId: 24
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color1_photo6.jpeg',
    colorId: 24
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color2_photo1.jpeg',
    colorId: 25
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color2_photo2.jpeg',
    colorId: 25
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color2_photo3.jpeg',
    colorId: 25
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color2_photo4.jpeg',
    colorId: 25
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color2_photo5.jpeg',
    colorId: 25
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color2_photo6.jpeg',
    colorId: 25
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color3_photo1.jpeg',
    colorId: 26
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color3_photo2.jpeg',
    colorId: 26
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color3_photo3.jpeg',
    colorId: 26
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color3_photo4.jpeg',
    colorId: 26
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color3_photo5.jpeg',
    colorId: 26
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color3_photo6.jpeg',
    colorId: 26
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color3_photo7.jpeg',
    colorId: 26
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo1.jpeg',
    colorId: 27
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo2.jpeg',
    colorId: 27
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo3.jpeg',
    colorId: 27
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo4.jpeg',
    colorId: 27
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo5.jpeg',
    colorId: 27
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo6.jpeg',
    colorId: 27
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo7.jpeg',
    colorId: 27
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo8.jpeg',
    colorId: 27
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo9.jpeg',
    colorId: 27
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color1_photo1.jpeg',
    colorId: 28
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color1_photo2.jpeg',
    colorId: 28
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color1_photo3.jpeg',
    colorId: 28
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color1_photo4.jpeg',
    colorId: 28
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color1_photo5.jpeg',
    colorId: 28
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color1_photo6.jpeg',
    colorId: 28
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color1_photo7.jpeg',
    colorId: 28
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color1_photo8.jpeg',
    colorId: 28
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color2_photo1.jpeg',
    colorId: 29
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color2_photo2.jpeg',
    colorId: 29
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color2_photo3.jpeg',
    colorId: 29
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color2_photo4.jpeg',
    colorId: 29
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color2_photo5.jpeg',
    colorId: 29
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color2_photo6.jpeg',
    colorId: 29
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color2_photo7.jpeg',
    colorId: 29
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color3_photo1.jpeg',
    colorId: 30
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color3_photo2.jpeg',
    colorId: 30
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color3_photo3.jpeg',
    colorId: 30
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color3_photo4.jpeg',
    colorId: 30
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color3_photo5.jpeg',
    colorId: 30
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color3_photo6.jpeg',
    colorId: 30
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color3_photo7.jpeg',
    colorId: 30
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color1_photo1.jpeg',
    colorId: 31
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color1_photo2.jpeg',
    colorId: 31
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color1_photo3.jpeg',
    colorId: 31
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color1_photo4.jpeg',
    colorId: 31
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color1_photo5.jpeg',
    colorId: 31
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color1_photo6.jpeg',
    colorId: 31
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color1_photo7.jpeg',
    colorId: 31
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color2_photo1.jpeg',
    colorId: 32
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color2_photo2.jpeg',
    colorId: 32
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color2_photo3.jpeg',
    colorId: 32
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color2_photo4.jpeg',
    colorId: 32
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color2_photo5.jpeg',
    colorId: 32
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color2_photo6.jpeg',
    colorId: 32
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color2_photo7.jpeg',
    colorId: 32
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color3_photo1.jpeg',
    colorId: 33
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color3_photo2.jpeg',
    colorId: 33
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color3_photo3.jpeg',
    colorId: 33
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color3_photo4.jpeg',
    colorId: 33
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color3_photo5.jpeg',
    colorId: 33
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color3_photo6.jpeg',
    colorId: 33
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color4_photo1.jpeg',
    colorId: 34
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color4_photo2.jpeg',
    colorId: 34
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color4_photo3.jpeg',
    colorId: 34
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color4_photo4.jpeg',
    colorId: 34
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color4_photo5.jpeg',
    colorId: 34
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color4_photo6.jpeg',
    colorId: 34
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color4_photo7.jpeg',
    colorId: 34
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color5_photo1.jpeg',
    colorId: 35
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color5_photo2.jpeg',
    colorId: 35
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color5_photo3.jpeg',
    colorId: 35
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color5_photo4.jpeg',
    colorId: 35
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color1_photo1.jpeg',
    colorId: 36
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color1_photo2.jpeg',
    colorId: 36
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color1_photo3.jpeg',
    colorId: 36
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color1_photo4.jpeg',
    colorId: 36
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color1_photo5.jpeg',
    colorId: 36
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color1_photo6.jpeg',
    colorId: 36
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color2_photo1.jpeg',
    colorId: 37
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color2_photo2.jpeg',
    colorId: 37
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color2_photo3.jpeg',
    colorId: 37
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color2_photo4.jpeg',
    colorId: 37
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color2_photo5.jpeg',
    colorId: 37
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color2_photo6.jpeg',
    colorId: 37
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color3_photo1.jpeg',
    colorId: 38
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color3_photo2.jpeg',
    colorId: 38
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color3_photo3.jpeg',
    colorId: 38
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color3_photo4.jpeg',
    colorId: 38
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color3_photo5.jpeg',
    colorId: 38
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color3_photo6.jpeg',
    colorId: 38
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color4_photo1.jpeg',
    colorId: 39
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color4_photo2.jpeg',
    colorId: 39
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color4_photo3.jpeg',
    colorId: 39
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color4_photo4.jpeg',
    colorId: 39
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color4_photo5.jpeg',
    colorId: 39
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color4_photo6.jpeg',
    colorId: 39
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color1_photo1.jpeg',
    colorId: 40
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color1_photo2.jpeg',
    colorId: 40
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color1_photo3.jpeg',
    colorId: 40
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color1_photo4.jpeg',
    colorId: 40
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color1_photo5.jpeg',
    colorId: 40
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color1_photo6.jpeg',
    colorId: 40
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color2_photo1.jpeg',
    colorId: 41
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color2_photo2.jpeg',
    colorId: 41
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color2_photo3.jpeg',
    colorId: 41
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color2_photo4.jpeg',
    colorId: 41
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color2_photo5.jpeg',
    colorId: 41
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color2_photo6.jpeg',
    colorId: 41
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color1_photo1.jpeg',
    colorId: 42
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color1_photo2.jpeg',
    colorId: 42
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color1_photo3.jpeg',
    colorId: 42
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color1_photo4.jpeg',
    colorId: 42
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color1_photo5.jpeg',
    colorId: 42
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color1_photo6.jpeg',
    colorId: 42
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color2_photo1.jpeg',
    colorId: 43
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color2_photo2.jpeg',
    colorId: 43
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color2_photo3.jpeg',
    colorId: 43
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color2_photo4.jpeg',
    colorId: 43
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color2_photo5.jpeg',
    colorId: 43
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color3_photo1.jpeg',
    colorId: 44
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color3_photo2.jpeg',
    colorId: 44
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color3_photo3.jpeg',
    colorId: 44
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color3_photo4.jpeg',
    colorId: 44
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color3_photo5.jpeg',
    colorId: 44
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color3_photo6.jpeg',
    colorId: 44
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color3_photo7.jpeg',
    colorId: 44
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color4_photo1.jpeg',
    colorId: 45
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color4_photo2.jpeg',
    colorId: 45
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color4_photo3.jpeg',
    colorId: 45
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color4_photo4.jpeg',
    colorId: 45
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color4_photo5.jpeg',
    colorId: 45
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color4_photo6.jpeg',
    colorId: 45
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color5_photo1.jpeg',
    colorId: 46
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color5_photo2.jpeg',
    colorId: 46
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color5_photo3.jpeg',
    colorId: 46
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color5_photo4.jpeg',
    colorId: 46
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color5_photo5.jpeg',
    colorId: 46
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color5_photo6.jpeg',
    colorId: 46
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color6_photo1.jpeg',
    colorId: 47
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color6_photo2.jpeg',
    colorId: 47
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color6_photo3.jpeg',
    colorId: 47
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color6_photo4.jpeg',
    colorId: 47
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color6_photo5.jpeg',
    colorId: 47
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color6_photo6.jpeg',
    colorId: 47
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color7_photo1.jpeg',
    colorId: 48
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color7_photo2.jpeg',
    colorId: 48
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color7_photo3.jpeg',
    colorId: 48
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color7_photo4.jpeg',
    colorId: 48
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color7_photo5.jpeg',
    colorId: 48
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color7_photo6.jpeg',
    colorId: 48
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color7_photo7.jpeg',
    colorId: 48
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color7_photo8.jpeg',
    colorId: 48
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color8_photo1.jpeg',
    colorId: 49
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color8_photo2.jpeg',
    colorId: 49
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color8_photo3.jpeg',
    colorId: 49
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color8_photo4.jpeg',
    colorId: 49
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color8_photo5.jpeg',
    colorId: 49
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color9_photo1.jpeg',
    colorId: 50
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color9_photo2.jpeg',
    colorId: 50
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color9_photo3.jpeg',
    colorId: 50
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color9_photo4.jpeg',
    colorId: 50
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color9_photo5.jpeg',
    colorId: 50
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color9_photo6.jpeg',
    colorId: 50
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color1_photo1.jpeg',
    colorId: 51
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color1_photo2.jpeg',
    colorId: 51
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color1_photo3.jpeg',
    colorId: 51
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color1_photo4.jpeg',
    colorId: 51
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color1_photo5.jpeg',
    colorId: 51
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color1_photo6.jpeg',
    colorId: 51
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color2_photo1.jpeg',
    colorId: 52
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color2_photo2.jpeg',
    colorId: 52
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color2_photo3.jpeg',
    colorId: 52
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color2_photo4.jpeg',
    colorId: 52
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color2_photo5.jpeg',
    colorId: 52
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color2_photo6.jpeg',
    colorId: 52
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color3_photo1.jpeg',
    colorId: 53
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color3_photo2.jpeg',
    colorId: 53
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color3_photo3.jpeg',
    colorId: 53
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color3_photo4.jpeg',
    colorId: 53
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color3_photo5.jpeg',
    colorId: 53
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color3_photo6.jpeg',
    colorId: 53
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color4_photo1.jpeg',
    colorId: 54
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color4_photo2.jpeg',
    colorId: 54
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color4_photo3.jpeg',
    colorId: 54
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color4_photo4.jpeg',
    colorId: 54
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color4_photo5.jpeg',
    colorId: 54
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color4_photo6.jpeg',
    colorId: 54
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color5_photo1.jpeg',
    colorId: 55
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color5_photo2.jpeg',
    colorId: 55
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color5_photo3.jpeg',
    colorId: 55
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color5_photo4.jpeg',
    colorId: 55
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color5_photo5.jpeg',
    colorId: 55
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color5_photo6.jpeg',
    colorId: 55
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color6_photo1.jpeg',
    colorId: 56
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color6_photo2.jpeg',
    colorId: 56
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color6_photo3.jpeg',
    colorId: 56
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color6_photo4.jpeg',
    colorId: 56
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color6_photo5.jpeg',
    colorId: 56
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color6_photo6.jpeg',
    colorId: 56
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color1_photo1.jpeg',
    colorId: 57
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color1_photo2.jpeg',
    colorId: 57
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color1_photo3.jpeg',
    colorId: 57
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color1_photo4.jpeg',
    colorId: 57
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color1_photo5.jpeg',
    colorId: 57
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color2_photo1.jpeg',
    colorId: 58
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color2_photo2.jpeg',
    colorId: 58
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color2_photo3.jpeg',
    colorId: 58
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color2_photo4.jpeg',
    colorId: 58
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color3_photo1.jpeg',
    colorId: 59
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color3_photo2.jpeg',
    colorId: 59
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color3_photo3.jpeg',
    colorId: 59
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color3_photo4.jpeg',
    colorId: 59
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color3_photo5.jpeg',
    colorId: 59
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color3_photo6.jpeg',
    colorId: 59
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color4_photo1.jpeg',
    colorId: 60
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color4_photo2.jpeg',
    colorId: 60
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color4_photo3.jpeg',
    colorId: 60
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color4_photo4.jpeg',
    colorId: 60
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color4_photo5.jpeg',
    colorId: 60
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color5_photo1.jpeg',
    colorId: 61
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color5_photo2.jpeg',
    colorId: 61
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color5_photo3.jpeg',
    colorId: 61
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color5_photo4.jpeg',
    colorId: 61
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color5_photo5.jpeg',
    colorId: 61
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color5_photo6.jpeg',
    colorId: 61
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color6_photo1.jpeg',
    colorId: 62
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color6_photo2.jpeg',
    colorId: 62
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color6_photo3.jpeg',
    colorId: 62
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color6_photo4.jpeg',
    colorId: 62
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color6_photo5.jpeg',
    colorId: 62
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color7_photo1.jpeg',
    colorId: 63
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color7_photo2.jpeg',
    colorId: 63
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color7_photo3.jpeg',
    colorId: 63
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color7_photo4.jpeg',
    colorId: 63
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color7_photo5.jpeg',
    colorId: 63
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color7_photo6.jpeg',
    colorId: 63
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color1_photo1.jpeg',
    colorId: 64
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color1_photo2.jpeg',
    colorId: 64
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color1_photo3.jpeg',
    colorId: 64
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color1_photo4.jpeg',
    colorId: 64
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color1_photo5.jpeg',
    colorId: 64
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color1_photo6.jpeg',
    colorId: 64
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color1_photo7.jpeg',
    colorId: 64
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color2_photo1.jpeg',
    colorId: 65
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color2_photo2.jpeg',
    colorId: 65
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color2_photo3.jpeg',
    colorId: 65
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color2_photo4.jpeg',
    colorId: 65
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color2_photo5.jpeg',
    colorId: 65
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color2_photo6.jpeg',
    colorId: 65
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color3_photo1.jpeg',
    colorId: 66
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color3_photo2.jpeg',
    colorId: 66
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color3_photo3.jpeg',
    colorId: 66
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color3_photo4.jpeg',
    colorId: 66
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color3_photo5.jpeg',
    colorId: 66
  }
];

const fabricSeedData = [
  {
    fabric_benefit: 'Incredible Support And Coverage',
    productId: 1
  },
  {
    fabric_benefit: 'Sweat-Wicking',
    productId: 1
  },
  {
    fabric_benefit: 'Four-Way Stretch',
    productId: 1
  },
  {
    fabric_benefit: 'Cool',
    productId: 1
  },
  {
    fabric_benefit: 'Smooth Handfeel',
    productId: 1
  },
  {
    fabric_benefit: 'Naturally Breathable',
    productId: 1
  },
  {
    fabric_benefit: 'Soft And Cozy',
    productId: 2
  },
  {
    fabric_benefit: 'Naturally Breathable',
    productId: 2
  },
  {
    fabric_benefit: 'Heat Retention',
    productId: 2
  },
  {
    fabric_benefit: 'Incredible Support And Coverage',
    productId: 5
  },
  {
    fabric_benefit: 'Sweat-Wicking',
    productId: 5
  },
  {
    fabric_benefit: 'Four-Way Stretch',
    productId: 5
  },
  {
    fabric_benefit: 'Cool',
    productId: 5
  },
  {
    fabric_benefit: 'Smooth Handfeel',
    productId: 5
  },
  {
    fabric_benefit: 'Naturally Breathable',
    productId: 5
  },
  {
    fabric_benefit: 'Incredible Support And Coverage',
    productId: 6
  },
  {
    fabric_benefit: 'Sweat-Wicking',
    productId: 6
  },
  {
    fabric_benefit: 'Four-Way Stretch',
    productId: 6
  },
  {
    fabric_benefit: 'Cool',
    productId: 6
  },
  {
    fabric_benefit: 'Smooth Handfeel',
    productId: 6
  },
  {
    fabric_benefit: 'Naturally Breathable',
    productId: 6
  },
  {
    fabric_benefit: 'Incredible Support And Coverage',
    productId: 7
  },
  {
    fabric_benefit: 'Sweat-Wicking',
    productId: 7
  },
  {
    fabric_benefit: 'Four-Way Stretch',
    productId: 7
  },
  {
    fabric_benefit: 'Cool',
    productId: 7
  },
  {
    fabric_benefit: 'Smooth Handfeel',
    productId: 7
  },
  {
    fabric_benefit: 'Naturally Breathable',
    productId: 7
  },
  {
    fabric_benefit: 'Buttery-Soft Handfeel',
    productId: 8
  },
  {
    fabric_benefit: 'Lightweight',
    productId: 8
  },
  {
    fabric_benefit: 'Sweat-Wicking',
    productId: 8
  },
  {
    fabric_benefit: 'Four-Way Stretch',
    productId: 8
  },
  {
    fabric_benefit: 'Incredible Support And Coverage',
    productId: 10
  },
  {
    fabric_benefit: 'Sweat-Wicking',
    productId: 10
  },
  {
    fabric_benefit: 'Four-Way Stretch',
    productId: 10
  },
  {
    fabric_benefit: 'Cool',
    productId: 10
  },
  {
    fabric_benefit: 'Smooth Handfeel',
    productId: 10
  },
  {
    fabric_benefit: 'Naturally Breathable',
    productId: 10
  },
  {
    fabric_benefit: 'Buttery-Soft Handfeel',
    productId: 11
  },
  {
    fabric_benefit: 'Lightweight',
    productId: 11
  },
  {
    fabric_benefit: 'Sweat-Wicking',
    productId: 11
  },
  {
    fabric_benefit: 'Four-Way Stretch',
    productId: 11
  },
  {
    fabric_benefit: 'Four-Way Stretch',
    productId: 12
  },
  {
    fabric_benefit: 'Lightweight',
    productId: 12
  },
  {
    fabric_benefit: 'Sweat-Wicking',
    productId: 12
  },
  {
    fabric_benefit: 'Woven For Airflow',
    productId: 12
  },
  {
    fabric_benefit: 'Quick Dry',
    productId: 13
  },
  {
    fabric_benefit: 'No-Bulk Performance',
    productId: 13
  },
  {
    fabric_benefit: 'Woven For Strength',
    productId: 13
  },
  {
    fabric_benefit: 'Four-Way Stretch',
    productId: 13
  },
  {
    fabric_benefit: 'Sweat-Wicking',
    productId: 13
  }
];

const featureSeedData = [
  {
    feature_name: 'Designed For',
    feature_description: 'Yoga, Train',
    productId: 1
  },
  {
    feature_name: 'Lycra®',
    feature_description: 'Added Lycra® Fibre For Stretch And Shape Retention',
    productId: 1
  },
  {
    feature_name: 'Comfortable Waistband',
    feature_description: 'Lies Flat Against Your Skin And Won\'t Dig In',
    productId: 1
  },
  {
    feature_name: 'Waistband Storage',
    feature_description: 'Pocket On The Waistband Holds Your Key Or Card',
    productId: 1
  },
  {
    feature_name: 'Hugged Sensation',
    feature_description: 'Engineered To Feel Like A Comfortable Embrace Throughout—It Holds You Close And Moves With You',
    productId: 1
  },
  {
    feature_name: 'Inseam',
    feature_description: '28"',
    productId: 1
  },
  {
    feature_name: 'Designed For',
    feature_description: 'Office Travel Commute',
    productId: 2
  },
  {
    feature_name: 'Inseam',
    feature_description: '28"',
    productId: 2
  },
  {
    feature_name: 'Designed For',
    feature_description: 'Train, Yoga',
    productId: 3
  },
  {
    feature_name: 'LYCRA®',
    feature_description: 'Added Lycra® Fibre For Shape Retention',
    productId: 3
  },
  {
    feature_name: 'Hidden Pocket',
    feature_description: 'Stash Your Essentials In The Hidden Waistband Pocket',
    productId: 3
  },
  {
    feature_name: 'High-Rise',
    feature_description: 'Keeps You Feeling Covered And Secure',
    productId: 3
  },
  {
    feature_name: 'Hugged Sensation',
    feature_description: 'Engineered To Feel Like A Comfortable Embrace Throughout—It Holds You Close And Moves With You',
    productId: 3
  },
  {
    feature_name: 'Inseam',
    feature_description: '25"',
    productId: 3
  },
  {
    feature_name: 'Designed For',
    feature_description: 'Run, Train',
    productId: 4
  },
  {
    feature_name: 'Lycra®',
    feature_description: 'Added Lycra® Fibre For Stretch And Shape Retention',
    productId: 4
  },
  {
    feature_name: 'Hidden Pocket',
    feature_description: 'Stash Your Essentials In The Hidden Waistband Pocket',
    productId: 4
  },
  {
    feature_name: 'Interior Drawcord',
    feature_description: 'Cinch The Waist Drawcord To Customize Your Fit',
    productId: 4
  },
  {
    feature_name: 'High-Rise',
    feature_description: 'Keeps You Feeling Covered And Secure',
    productId: 4
  },
  {
    feature_name: 'Naked Sensation',
    feature_description: 'Engineered To Feel Like Your Go-To, Lightweight, Second-Skin Layer—You\'ll Forget You\'re Wearing This Next-To-Nothing Sensation As You Move',
    productId: 4
  },
  {
    feature_name: 'Reflective Details',
    feature_description: 'Intentionally Placed For Visibility In Low Light',
    productId: 4
  },
  {
    feature_name: 'Inseam',
    feature_description: '25"',
    productId: 4
  },
  {
    feature_name: 'Designed For',
    feature_description: 'Run',
    productId: 5
  },
  {
    feature_name: 'Fit',
    feature_description: 'Designed To Sit At The Waist With A Second-Skin Fit',
    productId: 5
  },
  {
    feature_name: 'POCKETS',
    feature_description: 'Stash Your Gear In Pockets On The Back And Thigh',
    productId: 5
  },
  {
    feature_name: 'ROOM TO MOVE',
    feature_description: 'Made To Be Little Looser At The Knee For Comfort And Mobility',
    productId: 5
  },
  {
    feature_name: 'DROP-IN POCKETS',
    feature_description: 'Snug Drop-In Pocket Keeps Your Phone In Place',
    productId: 5
  },
  {
    feature_name: 'Reflective Detail',
    feature_description: 'Intentionally Placed To Help Keep You Visible In Low Light',
    productId: 5
  },
  {
    feature_name: 'Inseam',
    feature_description: '25"',
    productId: 5
  },
  {
    feature_name: 'Lycra®',
    feature_description: 'Added Lycra® Fibre For Stretch And Shape Retention',
    productId: 5
  },
  {
    feature_name: 'STORAGE',
    feature_description: 'Secure Back Pocket To Store Your Essentials',
    productId: 5
  },
  {
    feature_name: 'Designed For',
    feature_description: 'Run',
    productId: 6
  },
  {
    feature_name: 'Lycra®',
    feature_description: 'Added Lycra® Fibre For Stretch And Shape Retention',
    productId: 6
  },
  {
    feature_name: 'Interior Drawcord',
    feature_description: 'Cinch The Waist Drawcord To Customize Your Fit',
    productId: 6
  },
  {
    feature_name: 'Shine-Bright',
    feature_description: 'Reflective Detail Helps Keep You On The Radar In Low Light',
    productId: 6
  },
  {
    feature_name: 'Medium-Rise',
    feature_description: 'Higher Rise Increases Coverage And Comfort',
    productId: 6
  },
  {
    feature_name: 'Hugged Sensation',
    feature_description: 'Engineered To Feel Like A Comfortable Embrace Throughout—It Holds You Close And Moves With You',
    productId: 6
  },
  {
    feature_name: 'POCKETS',
    feature_description: 'Multiple Pockets For All Your Essentials',
    productId: 6
  },
  {
    feature_name: 'Inseam',
    feature_description: '28"',
    productId: 6
  },
  {
    feature_name: 'Designed For',
    feature_description: 'Run',
    productId: 7
  },
  {
    feature_name: 'Low-Bounce Pocket',
    feature_description: 'Stash Your Keys, Cards Or Phone In Low-Bounce Pockets',
    productId: 7
  },
  {
    feature_name: 'Three-Pocket Waistband',
    feature_description: 'Gives You Plenty Of Storage Options',
    productId: 7
  },
  {
    feature_name: 'Medium-Rise',
    feature_description: 'For Coverage And Cool Comfort',
    productId: 7
  },
  {
    feature_name: 'Hugged Sensation',
    feature_description: 'Engineered To Feel Like A Comfortable Embrace Throughout—It Holds You Close And Moves With You',
    productId: 7
  },
  {
    feature_name: 'BREATHABILITY',
    feature_description: 'Strategically Placed Mesh Fabric Provides Ventilation',
    productId: 7
  },
  {
    feature_name: 'Inseam',
    feature_description: '22"',
    productId: 7
  },
  {
    feature_name: 'Designed For',
    feature_description: 'Office Travel Commute',
    productId: 8
  },
  {
    feature_name: 'LYCRA®',
    feature_description: 'Added Lycra® Fibre For Shape Retention',
    productId: 8
  },
  {
    feature_name: 'Comfortable Waistband',
    feature_description: 'Lies Flat Against Your Skin And Won\'t Dig In',
    productId: 8
  },
  {
    feature_name: 'POCKETS',
    feature_description: 'Multiple Pockets For All Your Essentials',
    productId: 8
  },
  {
    feature_name: 'High-Rise',
    feature_description: 'Keeps You Feeling Covered And Secure',
    productId: 8
  },
  {
    feature_name: 'Inseam',
    feature_description: '23"',
    productId: 8
  },
  {
    feature_name: 'Naked Sensation',
    feature_description: 'Engineered To Feel Like Your Go-To, Lightweight, Second-Skin Layer—You\'ll Forget You\'re Wearing This Next-To-Nothing Sensation As You Move',
    productId: 8
  },
  {
    feature_name: 'Designed For',
    feature_description: 'Training',
    productId: 9
  },
  {
    feature_name: 'Lycra®',
    feature_description: 'Added Lycra® Fibre For Stretch And Shape Retention',
    productId: 9
  },
  {
    feature_name: 'High-Rise',
    feature_description: 'Keeps You Feeling Covered And Secure',
    productId: 9
  },
  {
    feature_name: 'Hugged Sensation',
    feature_description: 'Engineered To Feel Like A Comfortable Embrace Throughout—It Holds You Close And Moves With You',
    productId: 9
  },
  {
    feature_name: 'Hidden Pocket',
    feature_description: 'Stash Your Essentials In The Hidden Waistband Pocket',
    productId: 9
  },
  {
    feature_name: 'Inseam',
    feature_description: '19"',
    productId: 9
  },
  {
    feature_name: 'Designed For',
    feature_description: 'Run',
    productId: 10
  },
  {
    feature_name: 'No Front Seam',
    feature_description: 'Keeps Camel Toe In Check',
    productId: 10
  },
  {
    feature_name: 'Reflectivity',
    feature_description: 'Flip Up The Cuffs To Expose Reflective Details',
    productId: 10
  },
  {
    feature_name: 'Waistband Storage',
    feature_description: 'Pocket On The Waistband Holds Your Key Or Card',
    productId: 10
  },
  {
    feature_name: 'High-Rise',
    feature_description: 'Keeps You Feeling Covered And Secure',
    productId: 10
  },
  {
    feature_name: 'Inseam',
    feature_description: '23"',
    productId: 10
  },
  {
    feature_name: 'Hugged Sensation',
    feature_description: 'Engineered To Feel Like A Comfortable Embrace Throughout—It Holds You Close And Moves With You',
    productId: 10
  },
  {
    feature_name: 'Designed For',
    feature_description: 'Yoga',
    productId: 11
  },
  {
    feature_name: 'LYCRA®',
    feature_description: 'Added Lycra® Fibre For Shape Retention',
    productId: 11
  },
  {
    feature_name: 'Comfortable Waistband',
    feature_description: 'Lies Flat Against Your Skin And Won\'t Dig In',
    productId: 11
  },
  {
    feature_name: 'Hidden Pocket',
    feature_description: 'Hidden Waistband Pocket Holds A Key',
    productId: 11
  },
  {
    feature_name: 'High-Rise',
    feature_description: 'Keeps You Feeling Covered And Secure',
    productId: 11
  },
  {
    feature_name: 'Naked Sensation',
    feature_description: 'Engineered To Feel Like Your Go-To, Lightweight, Second-Skin Layer—You\'ll Forget You\'re Wearing This Next-To-Nothing Sensation As You Move',
    productId: 11
  },
  {
    feature_name: 'INSEAM',
    feature_description: '4"',
    productId: 11
  },
  {
    feature_name: 'Designed For',
    feature_description: 'Run',
    productId: 12
  },
  {
    feature_name: 'Lycra®',
    feature_description: 'Added Lycra® Fibre For Stretch And Shape Retention',
    productId: 12
  },
  {
    feature_name: 'Secured Pockets',
    feature_description: 'Secure Your Stuff In The Exterior Zippered Pocket',
    productId: 12
  },
  {
    feature_name: 'Drawcord Waist',
    feature_description: 'Internal Drawcord Lets You Customize Your Fit',
    productId: 12
  },
  {
    feature_name: 'Low-Rise',
    feature_description: 'Keeps You Feeling Cool Yet Covered',
    productId: 12
  },
  {
    feature_name: 'INSEAM',
    feature_description: '4"',
    productId: 12
  },
  {
    feature_name: 'STORAGE',
    feature_description: 'Easy-Access Gel Pockets On The Waistband',
    productId: 12
  },
  {
    feature_name: 'Designed For',
    feature_description: 'Run',
    productId: 13
  },
  {
    feature_name: 'Secret Pocket',
    feature_description: 'Stash Your Stuff In The Secret Liner Pocket',
    productId: 13
  },
  {
    feature_name: 'Reflective Details',
    feature_description: 'Intentionally Placed For Visibility In Low Light',
    productId: 13
  },
  {
    feature_name: 'No-Dig Waistband',
    feature_description: 'Soft, No-Dig Waistband Lies Flat Against Your Skin',
    productId: 13
  },
  {
    feature_name: 'Lycra®',
    feature_description: 'Added Lycra® Fibre For Stretch And Shape Retention',
    productId: 13
  },
  {
    feature_name: 'Relaxed Sensation',
    feature_description: 'Gives You The Ultimate Feeling Of Nothing In Your Way—It Sits Away From Your Body To Give You Maximum Room To Move',
    productId: 13
  },
  {
    feature_name: 'INSEAM',
    feature_description: '2.5"',
    productId: 13
  }
];

connection.sync({ force: false })
  .then(() => Product.bulkCreate(productSeedData))
  .then(() => Color.bulkCreate(colorSeedData))
  .then(() => Photo.bulkCreate(photoSeedData))
  .then(() => Fabric.bulkCreate(fabricSeedData))
  .then(() => Feature.bulkCreate(featureSeedData))
  .then(() => console.log('database has been seeded'));