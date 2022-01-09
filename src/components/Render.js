import Data from "../mock-data.json";

//css styles
const container = "text-align border rounded-md m-2 w-[750px] p-5"
  



const post = Data.map(({ id, first_name, post_title }) => (
  <div className={container}>
    <p>id:{id}</p>
    <p>nombre:{first_name}</p>
    <p>titulo:{post_title}</p>
  </div>
));

function Input (){
  return (
    <div>
      <input placeholder="Enter Post Title"/>
    </div>
  )
}

export const Render = () => {
  return <> {post}</>;
};

export {Input}