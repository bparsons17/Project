
const ImageCard = () => {
    return (
      <div className="card">
        <img
          src="https://www.gannett-cdn.com/presto/2020/12/26/NABJ/971cfa6e-c244-4e65-a2a2-3d42aa93601f-AP20358576989546.jpg?width=660&height=441&fit=crop&format=pjpg&auto=webp"
          className="card-img-top"
          alt="..."
        ></img>

        <div className="card-body">
          <h5 className="card-title">NBA Player Props & Picks</h5>
          <p className="card-text">Our Experts' Favorite NBA Bets for Sunday</p>
          <a href="#" class="btn btn-primary">
            Read
          </a>
        </div>
      </div>
    );
}

export default ImageCard;