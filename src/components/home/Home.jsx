import React, { useState, useEffect } from 'react';
import PreLoader from '../../common/js/PreLoader';
import InfiniteScroll from "react-infinite-scroll-component";
import Product from './Product';
const Home = () => {
    const [products, setProducts] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchMoreListItems();
    }, []);
    async function fetchMoreListItems() {
        let url = `https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6`;
        try {
            const res = await fetch(url);
            const response = await res.json();
            if (response && response.products) {
                const currentLength = products.length || 0;
                const maxLength = currentLength + 10;
                let { products: responseProducts } = response;
                let resultProducts = responseProducts.filter((item, index) => index >= currentLength && index < maxLength);
                let isMore = (products.length + resultProducts.length) < responseProducts.length;
                setHasMore(isMore)
                setProducts([...products, ...resultProducts])
            }
        } catch (error) {
            console.error(error);
            setHasMore(false);
        }
    }
    return (
        <>
            <InfiniteScroll
                dataLength={products.length}
                next={fetchMoreListItems}
                hasMore={hasMore}
                loader={<PreLoader />}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>You have seen all the products!</b>
                    </p>
                }
            >
                <div className="product-list">
                    {products.map((item, index) => (
                        <div key={index}>
                            <Product item={item} />
                        </div>
                    ))}
                </div>

            </InfiniteScroll>
        </>
    );
}

export default Home;
