
interface PhotoProps {
    size: string;
    bg: string;
}
export const Photo = ({ size, bg}: PhotoProps) => {

    return (
      <div
        style={{
          height: `${size}rem`,
          width: `${size}rem`,
          backgroundColor: `#${bg}`,
        }}
        className={`flex-none rounded-full ${!bg ? "bg-[#d9d9d9]" : ""}`}
      />
    );
}