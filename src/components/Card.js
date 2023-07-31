import "../App.css";
import tachyons from "tachyons";


// export const spongeBob =
//   "https://thumbnails.cbsig.net/_x/w400/CBS_Production_Entertainment_VMS/2020/08/05/1772279363939/NICKELODEON_SPONGEBOBSQUAREPANTSHD_052_241911_1920x1080.jpg";

export const Card = ({
  image = "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg",
  character = "n/a",
  publisher = "unknown",
}) => {
  return (
    <div className="card-container br2 ma3 flex center">
      <div className="img-container tc mt4 br3">
        <img src={image} alt="" />
      </div>
      <div className="text tc">
        <h2>{character}</h2>
        <h3>{publisher}</h3>
      </div>
    </div>
  );
};
