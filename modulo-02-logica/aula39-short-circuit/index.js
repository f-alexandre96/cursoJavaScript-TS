//em js tudo pode ser avaliado como true ou false, e isso é chamado de truthy e falsy

//falsy: false, 0, -0, "", null, undefined, NaN
//truthy: true, {}, [], 1, 3.23, "0", "false", -1, Infinity, -Infinity

const corUsuario = null;
const corPadrao = corUsuario || "preto"; //se corUsuario for falsy, corPadrao recebe "preto"
console.log(corPadrao);