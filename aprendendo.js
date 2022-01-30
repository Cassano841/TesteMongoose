const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
  })
  .then(() => {
    console.log("MongoDB conectado...");
  })
  .catch((err) => {
    console.log("Hou um erro ao se conectar ao MongoDB..." + err);
  });

const UserSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  sobrenome: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  idade: {
    type: Number,
    require: true,
  },
  pais: {
    type: String,
  },
});

mongoose.model("Users", UserSchema);

const NovoUsuario = mongoose.model("Users");

new NovoUsuario({
  nome: "Nicholas",
  sobrenome: "Cassano",
  email: "teste@etste",
  idade: 22,
  pais: "Brasil",
})
  .save()
  .then(() => {
    console.log("Usuário cadastrado");
  })
  .catch((err) => {
    console.log("Houve um erro ao cadastrado o usuário" + err);
  });
