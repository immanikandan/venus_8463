
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const goaSchema = new Schema({
   name: String,
   place: String
})

const goaModel = mongoose.model('goa', goaSchema, 'goa');
export default goaModel;
