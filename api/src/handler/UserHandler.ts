import {User} from "../entity/UserEntity";
import {getRepository} from "typeorm";

exports.get = async function (request, h) {
  let collection = await getRepository(User).createQueryBuilder("user");
  if (request.params.id) {
    let res =  await collection
                    .where("user.id = :id", { id: request.params.id })
                    .getOne() || null;
    return res;
  } else {
    return await collection.getMany();
  }
};

exports.post = async function (request, h) {
  let user = new User();
  let payload = request.payload;
  for (let k in payload) {
    user[k] = payload[k];
  }
  let res = h.response(await user.save());
  if (!request.params.id) {
    res.code(201);
  }
  return res;
};
