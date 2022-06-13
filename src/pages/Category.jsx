import React, { Component, } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Layout from '../Components/Layout';
import products from '../utils/products.json';
import ProductList from '../Components/ProductList';

const withRouter = (Component) => props => {
    const navigate = useNavigate ();
    const location = useLocation();
    const params = useParams ();

            return (
                <Component {...props} params={params} navigate={navigate} location={location} /> 

                );

};
class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: {}
        }
    }
    
    componentDidMount() {
       const pathName = this.props.params.pathName;
       this.setState({category:products[pathName] });
    }
    
    
    render () {
        
        return (
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <h2>{this.state.category.name}</h2>
                    <ProductList products= {this.state.category.items}/>
                    
                </div>
            </Layout>
        )
    
    }
}
export default withRouter (Category);

