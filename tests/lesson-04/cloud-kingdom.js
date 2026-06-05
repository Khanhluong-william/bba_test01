// Khai báo powerUp
let powerUp = "dfsdf";
// Tối ưu code: không cần viết thêm 1 dòng else nữa
let effect = "Unknow power-up";

if(powerUp === 'mushroom') {
    effect = "Mario becomes Super!";
} else if (powerUp === "flower") {
    effect = 'Mario can shoot fireballs!';      
} else if (powerUp === 'star') {
    effect = 'Mario is Invincibles!';
} else if (powerUp === "none") {
    effect = 'Marios is normale!';
};

console.log(effect);
