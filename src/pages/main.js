
import React, {useState} from 'react';
import './main.css';


function Main() {
  const [city,setCity]=useState('');
  const [resultat,setResultat]=useState('');
  const handleChange=(e)=>setCity(e.target.value);
  const action=(e)=>{
    if(e.key=='Enter'){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&lang=fr&appid=8f65f8e20e985e99a07ac6c22202d975')
    .then(data=>data.json())
    .then((res)=>setResultat(res));
  }
  }

  return (

    <div className={typeof resultat.weather != 'undefined' && resultat.main.temp>12?"hotbackground":"coldbackground"}>
        <div className="search-box">
            <input type="text" className="search" placeholder="Rechercher une ville" value={city} onChange={handleChange} onKeyPress={action}/>
        </div>
        <div className="result">

        {(typeof resultat.weather != 'undefined')?(
          <div>
          <div className="City">{resultat.name}, {resultat.sys.country}</div>
          <div className="temperature">{Math.round(resultat.main.temp)}°</div>
          <div className="description">{resultat.weather[0].description}</div>
        </div>):(<div className='NotFound'>Ville non trouvée</div>)
        }

        </div>
    </div>
  );
}

export default Main;
