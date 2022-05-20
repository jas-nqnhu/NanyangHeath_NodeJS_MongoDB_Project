const moongose = require("mongoose");
const Schema = moongose.Schema;
const ARTScheme = new Schema({
      dateTaken:{
        type: String
      },
      imgPath: {
        type: String
      },
      result:{
        type: String
      },
      user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
});

const ART = moongose.model("ART", ARTScheme);
module.exports = ART;