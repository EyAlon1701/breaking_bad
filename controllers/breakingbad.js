import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/', async(request,response) => {

    const url = 'https://www.breakingbadapi.com/api/';
    const data_response = await fetch(url, {method:'get'});
    const data = await data_response.json()
    
    response.render('homePage',{
        data: data
    })
});

router.get('/characters', async(request,response) => {

    const url = 'https://www.breakingbadapi.com/api/characters';
    const data_response = await fetch(url, {method:'get'});
    const data = await data_response.json()
    
    response.render('homeCharactersPage',{
        data: data
    })
});

router.get('/characters/:id', async(request,response) => {
    const id = request.params.id;
    const url = `https://www.breakingbadapi.com/api/characters/${id}`;
    const data_response = await fetch(url, {method:'get'});
    const data = await data_response.json()   

    response.render('characterPage',{
        data: data 
    })
});

router.get('/episodes', async(request,response) => {

    const url = 'https://www.breakingbadapi.com/api/episodes';
    const data_response = await fetch(url, {method:'get'});
    const data = await data_response.json()
    
    response.render('homeEpisodePage',{
        data: data
    })
});

router.get('/quotes', async(request,response) => {

    const url = 'https://www.breakingbadapi.com/api/quotes';
    const data_response = await fetch(url, {method:'get'});
    const data = await data_response.json()
    
    response.render('homeQuotesPage',{
        data: data
    })
});


export default router;