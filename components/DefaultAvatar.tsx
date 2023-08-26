

type Props = {
  userName: string | undefined;
  bgColor: string;
};

export function DefaultAvatar({ userName, bgColor }: Props) {
  return (
    <div className={`${bgColor} w-8 h-8 rounded-full flex justify-center items-center my-5`}>
      <p className="text-2xl text-white capitalize">{userName?.slice(0, 1)}</p>
    </div>
  );
}