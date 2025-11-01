import Resizer from "../../common/resizer";
import Video from "../../common/video";

import samples from "../../../constants/samples";

const Index = () => {
  return (
    <div className="flex gap-3 flex-wrap">
      {samples.map((sample) => {
        return (
          <Resizer
            key={sample.id}
            aspectRatio={18 / 9}
            render={({ width, height }) => {
              return (
                <div style={{ width, height }}>
                  <Video src={sample.url} icon={sample.icon} />
                </div>
              );
            }}
          />
        );
      })}
    </div>
  );
};

export default Index;
