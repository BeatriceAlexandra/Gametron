import React from 'react';
import Layout from '../Components/Layout';
import "./Delivery.css";
import { Link } from 'react-router-dom';

function Delivery() {
  return (
    <div>
      
      <Layout>
      <br/>
      <h1 className="text-center my-2 font-weight-bold">Livrarea produselor</h1>

        <Link to='/'> 
              <button className="btn btn-outline-dark my-4"> Înapoi la Home </button>  
        </Link>

            <div className="Text">
              <br/>
              <p>Livrarile se efectuază doar pe teritoriul României.</p>
              <p>Livrarea se va face în 48 de ore de la confirmarea comenzii în zilele lucrătoare.</p>
              <p>Cumpărătorul este rugat să comunice o adresă de livrare unde poate fi găsit precum și un număr de telefon la care să poată fi contactat de către curier.</p>
			        <br/>
              <h3> Informații despre noi</h3>
              <p> Adresă sediu: Strada Mărgelelor, numărul 24, bloc C4, apartament 3, parter,  sector 6, București</p> 
              <a className="map" href="https://www.google.ro/maps/place/Strada+Mărgelelor,+București/@44.4390871,26.0098915,17.75z/data=!4m5!3m4!1s0x40b201a9dab6c4b5:0xea9cbae30d4e7b14!8m2!3d44.439571!4d26.0113959"><strong>Locația pe hartă aici</strong></a>
              <p> Reg. com.: J35/6857/2022 </p>
              <p> CUI: RO23796581 </p>
              <p> Telefon: +4 0765 xxx yyy </p>
              <p> Program: luni - vineri: 09:00 - 17:00 </p>
              <p> E-mail: Gametron.contact@gmail.com </p>
              <br/>
              <h3> TARIFE </h3>
            </div>
      
            <table>
                <thead>
                    <tr>
                    <th>Valoare comandă </th>
                    <th>Tarif livrare sediu</th>
                    <th>Tarif București</th>
                    <th>Tarif în afara Bucureștiului  </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>mai puțin de 250 lei</td>
                    <td>Gratis</td>
                    <td>10 lei</td>
                    <td>15 lei</td>
                    </tr>
                    <tr>
                    <td> peste 250 lei</td>
                    <td>Gratis</td>
                    <td>Gratis</td>
                    <td>Gratis</td>
                    </tr>
                </tbody>
            </table>
          <img className=" Image" src="https://imgur.com/u8e5fK3.jpg" alt="Livrare"></img>
      </Layout>

    </div>
  );
}

export default Delivery;
