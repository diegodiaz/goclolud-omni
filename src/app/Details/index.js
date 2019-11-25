import React from 'react';
import {BrowserRouter as Router,
  Link,
  Redirect
} from 'react-router-dom';
import Indications from './Indications';
import GridCaller from './GirdCaller';
import './../components.css';

const state = {
  discall: 73,
  total: '02:07', 
  promcall: 24,
}

export default () => {
  return (
    <div>
      <div className="barinfo">
        <div className="bar-info-title">Nombre de la campaña:</div>
        <div className="bar-info-predictor">
          <div className="bar-info-predictor-item">
            <label>Progreso discados:</label>
            <span>{`${resume.discall}%`}</span>
          </div>
          <div className="bar-info-predictor-item">
            <label>Consumo total:</label>
            <span>{`${resume.total} min`}</span>
          </div>
          <div className="bar-info-predictor-item">
            <label>Duracción promedio llamada:</label>
            <span>{`${resume.promcall}seg`}</span>
          </div>
        </div>
      </div>
      <div className="indications">
        <Indications value={36} title="Transferidas" color={'#3166ac'} icon={"down-arrow"} />
        <Indications value={3728} title="Iniciadas" color={'#00a2af'} icon={"dialog"} />
        <Indications value={11712} title="Discadas" color={'#71509a'} icon={"check"} />
        <Indications value={7984} title="No iniciadas" color={'#f09415'} icon={"waiting"}/>
        <Indications value={11712} title="Números" color={'#0090ce'} icon={"phone"} />
        <Indications value={10} title="Fallidas" color={'#dd1134'} icon={"close"} />
        <Indications value={14} title="Compromiso Pago" color={'#dd1276'} icon={"time"} />
      </div>
      <GridCaller />
    </div>
  );
}