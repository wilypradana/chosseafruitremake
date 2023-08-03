import nkri from "./img/nkri.png";
export default function Bubble() {
  return (
    <div className="fixed bottom-0 bg-red-600 left-0 right-0 mx-auto w-11/12 md:w-1/2 lg:w-1/3 max-w-md z-50 md:left-auto md:mb-8">
      <div className="chat chat-end ">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={nkri} alt="" />
          </div>
        </div>

        <div className="chat-bubble text-white chat-bubble-warning p-4">
          "Hut ri ke-78 ini mari kita meredekan dengan cara stop bermain judi
          dimanapun itu"
        </div>
      </div>
    </div>
  );
}
