import React from "react";

function Cards({item}) {
  return (
    <>
      <div className="mt-5 my-3 p-3">
        <div className="card bg-base-100 w-92 hover:scale-105 duration-200 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_1px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] dark:bg-slate-900 dark:text-white dark:border dark:shadow-[0px_5px_1px_rgba(221,_221,_221,_1),_0_5px_7px_rgba(204,_204,_204,_1)]">
          <figure className="cursor-pointer">
            <img
              src={item.image}
              alt="book"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between pt-2">
              <div className="px-2 py-1 border-2 rounded-full">${item.price}</div>
              <div className="px-2 py-1 border-2 rounded-full cursor-pointer hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
