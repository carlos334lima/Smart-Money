import { Alert } from "react-native";
import { getRealm } from "./Realm";

export const saveEntry = async () => {
  const realm = await getRealm();
  let data = {};

  try {
    //connection opening
    realm.write(() => {
      data = {
        id: "18938",
        amount: 12.4,
        entryAt: new Date(),
        isInit: false,
      };

      realm.create("Entry", data, true);
    });

   console.log(data)

  } catch (error) {
    /* console.error('saveEntry :: error on save object: ',JSON.stringify(data))
    Alert.alert('Erro ao salvar os dados de lançamento!') */
  }

  return data;
};
