import { useState, useEffect } from "react";

const useMenURL = (url) => {
  const [image1URL, setImage1URL] = useState(null);
  const [description1, setDescription1] = useState(null);
  const [title1, setTitle1] = useState(null);
  const [price1, setPrice1] = useState(null);

  const [image2URL, setImage2URL] = useState(null);
  const [description2, setDescription2] = useState(null);
  const [title2, setTitle2] = useState(null);
  const [price2, setPrice2] = useState(null);

  const [image3URL, setImage3URL] = useState(null);
  const [description3, setDescription3] = useState(null);
  const [title3, setTitle3] = useState(null);
  const [price3, setPrice3] = useState(null);

  const [image4URL, setImage4URL] = useState(null);
  const [description4, setDescription4] = useState(null);
  const [title4, setTitle4] = useState(null);
  const [price4, setPrice4] = useState(null);


  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        setImage1URL(response[0].image)
        setDescription1(response[0].description)
        setTitle1(response[0].title)
        setPrice1(response[0].price)

        setImage2URL(response[1].image)
        setDescription2(response[1].description)
        setTitle2(response[1].title)
        setPrice2(response[1].price)

        setImage3URL(response[2].image)
        setDescription3(response[2].description)
        setTitle3(response[2].title)
        setPrice3(response[2].price)

        setImage4URL(response[3].image)
        setDescription4(response[3].description)
        setTitle4(response[3].title)
        setPrice4(response[3].price)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { image1URL, description1, title1, price1, image2URL, description2, title2, price2, image3URL, description3, title3, price3, description4, title4, price4, image4URL, error, loading };
};

export default useMenURL;

// const Image = () => {
//   const { imageURL, error, loading } = useImageURL();

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>A network error was encountered</p>;

//   return (
//     <>
//       <h1>An image</h1>
//       <img src={imageURL} alt={"placeholder text"} />
//     </>
//   );
// };