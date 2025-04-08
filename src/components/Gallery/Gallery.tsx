import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
type GalleryProps = {
  x: number; // 0から増えていく整数
  imgs: string[];
};
export const Gallery = (props: GalleryProps) => {
  const [viewNum, setViewNum] = useState<number>(0); // 表示する画像の番号
  const container = useRef<HTMLDivElement>(null); // コンテナの参照
  const { contextSafe } = useGSAP({ scope: container }); // GSAPのコンテキストを取得
  useEffect(
    contextSafe(() => {
      if (props.x < 0) console.error("Galleryのxは0以上で指定してください");
      setViewNum(props.x % props.imgs.length); //余りを使って、番号を循環する
      gsap.from(container.current, {
        opacity: 0,
        duration: 2,
        ease: "power4.out",
      }); //アニメーション
    }),
    [props.x]
  );
  return (
    <div ref={container}>
      <img src={`images/gallery/${props.imgs[viewNum]}`} alt="" />
    </div>
  );
};
