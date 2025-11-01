import Slide from "../wrappers/slide";
import Fade from "../wrappers/fade";
import VisiblilityGuard from "../guards/visiblility";

interface Props {
  entries: React.ReactNode[];
}

const Index = ({ entries }: Props) => {
  return (
    <div
      className="flex flex-col gap-4"
      style={{ counterReset: "item-counter" }}
    >
      {entries.map((entry, i) => {
        return (
          <>
            <div
              style={{ counterIncrement: "item-counter" }}
              className="flex gap-[5em]"
            >
              <div
                className={`hidden md:block after:translate-x-[-50%] text-white after:bg-black after:absolute after:rounded-full after:content-[counter(item-counter)] after:w-[1.5em] after:bg-red after:flex after:justify-center after:items-center after:h-[1.5em] relative before:absolute before:h-[calc(100%+1.5em)] before:left-[50%] before:top-0 before:translate-x-[-50%] before:bg-linear-to-r before:from-cyan-500 before:to-blue-500 before:w-[5px]`}
              >
                <VisiblilityGuard>
                  <Fade direction="in" delay="md">
                    <div className="absolute bg-linear-to-b from-cyan-500 to-blue-500 w-[5em] h-[5px] translate-y-[calc(1.5em/2)]" />
                  </Fade>
                </VisiblilityGuard>
              </div>
              <VisiblilityGuard key={i}>
                <Fade direction="in" delay="sm">
                  <Slide direction="top" delay="xs">
                    <div>
                      <div>{entry}</div>
                    </div>
                  </Slide>
                </Fade>
              </VisiblilityGuard>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Index;
