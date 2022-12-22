//  export const exerciseOptions = {
//     method: 'GET',
//     headers: {

//         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//         'X-RapidAPI-Key': process.env.
//         REACT_APP_RAPID_API_KEY
//     }
// };
export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "b8c1892349msha8fe6c74d4c0831p14073ajsnd6696eb595e6",
  },
};

export const youtubeOptions = {
  method: "GET",
  url: "https://youtube-search-and-download.p.rapidapi.com/video/related",

  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "fd3610e67fmsh7aac4476ddd38e6p12b9ffjsn5a68fac864cd",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
