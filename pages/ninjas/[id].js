export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const datas = await res.json();

        const paths = datas.map((data2) => {
             return {
               params: { id: data2.id.toString() },
             };
        });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data1 = await res.json();
  
 
  return {
    props: { data :data1 },
  };
};




const Details = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.address.city}</p>
    </div>
  );
};

export default Details;
