import { StyledComponentImg } from "./style";
const ImageComponent = ({ src, alt, width, smallWidth }) => {
  return (
    <StyledComponentImg
      src={src}
      alt={alt}
      width={width}
      smallWidth={smallWidth}
    />
  );
};
export default ImageComponent;
