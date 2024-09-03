import { currentUser } from "@clerk/nextjs/server";

export default async function ProfilePage() {
  const user = await currentUser();
  console.log(user);
  return (
    <div>
      <h1 className="text-[40px]">Thông tin cá nhân</h1>
      <p>
        <b>Tên:</b> {user?.firstName} {user?.lastName}
      </p>
      <p>
        <b>Email:</b> {user?.emailAddresses[0].emailAddress}
      </p>
    </div>
  );
}
