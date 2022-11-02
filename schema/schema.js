const mongoose = require('mongoose')

const moongoURI = 'mongodb://127.0.0.1:27017/Airbnb';

mongoose.connect(moongoURI)
.then(res => {
    console.log("Connected to database");
})
.catch(err => {
    console.log("Not connected to database");
})

const userData = new mongoose.Schema({
    userId:Number,
    userName:String,
    userType:String,
    email:String,
    name:String,
    password:String,
    mobile:Number,
    DOB:String,
    country:String,
    state:String,
    city:String,
    gender:String,
    profilePicture:String,
    Date:Number
})

const propertyData = new mongoose.Schema({
    propertyId:Number,
    userId:Number,
    propertyName:String,
    ownerofProperty:String,
    city:String,
    country:String,
    state:String,
    pricing:Number,
    size:Number,
    rating: String,
    gallery:Array,
    noOfBedroom:Number,
    noOfBathroom:Number,
    noOfBed:Number,
    noOfPeople:Number,
    description:String,
    aminities:{
        parking:String,
        wifi:String,
        breakFast:String,
        ac:String,
        tv:String,
        londry:String,
        freez:String,
        kitchen:String,
        smokeAlarm:String,
        petsAllowed:String,
    },
    propertyTag:String,
})

const bookingData = new mongoose.Schema({
    bookingId:Number,
    bookingDate:Number,
    bookingGuestId:Number,
    propertyId:Number,
    propertyName:String,
    guestName:String,
    checkIn:String,
    checkOut:String,
    totalPrice:Number,
    paymentMethod:String,
    noOfNights:Number,
    noOfPersons:Number,
})

const ratingData = new mongoose.Schema({
    ratingId:Number,
    userId:Number,
    propertyId:Number,
    bookingId:Number,
    reviewDate:String,
    reviewHeading:String,
    reviewDescription:String,
    rating:Number,
})

const contactData = new mongoose.Schema({
    contactId:Number,
    email:String,
    query:String,
    name:String,
    mobile:Number,
})


const UserData = mongoose.model('User',userData);
const PropertyData = mongoose.model('Property',propertyData);
const BookingData = mongoose.model('Booking',bookingData);
const RatingData = mongoose.model('Rating',ratingData);
const ContactData = mongoose.model('Contactus',contactData);

module.exports = { UserData, PropertyData, BookingData, ContactData, RatingData }
