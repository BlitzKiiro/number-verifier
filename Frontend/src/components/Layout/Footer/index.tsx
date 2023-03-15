import { Footer } from "flowbite-react";
import cn from "classnames";

const PageFooter = () => {
  return (
    <Footer
      className={cn("flex !justify-center", "absolute bottom-0 left-0")}
      container={true}
    >
      <Footer.Copyright by='Number Verifier™' year={2023} />
    </Footer>
  );
};

export default PageFooter;
