// Importation des modules nécessaires
const net = require("net");

// Récupère les arguments depuis la ligne de commande
const [host, ...command] = process.argv.slice(2);

// Fonction pour tester la connexion sur le port 3306
function checkMySQLConnection() {
    return new Promise((resolve, reject) => {
        const socket = net.createConnection(3306, host, () => {
            socket.end(); // Ferme la connexion dès que c'est connecté
            resolve(true);
        });

        socket.on("error", (err) => {
            socket.destroy(); // Ferme le socket en cas d'erreur
            resolve(false);
        });
    });
}

// Fonction principale pour vérifier la connexion en boucle
async function waitForMySQL() {
    let connected = false;
    console.log(`En attente de MySQL sur ${host}:3306...`);
    while (!connected) {
        connected = await checkMySQLConnection();
        if (!connected) {
            console.log(`En attente de MySQL sur ${host}:3306...`);
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Attend 1 seconde
        }
    }
    console.log(`MySQL est disponible sur ${host}:3306.`);

    // Exécute la commande si elle est fournie
    if (command.length > 0) {
        const { spawn } = require("child_process");
        const child = spawn(command[0], command.slice(1), { stdio: "inherit" });
        child.on("close", (code) => process.exit(code));
    }
}

waitForMySQL();
