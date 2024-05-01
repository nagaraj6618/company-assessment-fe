import React, { useEffect, useState } from 'react';
import { BE_URL } from '../../Info/info';
import axios from 'axios';


const Post = () => {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetch() {
    try {
      
      setLoading(false);
      const response = await axios.get(`${BE_URL}/post`);
      console.log(response.status);
      console.log(response.data);
      setPostData(response.data.data);
      if(response.status == 200){
        setLoading(true);
      }
      
      
      
    } catch (error) {
      setLoading(true);
      console.log(error.message);
      
      setError(error.message); // Set error message in state
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {error && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">

                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Error</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{error}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setError(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className='flex align-middle justify-center'>
        {!loading && (
          <div className="flex items-center justify-center w-full h-40">
            <svg className="animate-spin h-8 w-8 text-slate-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-2-5.291c1.865 2.114 3 4.896 3 7.938h4c0-6.627-5.373-12-12-12v4z"></path>
            </svg>
            <span className="ml-2">Loading...</span>
          </div>
        )}
      </div>
      <div className='flex flex-wrap justify-center text-white w-full'>
        {postData &&
          postData.map((data, index) => (
            <div
              key={index}
              className='bg-slate-100 dark:bg-slate-800 flex flex-col w-full sm:w-1-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 rounded m-5'
            >
              <div className='w-full overflow-hidden'> {/* Added overflow-hidden class */}
                <img className='w-full h-20 object-cover rounded' src={data.imageUrl} alt='Post' />
              </div>
              <div className='pl-5'>
                <blockquote>
                  <div className='text-[#727274] font-bold'>Content</div>
                  <p>{data.body}</p>
                </blockquote>
                <figcaption>
                  <div className='font-bold text-lg'><div className='text-[#808080]'>Title</div>{data.title}</div>
                </figcaption>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Post;
