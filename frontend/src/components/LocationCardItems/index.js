import { IoLocationOutline } from "react-icons/io5";
import {
  LocationCardContainer,
  LocationImage,
  LocationName,
  RouterLink,
} from "./styledComponents";

const LocationCardItems = (props) => {
  const { locationsCard } = props;
  const { id, location, locationImage } = locationsCard;
  return (
    <LocationCardContainer>
      <RouterLink to={`/map/${id}`}>
        <LocationImage src={locationImage} alt={location} />
        <LocationName>
          <IoLocationOutline /> {location}
        </LocationName>
      </RouterLink>
    </LocationCardContainer>
  );
};
export default LocationCardItems;
