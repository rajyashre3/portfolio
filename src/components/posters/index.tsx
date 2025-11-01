import Resizer from "../../components/common/resizer";

import pin from "../../assets/pin.png";

interface Props {
  items: string[];
}

const Index = ({ items }: Props) => {
  return (
    <div className="outline-8 outline-orange-500">
      {items.map((item, i) => {
        const isRight = i % 2 !== 0;
        return (
          <div className={`md:w-[700px] w-[300px] ${isRight ? "ml-auto" : ""}`}>
            <Resizer
              aspectRatio={20 / 20}
              render={() => {
                return (
                  <div className="relative">
                    <img
                      src={pin}
                      className="absolute md:w-[70px] w-[35px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-[10px]"
                      style={{
                        filter: "drop-shadow(3px 4px 6px black)",
                        ...(isRight ? { transform: "scaleX(-1)" } : {}),
                      }}
                    />
                    <img
                      src={item}
                      className={`motion ${
                        isRight ? "motion-reverse" : ""
                      } motion-pendulum shadow-lg scale-[0.75] ${
                        isRight ? "rotate-3" : "-rotate-3"
                      } absolute top-0 left-0 -z-10`}
                    />
                  </div>
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Index;
