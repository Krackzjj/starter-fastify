SET @@global.time_zone='Europe/Paris';
CREATE TABLE IF NOT EXISTS `img` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `path` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `recette` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    `temps_preparation` int(11),
    `temps_cuisson` int(11),
    `img_id` int(11) DEFAULT NULL,
    `saison` enum('printemps','ete','automne','hiver') DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`img_id`) REFERENCES `img`(`id`)
);

CREATE TABLE IF NOT EXISTS `ingredient` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    `unite` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `recette_ingredient` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `recette_id` int(11) NOT NULL,
    `ingredient_id` int(11) NOT NULL,
    `quantite` int(11) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`recette_id`) REFERENCES `recette`(`id`),
    FOREIGN KEY (`ingredient_id`) REFERENCES `ingredient`(`id`)
);

CREATE TABLE IF NOT EXISTS `etape` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `recette_id` int(11) NOT NULL,
    `description` text NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`recette_id`) REFERENCES `recette`(`id`)
);

