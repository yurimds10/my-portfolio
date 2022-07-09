import { StyledBlob } from "./styles";
import image from '../../assets/img/my-photo.png';
import Image from "next/image";

const Blob = () => {
  return (
    <StyledBlob>
      <Image src={image} alt="my-photo"/>
    </StyledBlob>
  )
}

export default Blob;
