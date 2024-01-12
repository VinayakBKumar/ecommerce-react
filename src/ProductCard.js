import "./ProductCard.scss"
//structure
// var m = {a:"",b:""};
//destructure
// var {a, b} = m

// heirarchy
// index.html root
// index.js create root object from html and attaches child App which in turn attaches all its childs
// index.js --> App --> Products --> ProductCard parent attaches child

export default function ProductCard({title, price}){
    return (
        <div className="card">
            <div>{title}</div>
            <div>{price}</div>
        </div>
    );
}


