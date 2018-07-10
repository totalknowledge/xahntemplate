import {User} from "../entity/UserEntity";
import {getRepository} from "typeorm";

exports.get = async function (request, reply) {
  //let connection = request.server.connection;
  let collection = await getRepository(User).createQueryBuilder("user");
  if (request.params.id) {
    let res =  await collection
                    .where("user.id = :id", { id: request.params.id })
                    .getOne() || null;
    //reply(err).code(404);
    return res;
  } else {
    return await collection.getMany();
  }
};

exports.get = async function (request, reply) {
  //let connection = request.server.connection;
  let collection = await getRepository(User).createQueryBuilder("user");
  let user = new User();
  if (request.params.id) {
    let res =  await collection
                    .where("user.id = :id", { id: request.params.id })
                    .getOne() || null;
    //reply(err).code(404);
    return res;
  } else {
    return await collection.getMany();
  }
};
