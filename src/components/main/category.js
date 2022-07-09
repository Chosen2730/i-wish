import { useState } from "react";
import phone from "../../images/phone.png";
import shoe from "../../images/shoe.png";
import clothing from "../../images/clothing.png";
import watch from "../../images/watch.png";
import Subcategory from "./subcategory";
import close from "../../images/close.png";
import upload from "../../images/upload.png";

const Category = () => {
  const [catshow, setCatshow] = useState(false);
  const category = [
    { cat: `clothing`, img: clothing },
    { cat: `gadgets`, img: phone },
    { cat: `wrist watches`, img: watch },
    { cat: `men's shoe`, img: shoe },
  ];
  const [categories, setCategories] = useState(category);
  const [input, setInput] = useState("");
  const [catImg, setcatImg] = useState("");
  const [alert, setAlert] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const imageHandler = (e) => {
    const [file] = e.target.files;
    setcatImg(URL.createObjectURL(file));
    setAlert(true);
  };
  const addCat = (e) => {
    e.preventDefault();
    if (input && catImg) {
      categories.push({ cat: input, img: catImg });
      setCatshow(false);
      setInput("");
      setcatImg("");
      setAlert(false);
    }
  };

  return (
    <div className='m-8 text-gray-800'>
      <div className='flex flex-col sm:flex-row justify-between '>
        <h1 className='font-semibold text-xl  sm:text-2xl'>
          Product Categories
        </h1>
        <button
          className='bg-[#7805A7] text-white rounded-md text-sm md:text-base p-2 px-4 font-normal tracking-wider w-fit my-2'
          onClick={() => setCatshow(true)}
        >
          Add Category
        </button>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-10 my-8'>
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
      <div className={`${catshow ? "category" : "category hider"} overflow`}>
        <div className='bg-white shadow-md rounded-md p-4'>
          <img
            className='bg-[#7805A7] p-2 ml-auto rounded-md'
            src={close}
            alt=''
            onClick={() => setCatshow(false)}
          />
          <h1 className='text-center text-xl sm:text-2xl font-semibold my-3'>
            New Category
          </h1>
          <form action='' className='sm:w-4/6 mx-auto'>
            <label htmlFor='category' className='font-semibold text-sm'>
              Name
            </label>
            <input
              type='text'
              className='block bg-gray-100 p-2 rounded-md my-2 w-full font-sm'
              placeholder='Name of category'
              value={input}
              onChange={inputHandler}
            />
            <div className='text-center bg-gray-100 my-2 p-4'>
              <h2 className='font-semibold text-sm'>Upload Your Image</h2>
              <p className='text-sm my-2'>
                Upload the picture of the product category. Accepted format :
                .jpg, .png, .jpeg
              </p>
              <div className='bg-purple-300 m-2 p-4 rounded-md'>
                <label htmlFor='image' className='cursor-pointer text-sm'>
                  <img src={upload} className='mx-auto my-3' alt='' />
                  <input
                    type='file'
                    placeholder='Browse to upload your file'
                    className='hidden'
                    id='image'
                    onChange={imageHandler}
                  />
                  Browse to upload your file
                  {alert && <h4>Image uploaded</h4>}
                </label>
              </div>
            </div>
            <button
              className='bg-[#7805A7] text-white rounded-md text-sm md:text-base p-2 px-4 font-normal tracking-wider w-full my-2'
              onClick={addCat}
            >
              Add Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Category;