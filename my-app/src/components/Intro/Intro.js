import React from 'react';
import './Intro.css';
import LA from '../../images/LASkyline.jpg';

function Intro() {
    return (
      <section>
            <div class="losangeles">
                 <img src={LA} alt="Los Angeles" />
            </div>  
            <h1>LA Travel</h1>
      </section>  
    );
}

export default Intro;