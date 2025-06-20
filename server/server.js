const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const openai = require("./services/openai")

const mongodb_uri = process.env.MONGODB_URI;
const db = process.env.DB;
const collection1 = process.env.COLLECTION1;
const collection2 = process.env.COLLECTION2;
const collection3 = process.env.COLLECTION3;
const collection4 = process.env.COLLECTION4;

const PORT = 3000;
const app = express();
const client = new MongoClient(mongodb_uri);

app.use(cors());
app.use(express.json());


app.get("/beaches", async (request, response)=>{
    try {
        const database = await client.db(db);
        const coll = await database.collection(collection1); //may use request instead of collection
        const data = await coll.find().toArray();
        response.status(200).send(data);

    } catch(error) {
        console.error(`CODE MACHINE BROKE: ERROR ${error}`)
    }
});

app.get("/mountains", async (request, response)=>{
    try {
        const database = await client.db(db);
        const coll = await database.collection(collection2); //may use request instead of collection
        const data = await coll.find().toArray();
        response.status(200).send(data);

    } catch(error) {
        console.error(`CODE MACHINE BROKE: ERROR ${error}`)
    }
});

app.get("/nature", async (request, response)=>{
    try {
        const database = await client.db(db);
        const coll = await database.collection(collection3); //may use request instead of collection
        const data = await coll.find().toArray();
        response.status(200).send(data);

    } catch(error) {
        console.error(`CODE MACHINE BROKE: ERROR ${error}`)
    }
});

app.get("/parks", async (request, response)=>{
    try {
        const database = await client.db(db);
        const coll = await database.collection(collection4); //may use request instead of collection
        const data = await coll.find().toArray();
        response.status(200).send(data);

    } catch(error) {
        console.error(`CODE MACHINE BROKE: ERROR ${error}`)
    }
});

app.post('/ask', async (request, response) => {
    const {provider, prompt} = request.body;
    try {
        const database = await client.db(db)
        const collections = [
            {name: "Beaches", coll: collection1},
            {name: "Mountains", coll: collection2},
            {name: "Nature", coll: collection3},
            {name: "Parks", coll: collection4}
        ];
        let places = [];
        for (const {name, coll} of collections) {
            const docs = await database.collection(coll).find().toArray();
            docs.forEach(doc => {
                places.push({
                    category: name,
                    name: doc.Answer,
                    description: doc.Q
                });
            });
        }

        const placesList = places.map(
            place => `- ${place.name} (${place.category}): ${place.description}`
        ).join('\n');

        const systemPrompt = `You are a travel recommendation assistant. Only recommend places from the following list. 
        If the user asks for something not in the list, politely say you don't have a recommendation. 
        If they ask a generic question such as 'What kind of mountains do you recommend?' then give them recommendations related the collection they ask about.

        Here are the places you can recommend:
        ${placesList}

        User prompt: ${prompt}
        `;

        const result = await openai(systemPrompt);
        response.status(200).json({result});
    } catch(error) {
        console.error(error.response?.data || error.message);
        response.status(500).json({error: 'Something went wrong with the LLM provider'});
    } 
});



app.listen(PORT, ()=>{
    console.log(`Server is now listening on Port: ${PORT}`)
});
