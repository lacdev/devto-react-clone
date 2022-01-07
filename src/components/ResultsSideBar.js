export const MiComponent = () => {
  return (
    <>
      <h1 className="text-3xl">Search results for </h1>
      <div className="m-2 w-60 h-52 bg-[#efefef]">
        <ul>
          <li className="] hover:bg-[#ffffffec] rounded-md w-auto h-10 p-2 hover:text-blue-800 text-base">
            Posts
          </li>
          <li className="hover:bg-[#ffffffec] rounded-md w-auto h-10 p-2 hover:text-blue-800 hover:text-base">
            Podcasts
          </li>
          <li className="hover:bg-[#ffffffec] rounded-md w-auto h-10 p-2 hover:text-blue-800 hover:text-base">
            People
          </li>
          <li className="hover:bg-[#ffffffec] rounded-md w-auto h-10 p-2 hover:text-blue-800 hover:text-base">
            Coments
          </li>
          <li className="hover:bg-[#ffffffec] rounded-md w-auto h-10 p-2 hover:text-blue-800 hover:text-base">
            My posts only
          </li>
        </ul>
      </div>
    </>
  );
};
