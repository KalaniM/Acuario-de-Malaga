import React, { PureComponent } from 'react';
import { MolaMola, skeletonMola, birdOnMola } from '../img/index.js'

class Article extends PureComponent {
    render() {
        return ( <div>
            <img alt="MolaMola" src={MolaMola}/>
            <p>
                Le Mola Mola, de son nom scientifique, est un poisson lune des eaux profondes tropicales. De la famille des Molidae, il est présents où les eaux sont tempérées, sa chair n'est pas particulièrement appréciée, il se distingue surtout de part sa morphologie et ses habitudes originales.
            </p>
            <div class="skeleton">
            <p>
                Malgré un régime alimentaire pourtant pauvre, composé essentiellement de méduses et de zooplancton, ainsi que des calamars et des crustacés, le Mola Mola peut mesurer jusqu'à 3 m et peser 3 tonnes. Il est le plus gros poisson osseux du règne animal. Le spécimen le plus gros jamais observé est une femelle de 2200 kg (ce qui équivaut au poids moyen d'un rhinocéros adulte), pêchée en 1996.
            </p>
            <img alt="skeletonMola" src={skeletonMola}/>
            </div>
            <p>
                Le MolaMola est équipé d'une mâchoire très puissante qui est à l'image d'un bec de perroquet incisif. Il n'est pas capable de clore la bouche ce qui peut lui donner cet air étonné caractéristique. Il a également une rangée de dents à l'intérieur même de sa gorge.
            </p>
            <p>
                Sa peau épaisse et rugueuse rappelle le papier de verre, et son corps osseux n'en fait pas un met raffiné. Sa consommation apporterait le mauvais oeil selon des légendes polynésiennes.
            </p>
            <p>
                Avec des portées de près de 300 millions d'oeufs cet animal est le plus féconds des vertébrés. Vivant et se nourrissant dans les eaux froides de la profondeur, il remonte régulièrement en surface se réchauffer. Ce comportement lui a valu le nom de Sunfish en anglais. Son nom scientifique MolaMola quand à lui est une référence aux meules de
                <em>fromages</em>
                dont il rappelle la forme.
            </p>
            <p>
                Les MolaMola descendent jusqu'à plus de 200m sous la surface dans le but de chasser leur nourriture. Malgré un corps imposant et peu harmonieux, ce vertébré n'a aucune difficulté à se déplacer. Il nage aussi vite que ses cousins requins et il peut parcourir jusqu'à 26km par jours. Parfois il arrive qu'il se cogne aux coques de bateaux qui peuvent être endommagées.
            </p>
            <div class="birdOnMola">
            <p>
                Couverts de parasites, on dénombre plus d'une cinquantaine d'espèces habitants sur et à l'intérieur de leurs corps. Pour s'en débarrasser, le MolaMola s'attarde à fleur de l'eau pour permettre aux oiseaux de le débarrasser de ces parasites.
            </p>
            <img alt="birdOnMola" src={birdOnMola}/>
            </div>
            <p>
                Les prédateurs naturels de ce vertébré sont les lions de mer, les orques et les requins dont le tranchant des dents permet de déchirer la peau dure du MolaMola. Cependant l'espèce est aujourd'hui menacée par la surpêche qui a décimé 80% de sa population, bien que sa chair ne soit pas convoitée. Le vertébré est également victime de la pollution maritime.
            </p>
            <p>
                Pour avoir la chance d'observer ce vertébré dans son espace naturel, il faut se rendre à Bali. Entre le mois de juillet et le mois de novembre, les Mola Mola remontent des abysses pour offrir un spectacle époustouflant.
            </p>
            <p>
                Lorsqu’il n’est pas à la surface le Mola Mola se fait très discret. Il est difficile de l’observer en profondeur. C’est pourquoi il est possible de venir apprécier la compagnie de notre Mola Mola femelle de plus de 1800 kg et 2m50 de long.
            </p>
            <p>
                La Acuario de Malaga vous accueille toute l'année, et vous présente la véritable reine de son aquarium.
            </p>
            <p>
                Découvrez l'offre originale proposée par notre restaurant gastronomique. Re-découvrez la joie du partage d'un repas dans les traditions de la cuisine typique espagnole. Profitez du décor exceptionnel de l'aquarium pour savourer les mets les plus fins de la gastronomie nationale. Au menu,
                <em>jambon espagnol</em>, gaspacho, Boquerones…. Il y en a pour tous les goûts.
            </p>
        </div> )
    }
};
export default Article;
