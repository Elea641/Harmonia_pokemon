create table pokemon (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  image_url varchar(255) not null
);

INSERT INTO pokemon (name, image_url) VALUES
('Bulbasaur', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'),
('Charmander', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'),
('Squirtle', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'),
('Pikachu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'),
('Jigglypuff', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png'),
('Meowth', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png'),
('Psyduck', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png'),
('Machop', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png'),
('Gengar', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png'),
('Eevee', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png');
