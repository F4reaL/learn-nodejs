const mongoose = require('mongoose')
const Scheme = mongoose.Schema
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const User = new Scheme({
    name: String,
    age: Number,
    gender: String,
    avatar: String,
    slug: {type: String, slug: 'name', unique: true},
    
},{
    timestamps:true,
})

module.exports = mongoose.model('User', User)