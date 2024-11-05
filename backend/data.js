const mongoose = require('mongoose')
const Course = require('./models/course')

mongoose.connect('mongodb://localhost:27017/ecolearn')
    .then(() => console.log('Connection succesfull'))
    .catch((error) => console.log('Error in connection', error))

const courses = [
    {
        title: 'Climate Change Uncovered',
        desc: 'Dive into the science of climate change, uncover its causes, and explore actionable ways to help combat global warming',
        imageUrl: './images/1.jpg'
    },
    {
        title: 'Sustainable Living Made Simple ',
        desc: 'Transform your lifestyle with easy, impactful tips to shrink your carbon footprint and live sustainably every day',
        imageUrl: './images/2.jpg'
    },
    {
        title: 'Powering the Future with Renewables',
        desc: 'Discover how solar, wind, and hydro power work and how they’re transforming the energy landscape toward a greener future',
        imageUrl: './images/3.jpg'
    },
    {
        title: 'Saving Our Wildlife: A Guide to Biodiversity',
        desc: 'Learn why every species matters and how you can help protect ecosystems and preserve biodiversity',
        imageUrl: './images/4.jpg'
    },
    {
        title: 'Water Warriors: Conservation in Action',
        desc: 'Join the water conservation movement with tips to save water at home and support global efforts to address water scarcity',
        imageUrl: './images/5.jpg'
    },
    {
        title: 'Pollution Solutions',
        desc: 'Get hands-on with ways to tackle air, water, and plastic pollution while minimizing waste and reducing your footprint',
        imageUrl: './images/6.jpg'
    },
    {
        title: 'Urban Gardening for All',
        desc: 'Green up your space with sustainable gardening techniques designed for city living—perfect for balconies, rooftops, and small spaces',
        imageUrl: './images/7.jpg'
    },
    {
        title: 'Eco-Friendly Design Hacks',
        desc: 'Learn the art of designing products that are good for people and the planet using sustainable materials and practices',
        imageUrl: './images/8.jpg'
    },
    {
        title: 'Speak Up for Nature: Advocacy Basics',
        desc: 'Discover your voice in environmental advocacy, learn about policy-making, and see how you can drive change',
        imageUrl: './images/9.jpg'
    },
    {
        title: 'Farming for a Greener Planet',
        desc: 'Explore sustainable agriculture techniques like organic farming and permaculture that are better for the Earth and our food',
        imageUrl: './images/10.jpg'
    },
    {
        title: 'Ecosystems: Nature’s Web of Life',
        desc: 'Journey through ecosystems to see how plants, animals, and their environments connect and depend on each other',
        imageUrl: './images/11.jpg'
    },
    {
        title: 'Forests and Deforestation: What’s at Stake',
        desc: 'Explore the incredible role forests play in our planet’s health and ways we can help prevent deforestation',
        imageUrl: './images/12.jpg'
    },
    {
        title: 'Oceans in Crisis: Conservation 101',
        desc: 'Discover the wonders of our oceans and learn how to combat threats like plastic waste and pollution',
        imageUrl: './images/13.jpg'
    },
    {
        title: 'Climate Justice: Why Equity Matters',
        desc: 'Uncover the human side of climate change, exploring how it affects marginalized communities and ways we can all promote fairness',
        imageUrl: './images/14.jpg'
    },
    {
        title: 'Building Green: Sustainable Architecture',
        desc: 'Peek inside the future of eco-friendly buildings that reduce energy consumption, use sustainable materials, and respect the planet',
        imageUrl: './images/15.jpg'
    },
    {
        title: 'Protecting Pollinators',
        desc: 'Discover the essential role of bees, butterflies, and other pollinators, and learn simple ways to create pollinator-friendly spaces',
        imageUrl: './images/16.jpg'
    },
    {
        title: 'Eco-Friendly Fashion',
        desc: 'Explore the world of sustainable fashion, from eco-friendly fabrics to responsible shopping, and learn how your wardrobe can help the planet',
        imageUrl: './images/17.jpg'
    },
    {
        title: 'The Power of Trees',
        desc: 'Uncover the science behind trees\' role in carbon absorption, and learn how forests keep ecosystems balanced and communities healthy',
        imageUrl: './images/18.jpg'
    },
    {
        title: 'Zero-Waste Living',
        desc: 'Take the first steps toward a zero-waste lifestyle, with practical tips on reducing, reusing, and recycling to eliminate waste in your daily life',
        imageUrl: './images/19.jpg'
    },
    {
        title: 'Sustainable Food Choices',
        desc: 'Learn how what’s on your plate impacts the planet, and discover ways to eat more sustainably for your health and the environment',
        imageUrl: './images/20.jpg'
    },
]

Course.insertMany(courses)
    .then(() => {
        console.log('Courses added to the db')
        mongoose.connection.close()
    })
    .catch((error) => {
        console.log('Error in connection', error)
    })