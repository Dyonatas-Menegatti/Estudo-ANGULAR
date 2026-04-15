type Hero = {
    name: string;
    vulgo: string;
};

function printaObjetos(pessoa: Hero) {
    console.log(pessoa);
}
printaObjetos({
    name: "Bruce Wayne",
    vulgo: "Batman",
});  