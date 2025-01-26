export default function ProductFilterList({ products }) {
    return (
        <div className="flex flex-row flex-wrap  justify-center items-center gap-5 w-11/12 m-3">
            {products.map((item) => {
                return <div className="flex flex-col border rounded gap-4 justify-center item-center p-4 w-[300px]" key={item.price * Math.random()}>
                    <h2 className="items-center">{item.title}</h2>
                    <div className="flex flex-row justify-between items-center">
                        <p>{item.category.toUpperCase()}</p>
                        <p className="text-center bg-black text-white rounded p-2">${item.price}</p>
                    </div>
                </div>
            })}
        </div>
    )
}