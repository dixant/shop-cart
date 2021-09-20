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
        try {
            const res = await fetch(`/fetch-products?length=${products.length}`);
            const response = await res.json();
            console.log({ responseUI: response })
            const { isMore, products: newList = [], status } = response;
            if (status === "SUCCESS") {
                setHasMore(isMore)
                setProducts([...products, ...newList])
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
