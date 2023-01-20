import { Carousel } from 'react-carousel-minimal';

function App({ data }) {

  return (
    <div className="App">
          <Carousel
            data={data}
            width="700px"
            height="500px"
            radius="10px"
            automatic={false}
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
    </div>
  );
}

export default App;