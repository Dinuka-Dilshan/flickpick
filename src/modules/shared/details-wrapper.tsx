const DetailsWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[92vh] flex-col flex  min-w-full mb-16 mt-4 lg:mt-12">
      {children}
    </div>
  );
};
export default DetailsWrapper;
