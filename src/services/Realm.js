//connecting the schemas
//initializing the database

import Realm from "realm";

import CategorySchema from "../schemas/CategorySchema";
import EntrySchema from "../schemas/EntrySchemas";

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 1,
  });

  return realm;
};
