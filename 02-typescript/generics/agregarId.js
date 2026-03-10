var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function agregarId(objeto) {
    return __assign({ id: Math.random().toString(36).substr(2, 10) }, objeto);
}
var user = agregarId({
    nombre: "John",
    edad: 20,
});
console.log(user);
