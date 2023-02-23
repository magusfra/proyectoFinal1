import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  reparto = [
    { rutaPortada: "../../assets/imagenes/iker.jpg", nombre: "Iker Jimenez", datos: "Charles Marc Hervé Perceval Leclerc (pronunciación en francés: /ʃaʁl ləklɛʁ/, Montecarlo, Mónaco; 16 de octubre de 1997), más conocido como Charles Leclerc, es un piloto de automovilismo monegasco. Fue campeón de la GP3 Series en 2016 y de la Fórmula 2 en 2017 (ambos como debutante). Debutó en la Fórmula 1 con el equipo Sauber en 2018, y desde 2019 es piloto de Scuderia Ferrari, resultando subcampeón del mundo en 2022." },
    { rutaPortada: "../../assets/imagenes/ibai.jpg", nombre: "Ibai Llanos", datos: "Ibai Llanos Garatea (born 26 March 1995), better known mononymously as Ibai, is a Spanish internet celebrity, streamer, and esports caster. He was a content creator for G2 Esports from 2020 to 2021. He is co-owner of the esports team KOI, and along with the streamer Perxxita have found Sturridge." },
    { rutaPortada: "../../assets/imagenes/pique.jpg", nombre: "Gerard Piqué", datos: "Initially a talented student athlete at La Masia, Piqué joined Manchester United in 2004. He returned to Barcelona in 2008 under Pep Guardiola's leadership and helped the club win trebles in 2008–09 and 2014–15. He is one of only four players to have won the UEFA Champions League two years in a row with different teams, the others being Marcel Desailly, Paulo Sousa and Samuel Eto'o." },
    { rutaPortada: "https://album.mediaset.es/eimg/2022/12/13/sipausa-42900159_159c.jpg?w=1200&h=900", nombre: "Fernando Alonso", datos: "Born in Oviedo, Asturias to a working-class family, Alonso began kart racing at the age of three and achieved success in local, national, and world championships. He progressed to car racing at the age of 17, winning the Euro Open by Nissan in 1999 and was fourth in the International Formula 3000 Championship of 2000." },
    { rutaPortada: "../../assets/imagenes/kiko.jpg", nombre: "Kiko Matamoros", datos: "Son of Manuel Matamoros Ripoll, who died in Madrid on July 5, 2011 at the age of 85,12 and Enriqueta Hernández Martín, who died in Madrid on July 26, 2001 at the age of 76.3 Kiko He was born into a middle-class family. He spent a year at the Complutense University of Madrid, Faculty of Law." },
    { rutaPortada: "../../assets/imagenes/arturo.jpg", nombre: "Arturo Perez Reverte", datos: "Arturo Pérez-Reverte Gutiérrez (born 25 November 1951 in Cartagena) is a Spanish novelist and journalist.[1] He worked as a war correspondent for RTVE for 21 years (1973–1994). His first novel, El húsar, set in the Napoleonic Wars, was released in 1986."}
    
  ]
}

class Reparto {
  nombre: string;
  rutaPortada: string;
  datos: string;

  constructor(nuevoNombre: string, nuevaRuta: string, nuevoDatos: string) {
    this.nombre = nuevoNombre;
    this.rutaPortada = nuevaRuta;
    this.datos = nuevoDatos;

  }

}