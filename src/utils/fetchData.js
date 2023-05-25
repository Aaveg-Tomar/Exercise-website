export const exerciseOptions  = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'e2e2920104msha361f2cd96c2431p156037jsn564944e14150',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  



export const fetchData = async (url , options) => {
    const response = await fetch(url , options);
    const data = await response.json();


    return data;
}