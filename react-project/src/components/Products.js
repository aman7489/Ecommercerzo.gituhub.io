import React from 'react';
import { FaSort } from 'react-icons/fa';
import styled from 'styled-components';
import ProductList from '../component/ProductList';
import Sort from '../component/Sort';
import FilterSection from '../component/FilterSection';
import { useFilterContext } from '../reducer/Filter_context';

const Products = () => {

  const { filter_products } = useFilterContext();
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className='product-view--sort'>
          <div className='sort-filter'>
            <Sort />
          </div>

          <div className='main-product'>
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products
