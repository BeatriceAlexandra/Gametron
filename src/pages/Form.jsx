import React from 'react';
import { Component } from 'react';
import Layout from '../Components/Layout';
import "./Form.css"


class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
      name: '',
      email: '',
      message: ''
      };
}


    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateMessage(event) {
        this.setState({message: event.target.value});
    }

  
    render() {
        const {name, email, message} = this.state;

        return (

            <div>

                <Layout>
    
                    <div className="container" >
                        <br/>
                        <h1>Contactează-ne! </h1>
                        <p>Reclamațiile pot fi depuse atât la sediul societății, cât și cu ajutorul formularului de mai jos</p>
                        <p> Adresă sediu: Strada Mărgelelor, numărul 24, bloc C4, apartament 3, parter,  sector 6, București</p> 
                        <a className="map" href="https://www.google.ro/maps/place/Strada+Mărgelelor,+București/@44.4390871,26.0098915,17.75z/data=!4m5!3m4!1s0x40b201a9dab6c4b5:0xea9cbae30d4e7b14!8m2!3d44.439571!4d26.0113959"><strong>Locația pe hartă aici</strong></a>
                        <p></p>
                        <p> Reg. com.: J35/6857/2022 </p>
                        <p> CUI: RO23796581 </p>
                        <p> Telefon: +4 0765 xxx yyy </p>
                        <p> Program: luni - vineri: 09:00 - 17:00 </p>
                        <p> E-mail: Gametron.contact@gmail.com </p>
                    </div>
              
                    <fieldset>
                        <form
                            className="container"
                            onSubmit={(event) => this.props.submitAddForm(event, name, email, message)}
                            >
                            <br/>
                            <h4>Formular reclamații:</h4>
                                <div className="form-outline d-flex justify-content-left mb-3">
                                <label htmlFor="name">Nume:</label>
                                <input
                                    type="text" required
                                    name="name"
                                    placeholder="Enter your name"
                                    onChange={(event) => this.updateName(event)}
                                    />
                        

                                <label htmlFor="email">Email:</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    id="email"  
                                    placeholder="Enter your email"
                                    value={this.state.email}
                                    onChange={(event) => this.updateEmail(event)}
                                    required
                                />
                            </div>
                            
                            <div className="form-outline d-flex justify-content-left mb-3">
                            <label htmlFor="message">Spune-ne, te rugăm, ce problemă ai întâmpinat:</label>
                            </div>

                            <textarea className="form-control" rows="8"
                                    type="text" required minLength={10}
                                    name="message"
                                    placeholder="Write your message"
                                    onChange={(event) => this.updateMessage(event)}
                                    />

                                    <label htmlFor="formFileMultiple" className="form-label d-flex justify-content mt-3">Încarcă un fișier</label>
                                    <input className="form-control" type="file" id="formFile"/>
                          
                            <div className="form-check d-flex justify-content-left mb-3 mt-3">
                                <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    value=""
                                    id="checkbox"
                                    />
                                <label className="form-check-label" for="checkbox">
                                    Send me a copy of this message
                                </label>
                            </div>

                            <input 
                                className="btn btn-lg btn-primary btn-block d-flex justify-content" 
                                type="submit" 
                                value="Trimite formularul" 
                            />
                        </form>
                       </fieldset>
                  </Layout>
         </div>
        )
    }
}

export default Form;