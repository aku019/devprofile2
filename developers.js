
const express = require('express');
const router=express.Router();

const port = process.env.PORT || 3000;

const { users }= require('./users_data.js');
const axios = require('axios');
const e = require('express');
router.get('/',(req,res) => {
    const userList =[];
    Object.keys(users).forEach(id =>{
        //if(user[id]!== "undefined")
        userList.push({id:id, avatar_url:users[id].avatar_url}); //.user.avatar_url
    })
    res.send(userList);

});

router.post('/',(req,res) => {
    const github_id= req.body.github_id;
    const linkedin_id= req.body.linkedin_id;
    const codechef_id= req.body.codechef_id;
    const hackerrank_id= req.body.hackerrank_id;
    const twitter_id= req.body.twitter_id;
    const medium_id= req.body.medium_id;

    console.log(req);
    
    const id=github_id;
    axios(`https://api.github.com/users/${id}`)
   .then(
       response=> { 
//console.log(response.data);
           user = {
           ...response.data, 
        //    ...user
           
       
    }
    const avatar_url=user.avatar_url;
    const name = user.name;
    const company = user.company;
    const blog=user.blog;
    const location= user.location;
    const email= user.email;
    const bio= user.bio;
    const url=user.repos_url;
   // const repos;
   axios(url)
   .then(
       resp=> { 
//console.log(response.data);
           user2 = {
           ...resp.data, 
        //    ...user
           
       
    }
    const repos=[];
    Object.keys(user2).forEach(id =>{
        //if(user[id]!== "undefined")
        repos.push({name:user2[id].name,html_url:user2[id].html_url,description:user2[id].description,updated_at:user2[id].updated_at}); //.user.avatar_url
    })
    
users[id]={id,avatar_url,name,company,blog,location,email,bio,github_id,linkedin_id,codechef_id,hackerrank_id,twitter_id,medium_id,repos};
   // console.log(users[id]);
    res.status(201).send({id});
});
});
});


router.get('/:id',(req,res) => {
    if(users[req.params.id])
    {
        // const { id } = req.params.id;
        // const devProfile = users[req.params.id];
        // const developerProfile = [
        //     {
        //       id: devProfile.id,
        //       avatar_url: devProfile.avatar_url,
        //     },
        //   ];
        // res.status(200).json(developerProfile);
        res.status(200).send(users[req.params.id]);
        //({id:req.params.id,avatar_url:,name,company,blog,location,email,bio,github_id,linkedin_id,codechef_id,hackerrank_id,twitter_id,medium_id});

    }
    else res.status(404).send();
});


router.delete('/:id',(req,res) => {
  //  console.log(req.param);
    delete users[req.params.id];//=undefined;
    res.status(204).send();
    //console.log(users);

});

module.exports=router;  
