import React from "react";
import phone from "../../images/phone.png";
import shoe from "../../images/shoe.png";
import clothing from "../../images/clothing.png";
import watch from "../../images/watch.png";
import Subcategory from "./subcategory";

const Category = () => {
  const category = [
    { cat: `clothing`, img: clothing },
    { cat: `gadgets`, img: phone },
    { cat: `wrist watches`, img: watch },
    { cat: `men's shoe`, img: shoe },
  ];
  const [categories, setCategories] = React.useState(category);
  return (
    <div className='m-8 text-gray-800'>
      <div className='flex flex-col sm:flex-row justify-between '>
        <h1 className='font-semibold text-xl  sm:text-2xl'>
          Product Categories
        </h1>
        <button className='bg-[#7805A7] text-white rounded-md text-sm md:text-base p-2 px-4 font-normal tracking-wider w-fit my-2'>
          Add Category
        </button>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 my-8'>
        {categories.map((cat, i) => {
          return (
            <Subcategory
              key={i}
              i={i}
              {...cat}
              setCategories={setCategories}
              category={categories}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
