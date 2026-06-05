// const playerName = "Mario"; 
// const currentLives = 3;

// const coinsLv1 = 25;
// const coinsLv2 = 30;
// const coinsLv3 = 40;

// const sum = coinsLv1 + coinsLv2 + coinsLv3;
// const avg = sum / 3;
// const remainder = sum % 3;

// console.log(`Tổng coins của 3 level là: ${sum}`);
// console.log(`Tổng coins của 3 level là: ${avg}`);
// console.log(`Số coin dư khi chia tổng coin là: ${remainder}`);



const playerName = "Mario"; 
const currentLives = 3;

function calcularRemainder (lv1, lv2, lv3) {
    const sum = lv1 + lv2 + lv3;
    const avg = sum / 3;
    const rmd = sum % 3;

    console.log(`Tổng coins của 3 level là: ${sum}`);
    console.log(`Trung bình coins của 3 level là: ${avg}`);
    console.log(`Số coin dư khi chia tổng coin là: ${rmd}`);
};

calcularRemainder(25, 30, 45);
