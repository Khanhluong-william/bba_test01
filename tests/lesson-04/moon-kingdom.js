// Bài 1: Tạo hàm createCharacters
function createCharacters() {

    // Khai báo các objects
    const characters = [
        {name: "Mario", level: 10, health: 90},
        {name: "Luigi", level: 14, health: 105},
        {name: "Peach", level: 8, health: 70},
        {name: "Yoshi", level: 15, health: 1111},
        {name: "William", level: 18, health: 100},
        {name: "Rosie", level: 11, health: 400}
    ];

    // Dùng hàm map để taọ ra mảng mới
    const charactersPowerUp = characters.map(character => ({
        name: character.name.toUpperCase(),
        level: character.level * 2,
        health: character.health * 3,
    }));

    // Dùng hàm filter để filter health > 1000 từ mảng mới ở trên
    const possibleWinners = charactersPowerUp.filter(character => character.health > 1000);

    return possibleWinners;
}
    console.log(createCharacters());


// Bài 2: Tạo hàm printLeaderboard
function printLeaderboard(players) {

    const sortedPlayers = players.sort((a, b) => b.score - a.score);

    sortedPlayers.forEach((player, index) => {
        let medal = "";

        if (index === 0) {
            medal = "🥇";
        } else if (index === 1) {
            medal = "🥈";
        } else if (index === 2) {
            medal = "🥉";
        }

        console.log(`${medal} Hạng ${index + 1}: ${player.name} - ${player.score}`);
    });
}
    const players = [
        { name: "Mario", score: 1000 },
        { name: "Luigi", score: 850 },
        { name: "Peach", score: 1200 },
        { name: "Yoshi", score: 900 }
    ];


printLeaderboard(players);