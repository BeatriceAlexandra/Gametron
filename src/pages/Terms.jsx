import React from 'react';
import Layout from '../Components/Layout';
import { Link } from 'react-router-dom';

function Terms() {
  return (
    <div>

      <Layout>
           <br/>
           <h1 className="text-center">Termeni și condiții </h1>
          
           <Link to='/'> 
              <button className="btn btn-outline-dark my-4"> Înapoi la Home </button>  
            </Link>

            <br/>
           <div>
             <p className=" mx-5 text-justify">
           
             1. ASPECTE GENERALE <br/>
             
             1.1. Prezentele Termeni si Conditii („Termeni si Conditii”) guverneaza raporturile dintre  societate cu raspundere limitata.<br/>
             1.2. Accesarea si utilizarea Site-ului, inclusiv a oricarei pagini sau sectiuni componente ale acestora, sau a oricarui Serviciu furnizat prin intermediul Site-ului se poate face numai in conformitate cu prezentele Termeni si Conditii, care includ Politica GDPR, Politica de utilizare a cookies-urilor si Politica privind supravegherea prin mijloace video (CCTV) care sunt, de asemenea, postate pe web-site-ul nostru<br/>
             1.3. Pentru utilizarea servicilor, putem solicita utilizatorului sa isi exprime acordul cu privire la acesti Termeni si conditii printr-o actiune specifica, care are semnificatia unui consimtamant neechivoc (e.g. bifarea casutei specifice „am citit si sunt de acord cu termenii si conditiile site”).<br/>
             1.4. Pentru a asigura respectarea conditiilor de acces si utilizare a Serviciilor, Utilizatorii trebuie sa verifice la momentul fiecarei accesari a Site-ului si termenii si conditiile de utilizare. Chiar daca omiteti sa analizati termenii si conditiile, dar utilizati Site-ul, vom considera ca ati acceptat acest set de Termeni si Conditii (inclusiv orice actualizare a acestora).<br/>
             1.5. Daca nu sunteti de acord cu prevederile din acest set Termeni si Conditii (inclusiv orice actualizare a acestuia), va rugam sa nu utilizati, sau dupa caz, sa incetati utilizarea Site-ului, sau a Serviciilor oferite de Noi, după caz.<br/>
             1.6. Definitii:<br/>
           
             Cont – sectiunea din Site formata dintr-o adresa de e-mail si o parola care permite Cumparatorului transmiterea Comenzii si care contine informatii precum nume de utilizator, parola, adresa de livrare și istoricul comenzilor. Utilizatorul se va asigura că toate informatiile contului sunt corecte, complete si actualizate.<br/>
             Utilizator - orice persoana fizica care are varsta peste 16 ani sau persoana juridica inregistrata pe Site, care, prin crearea Contului, isi exprima acordul cu privire la clauzele specifice site-ului din sectiunea Termeni si Conditii.<br/>
             Cumparator - orice persoana fizica care are varsta peste 16 ani sau persoana juridica care isi face un Cont in Site si plaseaza o Comanda
             Favorite - sectiune din Cont care permite Utilizatorului sa isi creeze Liste cu produse pe care doreste sa le urmareasca in vederea unei eventuale achizitii.<br/>
             Cosul de cumparaturi sectiune din Cont in care Utilizatorul poate sa adauge produse pe care doreste sa le achizitioneze<br/>
             Comanda - Documentul electronic cu ajutorul căruia Cumparatorul transmite Vanzatorului intentia sa de a achizitiona produse de pe Site.<br/>
             Contract - reprezinta contractul la distanta incheiat intre Vanzator si Cumparator, fara prezenta fizica simultana a Vanzatorului si a Cumparatorului.<br/>
             Continut:
             Toate informatiile de pe Site care pot fi accesate prin intermediul unui echipament electronic.
             Orice forma de comunicare transmisă de către Vânzător Utilizatorilor prin intermediul oricăror mijloace electronice sau de altă natură.
             Comunicari comerciale - Mesaje prin intermediul Site-ului, e-mailului, telefonului mobil în care Vânzătorul îi transmite Utilizatorului informatii privitoare la campaniile in derulare, ofertele si promotiile curente sau viitoare, campanii de retargetare, sondaje de opinie sau informatii cu caracter general<br/>
             Tranzactie - incasarea sau rambursarea unei sume rezultate din vanzarea unui produs prin intermediul Site-ului, in functie de modalitatea de plata sau rambursare
             2. DREPTUL DE PROPRIETATE
             2.1. Articolele (texte + imagini) publicate de Societate se afla sub protectia legilor privind drepturile de proprietate intelectuala (cum ar fi – dar nu limitativ la: Legea nr. 8/1996 privind dreptul de autor si drepturile conexe, Legea nr. 84/1998 privind marcile si indicatiile geografice). Reproducerea oricarui material scris sau ilustrativ din aceste articole este categoric interzisa in lipsa consimtamantului prealabil al editorului.
            </p>
        </div>

      </Layout>
    </div>
  );
}

export default Terms;
