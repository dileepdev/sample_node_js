/**
 * Created by Dileep
 */

const users = [
    {
        id: 1,
        name: "dileep"
    },
    {
        id: 2,
        name: "test"
    }
]

class UserModel{
  constructor(){
    this._users = users
  }
  find(callback){
    return callback(null,this._users);
  }
  findById(id,callback){
    return callback(null,this._users.filter( (v) => v.id == id));
  }
}

module.exports = UserModel;