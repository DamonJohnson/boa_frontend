import { Carousel } from 'react-carousel-minimal';

function App({ data }) {

  return (
    <div className="App">
          <Carousel
            data={data}
            width="700px"
            height="500px"
            automatic={false}
            slideImageFit="cover"
            thumbnails={true}
          />
    </div>
  );
}

export default App;