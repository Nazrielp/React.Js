import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragment/CardProduct";

const product = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: "1.100.000",
        image: "/images/shoes-1.jpg",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique veniam quam incidunt tempora voluptatem ipsum, laboriosam rerum magnam asperiores debitis?',
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: "700.000",
        image: "/images/image.png",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 3,
        name: "Sepatu Kece",
        price: "1.500.000",
        image: "/images/image-2.jpg",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique veniam quam incidunt tempora voluptatem ipsum.',
    }
]

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">

            {product.map((product) => (
                <CardProduct>
                    <CardProduct.Header image={product.image} />
                    <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
                    <CardProduct.Footer price={product.price}></CardProduct.Footer>
                </CardProduct>
            ))}

        </div>

    );
};

export default ProductsPage;