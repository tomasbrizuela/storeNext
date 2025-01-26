import Link from "next/link";
import { Button } from '../../components/ui/button'
import getProducts from "../../Utils/getProducts";

export default async function () {
    let productsList = await getProducts();
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center p-10  gap-5">
                <Link href={"/products/wom"}>
                    <Button>Women's clothing</Button>
                </Link>
                <Link href={"/products/men"}>
                    <Button>Men's clothing</Button>
                </Link>
                <Link href={"/products/electronics"}>
                    <Button>Electronics</Button>
                </Link>
                <Link href={"/products/jewelery"}>
                    <Button>Joyas</Button>
                </Link>
            </div>
            <div className="flex flex-row justify-center items-center h-fit">
                <h1 className="text-4xl font-bold">Product List</h1>
            </div>
            <div className="flex flex-row flex-wrap  justify-center items-center gap-5 w-11/12 m-3">
                {productsList.map((item) => {
                    return <div className="flex flex-col border rounded gap-4 justify-center item-center p-4 w-[300px]" key={item.price * Math.random()}>
                        <h2 className="items-center">{item.title}</h2>
                        <div className="flex flex-row justify-between items-center">
                            <p>{item.category}</p>
                            <p className="text-center bg-black text-white rounded p-2">${item.price}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}