const Card = ({ title, children, contentClass = "" }) => {
  return (
    <div className="flexCard bg-gray-900 text-white rounded-lg shadow-xl p-6 w-full">
      {/* Header */}
      <div className="header text-center mb-6">
        <p className="title text-4xl w-full font-semibold text-gray-300">{title}</p>
      </div>
      {/* Body */}
      <div className={`h-[calc(100%-50px)] justify-around ${contentClass}`}>{children}</div>
    </div>
  );
};

export default Card;
