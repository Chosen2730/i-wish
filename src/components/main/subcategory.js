import React from "react";
import more from "../../images/more.png";
import close from "../../images/close.png";

const Subcategory = ({ cat, img, setCategories, category, i }) => {
  const [catshow, setCatshow] = React.useState(false);
  return (
    <div className='relative w-full'>
      <img src={img} className='w-full' alt='' />
      <h4 className='text-center capitalize font-semibold text-sm my-2'>
        {cat}
      </h4>
      <div className='bg-black p-4 rounded-md text-gray-50 text-xs cursor-pointer absolute top-1 right-1'>
        <img
          className='ml-auto p-1'
          src={catshow ? close : more}
          alt='more'
          onClick={() => setCatshow(!catshow)}
        />
        {catshow && (
          <div className=''>
            <h4 className='my-3'>Edit Category</h4>
            <h4
              onClick={() => {
                setCategories(category.filter((item, index) => index !== i));
              }}
            >
              Delete
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subcategory;
