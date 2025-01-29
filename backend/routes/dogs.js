const express = require('express');
const router = express.Router();

router.get('/search', async (req, res) => {
    try {
        const breed = req.query.breed; 
        const response = await fetch(
            `https://api.thedogapi.com/v1/breeds/search?q=${breed}`,
            {
                headers: {
                    'x-api-key': process.env.DOG_API_KEY,
                },
            }
        );
        const data = await response.json();

        if (data.length > 0) {
            const breedId = data[0].id; 
            const imageResponse = await fetch(
                `https://api.thedogapi.com/v1/images/search?breed_id=${breedId}`,
                {
                    headers: {
                        'x-api-key': process.env.DOG_API_KEY,
                    },
                }
            );
            const imageData = await imageResponse.json();
            res.json({ breed: data[0], image: imageData[0].url });
        } else {
            res.status(404).json({ message: 'Breed not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

module.exports = router;
