const mongoose = require('mongoose')
const Quiz = require('./models/quiz')

mongoose.connect('mongodb://localhost:27017/ecolearn')
    .then(() => console.log('success'))
    .catch((error) => console.log('failed...', error))

const quizData = [
    {
        courseTitle: "Climate Change Uncovered",
        questions: [
            {
                question: "What is the main cause of climate change?",
                options: ["Solar radiation", "Greenhouse gas emissions", "Ocean currents", "Earth's rotation"],
                answer: "Greenhouse gas emissions"
            },
            {
                question: "Which greenhouse gas is most responsible for global warming?",
                options: ["Methane", "Water vapor", "Carbon dioxide", "Nitrogen"],
                answer: "Carbon dioxide"
            },
            {
                question: "What is the greenhouse effect?",
                options: ["Heat escaping from Earth’s atmosphere", "Trapping of heat in Earth’s atmosphere by greenhouse gases", "Cooling effect of Earth’s atmosphere", "Reflection of sunlight by ice"],
                answer: "Trapping of heat in Earth’s atmosphere by greenhouse gases"
            },
            {
                question: "What sector contributes most to CO₂ emissions?",
                options: ["Agriculture", "Transportation", "Industry", "Energy"],
                answer: "Energy"
            },
            {
                question: "Which of the following absorbs CO₂ from the atmosphere?",
                options: ["Plastic", "Photosynthesis in plants", "Metal", "Fossil fuels"],
                answer: "Photosynthesis in plants"
            }
        ]
    },
    {
        courseTitle: "Sustainable Living Made Simple",
        questions: [
            {
                question: "What is a carbon footprint?",
                options: ["Total greenhouse gases we emit", "Amount of water we use", "Our impact on soil quality", "Number of miles we walk"],
                answer: "Total greenhouse gases we emit"
            },
            {
                question: "Which appliance is best for energy saving?",
                options: ["High-power heater", "Standard refrigerator", "Energy-efficient LED bulb", "Regular washing machine"],
                answer: "Energy-efficient LED bulb"
            },
            {
                question: "Which products support sustainable living?",
                options: ["Single-use plastics", "Reusable, recyclable items", "Non-biodegradable items", "Disposable batteries"],
                answer: "Reusable, recyclable items"
            },
            {
                question: "Why is public transport eco-friendly?",
                options: ["It uses less fuel than cars", "It’s more comfortable", "It’s slower than other options", "It reduces traffic"],
                answer: "It uses less fuel than cars"
            },
            {
                question: "What is upcycling?",
                options: ["Discarding old items", "Using items as is", "Reusing old items to create something valuable", "Donating items"],
                answer: "Reusing old items to create something valuable"
            }
        ]
    },
    {
        courseTitle: "Powering the Future with Renewables",
        questions: [
            {
                question: "Which is the most abundant renewable energy source?",
                options: ["Wind", "Solar", "Hydropower", "Biomass"],
                answer: "Solar"
            },
            {
                question: "How is wind energy converted into electricity?",
                options: ["By capturing sunlight with panels", "By turning turbines connected to generators", "By harnessing wave power", "By burning fossil fuels"],
                answer: "By turning turbines connected to generators"
            },
            {
                question: "What is one disadvantage of solar energy?",
                options: ["It’s too costly", "It requires fossil fuels", "It depends on sunlight", "It pollutes the air"],
                answer: "It depends on sunlight"
            },
            {
                question: "Which country is the largest producer of hydroelectric power?",
                options: ["India", "China", "Brazil", "Canada"],
                answer: "China"
            },
            {
                question: "What type of energy is derived from plant and animal material?",
                options: ["Wind energy", "Biomass energy", "Nuclear energy", "Geothermal energy"],
                answer: "Biomass energy"
            }
        ]
    },
    {
        courseTitle: "Saving Our Wildlife: A Guide to Biodiversity",
        questions: [
            {
                question: "Why is biodiversity important?",
                options: ["It makes Earth’s scenery more beautiful", "It provides ecosystem stability and resources", "It reduces climate change effects", "It’s only for aesthetics"],
                answer: "It provides ecosystem stability and resources"
            },
            {
                question: "What’s a major threat to biodiversity?",
                options: ["Urban gardening", "Species loss", "Deforestation", "Low temperatures"],
                answer: "Deforestation"
            },
            {
                question: "Which of these helps protect biodiversity?",
                options: ["Habitat destruction", "Invasive species introduction", "Conservation areas", "Overfishing"],
                answer: "Conservation areas"
            },
            {
                question: "What is an endangered species?",
                options: ["A species with a large population", "A species with little threat", "A species at risk of extinction", "A new species discovered"],
                answer: "A species at risk of extinction"
            },
            {
                question: "What is biodiversity loss?",
                options: ["Increase in species variety", "Decrease in species variety", "Habitat growth", "Plant conservation"],
                answer: "Decrease in species variety"
            }
        ]
    },
    {
        courseTitle: "Water Warriors: Conservation in Action",
        questions: [
            {
                question: "What is water scarcity?",
                options: ["Availability of water", "Excess water supply", "Lack of sufficient fresh water", "Use of bottled water"],
                answer: "Lack of sufficient fresh water"
            },
            {
                question: "Which sector uses the most water?",
                options: ["Agriculture", "Transportation", "Technology", "Entertainment"],
                answer: "Agriculture"
            },
            {
                question: "What is a simple water-saving method at home?",
                options: ["Taking long showers", "Watering plants at noon", "Fixing leaky faucets", "Using extra water for cleaning"],
                answer: "Fixing leaky faucets"
            },
            {
                question: "What is greywater?",
                options: ["Water from sewers", "Freshwater from rivers", "Recycled wastewater from sinks and showers", "Water used in industries"],
                answer: "Recycled wastewater from sinks and showers"
            },
            {
                question: "Which irrigation method conserves the most water?",
                options: ["Flood irrigation", "Sprinkler irrigation", "Drip irrigation", "None"],
                answer: "Drip irrigation"
            }
        ]
    },
    {
        courseTitle: "Pollution Solutions",
        questions: [
            {
                question: "Which of the following is a major source of air pollution?",
                options: ["Solar panels", "Electric cars", "Fossil fuel burning", "Hydropower plants"],
                answer: "Fossil fuel burning"
            },
            {
                question: "What is one harmful effect of plastic pollution?",
                options: ["It provides nutrients to soil", "It decomposes quickly", "It harms marine life", "It benefits coral reefs"],
                answer: "It harms marine life"
            },
            {
                question: "Which of these is a method to reduce air pollution?",
                options: ["Burning more coal", "Using public transport", "Wasting water", "Using plastic bags"],
                answer: "Using public transport"
            },
            {
                question: "What is the largest source of ocean pollution?",
                options: ["Paper waste", "Agricultural runoff", "Household trash", "Textile fibers"],
                answer: "Agricultural runoff"
            },
            {
                question: "What is smog?",
                options: ["Fresh air mixed with oxygen", "A mixture of smoke and fog", "Just fog", "Mist in high mountains"],
                answer: "A mixture of smoke and fog"
            }
        ]
    },
    {
        courseTitle: "Urban Gardening for All",
        questions: [
            {
                question: "What is urban gardening?",
                options: ["Gardening on farms", "Gardening in cities", "Gardening in deserts", "Gardening in greenhouses only"],
                answer: "Gardening in cities"
            },
            {
                question: "Which plant is best suited for small urban gardens?",
                options: ["Oak tree", "Basil", "Palm tree", "Redwood"],
                answer: "Basil"
            },
            {
                question: "What is the benefit of urban gardening?",
                options: ["Increases concrete surfaces", "Reduces air quality", "Increases green spaces", "Increases waste"],
                answer: "Increases green spaces"
            },
            {
                question: "What is vertical gardening?",
                options: ["Growing plants on roofs", "Growing plants in water", "Growing plants on walls", "Growing plants on hills"],
                answer: "Growing plants on walls"
            },
            {
                question: "What can urban gardening help reduce?",
                options: ["Noise pollution", "Soil erosion in forests", "Urban heat islands", "Earthquakes"],
                answer: "Urban heat islands"
            }
        ]
    },
    {
        courseTitle: "Eco-Friendly Design Hacks",
        questions: [
            {
                question: "What is eco-friendly design?",
                options: ["Designing without purpose", "Using sustainable materials", "Using only plastics", "Ignoring environmental impact"],
                answer: "Using sustainable materials"
            },
            {
                question: "Which of these is a sustainable material?",
                options: ["Plastic", "Bamboo", "Styrofoam", "Synthetic rubber"],
                answer: "Bamboo"
            },
            {
                question: "What’s a common eco-friendly design principle?",
                options: ["Overproduction", "Minimal waste", "Single-use materials", "Disposable items"],
                answer: "Minimal waste"
            },
            {
                question: "What’s the purpose of green building?",
                options: ["To reduce energy use", "To increase building costs", "To use more water", "To make buildings taller"],
                answer: "To reduce energy use"
            },
            {
                question: "Which of these is eco-friendly packaging?",
                options: ["Plastic wrap", "Glass jars", "Styrofoam boxes", "Non-recyclable paper"],
                answer: "Glass jars"
            }
        ]
    },
    {
        courseTitle: "Speak Up for Nature: Advocacy Basics",
        questions: [
            {
                question: "What is environmental advocacy?",
                options: ["Ignoring environmental issues", "Supporting policies to protect nature", "Increasing pollution", "Avoiding recycling"],
                answer: "Supporting policies to protect nature"
            },
            {
                question: "Which of these is a form of advocacy?",
                options: ["Littering", "Planting trees", "Writing to government officials", "Burning fossil fuels"],
                answer: "Writing to government officials"
            },
            {
                question: "What can individuals do to advocate for nature?",
                options: ["Stay uninformed", "Vote for eco-friendly policies", "Avoid nature-related news", "Use more plastic"],
                answer: "Vote for eco-friendly policies"
            },
            {
                question: "What is one goal of environmental advocacy?",
                options: ["To exploit resources", "To protect ecosystems", "To build more factories", "To reduce biodiversity"],
                answer: "To protect ecosystems"
            },
            {
                question: "Which organization is known for environmental advocacy?",
                options: ["Greenpeace", "World Health Organization", "NASA", "UNESCO"],
                answer: "Greenpeace"
            }
        ]
    },
    {
        courseTitle: "Farming for a Greener Planet",
        questions: [
            {
                question: "What is sustainable agriculture?",
                options: ["Growing crops without soil", "Farming that conserves resources", "Farming with maximum chemical use", "Non-organic farming"],
                answer: "Farming that conserves resources"
            },
            {
                question: "Which of these is a sustainable farming practice?",
                options: ["Monocropping", "Crop rotation", "Slash-and-burn", "Excessive irrigation"],
                answer: "Crop rotation"
            },
            {
                question: "What does organic farming avoid?",
                options: ["Natural fertilizers", "Chemical pesticides", "Compost", "Cover crops"],
                answer: "Chemical pesticides"
            },
            {
                question: "Which practice conserves soil quality?",
                options: ["Crop rotation", "Overgrazing", "Soil compaction", "Tilling extensively"],
                answer: "Crop rotation"
            },
            {
                question: "Which animal farming method is sustainable?",
                options: ["Factory farming", "Pasture-raised livestock", "Battery cage systems", "Feedlots"],
                answer: "Pasture-raised livestock"
            }
        ]
    },
    {
        courseTitle: "Ecosystems: Nature’s Web of Life",
        questions: [
            {
                question: "What is an ecosystem?",
                options: ["A type of weather", "A community of interacting organisms and their environment", "A single organism", "An artificial habitat"],
                answer: "A community of interacting organisms and their environment"
            },
            {
                question: "What is biodiversity?",
                options: ["Variety of life in an ecosystem", "A type of rock", "Only plants in an area", "Just animal species"],
                answer: "Variety of life in an ecosystem"
            },
            {
                question: "Which organism is at the base of most food chains?",
                options: ["Herbivores", "Carnivores", "Producers (plants)", "Omnivores"],
                answer: "Producers (plants)"
            },
            {
                question: "What are decomposers?",
                options: ["Organisms that break down dead matter", "Herbivores in the ecosystem", "Plants that produce energy", "Only large animals"],
                answer: "Organisms that break down dead matter"
            },
            {
                question: "What happens if a species is removed from an ecosystem?",
                options: ["No impact", "Ecosystem balance may be disturbed", "Only plants are affected", "Only predators are affected"],
                answer: "Ecosystem balance may be disturbed"
            }
        ]
    },
    {
        courseTitle: "Protecting Pollinators",
        questions: [
            {
                question: "Which insect is considered the most important pollinator?",
                options: ["Ants", "Beetles", "Bees", "Grasshoppers"],
                answer: "Bees"
            },
            {
                question: "Why are pollinators essential to ecosystems?",
                options: ["They eat harmful insects", "They help plants reproduce", "They control soil quality", "They reduce sunlight"],
                answer: "They help plants reproduce"
            },
            {
                question: "Which of these is a pollinator?",
                options: ["Worms", "Frogs", "Butterflies", "Fish"],
                answer: "Butterflies"
            },
            {
                question: "What can we plant to support pollinators?",
                options: ["Artificial flowers", "Trees only", "Pesticide-free flowering plants", "Plastic plants"],
                answer: "Pesticide-free flowering plants"
            },
            {
                question: "What is one threat to pollinators?",
                options: ["Climate stability", "Pesticide use", "Freshwater lakes", "High altitudes"],
                answer: "Pesticide use"
            }
        ]
    }    
];

Quiz.insertMany(quizData)
    .then(() => {
        console.log('Quiz data added to db')
        mongoose.connection.close()
    })
    .catch((error) => {
        console.log('Error adding', error)
    })