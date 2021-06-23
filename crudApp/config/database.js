const mongoose=require("mongoose");

const mongodb = process.env.MONGODB_URI || "mongodb://localhost/todos";


mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);

mongoose.connect(mongodb);
mongoose.Promise = global.Promise;
module.exports = mongoose;