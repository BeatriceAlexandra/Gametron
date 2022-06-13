import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';


const Container = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const NewsletterAb = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_game', 'template_1t49ohs', form.current, 'Rdz2wfv5lkb3uEkpg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <Container> 
        <div className="">    
            <form ref={form} onSubmit={sendEmail}>
                <label className="mr-2">Email address      '</label>
                <input type="email" name="user_email"  placeholder='Enter your email' required/> 
                <button type="submit" className="btn btn-secondary btn-block"> Abonare </button>
            </form>
        </div>  
        </Container>
      );
    };

    export default NewsletterAb;