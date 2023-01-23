import express from 'express';
import dbModel from '../models/studentModel.js';
import  Jwt  from 'jsonwebtoken';
import crypt from 'bcryptjs';

const router = express.Router();
const rot = express.Router();

router.post("/", async (req, res)=> {
    const data = req.body;
    try {
        const newPasswd = await crypt.hash(req.body.password, 10)
        const user = await dbModel.create({
            name: req.body.name,
            email: req.body.email,
            password: newPasswd,
        })
        console.log(data)
        res.status(201).send({data: "ok"})
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}) 


rot.post("/", async (req, res)=>{
    const data = req.body;
    console.log(data)
    try {
        const user = await dbModel.findOne({
            email: req.body.email,
           //password: req.body.password,
        })

        if(!user) {
            res.status(409).json({status: error.message, user: false})
        }

        const isValidPasswd = await crypt.compare(req.body.password, user.password)
        
        if (isValidPasswd){
            console.log("hi bitch")
            const token = Jwt.sign({
                name: user.name,
                email: user.email,
            }, 'secret123');
            //user.token = token;
            console.log(token)
            return res.status(201).send({data: token})
        }
        else{
            res.status(409).json({status: error.message, user: false})
        }
    } catch (error){ 
        res.status(409).json({status: error.message, user: false})} 
    })

        rot.get("/c/quote", async (req, res)=>{
            const token = req.headers['x-access-token']
            try {
                    const decode = Jwt.verify(token, 'secret123')
                    const email = decode.email
                    console.log(email)
                    const user = await dbModel.findOne({email: email})
                    return res.status(201).send({ status: 'ok', quote: user.quote})
                
            }catch (error){
                res.status(409).json({status: error.message, user: false})
            } 
        })

        rot.post("/c/quote", async (req, res)=>{
            const token = req.headers['x-access-token']
            try {
                    const decode = Jwt.verify(token, 'secret123')
                    const email = decode.email
                    console.log(email)
                    await dbModel.updateOne(
                        {email: email},
                        { $set: {quote: req.body.quote}
                    })

                    return res.status(201).send({ status: 'ok'}) 
                }catch (error) {
                    res.status(409).json({status: error.message, user: false})
                } 
            })
export {router, rot};