import firebase from 'firebase/compat/app';
import  { getFirestore, collection, updateDoc, getDoc,getDocs, deleteDoc, addDoc, doc, arrayUnion } from 'firebase/firestore';
import body_Parser from 'body-parser';
import  express  from 'express'
import 'dotenv/config'
import Multer from 'multer'
import FirebaseStorage from 'multer-firebase-storage'
import fs from 'fs'
import cors from 'cors'
import path from 'path'
import { time } from 'console';



const app = express()
app.use(body_Parser.json());
app.use(body_Parser.urlencoded({ extended: false }));
app.use('/file-storage', express.static('file-storage'));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE,PATCH")
    next();
});

const multerUpload = Multer({
    storage: FirebaseStorage({
        bucketName: 'book-my-ground-331b5.appspot.com',
        credentials: {
            clientEmail: "firebase-adminsdk-7v48x@book-my-ground-331b5.iam.gserviceaccount.com",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDclMI8odhHZ8dq\nhJ/7d/0F5Nz+gtQgeNg6npvcO7JD3eQaqQZaFpPQ3Ulzpi541UEtzY57sLHf2AXc\nP48OqZCyGSKLK2uIuDIc9Aocjwrxw752dfhkEkb97WQBJSR0SONs8jQW+CiESdrK\n0ZZ6OOZyR8ZSKrZNwEQ77nmpHFGflFCi3qsS4TTGaHml15nqIfVg14Y8Y6yn3UVj\nwCwjHJ79jMv/aBM0e0csY+/zG2UEck/A1kyQ53Tk2k6ye2PtA37MuXbHOH7Z3BVE\nqZZ1KPRmZuAs01xb82oj5+nJViGYaZEQmbBdj4cJdLMP76wRRux41u0Cv6sdGvJQ\nyCGO8aipAgMBAAECggEAYW2nWYaW8/snvqmzzCvUa40J+7Sno2wc/c9ewmjvtUBF\n52yu7I26Xm/PaLCHKEHxVxzLCWEjP963v++m7XACBFhLxLK5/Zp2MAmuiay4xc6S\nytoSi4jzKGd5W3QfZOlo4o8caOTVaJECfcETOQr25pVDSLmq6i65NMuBmytx9gyH\nmeUwZPsqWDdGsHxlMdh0PutZm99HZ5CbCZu1GkG/Kc/eUAmlB9nil65HA6GHoF4t\naPpTXWRUpkxzuEpg5IvcRjW1bRILcKVhK028L8MNLaRM97hbLPQqLmzh3vILu8cE\nvFrAayTDhZrhMnWaS5xr7yOHu8ClHV7Iprv9Sd4ijQKBgQDxnsY5xSmXLT9RLYQp\n11C76qotGT1kN+R3vRzYHlMcfYTIGSK4nhD57fz8si/iNR/hWaCznWHx4B4o/Eg8\n/bNRQb2lO/CA0XqJLeP4LTzKVv6rCBqqerAaslEUDZ5iAnN6LRcR5t02OTWkuGEi\nFl+W7dMlaRFA2n/bJ280wEsycwKBgQDptXDnb9cffezlyk6GA0FhTKaFRAFLw5bl\nz2auKdE3wbRnw5GD/5qBTUmOaL0R9urNW2xIv/KOCoSSsg0dDpiA8FeO1m5lbYCH\nTGa6t9IDjGH3pNH/a0+TTi/mXrDsgTdOuY9dZrAQQDalue+5oNmqbeEdAsAjnb3W\nXhzCw+tFcwKBgQDIW5oSw6zmYK31meHTdGnNOh2dwiVHWpXIuPgXOqY+pNMbvsQt\nBV4ccj3sKbJNSTJDgzggWWyjzu4TnIgmk1ZEFli1kQuxNoP/Bx/YZ2LWgucxWkoK\nfixUJvPWxihFK7UoZgWQYbmkQjJ6gi6Bvr3LgTEq/4JAHjARwhSUULTKgwKBgB0u\nWY2cSlkVSRocG5fiGizC/FvRdPP31QSW0/RVJll250a5hZbcuHcCpneQnmL62LCR\nhMDErs2LhKgocTi6lNIssFIWdixV8uFx6bXQs/lbcvQP8WSaCpKTBaoXErJFJBnB\nU6RO6RbuXaRtxgAAlI0SMTSFHmaUEJsOnzq2ac7/AoGBAMiZNM1lONQr0kF1vjU6\nYZ9audZHTAe90klHKA3MNl4x+nHUH1azNQgnSQepDxZQVpYFRO9she50+bS3FsFn\nunDiHupg7zAu5sQUw9lqXVLTjsDlickjVJkSW1rfNykn/NgWy7WhbSh86Z009cqt\nnrUzYDnj64Gz/xponiv5uEaE\n-----END PRIVATE KEY-----\n",
            projectId: 'book-my-ground-331b5'
        },
        public: true

    })
})


