import { mergeResolvers, fileLoader } from 'merge-graphql-schemas';
import path from 'path';

const resolverArr = fileLoader(path.join(__dirname, '../resolvers'));

export default mergeResolvers(resolverArr);
