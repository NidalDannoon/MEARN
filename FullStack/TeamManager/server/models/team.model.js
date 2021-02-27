const mongoose = require('mongoose');
const TeamSchema = new mongoose.Schema({
    name: { type: String ,
			required:[true,"Name is required"],
			minlength:[3,'Name should be at least 3 characters'],
},
    position: { type: String ,
				required:[true,"Position is required"],
				minlength:[3,'Position should be at least 3 characters'],
}

}, { timestamps: true });
module.exports.Team = mongoose.model('Team', TeamSchema);