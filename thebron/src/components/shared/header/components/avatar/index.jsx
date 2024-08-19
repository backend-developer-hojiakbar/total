import {
  Avatar as A,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export const Avatar = () => {
  return (
    <A>
      <AvatarImage src="https://github.com/acadbek.png" alt="@acadbek" />
      <AvatarFallback>AN</AvatarFallback>
    </A>
  );
};

export default Avatar;
