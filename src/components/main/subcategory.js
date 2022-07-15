import { useState } from "react";
import more from "../../images/more.png";
import close from "../../images/close.png";

const Subcategory = ({
  cat,
  id,
  img,
  setCategories,
  category,
  i,
  editCategory,
}) => {
  const [pop, setPop] = useState(false);
  return (
    <div className='relative w-full'>
      <img src={img} className='w-full h-52 object-cover' alt='' />
      <h4 className='text-center capitalize font-semibold text-sm my-2'>
        {cat}
      </h4>
      <div className='bg-black p-4 rounded-md text-gray-50 text-xs cursor-pointer absolute top-1 right-1'>
        <img
          className='ml-auto p-1'
          src={pop ? close : more}
          alt='more'
          onClick={() => setPop(!pop)}
        />
        {pop && (
          <div className=''>
            <h4
              className='my-3'
              onClick={() => {
                editCategory(id);
                setPop(false);
              }}
            >
              Edit Category
            </h4>
            <h4
              onClick={() => {
                {
                  setCategories(category.filter((item, index) => index !== i));
                }
                setPop(false);
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
