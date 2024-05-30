import Users from "@/components/Users";
// import Image from "next/image";


async function FetchUsers() {
  try {
    const response = await fetch("https://reqres.in/api/users")
    const data = await response.json()
    // console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}


export default async function HomePage() {
  const users = await FetchUsers();

  return (
    <div>
      {/* <h1>Home Page</h1>
      <h2>Users:</h2> */}

      <Users users={users} />
    </div>


  );
}
