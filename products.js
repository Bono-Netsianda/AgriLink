// products.js

// Main array containing all product objects
const products = [
    {
        id: 'prod001',
        name: 'Fresh Start Box',
        category: 'Fresh Combo Box',
        price: 180,
        unit: '/ lb',
        description: 'Perfect for small housholds: Potatoes, Onions, Tomatoes, Carrots, Garlic, Green Pepper', 
        imageSrc: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg'
    },
    {
        id: 'prod002',
        name: 'Green Basket Box',
        category: 'fruits',
        price: 220,
        unit: '/ lb',
        description: 'Assorted leafy greens (spinach, kale, lettuce, herbs).',
        imageSrc: 'https://images.pexels.com/photos/1199562/pexels-photo-1199562.jpeg'
    },
    {
        id: 'prod003',
        name: 'Fruit Delight Box',
        category: 'Fruits',
        price: 200,
        unit: '/ bag',
        description: 'Mixed seasonal fruits.',
        imageSrc: 'https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg'
    },
    {
        id: 'prod004',
        name: 'Family Harvest Box',
        category: 'Fresh Combo Box',
        price: 180,
        unit: '/ gallon',
        description: 'Cabbage 0r Fresh Spinach, Butternut or Pumpkin, Multiple Green Peppers.',
        imageSrc: 'https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg'
    },
    {
        id: 'prod005',
        name: 'Roots & Tubers Box',
        category: 'snacks',
        price: 200,
        unit: '',
        description: 'Potatoes, carrots, beetroot, sweet potatoes.',
        imageSrc: 'https://images.pexels.com/photos/1306559/pexels-photo-1306559.jpeg'
    },
    {
        id: 'prod006',
        name: 'Weekly Veggie Mix',
        category: 'vegetables',
        price: 210,
        unit: '/ bag',
        description: 'curated vegetables for a week’s cooking.',
        imageSrc: 'https://images.pexels.com/photos/915058/pexels-photo-915058.jpeg'
    },
    {
        id: 'prod007',
        name: 'Farm Soup Box',
        category: 'dairy',
        price: 230,
        unit: '/ block',
        description: 'a mix of soup-friendly vegetables (onions, tomatoes, butternut, carrots, celery, herbs).',
        imageSrc: 'https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg'
    },
    {
        id: 'prod008',
        name: 'Farmers Feast Box',
        category: 'Fresh Combo Box',
        price: 250,
        unit: '/ box',
        description: 'All Family Harvest items, Sweet potatoes, Lettuce, Cucumber, saesonal vegetables',
        imageSrc: 'https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg'
    },
    {
        id: 'prod009',
        name: 'Wooden Chopping Board',
        category: 'fruits',
        price: 290.00,
        unit: '/ 3pcs',
        description: 'Fresh, juicy local strawberries. Great for desserts, smoothies, and snacking.',
        imageSrc: 'https://images.pexels.com/photos/5505470/pexels-photo-5505470.jpeg'
    },
    {
        id: 'prod011',
        name: '30 fresh eggs',
        category: 'Egg Tray',
        price: 60.50,
        unit: '/ Tray',
        description: 'Fresh cut broccoli florets, ready to cook. Great for steaming, roasting, or stir-fry.',
        imageSrc: 'https://images.pexels.com/photos/8236164/pexels-photo-8236164.jpeg'
    },
    {
        id: 'prod012',
        name: 'Glass Storage Jars (Set of 3)',
        category: 'bakery',
        price: 220.00,
        unit: '/ Set of 3',
        description: 'Airtight jars for storing spices, grains, or dried herbs. They tie in perfectly with a “farm-fresh to kitchen” lifestyle.',
        imageSrc: 'https://images.pexels.com/photos/743984/pexels-photo-743984.jpeg'
    }
];



// Array containing the IDs of bestseller products
// These IDs should correspond to the 'id' field in the 'products' array above
const bestsellerIds = [
    'prod001', // Fresh Start Box
    'prod004', // Family HArvest Box
    'prod008', // Farmer's Feast Box
    'prod011', // 30 fresh eggs
    'prod005'  // Potato Chips
];

console.log("products.js loaded successfully."); // Optional: confirmation