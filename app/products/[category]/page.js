import Link from "next/link"
import { Button } from '../../../components/ui/button'
import ProductFilterList from '../../../components/ui/productList'
import getProducts from "../../../Utils/getProducts";

export default async function Category({ params }) {
    let { category } = await params;
    let products = await getProducts(category);
    return (
        <div className="h-full flex flex-col justify-center items-center m-5">

            <div className="flex flex-col justify-center items-center gap-5 h-fill">
                <h1 className="text-4xl font-bold">Find the best { }`s items</h1>
            </div>
            <ProductFilterList products={products}></ProductFilterList>
            <div className="flex flex-row justify-center items-center">
                <Link href={"/products"}>
                    <Button>{"Go back"}</Button>
                </Link>
            </div>
        </div>
    )
}