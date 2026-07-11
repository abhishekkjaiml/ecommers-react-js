export const CategoryPage = ({category}) => {
  return (
    <div className="p-2 w-50 flex justify-center">
        <div    className="cursor-pointer">
            <img src={category.image}   alt="products"   className="w-45 h-45 rounded-full border p-1 flex bg-zinc-200 "/>
            <h4 className="flex justify-center mt-2 font-bold">{category.name}</h4>
        </div>
    </div>
  )
}
