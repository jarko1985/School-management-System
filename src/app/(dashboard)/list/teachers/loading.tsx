import Spinner from "@/components/SpinnerSquare";
import StepSpinner from "@/components/StepSpinner";
const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner />
    </div>
  );
};

export default Loading;
