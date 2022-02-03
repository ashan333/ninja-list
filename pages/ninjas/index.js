import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'


export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const datas = await res.json();
  console.log(datas);

  return {
    props: { datas },
  };
};

const Ninjas = ({ datas }) => {
  return (
    <div>
      <h1>All ninjas</h1>
      {datas.map((data) => (
        <Link href={`/ninjas/${data.id}`} key={data.id}>
  <a className={styles.single}><h3>
    {data.name}
      </h3></a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
