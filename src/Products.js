import ProductCard from "./ProductCard";

const products = [
    {
        title: "Apple iPhone 14",
        price: "Rs. 1,00,000",
    },
    {
        title: "Apple iPhone 13",
        price: "Rs. 70,000",
    },
    {
        title: "Google Pixel 7",
        price: "Rs. 50,000",
    },
    {
        title: "Nokia 1100",
        price: "Rs. 2,000",
    },
    {
        title: "Samsung Galaxy S10",
        price: "Rs. 1,00,000",
    },
    {
        title: "Sony Xperia S10",
        price: "Rs. 1,00,000",
    },
];

export default function Products(){
    return(
        <div>
            {/*this wont work as 1 is passed between tags*/}
            {/*<ProductCard>1</ProductCard>*/}
            {/*<ProductCard>1</ProductCard>*/}

            {/*we passed manually but we get from api object*/}
            {/*<ProductCard title="iPhone"></ProductCard>*/}
            {/*<ProductCard title="iPhone 14"></ProductCard>*/}

            {/*create a loop on products object*/}
            {products.map(function(item){
                return <ProductCard title = {item.title} price = {item.price} />
                //title and price are props that will be consumed as parameters by ProductCard({title, price})
            })}
        </div>
    );
}