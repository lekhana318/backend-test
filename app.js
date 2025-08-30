//demo bcrypt
const express=require('express');
//step 1
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const dotenv=require('dotenv');
const jwt=require('jsonwebtoken');
dotenv.config();
const app=express();
app.use(express.json());
const port=3000;
async function hashing(){
    let password="hello123"

    let hashpassword=await bcrypt.hash(password,10);
    console.log(hashpassword);
}
hashing();