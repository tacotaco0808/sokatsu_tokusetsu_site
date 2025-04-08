import { useEffect, useState } from "react";

type GalleryProps = {
  x: number; // 0から増えていく整数
  imgs: string[];
};
export const Gallery = (props: GalleryProps) => {
  const [viewNum, setViewNum] = useState<number>(0); // 表示する画像の番号
  useEffect(() => {
    if (props.x < 0) console.error("Galleryのxは0以上で指定してください");
    setViewNum(props.x % props.imgs.length); //余りを使って、番号を循環する
  }, [props.x]);
  return <img src={`images/gallery/${props.imgs[viewNum]}`} alt="" />;
};
