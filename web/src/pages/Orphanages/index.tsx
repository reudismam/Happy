import React from 'react';
import { FiPlus } from 'react-icons/fi';
import {Link} from 'react-router-dom';

import mapMarketImg from '../../images/map-marker.svg';

import './styles.css';

function Orphanages() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarketImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Rio do Sul</strong>
                    <span>Santa-Catarina</span>
                </footer>
            </aside>

            

            <div>

            </div>

            <Link to="" className="create-orphanages">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default Orphanages;