import { Fragment } from "react";
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
    },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    };
    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-gray-800 text-green-500 items-center px-10">{email}
                <Button className="ml-5" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                {product.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
                        <CardProduct.Footer price={product.price}></CardProduct.Footer>
                    </CardProduct>
                ))}
            </div>
        </Fragment>

    );
};

export default ProductsPage;