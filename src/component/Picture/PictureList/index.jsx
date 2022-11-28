import { usePicture } from "../../../api/Pictures/getPicture";
import PictureItem from "../PictureItem";

const PictureList = ({ pictureLabel, loading }) => {
  if (loading === "PENDING") {
    return <h1 className="p-10 text-lg">Loading...</h1>;
  }
  if (loading === "NOT FOUND") {
    return <h1 className="p-10 text-lg">Not found person with such number</h1>;
  }

  console.log(pictureLabel);
  return (
    <div className="mt-6 columns-2 md:columns-3 lg:columns-4">
      {pictureLabel?.map((picture) => (
        <PictureItem key={picture.id} picture={picture} />
      ))}
    </div>
  );
};

export default PictureList;