const firebaseConfig = {
    apiKey: "AIzaSyA5k__jLdpp5IvLiOFO50DAQ7UXxVq4YB8",
    authDomain: "book-my-ground-331b5.firebaseapp.com",
    projectId: "book-my-ground-331b5",
    storageBucket: "book-my-ground-331b5.appspot.com",
    messagingSenderId: "529019554109",
    appId: "1:529019554109:web:147852f796984f4d725d54",
    measurementId: "G-2VC9DJLVKJ"
};
try {
    const firebaseapp = firebase.initializeApp(firebaseConfig);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
    }
}

const port = 8080
const db = getFirestore()

app.get('/', async(req, res) => {
    const groundData = {};
    try{
        const querySnapshot = await getDocs(collection(db, "grounds"));
        querySnapshot.forEach((doc) => {
            groundData[doc.id] = doc.data();
        });
        // console.log(groundData); 
        res.send(groundData)
    }
    catch(e){
        console.log(e)
    }
})

app.post('/', multerUpload.array('images'), async(req, res) => {
    const imgArray = [];
    for(let i =0;i<req.files.length;i++){
        imgArray.push(req.files[i].publicUrl);
    }
    const {name,capacity,cost,location,sport} = req.body
    try {
        const docRef = await addDoc(collection(db, "grounds"), {
            name : name,
            capacity : capacity,
            cost : cost,
            location : location,
            sport: sport,
            photos : imgArray
        });
        res.sendStatus(200)
    } 
    catch (e) {
        console.error("Error adding document: ", e);
    }
    
})

app.delete('/:id',async(req,res) => {
    await deleteDoc(doc(db, "grounds", req.params.id));
    res.sendStatus(200);
})

app.get('/update/:id', async(req, res) => {
    const docRef = doc(db, "grounds", req.params.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        res.send(docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        res.sendStatus(404)
    }

})


app.post('/update/:id', multerUpload.array('images'), async (req, res) => {
    const { name, capacity, cost, location, sport } = req.body
    try {
        const docRef =  doc(db,"grounds",req.params.id)
        await updateDoc(docRef, {
            name: name,
            capacity: capacity,
            cost: cost,
            location: location,
            sport: sport,
        })
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }

})


app.get('/updateBooking/:id', async (req, res) => {
    const docRef = doc(db, "grounds", req.params.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        res.send(docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        res.sendStatus(404)
    }

})


app.post('/updateBooking/:id/:email', async (req, res) => {
    try {
        const docRef = doc(db, "grounds", req.params.id)
        const timestamp = parseInt(Object.keys(req.body)[0]);
        const date = new Date(timestamp);
        console.log(timestamp,date);
        await updateDoc(docRef, {
                bookingHistory : arrayUnion({
                    cancelled : false,
                    date: date,
                    by: req.params.email
                })
            
        })
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }

})

app.get('/getBookings/:email',async(req, res)=>{
    const docRef = doc(db, "usersBookings", req.params.email);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data())

    if (docSnap.exists()) {
        res.send(docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        res.sendStatus(404)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

