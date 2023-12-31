import Newsletter from "@/components/Newsletter";
import { ReactNode } from "react";

const LayoutSortProducts = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-[500px]:px-16 mt-10 md:px-40">
      {children}
    </div>
  );
};

export default LayoutSortProducts