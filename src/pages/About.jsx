import React from 'react';
import Layout from '../Components/Layout';
import NewProducts from '../Components/NewProducts';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display:flex;
    padding: 20px;
    justify-content: space-between;
`;

const Info = styled.div`
     top:10px;
`;

const Image = styled.img`
    width:450px;
    height:250px;
`;

function About() {
  return (

   
      <Layout> 
            <br/>
            <h1 className="text-center my-2 font-weight-bold">
                     Despre noi
            </h1>

            <Link to='/'> 
              <button className="btn btn-outline-dark my-4"> Înapoi la Home </button>  
            </Link>
            
          <Container>
        
           
          <Info> 
          
                    Pasionații de jocuri reprezintă o parte importantă a comunității.
                    Ne dorim să aducem în atenția clienților noștri cele mai bune produse.
                    <p> Compania Gametron a fost înfiinţată în 2021 de către o echipă de oameni pasionați de lumea jocurilor
                    care și-au dorit să aducă în atenția publicului cele mai bune dispozitive pentru a avea o experiență de gaming de neuitat.</p>
                    

               <div className="text-center ml-10 mr-10"> 
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at porttitor sem, vel maximus enim. Sed consequat quam vitae velit pulvinar, eu consectetur lorem consectetur. Suspendisse in vehicula augue.</p>
                    <p>Suspendisse potenti. Nulla facilisi. Morbi luctus pharetra pellentesque. Duis posuere tortor nec est commodo auctor. Nam sed dolor eget lectus varius faucibus. Pellentesque lacinia pulvinar eros. Proin laoreet egestas elementum.
                    Quisque sed pretium odio. Vivamus quis dui facilisis, facilisis justo ut, maximus ligula. Aenean tempus faucibus augue, ut rutrum sapien tincidunt aliquet.</p>
                    <p>Mauris elementum lectus magna, non pretium neque blandit nec. Nullam auctor, velit et facilisis vehicula, risus mi laoreet lorem, nec accumsan eros libero ac tortor.
                    Aliquam non orci eleifend, placerat elit nec, semper enim. In ullamcorper volutpat vehicula. Morbi bibendum tortor erat, at bibendum ligula auctor et. Aliquam ac urna eget sem ultricies finibus non sit amet libero. Suspendisse potenti.</p>
               </div>
          </Info>
          <Image src = "https://i.imgur.com/Fsc3fKW.jpg" alt="Gametron SRL"/>
      </Container>   
     <h2> COMING Soon</h2>
      <NewProducts/>  
      </Layout>
    
  );
}

export default About;
