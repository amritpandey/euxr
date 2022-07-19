import React,{useState, useEffect} from 'react'

export const Weather = () => {
    let [dogImage, setDogImage] = useState(null)

    // 3. Create out useEffect function
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setDogImage(data.message))
  },[])

  return (
    <div className="App">
        {/* 5. Using *dogImage as* the *src* for our image*/}
    {dogImage && <img src={dogImage} alt="doog pic"></img>}
    </div>
  );
}
