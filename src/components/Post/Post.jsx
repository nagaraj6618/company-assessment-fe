import React, { useEffect, useState } from 'react';
import { BE_URL } from '../../Info/info';
import axios from 'axios';
import ErrorDisplay from '../MessageDisplay/ErrorDisplay';


const Post = () => {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetch() {
    try {
      
      setLoading(false);
      const token = sessionStorage.getItem('accesstoken')
      const response = await axios.get(`${BE_URL}/post`,{
        headers:{
          
          token:token,
        }
      });
      console.log(response.status);
      console.log(response.data);
      setPostData(response.data.data);
      if(response.status == 200){
        setLoading(true);
      }
      
      
      
    } catch (error) {
      setLoading(true);
      console.log(error.message);
      
      setError(error.response.data.message); // Set error message in state
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <ErrorDisplay error={error} setError={setError}/>
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
