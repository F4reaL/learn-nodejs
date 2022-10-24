module.exports ={
    multipleMongooseToObject: function(mongooseArray){
        return mongooseArray.map(mongooseItem => mongooseItem.toObject())
    },
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    }
}