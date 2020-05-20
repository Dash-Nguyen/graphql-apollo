import { mergeTypes, fileLoader } from 'merge-graphql-schemas';
import path from 'path';
const typeArr = fileLoader(path.join(__dirname, '../schemas'));

export default mergeTypes(typeArr);
