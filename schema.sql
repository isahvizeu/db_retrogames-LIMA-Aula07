CREATE DATABASE IF NOT EXISTS db_retrogames;
USE db_retrogames;
CREATE TABLE IF NOT EXISTS jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    plataforma VARCHAR(100) NOT NULL,
    desenvolvedora VARCHAR(150) NOT NULL,
    imagem_url TEXT NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO jogos
(titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES
('Super Mario World', 'SNES', 'Nintendo',
 'https://m.media-amazon.com/images/M/MV5BZDFlYWY2ZWQtOTg4NS00MTNjLTg0MDMtYzI0ODQ1MGVjMWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 99.90),

('Street Fighter II', 'Super Nintendo', 'Capcom',
 'https://br.web.img2.acsta.net/pictures/24/01/31/21/43/3453517.jpg', 79.90),

('Donkey Kong Coutry', 'Super Nintendo', 'Rare',
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHeA3v5chC_EtZGakYHc2zBusf95DwESMrfUb67XH9fBqwQ_rjRiwGMg&s=10', 90.90);