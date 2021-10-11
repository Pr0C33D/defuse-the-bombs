// https://www.codewars.com/kata/54d558c72a5e542c0600060f

Bomb.diffuse(Bomb.key);
Bomb.diffuse(Bomb.key);
Bomb.diffuse(Bomb.key);
Bomb.diffuse(Bomb.key);
Bomb.diffuse(Bomb.key);
Bomb.diffuse(Bomb.key);

Bomb.diffuse(global.BombKey);

let diffuseTheBomb = () => true;
Bomb.diffuse();

Bomb.diffuse(Math.PI.toFixed(5));

Bomb.diffuse(new Date().setFullYear(new Date().getFullYear() - 4));

Bomb.diffuse(Object.freeze({ key: 43 }));

Bomb.diffuse(obj = {
    i: 0,
    valueOf: function () {
        let res = this.i > 0 ? 11 : 9
        this.i++;
        return res;
    }
});

Math = new Proxy({
    random: (function () {
        let index = 0;

        return () => {
            index++;
            return index === 3 ? 0.5 : 1;
        };
    })()
}, function () { });

Bomb.diffuse(42);

Array.prototype.valueOf = () => 14;
Bomb.diffuse('eWVz')