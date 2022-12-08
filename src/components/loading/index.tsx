import CircularProgress from "@mui/material/CircularProgress";
import "twin.macro";

const LoadingComponent: React.FC = () => {
  return (
    <div tw="flex flex-col h-screen w-full justify-center mx-auto items-center bg-gray-800 space-y-8">
      <span tw="text-white font-bold text-xl">Loading </span>
      <CircularProgress size={52} />
    </div>
  );
};

export { LoadingComponent };
