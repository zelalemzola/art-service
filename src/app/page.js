import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

    <dotlottie-player src="https://lottie.host/de14ed13-a1cc-4071-a001-6ecc12fdb628/Mo926jJYa3.json" background="transparent" speed="1" style={{width:"300px", height: "300px"}} loop autoplay></dotlottie-player>
    </div>
  );
}
