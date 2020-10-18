import React, {useEffect, useState} from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import Leaflet from 'leaflet';

import mapMarketImg from '../../images/map-marker.svg';
import api from '../../services/api';

import './styles.css';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarketImg,

    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor:[170, 2]
});

interface Orphanage {
    id: number,
    latitude: number,
    longitude: number,
    name: string
}

function Orphanages() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('/orphanages')
        .then(response => {
           setOrphanages(response.data);
        });
    }, 
    []);
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

            <Map 
                center={[-5.2036578,-37.3273334]}
                zoom={17}
                style={{ width: '100%', height: '100%'}}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <h1>{`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}</h1>
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmV1ZGlzbWFtIiwiYSI6ImNrZzZ4dnAyODAxd3Mycm10OTNydnRya3YifQ.8hRyPUcsV6u4cmOnQYydng`} />

                {
                    orphanages.map((orphanage) => {
                        return (
                            <Marker
                            key={orphanage.id}
                            icon={mapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                >
                    <Popup 
                        closeButton={false}
                        minWidth={240}
                        maxWidth={240}
                        className="map-popup"
                        >
                        {orphanage.name}
                        <Link to={`/orphanages/${orphanage.id}`}>
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                    </Popup>
                </Marker>
                        )
                    })
                }

                
            </Map>

            <Link to="/orphanages/create" className="create-orphanages">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default Orphanages;