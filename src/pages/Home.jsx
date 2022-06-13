import React from 'react';
import Layout from '../Components/Layout';
import products from '../utils/products.json';
import HomeCategory from '../Components/HomeCategory';
import Announcement from '../Components/Announcement';
import CoomingSoon from '../Components/ComingSoon';
import Slider from '../Components/Slider';
import PromoCategories from '../Components/PromoCategories';
import CategoryBar from '../Components/CategoryBar';
import styled from 'styled-components';
import NewProducts from '../Components/NewProducts';
import Clock from './Clock';

const Container = styled.div`
    justify-content: space-between;
    container-fluid;
    container-min-max-width;
`;



class Home extends React.Component {
  
  constructor() {
    super();
    this.state = {
      categories: [],
      categoryNames: []

    };
  }

  componentDidMount() {
      const categories = Object.values(products);
      const categoryNames = Object.keys(products);

      this.setState({categories, categoryNames}) 
  } 
  
  render() {
      // console.log(this.props);
  
    return (
      <Layout>
            <Container>  
            <Announcement/>
            <Slider/>
            <CoomingSoon/>
            <Clock/>
            <NewProducts/>
            <PromoCategories/>
            <CategoryBar/>
                <div className="row">

                            { this.state.categories.map((category, index) => {
                              return (
                                <div className="col-6 mt-2">
                                      <HomeCategory
                                      key={index}
                                      image={category.image}           
                                      title={category.name}
                                      description={category.description}
                                      routeName={this.state.categoryNames[index]}
                                      />
                                 </div>
                              )}
                            )}     
                  
                  </div>
            </Container>
          </Layout>
    );
  
  }
}
export default Home;
